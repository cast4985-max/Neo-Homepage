"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useT } from "@/components/LanguageProvider";

/* 흰색 견적 위젯 — 사진 히어로 위에 떠 있는 실무형 패널 */
function QuoteWidget() {
  const t = useT();
  const [mode, setMode] = useState<"air" | "sea">("air");

  const inputClass =
    "w-full rounded border border-line bg-white px-3.5 py-3 text-[15px] outline-none transition-colors placeholder:text-ink-soft/55 focus:border-accent";

  return (
    <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-2xl shadow-black/25 lg:p-7">
      <div className="flex items-center justify-between">
        <p className="text-lg font-extrabold">{t("즉시 견적", "Instant quote")}</p>
        <span className="rounded bg-accent-soft px-2.5 py-1 text-xs font-bold text-accent">
          {t("평균 8초", "~8 seconds")}
        </span>
      </div>

      <div className="mt-4 flex border-b border-line">
        {(
          [
            ["air", t("항공", "Air")],
            ["sea", t("해상", "Ocean")],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setMode(key)}
            className={`-mb-px border-b-2 px-5 py-2.5 text-[15px] font-bold transition-colors ${
              mode === key
                ? "border-accent text-accent"
                : "border-transparent text-ink-soft hover:text-ink"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-3.5">
        <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-2">
          <label className="flex flex-col gap-1.5">
            <span className="text-[13px] font-bold text-ink-soft">
              {t("출발지", "Origin")}
            </span>
            <input type="text" placeholder={t("서울, KR", "Seoul, KR")} className={inputClass} />
          </label>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="mb-3.5 shrink-0" aria-hidden="true">
            <path d="M2 6h12M11 3l3 3-3 3M16 12H4M7 9l-3 3 3 3" />
          </svg>
          <label className="flex flex-col gap-1.5">
            <span className="text-[13px] font-bold text-ink-soft">
              {t("도착지", "Destination")}
            </span>
            <input type="text" placeholder={t("LA, US", "LA, US")} className={inputClass} />
          </label>
        </div>
        <label className="flex flex-col gap-1.5">
          <span className="text-[13px] font-bold text-ink-soft">
            {t("품목 · 중량", "Commodity & weight")}
          </span>
          <input
            type="text"
            placeholder={t("예: 철강 코일 24t", "e.g. Steel coil, 24t")}
            className={inputClass}
          />
        </label>
      </div>

      <button
        type="button"
        className="mt-5 w-full rounded bg-accent px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-accent-deep"
      >
        {t("무료 견적 확인하기", "Get my free quote")}
      </button>
      <p className="mt-3 text-center text-xs text-ink-soft">
        {t("가입 없이 바로 확인할 수 있습니다", "No sign-up needed")}
      </p>
    </div>
  );
}

export default function Hero() {
  const t = useT();

  const trustItems = [
    t("항공 정시율 98.2%", "98.2% on-time flights"),
    t("주 14회 미주 항공 스케줄", "14 weekly US-bound flights"),
    t("미국 50개 주 내륙 배송", "Delivery across all 50 states"),
  ];

  return (
    <section className="relative">
      {/* 풀블리드 사진 — 좌측은 어둡게, 우측은 사진이 살아나는 그라데이션 */}
      <Image
        src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=2000&q=80"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/35"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-4 py-20 lg:min-h-[660px] lg:grid-cols-[1.1fr_auto] lg:gap-20 lg:px-8 lg:py-24">
        <div className="text-white">
          <h1 className="text-[40px] font-extrabold leading-[1.16] tracking-tight sm:text-[52px] lg:text-[56px]">
            {t("미국까지 항공으로,", "Air freight to the US,")}
            <br />
            {t("문 앞까지 한 번에", "door to door")}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75 sm:text-xl">
            {t(
              "주력 항공 네트워크와 미국 내 자체 배송망으로, 인천에서 미국 전역 문 앞까지 — 견적부터 통관, 정산까지 한 플랫폼에서 해결하세요.",
              "Our air network and in-house US delivery system carry your cargo from Incheon to any American doorstep — quote, customs, and settlement on one platform.",
            )}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="#contact"
              className="rounded bg-white px-7 py-3.5 text-base font-bold text-ink transition-opacity hover:opacity-90"
            >
              {t("무료로 시작하기", "Start for free")}
            </Link>
            <Link
              href="#platform"
              className="rounded border border-white/45 px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              {t("플랫폼 둘러보기", "Explore the platform")}
            </Link>
          </div>

          {/* 신뢰 지표 한 줄 */}
          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/20 pt-6">
            {trustItems.map((item) => (
              <li key={item} className="flex items-center gap-2 text-[15px] font-medium text-white/80">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0" aria-hidden="true">
                  <path d="M3 8.5l3 3 7-7.5" stroke="var(--mint)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <QuoteWidget />
      </div>
    </section>
  );
}
