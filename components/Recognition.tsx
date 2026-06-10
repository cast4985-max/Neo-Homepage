"use client";

import { useT } from "@/components/LanguageProvider";

export default function Recognition() {
  const t = useT();

  const badges = [
    {
      title: t("무역의 날 표창", "Trade Day Commendation"),
      description: t(
        "2025년 수출 디지털 전환 부문",
        "2025 export digital transformation category",
      ),
    },
    {
      title: t("글로벌 클라우드 파트너", "Global Cloud Partner"),
      description: t(
        "올해의 트레이드테크 파트너 선정",
        "Named TradeTech Partner of the Year",
      ),
    },
    {
      title: "ISO 27001 · SOC 2",
      description: t(
        "국제 정보보안 인증 획득",
        "International security certifications",
      ),
    },
  ];

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-[1280px] px-4 py-16 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t(
            "시장이 인정한 트레이드테크 리더",
            "A TradeTech leader recognized by the market",
          )}
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {badges.map((badge) => (
            <div key={badge.title} className="border-t border-white/25 pt-6">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="14" cy="11" r="7" />
                <path d="M9.5 16.5L7 25l7-4 7 4-2.5-8.5" />
              </svg>
              <p className="mt-4 text-xl font-bold">{badge.title}</p>
              <p className="mt-2 text-gray-400">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
