"use client";

import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

/* 단색 라인 아이콘 — 가늘고 절제된 블루 */
const icons = [
  <svg key="quote" viewBox="0 0 32 32" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
    <rect x="6" y="4" width="20" height="24" rx="2" />
    <path d="M11 11h10M11 16h10M11 21h6" />
  </svg>,
  <svg key="track" viewBox="0 0 32 32" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
    <circle cx="7" cy="25" r="3" />
    <circle cx="25" cy="7" r="3" />
    <path d="M9.5 22.5C14 18 13 14 16 11s6-2 6.5-1.5" strokeDasharray="3 3" />
  </svg>,
  <svg key="match" viewBox="0 0 32 32" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
    <circle cx="11" cy="11" r="4" />
    <circle cx="22" cy="12" r="3.5" />
    <path d="M4 26c1-5.5 3.8-8 7-8s6 2.5 7 8M18.5 22c.8-2.8 2-4.5 3.5-4.5 2.4 0 4.4 2 5.5 7" />
  </svg>,
  <svg key="shield" viewBox="0 0 32 32" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
    <path d="M16 4l11 4v7c0 7-4.5 11.5-11 13-6.5-1.5-11-6-11-13V8z" />
    <path d="M11 16l3.5 3.5L21 13" />
  </svg>,
];

export default function Suggestions() {
  const t = useT();

  const cards = [
    {
      title: t("즉시 견적", "Instant quotes"),
      description: t(
        "품목과 목적지만 입력하면 운임·통관 비용을 바로 확인할 수 있습니다.",
        "Enter your item and destination to see freight and customs costs instantly.",
      ),
    },
    {
      title: t("선적 추적", "Shipment tracking"),
      description: t(
        "인천 출발부터 미국 내 라스트마일 배송까지 실시간으로 추적합니다.",
        "Track in real time, from Incheon departure to last-mile delivery in the US.",
      ),
    },
    {
      title: t("파트너 매칭", "Partner matching"),
      description: t(
        "거래 이력 데이터로 검증된 바이어와 공급처를 연결해 드립니다.",
        "Get matched with buyers and suppliers vetted on real trade history.",
      ),
    },
    {
      title: t("안전 거래", "Secure trade"),
      description: t(
        "에스크로 결제와 신용 평가로 처음 거래도 안심할 수 있습니다.",
        "Escrow payments and credit checks keep even first deals safe.",
      ),
    },
  ];

  return (
    <section id="platform" className="bg-paper-warm">
      <div className="mx-auto max-w-[1280px] px-4 py-20 lg:px-8 lg:py-28">
        <p className="text-sm font-bold text-accent">{t("플랫폼", "Platform")}</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          {t("플랫폼이 대신하는 일", "What the platform handles for you")}
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <Link
              key={card.title}
              href="#contact"
              className="group rounded-lg border border-line bg-white p-7 transition-colors hover:border-accent"
            >
              {icons[i]}
              <h3 className="mt-6 text-lg font-extrabold">{card.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
                {card.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-accent">
                {t("자세히 보기", "Learn more")}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
