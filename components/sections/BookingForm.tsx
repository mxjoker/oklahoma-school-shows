"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  CalendarCheck, Phone, CheckCircle2, AlertCircle,
  Loader2, ChevronDown, User, School, MapPin,
  Mail, MessageSquare, Sparkles,
} from "lucide-react";

/* ─── Form shape ─────────────────────────────────────────── */
interface FormFields {
  name:            string;
  title:           string;
  schoolName:      string;
  cityState:       string;
  email:           string;
  phone:           string;
  gradeLevels:     string[];
  programInterest: string;
  preferredDates:  string;
  hearAboutUs:     string;
  message:         string;
}

/* ─── Select options ─────────────────────────────────────── */
const PROGRAMS = [
  { value: "",                    label: "Select a program..." },
  { value: "Science Magic",       label: "🔬 Science Magic" },
  { value: "Reading & Literacy",  label: "📚 Reading & Literacy" },
  { value: "Math Magic",          label: "🔢 Math Magic" },
  { value: "Character Education", label: "🌟 Character Education" },
  { value: "Anti-Bullying",       label: "🤝 Anti-Bullying" },
  { value: "Not Sure Yet",        label: "🎩 Not Sure Yet — Help Me Choose" },
  { value: "Multiple Programs",   label: "🎪 Multiple Programs / Full Day" },
];

const GRADE_OPTIONS = ["K", "1st", "2nd", "3rd", "4th", "5th", "6th", "Multiple Grades"];

const HEAR_ABOUT_OPTIONS = [
  { value: "",                    label: "Select one..." },
  { value: "Google Search",       label: "Google Search" },
  { value: "Referral / Word of Mouth", label: "Referral / Word of Mouth" },
  { value: "Social Media",        label: "Social Media" },
  { value: "Another School",      label: "Another School Recommended Us" },
  { value: "District / Admin",    label: "District or Admin Recommended Us" },
  { value: "Repeat Booking",      label: "We've Booked Before" },
  { value: "Other",               label: "Other" },
];

