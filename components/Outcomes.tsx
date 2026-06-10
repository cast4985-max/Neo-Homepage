"use client";

import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

export default function Outcomes() {
  const t = useT();

  const outcomes = [
    {
      industry: t("철강 · 금속", "Steel & Metals"),
      metric: t("서류 자동화", "Less paperwork"),
      description: t(
        "선적 서류 작성과 검토를 자동화해 건당 처리 시간을 줄입니다.",
        "Automate drafting and review of shipping documents to cut time per shipment.",
      ),
    },
    {
      industry: t("식품 · 농산물", "Food & Agriculture"),
      metric: t("바이어 발굴", "Faster matching"),
      description: t(
        "거래 이력 데이터를 바탕으로 검증된 미국·중국 바이어를 연결합니다.",
        "Get connected to vetted US and China buyers based on trade history data.",
      ),
    },
    {
      industry: t("화학 · 소재", "Chemicals & Materials"),
      metric: t("재고 최적화", "Smarter inventory"),
      description: t(
        "AI 수요 예측으로 원자재 매입 타이밍과 재고 수준을 관리합니다.",
        "Manage purchase timing and stock levels with AI demand forecasting.",
      ),
    },
    {
      industry: t("전자 · 부품", "Electronics & Components"),
      metric: t("납기 관리", "Reliable delivery"),
      description: t(
        "복합 운송 경로를 최적화하고 지연 징후를 미리 알립니다.",
        "Optimize multimodal routes and flag potential delays early.",
      ),
    },
  ];

  return (
    <section id="solutions" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-20 lg:px-8 lg:py-28">
        <p className="text-sm font-bold text-accent">{t("산업별 솔루션", "Industry solutions")}</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          {t("산업이 다르면, 답도 다릅니다", "Different industry, different answer")}
        </h2>

        <div className="mt-12 grid gap-x-8 gap-y-12 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((item, i) => (
            <Link key={item.industry} href="#contact" className="group">
              <p className="text-sm font-bold text-ink-soft">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-4 text-sm font-bold text-accent">{item.industry}</p>
              <h3 className="mt-1.5 text-xl font-extrabold tracking-tight">
                {item.metric}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {item.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-ink transition-colors group-hover:text-accent">
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
