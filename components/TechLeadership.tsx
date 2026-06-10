"use client";

import { useT } from "@/components/LanguageProvider";

export default function TechLeadership() {
  const t = useT();

  const pillars = [
    {
      stat: "20",
      unit: t("년", "yrs"),
      title: t("전문가의 통찰", "Expert insight"),
      description: t(
        "무역·물류 전문가가 현장의 문제를 정의하고, AI가 풀 가치가 있는 과제를 선별합니다.",
        "Trade and logistics experts define the problems worth solving with AI.",
      ),
    },
    {
      stat: "100",
      unit: "%",
      title: t("자체 AI 기술", "Proprietary AI"),
      description: t(
        "물류 현장 데이터로 학습한 자체 비전·예측 모델을 직접 설계하고 개선합니다.",
        "Our own vision and forecasting models, trained on real logistics data.",
      ),
    },
    {
      stat: "3",
      unit: t("개국", ""),
      title: t("글로벌 검증", "Globally validated"),
      description: t(
        "한·미·중 항만·창고 현장에 적용되어 성능이 검증된 솔루션만 제공합니다.",
        "Only solutions proven in ports and warehouses across Korea, the US, and China.",
      ),
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-20 lg:px-8 lg:py-28">
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-extrabold leading-snug tracking-tight sm:text-4xl">
          {t(
            "전문가의 통찰에 AI를 더해 산업마다 다른 문제를 풀어냅니다",
            "Expert insight plus AI — solving each industry's distinct problems",
          )}
        </h2>

        <div className="mx-auto mt-16 grid max-w-4xl gap-14 text-center sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title}>
              <p className="relative inline-block text-5xl font-extrabold tracking-tight">
                {pillar.stat}
                <span className="text-2xl">{pillar.unit}</span>
                <span className="absolute -right-4 top-0 h-2.5 w-2.5 bg-mint" aria-hidden="true" />
              </p>
              <h3 className="mt-4 text-lg font-extrabold">{pillar.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
