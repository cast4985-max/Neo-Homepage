"use client";

import { useT } from "@/components/LanguageProvider";

/* 슬림 신뢰 스트립 */
export default function Recognition() {
  const t = useT();

  const badges = [
    {
      title: t("거래 데이터 암호화", "Trade data encrypted"),
      description: t("권한 기반 접근 통제", "Permission-based access control"),
    },
    {
      title: t("3개국 통관 컴플라이언스", "3-country compliance"),
      description: t("단계마다 자동 점검", "Checked automatically at every stage"),
    },
    {
      title: t("탄소 측정 · 감축", "Carbon measured & reduced"),
      description: t("구간별 배출량 리포트", "Per-leg emissions reporting"),
    },
  ];

  return (
    <section className="border-y border-line bg-paper-warm">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-4 py-12 md:grid-cols-3 lg:px-8">
        {badges.map((badge, i) => (
          <div key={badge.title} className={`flex items-start gap-4 ${i > 0 ? "md:border-l md:border-line md:pl-8" : ""}`}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="mt-1 shrink-0" aria-hidden="true">
              <path d="M11 2l8 3v5c0 5-3.2 8.3-8 9.5C6.2 18.3 3 15 3 10V5z" stroke="var(--accent)" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M7.5 11l2.5 2.5 4.5-5" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <p className="font-extrabold">{badge.title}</p>
              <p className="mt-0.5 text-sm text-ink-soft">{badge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
