"use client";

import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

function QuoteIllo() {
  return (
    <svg viewBox="0 0 96 96" className="h-24 w-24" aria-hidden="true">
      <rect x="14" y="22" width="68" height="52" rx="6" fill="#fff" stroke="#000" strokeWidth="2.5" />
      <path d="M14 38h68" stroke="#000" strokeWidth="2.5" />
      <rect x="24" y="48" width="28" height="6" rx="3" fill="#000" />
      <rect x="24" y="60" width="40" height="6" rx="3" fill="#d4d4d4" />
    </svg>
  );
}

function ShipIllo() {
  return (
    <svg viewBox="0 0 96 96" className="h-24 w-24" aria-hidden="true">
      <path d="M16 58h64l-8 18H24z" fill="#000" />
      <rect x="30" y="40" width="14" height="18" fill="#fff" stroke="#000" strokeWidth="2.5" />
      <rect x="46" y="32" width="14" height="26" fill="#fff" stroke="#000" strokeWidth="2.5" />
      <path d="M10 82c6 4 12 4 18 0s12-4 18 0 12 4 18 0 12-4 18 0" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function PartnerIllo() {
  return (
    <svg viewBox="0 0 96 96" className="h-24 w-24" aria-hidden="true">
      <circle cx="34" cy="34" r="11" fill="#fff" stroke="#000" strokeWidth="2.5" />
      <circle cx="64" cy="34" r="11" fill="#000" />
      <path d="M16 76c2-12 9-19 18-19s16 7 18 19" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M50 72c2-9 7-15 14-15s12 6 14 15" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIllo() {
  return (
    <svg viewBox="0 0 96 96" className="h-24 w-24" aria-hidden="true">
      <path d="M48 14l28 10v22c0 18-12 30-28 36-16-6-28-18-28-36V24z" fill="#fff" stroke="#000" strokeWidth="2.5" />
      <path d="M36 48l9 9 16-18" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Suggestions() {
  const t = useT();

  const cards = [
    {
      title: t("즉시 견적", "Instant quotes"),
      description: t(
        "품목과 목적지만 입력하면 운임·통관 비용을 바로 확인할 수 있습니다.",
        "Enter your item and destination to see freight and customs costs instantly.",
      ),
      illo: <QuoteIllo />,
    },
    {
      title: t("선적 추적", "Shipment tracking"),
      description: t(
        "한국–미국–중국 항로 위의 내 화물을 실시간으로 추적하세요.",
        "Track your cargo in real time across Korea–US–China routes.",
      ),
      illo: <ShipIllo />,
    },
    {
      title: t("파트너 매칭", "Partner matching"),
      description: t(
        "검증된 바이어와 공급처를 데이터 기반으로 연결해 드립니다.",
        "Get matched with verified buyers and suppliers, backed by data.",
      ),
      illo: <PartnerIllo />,
    },
    {
      title: t("안전 거래", "Secure trade"),
      description: t(
        "에스크로 결제와 신용 평가로 처음 거래도 안심할 수 있습니다.",
        "Escrow payments and credit checks keep even first deals safe.",
      ),
      illo: <ShieldIllo />,
    },
  ];

  return (
    <section id="platform" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-12 lg:px-8 lg:py-16">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {t(
            "Neo로 할 수 있는 다양한 것을 알아보세요",
            "Explore what you can do with Neo",
          )}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex items-start justify-between gap-2 rounded-xl bg-[#f6f6f6] p-5"
            >
              <div className="flex min-h-[180px] flex-col">
                <h3 className="text-base font-bold">{card.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {card.description}
                </p>
                <Link
                  href="#contact"
                  className="mt-4 inline-flex w-fit rounded-full bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-200"
                >
                  {t("자세히 보기", "Details")}
                </Link>
              </div>
              {card.illo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
