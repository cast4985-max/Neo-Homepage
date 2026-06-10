"use client";

import Link from "next/link";
import { useLang, useT } from "@/components/LanguageProvider";

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
        t("채용 정보", "Careers"),
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
      title: t("리소스", "Resources"),
      links: [
        t("도입 가이드", "Onboarding guide"),
        t("마켓 리포트", "Market reports"),
        t("개발자 API", "Developer API"),
        "FAQ",
      ],
    },
    {
      title: t("글로벌 거점", "Network"),
      links: [
        t("서울 본사", "Seoul HQ"),
        t("LA 허브", "Los Angeles hub"),
        t("상하이 허브", "Shanghai hub"),
      ],
    },
  ];

  return (
    <footer id="about" className="border-t border-line-dark bg-[#070d24] pb-24 text-white lg:pb-12">
      <div className="mx-auto max-w-[1280px] px-4 pt-14 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded bg-white text-[13px] font-extrabold leading-none text-navy">
            N
          </span>
          <span className="text-lg font-extrabold tracking-tight">Neo Trading Network</span>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-extrabold">{column.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((label) => (
                  <li key={label}>
                    <Link href="#" className="text-sm text-white/55 transition-colors hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs leading-relaxed text-white/40">
            © 2026 Neo Trading Network Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <button
              type="button"
              onClick={() => setLang(lang === "en" ? "ko" : "en")}
              className="text-white/55 transition-colors hover:text-white"
            >
              {lang === "en" ? "한국어" : "English"}
            </button>
            <Link href="#" className="text-white/55 transition-colors hover:text-white">
              {t("이용약관", "Terms")}
            </Link>
            <Link href="#" className="font-bold text-white/75 transition-colors hover:text-white">
              {t("개인정보처리방침", "Privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
