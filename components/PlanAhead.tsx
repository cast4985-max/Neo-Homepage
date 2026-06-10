"use client";

import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

export default function PlanAhead() {
  const t = useT();

  const benefits = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true">
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 10h18M8 3v4M16 3v4" />
        </svg>
      ),
      text: t(
        "최대 90일 전에 원하는 선적 일정을 선택하세요.",
        "Pick your shipping schedule up to 90 days in advance.",
      ),
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" />
        </svg>
      ),
      text: t(
        "예약 시점 운임이 고정되어 시황 급등에도 추가 비용이 없습니다.",
        "Your rate is locked at booking — no surprise costs when the market spikes.",
      ),
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3l9 4v6c0 5.2-3.8 8.8-9 10-5.2-1.2-9-4.8-9-10V7z" />
          <path d="M8.5 12l2.5 2.5L16 9.5" />
        </svg>
      ),
      text: t(
        "선적 48시간 전까지 무료로 변경·취소할 수 있습니다.",
        "Change or cancel for free up to 48 hours before shipping.",
      ),
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-16 lg:px-8 lg:py-24">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px]">
          {t("미리 계획하는 무역", "Plan your trade ahead")}
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {/* 와이드 카드 */}
          <div className="relative overflow-hidden rounded-lg bg-[#9fe8c8] p-8 lg:col-span-2 lg:p-10">
            <div className="flex gap-2">
              <button
                type="button"
                className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white"
              >
                {t("정기 선적", "Scheduled")}
              </button>
              <button
                type="button"
                className="rounded-full bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100"
              >
                {t("스팟 견적", "Spot")}
              </button>
            </div>
            <h3 className="mt-8 max-w-md text-3xl font-bold leading-snug tracking-tight sm:text-4xl">
              {t("정기 선적 예약으로", "Lock in your rates with")}
              <br />
              {t("운임을 고정하세요.", "scheduled bookings.")}
            </h3>
            <p className="mt-4 max-w-sm leading-relaxed text-black/70">
              {t(
                "최대 90일 전에 선복을 예약하고 운임 변동 리스크 없이 수출 일정을 계획할 수 있습니다.",
                "Reserve vessel space up to 90 days ahead and plan exports without freight-rate risk.",
              )}
            </p>
            <Link
              href="#contact"
              className="mt-8 inline-flex rounded-lg bg-black px-6 py-3 text-base font-medium text-white transition-opacity hover:opacity-80"
            >
              {t("예약 알아보기", "Learn about booking")}
            </Link>
            {/* 장식 요소 */}
            <svg
              viewBox="0 0 200 200"
              className="pointer-events-none absolute -right-8 bottom-[-40px] h-56 w-56 text-black/10 sm:text-black/15"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20 140h160l-20 40H40z" />
              <rect x="55" y="100" width="40" height="40" />
              <rect x="100" y="70" width="40" height="70" />
            </svg>
          </div>

          {/* 혜택 카드 */}
          <div className="rounded-lg border border-gray-200 p-8">
            <h3 className="text-xl font-bold">{t("혜택", "Benefits")}</h3>
            <ul className="mt-6 flex flex-col gap-6">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex gap-4">
                  {benefit.icon}
                  <p className="text-[15px] leading-relaxed text-gray-700">
                    {benefit.text}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs leading-relaxed text-gray-400">
              {t(
                "일부 항로에는 적용되지 않을 수 있습니다. 자세한 내용은 이용약관을 확인하세요.",
                "May not be available on some routes. See our terms for details.",
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
