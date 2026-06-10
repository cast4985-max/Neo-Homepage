"use client";

import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

export default function PlanAhead() {
  const t = useT();

  const benefits = [
    t("최대 90일 전 선적 일정 선택", "Pick your schedule up to 90 days ahead"),
    t("예약 시점 운임 고정 — 시황 급등 무관", "Rates locked at booking, market spikes don't matter"),
    t("선적 48시간 전까지 무료 변경·취소", "Free changes & cancellation up to 48h before shipping"),
  ];

  return (
    <section className="bg-paper-warm">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-4 py-20 lg:grid-cols-[auto_1fr] lg:gap-24 lg:px-8 lg:py-28">
        <p className="relative inline-block text-[110px] font-extrabold leading-none tracking-tight sm:text-[150px]">
          90
          <span className="text-[36px] sm:text-[48px]">{t("일", "d")}</span>
          <span className="absolute -right-5 top-2 h-3.5 w-3.5 bg-mint" aria-hidden="true" />
        </p>

        <div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t(
              "항공 스페이스는 90일 먼저, 운임 변동은 차단",
              "Reserve air space 90 days out, lock out volatility",
            )}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
            {t(
              "예약 시점에 운임이 확정되므로, 시황이 출렁여도 수출 원가 계획이 흔들리지 않습니다.",
              "Rates are fixed at booking, so your export cost plan holds even when the market swings.",
            )}
          </p>
          <ul className="mt-7 flex flex-col gap-2.5">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 font-medium">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0" aria-hidden="true">
                  <path d="M3.5 9.5l3.5 3.5 7.5-8" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {b}
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            className="mt-9 inline-flex rounded bg-accent px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-accent-deep"
          >
            {t("예약 알아보기", "Learn about booking")}
          </Link>
        </div>
      </div>
    </section>
  );
}
