"use client";

import { useState, useRef } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const FORM_ENDPOINT = "https://forms.caltechweb.com/api/submit";
const SITE_ID = "marczbochscholarship.com"; // Update when domain is registered in caltechweb-forms

export default function ScholarshipForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    essay: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const wordCount = formData.essay.trim().split(/\s+/).filter(Boolean).length;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    if (wordCount > 400) {
      setStatus("error");
      setErrorMsg("Your essay exceeds 400 words. Please shorten it before submitting.");
      return;
    }

    if (wordCount < 50) {
      setStatus("error");
      setErrorMsg("Your essay should be at least 50 words.");
      return;
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: SITE_ID,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.essay,
          source: "contact-page",
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", essay: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-800 mb-2">Application Submitted!</h3>
        <p className="text-green-700">
          Thank you for applying to the Marc Zboch Academic Scholarship. We will review your
          application and notify you by email.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
          <p className="text-sm text-red-700">{errorMsg}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minLength={2}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none hover:border-gray-300"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none hover:border-gray-300"
            placeholder="you@university.edu"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-1.5">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none hover:border-gray-300"
          placeholder="(555) 123-4567"
        />
      </div>

      <div>
        <label htmlFor="essay" className="block text-sm font-semibold text-foreground mb-1.5">
          Scholarship Essay <span className="text-red-500">*</span>
        </label>
        <p className="text-xs text-muted mb-2">
          Describe a time when you made sacrifices to help others. (400 words max)
        </p>
        <textarea
          id="essay"
          name="essay"
          required
          rows={10}
          value={formData.essay}
          onChange={(e) => setFormData({ ...formData, essay: e.target.value })}
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none hover:border-gray-300 resize-y"
          placeholder="Share your story..."
        />
        <div className="flex justify-between items-center mt-1.5">
          <p className="text-xs text-muted">
            By submitting, you consent to the use of your essay, name, and information for marketing purposes.
          </p>
          <span
            className={`text-xs font-medium ${
              wordCount > 400 ? "text-red-500" : wordCount > 350 ? "text-amber-500" : "text-muted"
            }`}
          >
            {wordCount}/400 words
          </span>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Submit Application
          </>
        )}
      </button>
    </form>
  );
}
