
"use client";

import { useState } from "react";

const initialForm = {
  enquiryType: "Admission",
  parentName: "",
  studentName: "",
  className: "",
  mobile: "",
  email: "",
  message: "",
};

const classes = [
  "Nursery",
  "LKG",
  "UKG",
  "Class I",
  "Class II",
  "Class III",
  "Class IV",
  "Class V",
  "Class VI",
  "Class VII",
  "Class VIII",
  "Class IX",
  "Class X",
];

export default function EnquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const closePopup = () => {
    if (loading) return;

    setIsOpen(false);
    setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (!/^[6-9]\d{9}$/.test(form.mobile.trim())) {
      setStatus({
        type: "error",
        message: "Please enter a valid 10-digit Indian mobile number.",
      });
      return;
    }

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to submit your enquiry.");
      }

      setStatus({
        type: "success",
        message: result.enquiryId
          ? `Your enquiry has been submitted successfully. Reference ID: ${result.enquiryId}`
          : "Your enquiry has been submitted successfully.",
      });

      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Enquiry Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-5 z-40 flex items-center gap-2 rounded-full bg-[#C24D4A] px-5 py-3.5 text-sm font-bold text-white shadow-xl transition hover:bg-[#7A3032] hover:-translate-y-1"
        aria-label="Open enquiry form"
      >
        <span className="text-lg">✉</span>
        Enquire Now
      </button>

      {/* Popup Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closePopup();
          }}
        >
          {/* Popup Container */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
            className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-[#F8F5EF] shadow-2xl"
          >
            {/* Header */}
            <div className="relative overflow-hidden bg-[#7A3032] px-6 py-7 text-white sm:px-8">
              <button
                type="button"
                onClick={closePopup}
                disabled={loading}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-xl transition hover:bg-white/25"
                aria-label="Close enquiry form"
              >
                ×
              </button>

              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E8DDC9]">
                Little Star Public School
              </p>

              <h2
                id="enquiry-title"
                className="text-2xl font-bold sm:text-3xl"
              >
                How can we help you?
              </h2>

              <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">
                Have a question about admissions or academics?
                Send us your enquiry.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-5 sm:p-8"
            >
              {/* Enquiry Type */}
              <div>
                <label className="mb-2 block text-sm font-bold text-[#493A35]">
                  What is your enquiry about? *
                </label>

                <div className="grid grid-cols-3 gap-2">
                  {["Admission", "Academic", "General"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() =>
                        setForm((prev) => ({
                          ...prev,
                          enquiryType: type,
                        }))
                      }
                      className={`rounded-xl border px-2 py-3 text-xs font-bold transition sm:text-sm ${
                        form.enquiryType === type
                          ? "border-[#C24D4A] bg-[#C24D4A] text-white"
                          : "border-[#E8DDC9] bg-white text-[#493A35] hover:border-[#C24D4A]"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Parent Name */}
              <div>
                <label
                  htmlFor="popup-parent"
                  className="mb-2 block text-sm font-semibold text-[#493A35]"
                >
                  Parent / Guardian Name *
                </label>

                <input
                  id="popup-parent"
                  name="parentName"
                  type="text"
                  value={form.parentName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  maxLength={100}
                  required
                  className="w-full rounded-xl border border-[#E8DDC9] bg-white px-4 py-3 text-sm text-[#493A35] outline-none transition focus:border-[#C24D4A] focus:ring-2 focus:ring-[#C24D4A]/15"
                />
              </div>

              {/* Student Name */}
              <div>
                <label
                  htmlFor="popup-student"
                  className="mb-2 block text-sm font-semibold text-[#493A35]"
                >
                  Student Name
                </label>

                <input
                  id="popup-student"
                  name="studentName"
                  type="text"
                  value={form.studentName}
                  onChange={handleChange}
                  placeholder="Enter student's name"
                  maxLength={100}
                  className="w-full rounded-xl border border-[#E8DDC9] bg-white px-4 py-3 text-sm text-[#493A35] outline-none focus:border-[#C24D4A] focus:ring-2 focus:ring-[#C24D4A]/15"
                />
              </div>

              {/* Class and Mobile */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="popup-class"
                    className="mb-2 block text-sm font-semibold text-[#493A35]"
                  >
                    Class *
                  </label>

                  <select
                    id="popup-class"
                    name="className"
                    value={form.className}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[#E8DDC9] bg-white px-3 py-3 text-sm text-[#493A35] outline-none focus:border-[#C24D4A]"
                  >
                    <option value="">Select class</option>
                    {classes.map((className) => (
                      <option key={className} value={className}>
                        {className}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="popup-mobile"
                    className="mb-2 block text-sm font-semibold text-[#493A35]"
                  >
                    Mobile Number *
                  </label>

                  <input
                    id="popup-mobile"
                    name="mobile"
                    type="tel"
                    inputMode="numeric"
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    pattern="[6-9][0-9]{9}"
                    autoComplete="tel"
                    required
                    className="w-full rounded-xl border border-[#E8DDC9] bg-white px-3 py-3 text-sm text-[#493A35] outline-none focus:border-[#C24D4A]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="popup-email"
                  className="mb-2 block text-sm font-semibold text-[#493A35]"
                >
                  Email Address
                </label>

                <input
                  id="popup-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  maxLength={254}
                  autoComplete="email"
                  className="w-full rounded-xl border border-[#E8DDC9] bg-white px-4 py-3 text-sm text-[#493A35] outline-none focus:border-[#C24D4A]"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="popup-message"
                  className="mb-2 block text-sm font-semibold text-[#493A35]"
                >
                  Your Message
                </label>

                <textarea
                  id="popup-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your enquiry here..."
                  rows={3}
                  maxLength={1000}
                  className="w-full resize-none rounded-xl border border-[#E8DDC9] bg-white px-4 py-3 text-sm text-[#493A35] outline-none focus:border-[#C24D4A]"
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl p-3 text-sm ${
                    status.type === "success"
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-[#C24D4A] px-5 py-4 text-sm font-bold text-white shadow-md transition hover:bg-[#7A3032] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit Enquiry →"}
              </button>

              <p className="text-center text-xs leading-5 text-[#75665C]">
                Your information will be used by the school office
                to respond to your enquiry.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
