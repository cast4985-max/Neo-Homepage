"use client";

import { useT } from "@/components/LanguageProvider";

export default function Recognition() {
  const t = useT();

  const badges = [
    {
      title: t("보안 중심 운영", "Security-first operations"),
      description: t(
        "거래 데이터 암호화와 접근 통제를 기본으로 운영합니다",
        "Trade data encryption and access controls, by default",
      ),
    },
    {
      title: t("규정 준수", "Compliance"),
      description: t(
        "한·미·중 통관 및 무역 규정에 맞춰 프로세스를 설계합니다",
        "Processes built around Korea, US, and China trade regulations",
      ),
    },
    {
      title: t("지속 가능성", "Sustainability"),
      description: t(
        "운송 구간별 탄소 배출을 측정하고 줄이는 방법을 찾습니다",
        "We measure transport emissions and look for ways to reduce them",
      ),
    },
  ];

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-[1280px] px-4 py-16 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t("신뢰를 만드는 운영 원칙", "How we earn your trust")}
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
