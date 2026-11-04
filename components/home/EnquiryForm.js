
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
  website: ""
};

const classOptions = [
  "Nursery", "LKG", "UKG",
  "Class I", "Class II", "Class III",
  "Class IV", "Class V", "Class VI",
  "Class VII", "Class VIII", "Class IX",
  "Class X"
];

export default function EnquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Submission failed.");
      }

      setResult({
        success: true,
        message: `Your enquiry was submitted successfully. Reference: ${data.enquiryId}`
      });

      setForm(initialForm);

    } catch (error) {
      setResult({
        success: false,
        message: error.message || "Something went wrong. Please try again."
      });
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-[#e8ddc9] bg-white px-4 py-3 text-sm text-[#493a35] outline-none focus:border-[#c24d4a] focus:ring-2 focus:ring-[#c24d4a]/10";

  return (
    <section id="parent-enquiry" className="bg-[#f8f5ef] py-20">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Introduction */}
          <div className="lg:col-span-2">
            <p className="text-[#c24d4a] text-xs font-bold tracking-[3px] uppercase">
              We Are Here to Help
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#493a35] mt-4 leading-tight">
              How Can We Help You?
            </h2>

            <p className="mt-5 text-[#75665c] leading-8">
              Have questions about admissions, academics or school
              activities? Send us your enquiry. Our school team
              will get in touch with you.
            </p>

            <div className="mt-8 space-y-5">
              {[
                ["01", "Admission Enquiries", "Learn about classes and admission procedures."],
                ["02", "Academic Enquiries", "Ask about academics, subjects and learning."],
                ["03", "General Enquiries", "Questions about fees, facilities and school life."]
              ].map(([number, title, description]) => (
                <div key={number} className="flex gap-4">
                  <span className="text-[#c24d4a] font-bold text-xl">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-bold text-[#493a35]">
                      {title}
                    </h3>
                    <p className="text-sm text-[#75665c] mt-1">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-6 md:p-9 shadow-lg shadow-[#493a35]/5 border border-[#eee6dc]">

            <h3 className="text-2xl font-bold text-[#493a35]">
              Submit Your Enquiry
            </h3>

            <p className="text-sm text-[#75665c] mt-2 mb-7">
              Fields marked with * are required.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Enquiry Type */}
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Enquiry Type *
                </label>

                <div className="grid grid-cols-3 gap-2">
                  {["Admission", "Academic", "General"].map((type) => (
                    <label
                      key={type}
                      className={`text-center text-xs sm:text-sm font-semibold rounded-xl border p-3 cursor-pointer transition ${
                        form.enquiryType === type
                          ? "bg-[#f8e9e2] border-[#c24d4a] text-[#a53e3b]"
                          : "border-[#e8ddc9] text-[#75665c]"
                      }`}
                    >
                      <input
                        type="radio"
                        name="enquiryType"
                        value={type}
                        checked={form.enquiryType === type}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">

                <div>
                  <label htmlFor="parentName" className="block text-sm font-semibold mb-2">
                    Parent / Guardian Name *
                  </label>
                  <input
                    id="parentName"
                    name="parentName"
                    value={form.parentName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={inputClass}
                    maxLength={100}
                    autoComplete="name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="studentName" className="block text-sm font-semibold mb-2">
                    Student Name
                  </label>
                  <input
                    id="studentName"
                    name="studentName"
                    value={form.studentName}
                    onChange={handleChange}
                    placeholder="Enter student's name"
                    className={inputClass}
                    maxLength={100}
                  />
                </div>

                <div>
                  <label htmlFor="className" className="block text-sm font-semibold mb-2">
                    Class Interested In *
                  </label>
                  <select
                    id="className"
                    name="className"
                    value={form.className}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  >
                    <option value="">Select class</option>
                    {classOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-sm font-semibold mb-2">
                    Mobile Number *
                  </label>
                  <input
                    id="mobile"
                    type="tel"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className={inputClass}
                    inputMode="numeric"
                    pattern="[6-9][0-9]{9}"
                    maxLength={10}
                    autoComplete="tel"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email address (optional)"
                    className={inputClass}
                    maxLength={254}
                    autoComplete="email"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your question or enquiry here..."
                    rows={4}
                    maxLength={2000}
                    className={`${inputClass} resize-y`}
                  />
                </div>

                {/* Hidden honeypot field */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

              </div>

              {result && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl p-4 text-sm ${
                    result.success
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-800"
                  }`}
                >
                  {result.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#c24d4a] text-white py-4 rounded-full font-bold text-sm hover:bg-[#7a3032] transition disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit Enquiry →"}
              </button>

              <p className="text-xs text-center text-[#75665c]">
                Your information will be used by the school to respond
                to your enquiry.
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
