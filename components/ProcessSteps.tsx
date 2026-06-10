"use client";

import { useT } from "@/components/LanguageProvider";

export default function ProcessSteps() {
  const t = useT();

  const steps = [
    {
      number: "01",
      title: t("진단", "Diagnose"),
      description: t(
        "품목, 목표 시장, 현재 프로세스를 진단하고 개선 여지를 찾아냅니다.",
        "We assess your products, target markets, and current process.",
      ),
    },
    {
      number: "02",
      title: t("설계", "Design"),
      description: t(
        "물류 경로, 통관 절차, 결제 구조까지 거래 환경을 설계합니다.",
        "Logistics routes, customs procedures, and payment structure get designed.",
      ),
    },
    {
      number: "03",
      title: t("연결", "Connect"),
      description: t(
        "검증된 파트너·선사·통관사를 매칭하고 플랫폼에 연결합니다.",
        "Vetted partners, carriers, and customs brokers are wired in.",
      ),
    },
    {
      number: "04",
      title: t("운영", "Operate"),
      description: t(
        "데이터 모니터링과 전담 매니저가 지속적으로 성과를 개선합니다.",
        "Data monitoring and a dedicated manager keep improving results.",
      ),
    },
  ];

  return (
    <section className="bg-paper-warm">
      <div className="mx-auto max-w-[1280px] px-4 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t("도입은 네 단계로 진행됩니다", "Four steps to onboard")}
          </h2>
          <p className="pb-1 text-ink-soft">
            {t("평균 2주면 첫 선적까지 갑니다.", "First shipment in two weeks, on average.")}
          </p>
        </div>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number} className="bg-white p-8">
              <p className="text-sm font-bold text-accent">{step.number}</p>
              <h3 className="mt-3 text-xl font-extrabold">{step.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
