
export async function POST(request) {
  try {
    const body = await request.json();

    const {
      enquiryType,
      parentName,
      studentName,
      className,
      mobile,
      email,
      message,
      website
    } = body;

    // Honeypot: reject submissions from simple bots.
    if (website) {
      return Response.json(
        { success: false, message: "Invalid submission." },
        { status: 400 }
      );
    }

    // Validate required fields.
    if (!enquiryType || !parentName || !className || !mobile) {
      return Response.json(
        { success: false, message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const allowedTypes = [
      "Admission",
      "Academic",
      "General"
    ];

    const allowedClasses = [
      "Nursery", "LKG", "UKG",
      "Class I", "Class II", "Class III",
      "Class IV", "Class V", "Class VI",
      "Class VII", "Class VIII", "Class IX",
      "Class X"
    ];

    if (
      !allowedTypes.includes(enquiryType) ||
      !allowedClasses.includes(className)
    ) {
      return Response.json(
        { success: false, message: "Invalid enquiry details." },
        { status: 400 }
      );
    }

    if (
      typeof parentName !== "string" ||
      parentName.trim().length < 2 ||
      parentName.length > 100
    ) {
      return Response.json(
        { success: false, message: "Please enter a valid parent name." },
        { status: 400 }
      );
    }

    const cleanMobile = String(mobile).replace(/[\s-]/g, "");

    if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      return Response.json(
        { success: false, message: "Enter a valid 10-digit Indian mobile number." },
        { status: 400 }
      );
    }

    const cleanEmail = String(email || "").trim();

    if (
      cleanEmail &&
      (cleanEmail.length > 254 ||
       !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail))
    ) {
      return Response.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const cleanStudentName = String(studentName || "").trim();
    const cleanMessage = String(message || "").trim();

    if (
      cleanStudentName.length > 100 ||
      cleanMessage.length > 2000
    ) {
      return Response.json(
        { success: false, message: "Some fields exceed the allowed length." },
        { status: 400 }
      );
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    const secret = process.env.GOOGLE_SCRIPT_SECRET;

    if (!scriptUrl || !secret) {
      throw new Error("Google integration is not configured.");
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        secret,
        enquiryType,
        parentName: parentName.trim(),
        studentName: cleanStudentName,
        className,
        mobile: cleanMobile,
        email: cleanEmail,
        message: cleanMessage
      }),
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error("Google service returned an error.");
    }

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message || "Enquiry submission failed.");
    }

    return Response.json({
      success: true,
      enquiryId: result.enquiryId
    });

  } catch (error) {
    console.error("Enquiry submission error:", error);

    return Response.json(
      {
        success: false,
        message: "We could not submit your enquiry. Please try again later."
      },
      { status: 500 }
    );
  }
}
