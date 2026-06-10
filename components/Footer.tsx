"use client";

import Link from "next/link";
import { useLang, useT } from "@/components/LanguageProvider";

function SocialIcons() {
  return (
    <div className="flex gap-8">
      <Link href="#" aria-label="LinkedIn" className="transition-opacity hover:opacity-70">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8h4.6v15H.2V8zm7.6 0h4.4v2.05h.06c.61-1.16 2.11-2.39 4.35-2.39 4.65 0 5.51 3.06 5.51 7.04V23h-4.6v-7.3c0-1.74-.03-3.98-2.42-3.98-2.43 0-2.8 1.9-2.8 3.86V23H7.8V8z" />
        </svg>
      </Link>
      <Link href="#" aria-label="YouTube" className="transition-opacity hover:opacity-70">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z" />
        </svg>
      </Link>
      <Link href="#" aria-label="Instagram" className="transition-opacity hover:opacity-70">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4.5" />
          <circle cx="17.8" cy="6.2" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      </Link>
      <Link href="#" aria-label="X" className="transition-opacity hover:opacity-70">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.9 1.2h3.7l-8.1 9.3L24 22.8h-7.5l-5.9-7.7-6.7 7.7H.2l8.6-9.9L0 1.2h7.7l5.3 7 6-7zm-1.3 19.4h2L6.6 3.3h-2.2l13.2 17.3z" />
        </svg>
      </Link>
    </div>
  );
}

export default function Footer() {
  const { lang, setLang } = useLang();
  const t = useT();

  const columns = [
    {
      title: t("기업 정보", "Company"),
      links: [
        t("회사 소개", "About us"),
        t("뉴스룸", "Newsroom"),
        t("투자자", "Investors"),
        t("블로그", "Blog"),
        t("채용 정보", "Careers"),
        "Neo One",
      ],
    },
    {
      title: t("제품", "Products"),
      links: [
        t("즉시 견적", "Instant quotes"),
        t("선적 추적", "Shipment tracking"),
        t("파트너 매칭", "Partner matching"),
        t("AI 포캐스팅", "AI forecasting"),
        t("무역 금융", "Trade finance"),
      ],
    },
    {
      title: t("세계 시민 의식", "Global citizenship"),
      links: [t("안전", "Safety"), t("지속 가능성", "Sustainability")],
    },
    {
      title: t("글로벌 거점", "Global network"),
      links: [
        t("지역 사무소", "Regional offices"),
        t("물류 허브", "Logistics hubs"),
        t("취항 항로", "Shipping routes"),
      ],
    },
  ];

  return (
    <footer id="about" className="bg-black pb-24 text-white">
      <div className="mx-auto max-w-[1280px] px-4 pt-16 lg:px-8">
        <Link href="/" className="text-[26px] font-bold tracking-tight">
          Neo
        </Link>
        <p className="mt-8">
          <Link href="#contact" className="text-base text-white transition-colors hover:text-gray-300">
            {t("고객지원 센터 방문", "Visit our support center")}
          </Link>
        </p>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-bold">{column.title}</h3>
              <ul className="mt-6 flex flex-col gap-4">
                {column.links.map((label) => (
                  <li key={label}>
                    <Link
                      href="#"
                      className="text-sm text-gray-200 transition-colors hover:text-gray-400"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <SocialIcons />
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <button
              type="button"
              onClick={() => setLang(lang === "en" ? "ko" : "en")}
              className="flex items-center gap-2 transition-colors hover:text-gray-300"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <circle cx="8" cy="8" r="6.5" />
                <path d="M1.5 8h13M8 1.5c-4.5 4-4.5 9 0 13M8 1.5c4.5 4 4.5 9 0 13" />
              </svg>
              {lang === "en" ? "English" : "한국어"}
            </button>
            <button type="button" className="flex items-center gap-2 transition-colors hover:text-gray-300">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                <path d="M7 0a5 5 0 0 1 5 5c0 3.75-5 9-5 9S2 8.75 2 5a5 5 0 0 1 5-5zm0 6.5A1.5 1.5 0 1 0 7 3.5a1.5 1.5 0 0 0 0 3z" />
              </svg>
              {t("서울", "Seoul")}
            </button>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 text-xs text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Neo Trading Network Inc.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-white">
              {t("개인정보처리방침", "Privacy")}
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              {t("접근성", "Accessibility")}
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              {t("이용약관", "Terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
