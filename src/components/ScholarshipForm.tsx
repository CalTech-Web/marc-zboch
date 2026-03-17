"use client";

export default function ScholarshipForm() {
  return (
    <div className="w-full">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdo8Mtlas83W7IKKYkWOxHjYN_h80nMZqedoxuuXzj5KO1czQ/viewform?embedded=true"
        width="100%"
        height="900"
        className="w-full rounded-xl border-0"
        title="Marc Zboch Academic Scholarship Application Form"
        loading="lazy"
      >
        Loading...
      </iframe>
      <p className="text-xs text-muted mt-4 text-center">
        By submitting an application, the applicant gives consent to use their essay, photo, name, and information for marketing and promotional purposes.
      </p>
    </div>
  );
}
