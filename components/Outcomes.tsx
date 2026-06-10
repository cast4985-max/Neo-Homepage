"use client";

import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

export default function Outcomes() {
  const t = useT();

  const outcomes = [
    {
      industry: t("철강 · 금속", "Steel & Metals"),
      metric: t("서류 자동화", "Less paperwork"),
      label: t("선적 서류, 시스템이 처리합니다", "Shipping documents, handled by the system"),
      description: t(
        "선적 서류 작성과 검토를 자동화해 건당 처리 시간을 줄입니다.",
        "Automate drafting and review of shipping documents to cut time per shipment.",
      ),
    },
    {
      industry: t("식품 · 농산물", "Food & Agriculture"),
      metric: t("바이어 발굴", "Faster matching"),
      label: t("미국·중국 바이어를 더 빠르게", "Reach US and China buyers sooner"),
      description: t(
        "거래 이력 데이터를 바탕으로 검증된 바이어를 연결합니다.",
        "Get connected to vetted buyers based on trade history data.",
      ),
    },
    {
      industry: t("화학 · 소재", "Chemicals & Materials"),
      metric: t("재고 최적화", "Smarter inventory"),
      label: t("매입 타이밍을 데이터로", "Time your purchases with data"),
      description: t(
        "AI 수요 예측으로 원자재 매입 타이밍과 재고 수준을 관리합니다.",
        "Manage purchase timing and stock levels with AI demand forecasting.",
      ),
    },
    {
      industry: t("전자 · 부품", "Electronics & Components"),
      metric: t("납기 관리", "Reliable delivery"),
      label: t("지연 리스크를 미리 줄입니다", "Reduce delay risk before it happens"),
      description: t(
        "복합 운송 경로를 최적화하고 이상 징후를 조기에 알립니다.",
        "Optimize multimodal routes and flag potential delays early.",
      ),
    },
  ];

  return (
    <section id="solutions" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-16 lg:px-8 lg:py-24">
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
          {t("산업별 활용 방법", "How industries use Neo")}
        </h2>
        <p className="mt-4 max-w-xl text-lg text-gray-600">
          {t(
            "철강부터 식품, 화학, 전자까지. 산업마다 다른 무역의 문제를 데이터로 풀어냅니다.",
            "From steel to food, chemicals, and electronics — we solve each industry's trade problems with data.",
          )}
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {outcomes.map((item) => (
            <div key={item.industry} className="rounded-xl bg-[#f6f6f6] p-8">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-500">
                {item.industry}
              </p>
              <p className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{item.metric}</p>
              <p className="mt-2 text-lg font-bold">{item.label}</p>
              <p className="mt-3 leading-relaxed text-gray-600">{item.description}</p>
              <Link
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline"
              >
                {t("솔루션 보기", "View solution")}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
