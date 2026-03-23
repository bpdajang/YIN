import { useState } from "react";

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="9" fill="#16A34A" opacity="0.15" />
    <path
      d="M5 9.5L7.5 12L13 6.5"
      stroke="#16A34A"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 8H13M13 8L9 4M13 8L9 12"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const sections = [
  {
    id: "eligibility",
    label: "Eligibility",
    title: "Who Can Apply",
    color: "emerald",
    icon: "👤",
    items: [
      "Young people aged 18–35 years old",
      "South Sudanese nationals or residents",
      "Passionate about personal growth, leadership, or community impact",
      "Ability to commit at least 5 hours per week for 2 months",
      "Access to a phone or internet for virtual sessions",
      "No prior experience required — only dedication and drive",
    ],
  },
  {
    id: "benefits",
    label: "Benefits",
    title: "What You Gain",
    color: "amber",
    icon: "🌟",
    items: [
      "Personalized one-on-one mentorship with experienced professionals",
      "Structured curriculum covering leadership, entrepreneurship & impact",
      "Peer learning and networking with fellow Fellows",
      "Access to curated resources, tools, and frameworks",
      "Official certificate of completion recognized by YIN",
      "Potential invitation to join our alumni and partner network",
    ],
  },
  {
    id: "requirements",
    label: "Requirements",
    title: "What to Prepare",
    color: "sky",
    icon: "📋",
    items: [
      "Completed application form (submitted online)",
      "Short personal statement: your goals and why you want to join",
      "One reference — a teacher, community leader, or employer",
      "Copy of national ID or valid student identification",
      "Availability declaration for the full 2-month program period",
    ],
  },
  {
    id: "selection",
    label: "Selection",
    title: "How We Choose",
    color: "violet",
    icon: "🎯",
    items: [
      "Applications reviewed by the YIN Programs Committee",
      "Shortlisted candidates invited for a brief 15-min interview",
      "Selection based on commitment, clarity of purpose, and potential",
      "Diversity and geographic representation are prioritized",
      "All applicants notified of outcome within 2 weeks of deadline",
    ],
  },
];

const colorMap = {
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-800",
    active: "bg-emerald-600",
    dot: "bg-emerald-500",
    ring: "ring-emerald-400",
    text: "text-emerald-700",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    badge: "bg-amber-100 text-amber-800",
    active: "bg-amber-500",
    dot: "bg-amber-500",
    ring: "ring-amber-400",
    text: "text-amber-700",
  },
  sky: {
    bg: "bg-sky-50",
    border: "border-sky-200",
    badge: "bg-sky-100 text-sky-800",
    active: "bg-sky-600",
    dot: "bg-sky-500",
    ring: "ring-sky-400",
    text: "text-sky-700",
  },
  violet: {
    bg: "bg-violet-50",
    border: "border-violet-200",
    badge: "bg-violet-100 text-violet-800",
    active: "bg-violet-600",
    dot: "bg-violet-500",
    ring: "ring-violet-400",
    text: "text-violet-700",
  },
};

