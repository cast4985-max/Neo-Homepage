"use client";

import { useT } from "@/components/LanguageProvider";

const icons = [
  (
    <svg key="process" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 27V14M13 27V5M21 27v-9M28 27V10" />
    </svg>
  ),
  (
    <svg key="automation" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="12" width="16" height="14" rx="2" />
      <circle cx="13" cy="18" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="19" cy="18" r="1.5" fill="currentColor" stroke="none" />
      <path d="M13 22h6M16 12V7M16 7h6" />
      <circle cx="24" cy="7" r="2" />
    </svg>
  ),
  (
    <svg key="recognition" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10V6a2 2 0 0 1 2-2h4M22 4h4a2 2 0 0 1 2 2v4M28 22v4a2 2 0 0 1-2 2h-4M10 28H6a2 2 0 0 1-2-2v-4" />
      <rect x="11" y="11" width="10" height="10" rx="1.5" />
    </svg>
  ),
  (
    <svg key="layout" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="24" height="24" rx="2" />
      <path d="M4 14h10v14M14 4v10M28 14H14" />
    </svg>
  ),
  (
    <svg key="route" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7" cy="25" r="3" />
      <circle cx="25" cy="7" r="3" />
      <path d="M9.5 22.5C14 18 13 14 16 11s6-2 6.5-1.5" strokeDasharray="3 3" />
    </svg>
  ),
  (
    <svg key="monitor" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20h24l-3 6H7z" />
      <path d="M10 20v-6h12v6" />
      <circle cx="16" cy="9" r="4" />
      <path d="M16 7.5V9l1 1" />
    </svg>
  ),
];

export default function Capabilities() {
  const t = useT();

  const capabilities = [
    {
      title: t("공정 최적화", "Process optimization"),
      description: t(
        "입고부터 출고까지 작업 데이터를 분석해 병목 구간을 찾아내고 처리 순서를 재설계합니다.",
        "Analyze workflow data from inbound to outbound to find bottlenecks and redesign processing order.",
      ),
    },
    {
      title: t("차세대 자동화", "Next-gen automation"),
      description: t(
        "로봇 피킹·자동 분류기와 연동되는 비전 AI로 사람 손을 거치던 반복 작업을 대체합니다.",
        "Vision AI tied into robotic picking and auto-sorters replaces repetitive manual work.",
      ),
    },
    {
      title: t("실시간 상품 인식", "Real-time item recognition"),
      description: t(
        "컨베이어 위를 지나는 화물의 품목·크기·상태를 카메라가 즉시 판별합니다.",
        "Cameras instantly identify the item, size, and condition of cargo moving down the conveyor.",
      ),
    },
    {
      title: t("창고 레이아웃 최적화", "Warehouse layout optimization"),
      description: t(
        "출고 빈도와 동선 데이터를 기반으로 보관 위치를 재배치해 피킹 거리를 줄입니다.",
        "Re-slot storage based on picking frequency and travel data to cut picking distance.",
      ),
    },
    {
      title: t("운송 경로 계획", "Route planning"),
      description: t(
        "교통·기상·항만 혼잡도를 반영해 가장 빠르고 저렴한 복합 운송 경로를 제안합니다.",
        "Get the fastest, cheapest multimodal route, factoring in traffic, weather, and port congestion.",
      ),
    },
    {
      title: t("선적 모니터링", "Shipment monitoring"),
      description: t(
        "선적 이후에도 화물의 위치·온도·충격 데이터를 추적해 이상 징후를 즉시 알립니다.",
        "After shipping, track location, temperature, and shock data — and get alerted to anomalies instantly.",
      ),
    },
  ];

  return (
    <section className="bg-[#f6f6f6]">
      <div className="mx-auto max-w-[1280px] px-4 py-16 lg:px-8 lg:py-24">
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
          {t("물류의 모든 단계를 위한", "Six core capabilities for")}
          <br />
          {t("6가지 핵심 기능", "every stage of logistics")}
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <div key={cap.title} className="rounded-lg bg-white p-8">
              <span className="inline-flex text-black [&>svg]:h-9 [&>svg]:w-9">
                {icons[i]}
              </span>
              <h3 className="mt-5 text-xl font-bold">{cap.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