/* ─── Reusable field wrapper ─────────────────────────────── */
function FieldWrapper({
  label,
  error,
  required,
  children,
  hint,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-heading font-bold text-brand-dark">
        {label}
        {required && <span className="text-brand-magenta ml-1">*</span>}
      </label>
      {children}
      {hint && !error && (
        <p className="text-xs text-gray-400 font-body">{hint}</p>
      )}
      <AnimatePresence>
        {error && (
          <motion.p
            className="flex items-center gap-1.5 text-xs text-red-600 font-body"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Input / Textarea / Select base styles ──────────────── */
const inputBase =
  "w-full px-4 py-3 rounded-xl border-2 font-body text-sm text-brand-dark " +
  "transition-all duration-200 outline-none bg-white " +
  "placeholder:text-gray-300 " +
  "focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/15 ";

const inputNormal  = inputBase + "border-gray-200";
const inputError   = inputBase + "border-red-400 bg-red-50/50 focus:border-red-400 focus:ring-red-100";

/* ─── Success screen ─────────────────────────────────────── */
function SuccessScreen({ name, schoolName }: { name: string; schoolName: string }) {
  return (
    <motion.div
      className="text-center py-12 px-6"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
    >
      <motion.div
        className="w-24 h-24 rounded-full bg-green-50 border-4 border-green-200 flex items-center justify-center mx-auto mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 250 }}
      >
        <CheckCircle2 className="w-12 h-12 text-green-500" />
      </motion.div>

      <h3 className="font-display text-3xl text-brand-dark mb-3">
        We Got It, {name.split(" ")[0]}!
      </h3>
      <p className="text-gray-500 font-body leading-relaxed max-w-md mx-auto mb-2">
        Your inquiry for <strong className="text-brand-dark">{schoolName}</strong> has
        been sent. Check your inbox — a confirmation email is on its way to you.
      </p>
      <p className="text-gray-400 font-body text-sm mb-8">
        We respond within 24 hours — usually same day.
      </p>

      <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/30 rounded-xl px-5 py-3">
        <Sparkles className="w-4 h-4 text-brand-gold" />
        <span className="text-brand-dark font-heading font-bold text-sm">
          Can&apos;t wait? Call us now: (405) 431-6625
        </span>
      </div>
    </motion.div>
  );
}

/* ─── Main form component ────────────────────────────────── */
export function BookingForm() {
  const [submitted, setSubmitted]     = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const prefersReduced = useReducedMotion();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      name:            "",
      title:           "",
      schoolName:      "",
      cityState:       "",
      email:           "",
      phone:           "",
      gradeLevels:     [],
      programInterest: "",
      preferredDates:  "",
      hearAboutUs:     "",
      message:         "",
    },
  });

  /* Toggle a grade level checkbox */
  const selectedGrades = watch("gradeLevels") ?? [];

  function toggleGrade(grade: string) {
    const current = getValues("gradeLevels") ?? [];
    const next = current.includes(grade)
      ? current.filter((g) => g !== grade)
      : [...current, grade];
    setValue("gradeLevels", next, { shouldValidate: true });
  }

  /* Submit handler */
  const onSubmit = async (data: FormFields) => {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setServerError(
          json.error ?? "Something went wrong. Please call us at (405) 431-6625."
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setServerError(
        "Network error. Please check your connection or call us at (405) 431-6625."
      );
    }
  };

  /* ── Render ── */
  if (submitted) {
    return (
      <SuccessScreen
        name={getValues("name")}
        schoolName={getValues("schoolName")}
      />
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      initial={prefersReduced ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
      noValidate
    >
      {/* ── Section: About You ── */}
      <div className="space-y-1 pb-2 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-brand-purple" />
          <h3 className="font-heading font-bold text-brand-dark text-sm uppercase tracking-wide">
            About You
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FieldWrapper label="Your Name" required error={errors.name?.message}>
          <input
            {...register("name", { required: "Please enter your name." })}
            type="text"
            placeholder="Sarah Mitchell"
            className={errors.name ? inputError : inputNormal}
            autoComplete="name"
          />
        </FieldWrapper>

        <FieldWrapper label="Your Title" required error={errors.title?.message}>
          <input
            {...register("title", { required: "Please enter your title." })}
            type="text"
            placeholder="Principal / PTA President / Teacher"
            className={errors.title ? inputError : inputNormal}
          />
        </FieldWrapper>
      </div>

      {/* ── Section: School Info ── */}
      <div className="space-y-1 pb-2 border-b border-gray-100 pt-2">
        <div className="flex items-center gap-2">
          <School className="w-4 h-4 text-brand-purple" />
          <h3 className="font-heading font-bold text-brand-dark text-sm uppercase tracking-wide">
            School Info
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FieldWrapper label="School Name" required error={errors.schoolName?.message}>
          <input
            {...register("schoolName", { required: "Please enter your school name." })}
            type="text"
            placeholder="Ridgeview Elementary"
            className={errors.schoolName ? inputError : inputNormal}
          />
        </FieldWrapper>

        <FieldWrapper
          label="City & State"
          required
          error={errors.cityState?.message}
          hint="e.g. Edmond, OK"
        >
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none" />
            <input
              {...register("cityState", { required: "Please enter your city and state." })}
              type="text"
              placeholder="Edmond, OK"
              className={`${errors.cityState ? inputError : inputNormal} pl-9`}
            />
          </div>
        </FieldWrapper>
      </div>

      {/* ── Section: Contact ── */}
      <div className="space-y-1 pb-2 border-b border-gray-100 pt-2">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-brand-purple" />
          <h3 className="font-heading font-bold text-brand-dark text-sm uppercase tracking-wide">
            Contact
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FieldWrapper label="Email Address" required error={errors.email?.message}>
          <input
            {...register("email", {
              required: "Please enter your email.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address.",
              },
            })}
            type="email"
            placeholder="you@school.edu"
            className={errors.email ? inputError : inputNormal}
            autoComplete="email"
          />
        </FieldWrapper>

        <FieldWrapper label="Phone Number" required error={errors.phone?.message}>
          <input
            {...register("phone", {
              required: "Please enter your phone number.",
              minLength: { value: 7, message: "Please enter a valid phone number." },
            })}
            type="tel"
            placeholder="(405) 555-1234"
            className={errors.phone ? inputError : inputNormal}
            autoComplete="tel"
          />
        </FieldWrapper>
      </div>

      {/* ── Section: Show Details ── */}
      <div className="space-y-1 pb-2 border-b border-gray-100 pt-2">
        <div className="flex items-center gap-2">
          <CalendarCheck className="w-4 h-4 text-brand-purple" />
          <h3 className="font-heading font-bold text-brand-dark text-sm uppercase tracking-wide">
            Show Details
          </h3>
        </div>
      </div>

      {/* Grade levels */}
      <FieldWrapper
        label="Grade Levels"
        required
        error={errors.gradeLevels?.message}
        hint="Select all that apply"
      >
        <input
          type="hidden"
          {...register("gradeLevels", {
            validate: (v) =>
              (Array.isArray(v) && v.length > 0) ||
              "Please select at least one grade level.",
          })}
        />
        <div className="flex flex-wrap gap-2">
          {GRADE_OPTIONS.map((grade) => {
            const active = selectedGrades.includes(grade);
            return (
              <button
                key={grade}
                type="button"
                onClick={() => toggleGrade(grade)}
                className={`px-4 py-2 rounded-xl text-sm font-heading font-bold border-2 transition-all duration-150 ${
                  active
                    ? "bg-brand-purple text-white border-brand-purple shadow-button"
                    : "bg-white text-gray-500 border-gray-200 hover:border-brand-purple/50 hover:text-brand-purple"
                }`}
              >
                {grade}
              </button>
            );
          })}
        </div>
      </FieldWrapper>

      {/* Program interest */}
      <FieldWrapper
        label="Program Interest"
        required
        error={errors.programInterest?.message}
      >
        <div className="relative">
          <select
            {...register("programInterest", {
              required: "Please select a program.",
            })}
            className={`${errors.programInterest ? inputError : inputNormal} appearance-none pr-10 cursor-pointer`}
          >
            {PROGRAMS.map((p) => (
              <option key={p.value} value={p.value} disabled={p.value === ""}>
                {p.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </FieldWrapper>

      {/* Preferred dates */}
      <FieldWrapper
        label="Preferred Dates"
        error={errors.preferredDates?.message}
        hint="Give us 2–3 options — we'll confirm availability fast"
      >
        <input
          {...register("preferredDates")}
          type="text"
          placeholder="e.g. Oct 14, Oct 21, or any Tuesday in November"
          className={errors.preferredDates ? inputError : inputNormal}
        />
      </FieldWrapper>

      {/* How did you hear */}
      <FieldWrapper label="How Did You Hear About Us?" error={errors.hearAboutUs?.message}>
        <div className="relative">
          <select
            {...register("hearAboutUs")}
            className={`${errors.hearAboutUs ? inputError : inputNormal} appearance-none pr-10 cursor-pointer`}
          >
            {HEAR_ABOUT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value} disabled={o.value === ""}>
                {o.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </FieldWrapper>

      {/* ── Section: Message ── */}
      <div className="space-y-1 pb-2 border-b border-gray-100 pt-2">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-brand-purple" />
          <h3 className="font-heading font-bold text-brand-dark text-sm uppercase tracking-wide">
            Anything Else?
          </h3>
        </div>
      </div>

      <FieldWrapper
        label="Additional Message"
        error={errors.message?.message}
        hint="Questions about pricing, logistics, customization — ask anything"
      >
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Tell us anything else we should know — special themes, back-to-back shows, accessibility needs, etc."
          className={`${errors.message ? inputError : inputNormal} resize-none`}
        />
      </FieldWrapper>

      {/* ── Server error ── */}
      <AnimatePresence>
        {serverError && (
          <motion.div
            className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-red-700 text-sm font-body">{serverError}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Submit button ── */}
      <div className="pt-2">
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2.5 bg-brand-gold text-brand-dark font-heading font-bold py-4 rounded-2xl text-lg hover:bg-brand-amber transition-colors shadow-glow-gold disabled:opacity-60 disabled:cursor-not-allowed"
          whileHover={isSubmitting || prefersReduced ? {} : { scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending Your Inquiry...
            </>
          ) : (
            <>
              <CalendarCheck className="w-5 h-5" />
              Send Booking Inquiry
            </>
          )}
        </motion.button>

        <p className="text-center text-xs text-gray-400 font-body mt-3">
          We respond within 24 hours · No deposit required · 100% money-back guarantee
        </p>
      </div>
    </motion.form>
  );
}

export default BookingForm;