export default function MentorshipSection() {
  const [activeTab, setActiveTab] = useState("eligibility");
  const active = sections.find((s) => s.id === activeTab);
  const colors = colorMap[active.color];

  return (
    <section className="relative w-screen bg-white overflow-hidden">
      {/* Hero area */}

      <div className="min-h-screen py-5 lg:py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-0 lg:gap-2 -mt-28 overflow-hidden max-w-7xl mx-auto px-4 lg:px-8">
        {/* Left side - Image */}
        <div className="relative order-2 lg:order-1">
          <div
            className="w-full aspect-[4/3] lg:aspect-[3/2] bg-base-200 bg-cover bg-center rounded-2xl shadow-2xl mx-auto max-w-md lg:max-w-lg relative"
            style={{
              backgroundImage:
                "url(https://thimmigration.vn/wp-content/uploads/2023/07/ton-trong-su-khac-biet-net-dac-trung-trong-tinh-cach-nguoi-my.jpg)",
            }}
          >
            {/* Glow blobs on image side */}
            <div className="absolute -top-10 -left-10 w-48 h-48 lg:w-64 lg:h-64 bg-emerald-700 opacity-20 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 lg:w-52 lg:h-52 bg-amber-600 opacity-10 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Right side - Main Title */}
        <div className="relative order-1 lg:order-2 flex flex-col items-center lg:items-start justify-center px-6 py-12 lg:py-16 lg:px-12">
          <div className="relative max-w-2xl w-full text-center lg:text-left mb-5 top-0 lg:mb-0">
            <h1
              className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-8"
              style={{
                fontFamily: "'Georgia', serif",
                letterSpacing: "-0.02em",
              }}
            >
              YIN - Impact Fellows{" "}
              <span className="text-emerald-400 block lg:inline">
                Mentorship
              </span>{" "}
              Program
            </h1>
            <p className="text-lg md:text-xl lg:text-xl text-gray-700 mb-5 leading-relaxed max-w-lg align-left mx-auto lg:mx-0">
              A two-month structured mentorship initiative designed to ignite
              leadership, entrepreneurship, and community impact in young South
              Sudanese changemakers. This program provides guided learning,
              practical skill development, and 1:1 mentorship from experienced
              leaders. Create a supportive network, collaborate with peers, and
              leave with actionable plans for sustainable community impact.
            </p>
          </div>
        </div>
      </div>

      <div className="relative -mt-5 md:-mt-16 lg:-mt-20 *:before:absolute *:before:inset-0 *:before:bg-gradient-to-tr *:before:from-emerald-50 *:before:to-emerald-100 *:before:opacity-50">
        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6">
          {[
            { value: "2", unit: "Months", label: "Structured Program" },
            { value: "1:1", unit: "", label: "Personalized Mentorship" },
            { value: "100%", unit: "", label: "Free to Join" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="group text-center hover:scale-[1.05] transition-all duration-300 cursor-default"
            >
              <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent mb-3 group-hover:scale-110">
                {stat.value}
                <span className="text-emerald-400 text-2xl font-normal ml-1">
                  {stat.unit}
                </span>
              </div>
              <div className="text-sm uppercase tracking-widest text-gray-600 font-semibold group-hover:text-gray-900">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tab + Content section */}
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
        {/* Section heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Program Details
          </h2>
          <p className="text-gray-500 text-sm">
            Everything you need to know before applying
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {sections.map((s) => {
            const c = colorMap[s.color];
            const isActive = activeTab === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? `${c.active} text-white border-transparent shadow-md scale-105`
                    : `bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900`
                }`}
              >
                <span>{s.icon}</span>
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Content card */}
        <div
          className={`rounded-2xl border ${colors.border} ${colors.bg} px-6 py-8 md:px-10 md:py-10 transition-all duration-300`}
        >
          <div className="flex items-start gap-4 mb-7">
            <span className="text-4xl">{active.icon}</span>
            <div>
              <span
                className={`text-xs font-semibold uppercase tracking-widest ${colors.text}`}
              >
                {active.label}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-0.5">
                {active.title}
              </h3>
            </div>
          </div>

          <ul className="space-y-3.5">
            {active.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0">
                  <CheckIcon />
                </span>
                <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Journey steps */}
        <div className="mt-16">
          <h2 className="text-center text-xl md:text-2xl font-bold text-gray-900 mb-2">
            Your Journey as a Fellow
          </h2>
          <p className="text-center text-sm text-gray-500 mb-10">
            From application to impact — here's the path
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                step: "01",
                title: "Apply",
                desc: "Submit your application with a short personal statement and reference.",
                color: "emerald",
              },
              {
                step: "02",
                title: "Interview",
                desc: "Shortlisted Fellows attend a 15-minute virtual or in-person interview.",
                color: "amber",
              },
              {
                step: "03",
                title: "Learn & Grow",
                desc: "Engage in mentored sessions, peer learning, and guided projects over 8 weeks.",
                color: "sky",
              },
              {
                step: "04",
                title: "Graduate",
                desc: "Complete the program, earn your certificate, and join the YIN alumni network.",
                color: "violet",
              },
            ].map((item, i, arr) => {
              const c = colorMap[item.color];
              return (
                <div key={i} className="relative flex flex-col">
                  <div
                    className={`rounded-xl border ${c.border} ${c.bg} p-5 flex-1`}
                  >
                    <div
                      className={`text-xs font-black tracking-widest ${c.text} mb-3`}
                    >
                      STEP {item.step}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-gray-300">
                      <ArrowIcon />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA block */}
        <div className="mt-16 rounded-2xl bg-[#008937] bg-opacity-60 text-white px-8 py-12 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-700 opacity-20 rounded-full blur-3xl" />
          <div className="relative">
            <p className="text-emerald-900 text-xs font-semibold uppercase tracking-widest mb-3">
              Applications Open
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Ready to Make Your Impact?
            </h2>
            <p className="text-gray-700 max-w-md mx-auto text-sm mb-8 leading-relaxed">
              We are looking forward to having you be part of this amazing
              journey. Join a generation of young leaders transforming South
              Sudan from the ground up.
            </p>
            <button className="inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 transition-colors duration-200 text-white font-bold px-8 py-4 rounded-full text-base shadow-lg shadow-emerald-900/40">
              Apply Now
              <ArrowIcon />
            </button>
            <p className="text-gray-600 text-xs mt-4">
              Free to apply · Open to all eligible young people across South
              Sudan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
