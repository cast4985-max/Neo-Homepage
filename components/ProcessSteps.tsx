"use client";

import { useT } from "@/components/LanguageProvider";

export default function ProcessSteps() {
  const t = useT();

  const steps = [
    {
      number: "01",
      title: t("컨설팅", "Consulting"),
      description: t(
        "무역 전문가가 품목, 목표 시장, 현재 프로세스를 진단하고 최적의 진출 전략을 설계합니다.",
        "Trade experts assess your products, target markets, and current process, then design the right market-entry strategy.",
      ),
    },
    {
      number: "02",
      title: t("구축", "Build"),
      description: t(
        "파트너 매칭, 물류 경로, 결제 인프라까지 비즈니스에 맞는 거래 환경을 플랫폼 위에 구축합니다.",
        "Partner matching, logistics routes, and payment infrastructure — we build your trade environment on the platform.",
      ),
    },
    {
      number: "03",
      title: t("운영", "Operate"),
      description: t(
        "거래가 시작된 후에도 데이터 모니터링과 전담 매니저가 지속적으로 성과를 개선합니다.",
        "After trading begins, data monitoring and a dedicated manager keep improving your results.",
      ),
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-16 lg:px-8 lg:py-24">
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
          {t("도입부터 운영까지,", "From onboarding to operations,")}
          <br />
          {t("3단계면 충분합니다", "three steps is all it takes")}
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="border-t-2 border-black pt-6">
              <p className="text-sm font-bold text-gray-400">{step.number}</p>
              <h3 className="mt-2 text-2xl font-bold">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
