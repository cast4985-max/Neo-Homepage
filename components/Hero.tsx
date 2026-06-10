"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

const categoryIcons = [
  (
    <svg key="quote" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="4" width="20" height="24" rx="2" />
      <path d="M11 10h10M11 15h10M11 20h6" />
    </svg>
  ),
  (
    <svg key="ocean" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20h24l-3 6H7z" />
      <path d="M10 20v-6h12v6M14 14V9h4v5" />
    </svg>
  ),
  (
    <svg key="air" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 18l24-8-6 10 4 6-7-2-4 4-2-7z" />
    </svg>
  ),
  (
    <svg key="ground" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="10" width="16" height="11" rx="1" />
      <path d="M19 14h6l3 4v3h-9z" />
      <circle cx="9" cy="24" r="2.5" />
      <circle cx="23" cy="24" r="2.5" />
    </svg>
  ),
  (
    <svg key="customs" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4l11 4v7c0 7-4.5 11.5-11 13-6.5-1.5-11-6-11-13V8z" />
      <path d="M11 16l3.5 3.5L21 13" />
    </svg>
  ),
  (
    <svg key="warehouse" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 13l12-7 12 7v15H4z" />
      <path d="M10 28v-9h12v9M10 24h12" />
    </svg>
  ),
  (
    <svg key="finance" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="9" width="24" height="16" rx="2" />
      <path d="M4 14h24" />
      <path d="M9 20h6" />
    </svg>
  ),
  (
    <svg key="insurance" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 16a10 10 0 0 1 20 0v9H6z" />
      <path d="M13 16a3 3 0 0 1 6 0" />
      <path d="M16 6V3" />
    </svg>
  ),
  (
    <svg key="partner" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="4" />
      <circle cx="22" cy="12" r="3.5" />
      <path d="M4 26c1-5.5 3.8-8 7-8s6 2.5 7 8M18.5 22c.8-2.8 2-4.5 3.5-4.5 2.4 0 4.4 2 5.5 7" />
    </svg>
  ),
  (
    <svg key="data" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 27V14M13 27V5M21 27v-9M28 27V10" />
    </svg>
  ),
];

export default function Hero() {
  const t = useT();

  const categoryLabels: [string, string][] = [
    ["즉시 견적", "Instant quote"],
    ["해상 운송", "Ocean freight"],
    ["항공 운송", "Air freight"],
    ["육상 운송", "Ground freight"],
    ["통관", "Customs"],
    ["창고 보관", "Warehousing"],
    ["무역 금융", "Trade finance"],
    ["무역 보험", "Cargo insurance"],
    ["파트너 매칭", "Partner matching"],
    ["마켓 데이터", "Market data"],
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-4 pb-6 pt-10 lg:px-8 lg:pt-14">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            {/* 위치 안내 */}
            <p className="flex items-center gap-1.5 text-sm">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                <path d="M7 0a5 5 0 0 1 5 5c0 3.75-5 9-5 9S2 8.75 2 5a5 5 0 0 1 5-5zm0 6.5A1.5 1.5 0 1 0 7 3.5a1.5 1.5 0 0 0 0 3z" />
              </svg>
              <span className="font-bold">{t("서울, KR", "Seoul, KR")}</span>
              <Link href="#contact" className="ml-1 text-gray-600 underline underline-offset-2 hover:text-black">
                {t("지역 변경", "Change region")}
              </Link>
            </p>

            <h1 className="mt-4 text-[40px] font-bold leading-[1.12] tracking-tight sm:text-[52px]">
              {t("한국·미국·중국을 잇는", "The platform connecting")}
              <br />
              {t("트레이딩 플랫폼", "Korea, the US & China")}
            </h1>

            {/* 견적 모드 선택 */}
            <button
              type="button"
              className="mt-8 flex items-center gap-2 rounded-full bg-[#f3f3f3] px-4 py-2.5 text-sm font-medium transition-colors hover:bg-gray-200"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <circle cx="8" cy="8" r="6.5" />
                <path d="M8 4.5V8l2.5 1.5" strokeLinecap="round" />
              </svg>
              {t("즉시 견적", "Quote now")}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2.5 4.5L6 8l3.5-3.5" />
              </svg>
            </button>

            {/* 견적 요청 폼 */}
            <div className="mt-4 max-w-md">
              <div className="relative flex flex-col gap-2">
                <div className="absolute bottom-[33px] left-[23px] top-[33px] w-[1.5px] bg-black" />
                <label className="flex items-center gap-3 rounded-lg bg-[#f3f3f3] px-4 py-3 focus-within:ring-2 focus-within:ring-black">
                  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                    <circle cx="8" cy="8" r="4" fill="#000" />
                  </svg>
                  <input
                    type="text"
                    placeholder={t("수출 품목", "What are you exporting?")}
                    className="w-full bg-transparent text-base outline-none placeholder:text-gray-500"
                  />
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" className="shrink-0 text-gray-700" aria-hidden="true">
                    <path d="M1 9l16-7-7 16-2-7z" />
                  </svg>
                </label>
                <label className="flex items-center gap-3 rounded-lg bg-[#f3f3f3] px-4 py-3 focus-within:ring-2 focus-within:ring-black">
                  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                    <rect x="4" y="4" width="8" height="8" fill="#000" />
                  </svg>
                  <input
                    type="text"
                    placeholder={t("목적지 국가", "Destination country")}
                    className="w-full bg-transparent text-base outline-none placeholder:text-gray-500"
                  />
                </label>
              </div>

              <div className="mt-6 flex items-center gap-5">
                <Link
                  href="#contact"
                  className="rounded-lg bg-black px-7 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-80"
                >
                  {t("견적 보기", "See quotes")}
                </Link>
                <Link
                  href="#contact"
                  className="text-base font-medium underline underline-offset-4 hover:text-gray-600"
                >
                  {t(
                    "로그인하여 최근 견적 확인하기",
                    "Log in to see your recent quotes",
                  )}
                </Link>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-[5/4]">
              <Image
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80"
                alt={t(
                  "컨테이너 항만에서 크레인이 화물을 선적하는 모습",
                  "Cranes loading cargo at a container port",
                )}
                fill
                priority
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
              {/* 이미지 하단 오버레이 바 */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-black/55 px-5 py-3.5 backdrop-blur-sm">
                <p className="text-sm font-medium text-white sm:text-base">
                  {t("수출할 준비가 되셨나요?", "Ready to export?")}
                </p>
                <Link
                  href="#contact"
                  className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-opacity hover:opacity-80"
                >
                  {t("미리 상담하세요", "Talk to us first")}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 서비스 카테고리 아이콘 행 */}
        <div className="mt-14 overflow-x-auto border-t border-gray-100 pt-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="flex min-w-max items-start justify-between gap-6 lg:gap-8">
            {categoryLabels.map(([ko, en], i) => (
              <li key={en}>
                <Link href="#platform" className="group flex w-[80px] flex-col items-center gap-2">
                  <span className="flex h-12 w-12 items-center justify-center text-black transition-transform group-hover:-translate-y-0.5 [&>svg]:h-8 [&>svg]:w-8">
                    {categoryIcons[i]}
                  </span>
                  <span className="text-center text-xs font-medium text-gray-700 group-hover:text-black">
                    {t(ko, en)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
