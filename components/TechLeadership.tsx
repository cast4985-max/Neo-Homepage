"use client";

import { useT } from "@/components/LanguageProvider";

const pillarIcons = [
  (
    <svg key="expert" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="11" r="6" />
      <path d="M5 28c1.5-6 5.5-9 11-9s9.5 3 11 9" />
      <path d="M13 11l2 2 4-4" />
    </svg>
  ),
  (
    <svg key="tech" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="10" width="12" height="12" rx="2" />
      <path d="M16 4v6M16 22v6M4 16h6M22 16h6M7 7l4.5 4.5M25 7l-4.5 4.5M7 25l4.5-4.5M25 25l-4.5-4.5" />
    </svg>
  ),
  (
    <svg key="global" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="12" />
      <path d="M4 16h24M16 4c-5.5 5-5.5 19 0 24M16 4c5.5 5 5.5 19 0 24" />
    </svg>
  ),
];

function HatchHeading() {
  return (
    <svg viewBox="0 0 1180 150" className="w-full max-w-5xl" role="img" aria-label="INDUSTRIAL AI">
      <defs>
        <pattern id="hatch-tech" patternUnits="userSpaceOnUse" width="7" height="7" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="7" stroke="#d9d9d9" strokeWidth="2.5" />
        </pattern>
      </defs>
      <text
        x="0"
        y="118"
        fontFamily="var(--font-geist-sans), sans-serif"
        fontSize="132"
        fontWeight="800"
        letterSpacing="2"
        fill="url(#hatch-tech)"
      >
        INDUSTRIAL AI
      </text>
    </svg>
  );
}

export default function TechLeadership() {
  const t = useT();

  const stats = [
    { value: t("32건", "32"), label: t("AI 관련 등록 특허", "registered AI patents") },
    { value: t("18편", "18"), label: t("국제 학회 논문", "international conference papers") },
    { value: "47%", label: t("R&D 인력 비중", "of our team works in R&D") },
    { value: t("11개", "11"), label: t("자체 개발 AI 모델", "proprietary AI models") },
  ];

  const pillars = [
    {
      title: t("전문가의 통찰", "Expert insight"),
      description: t(
        "20년 경력의 무역·물류 전문가가 현장의 문제를 정의하고, AI가 풀 가치가 있는 과제를 선별합니다.",
        "Trade and logistics experts with 20 years in the field define the problems worth solving with AI.",
      ),
    },
    {
      title: t("자체 AI 기술", "Proprietary AI"),
      description: t(
        "범용 모델이 아닌, 물류 현장 데이터로 학습한 자체 비전·예측 모델을 직접 설계하고 개선합니다.",
        "Not off-the-shelf models — we design and refine our own vision and forecasting models trained on real logistics data.",
      ),
    },
    {
      title: t("글로벌 검증", "Globally validated"),
      description: t(
        "국내외 항만·창고 현장에 적용되어 성능이 검증된 솔루션만 고객에게 제공합니다.",
        "We only ship solutions whose performance is proven in ports and warehouses at home and abroad.",
      ),
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-16 lg:px-8 lg:py-24">
        <HatchHeading />

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            {t("압도적인 AI 기술력으로", "Leading the global market")}
            <br />
            {t("글로벌 시장을 선도합니다", "with superior AI technology")}
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-gray-600 lg:justify-self-end lg:self-end">
            {t(
              "전문가의 통찰에 AI를 더했습니다. 산업마다 다른 현장의 문제를 정확히 정의하고, 자체 개발한 AI 기술로 측정 가능한 성과를 만듭니다.",
              "Expert insight, plus AI. We precisely define each industry's field problems and turn them into measurable results with AI technology we built ourselves.",
            )}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-gray-200 pt-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold tracking-tight sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <div key={pillar.title} className="rounded-lg bg-[#f6f6f6] p-8">
              <span className="inline-flex text-black [&>svg]:h-9 [&>svg]:w-9">
                {pillarIcons[i]}
              </span>
              <h3 className="mt-5 text-xl font-bold">{pillar.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
