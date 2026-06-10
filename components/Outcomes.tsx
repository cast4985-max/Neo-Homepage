"use client";

import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

export default function Outcomes() {
  const t = useT();

  const outcomes = [
    {
      industry: t("철강 · 금속", "Steel & Metals"),
      metric: "47%",
      label: t("서류 처리 시간 단축", "less time on documents"),
      description: t(
        "선적 서류 자동화로 건당 처리 시간을 절반 가까이 줄였습니다.",
        "Automated shipping documents cut processing time per shipment nearly in half.",
      ),
    },
    {
      industry: t("식품 · 농산물", "Food & Agriculture"),
      metric: t("3주", "3 wks"),
      label: t("신규 바이어 발굴 기간", "to find new buyers"),
      description: t(
        "평균 6개월 걸리던 미국·중국 바이어 발굴을 3주로 단축했습니다.",
        "Finding US and China buyers used to take 6 months. Now it takes 3 weeks.",
      ),
    },
    {
      industry: t("화학 · 소재", "Chemicals & Materials"),
      metric: "19%",
      label: t("재고 비용 절감", "lower inventory costs"),
      description: t(
        "AI 수요 예측으로 원자재 매입 타이밍을 최적화했습니다.",
        "AI demand forecasting optimized raw-material purchase timing.",
      ),
    },
    {
      industry: t("전자 · 부품", "Electronics & Components"),
      metric: "99.8%",
      label: t("정시 선적률", "on-time shipping rate"),
      description: t(
        "복합 운송 경로 최적화로 납기 지연을 사실상 없앴습니다.",
        "Multimodal route optimization virtually eliminated delivery delays.",
      ),
    },
  ];

  return (
    <section id="solutions" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-16 lg:px-8 lg:py-24">
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
          {t("산업별로 증명된 성과", "Proven results across industries")}
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
              <p className="mt-4 text-5xl font-bold tracking-tight">{item.metric}</p>
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
