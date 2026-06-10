"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

const featureIcons = [
  (
    <svg key="cost" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="12" />
      <path d="M16 10v12M12 13.5c0-1.4 1.8-2.5 4-2.5s4 1.1 4 2.5-1.8 2.5-4 2.5-4 1.1-4 2.5 1.8 2.5 4 2.5 4-1.1 4-2.5" />
    </svg>
  ),
  (
    <svg key="report" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="4" width="20" height="24" rx="2" />
      <path d="M11 11h10M11 16h10M11 21h6" />
    </svg>
  ),
  (
    <svg key="esg" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M26 6C14 6 7 13 6.5 25.5 19 25 26 18 26 6z" />
      <path d="M6.5 25.5C10 18 16 12 22 9.5" />
    </svg>
  ),
];

export default function BusinessSection() {
  const t = useT();

  const stats = [
    { value: "2,800+", label: t("Neo를 사용하는 기업", "companies run on Neo") },
    {
      value: t("한·미·중", "3 countries"),
      label: t("직항 물류 네트워크", "Korea–US–China direct network"),
    },
    {
      value: t("4명 중 3명", "3 out of 4"),
      label: t("동료에게 추천하는 고객", "customers recommend us"),
    },
  ];

  const features = [
    {
      title: t("비용·권한 통제", "Cost & permission controls"),
      description: t(
        "부서별 예산 한도와 결재 권한을 설정하고, 모든 선적 비용을 실시간으로 통제하세요.",
        "Set budget limits and approval rights by team, and control every shipping cost in real time.",
      ),
    },
    {
      title: t("통합 리포트 · 정산", "Unified reporting & billing"),
      description: t(
        "흩어진 운임 청구서를 하나의 월간 명세로 통합하고, 회계 시스템과 자동 연동합니다.",
        "Consolidate scattered freight invoices into one monthly statement, synced to your accounting system.",
      ),
    },
    {
      title: t("지속가능성 리포트", "Sustainability reporting"),
      description: t(
        "운송 수단별 탄소 배출량을 자동 산출해 ESG 공시에 바로 쓸 수 있는 리포트를 제공합니다.",
        "Carbon emissions are calculated per transport mode automatically — reports ready for ESG disclosure.",
      ),
    },
  ];

  const resources = [
    {
      tag: t("가이드", "Guide"),
      title: t(
        "물류비 20% 절감을 위한 운임 관리 전략",
        "Freight management strategies to cut logistics costs 20%",
      ),
    },
    {
      tag: t("체크리스트", "Checklist"),
      title: t(
        "수출 기업을 위한 ESG 물류 전환 체크리스트",
        "The ESG logistics transition checklist for exporters",
      ),
    },
    {
      tag: t("리포트", "Report"),
      title: t(
        "2026 글로벌 공급망 리스크 전망",
        "2026 global supply chain risk outlook",
      ),
    },
  ];

  return (
    <section id="business" className="bg-[#f6f6f6]">
      <div className="mx-auto max-w-[1280px] px-4 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-gray-500">
          Neo for Business
        </p>

        <div className="mt-4 grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
              {t("우리 회사의 물류를", "Your company's logistics,")}
              <br />
              {t("하나의 대시보드에서", "on a single dashboard")}
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-gray-600">
              {t(
                "임직원 권한 관리, 비용 통제, 정산, 탄소 리포트까지. 기업 물류팀에 필요한 모든 관리 기능을 제공합니다.",
                "Employee permissions, cost controls, settlement, and carbon reports — every management tool your logistics team needs.",
              )}
            </p>
            <div className="mt-8 flex items-center gap-5">
              <Link
                href="#contact"
                className="rounded-lg bg-black px-7 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-80"
              >
                {t("기업용 시작하기", "Get started for business")}
              </Link>
              <Link
                href="#contact"
                className="text-base font-medium underline underline-offset-4 hover:text-gray-600"
              >
                {t("영업팀에 문의", "Contact sales")}
              </Link>
            </div>
          </div>
          <div className="relative aspect-[16/11] overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
              alt={t(
                "물류 리포트를 검토하는 기업 물류팀",
                "A corporate logistics team reviewing reports",
              )}
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* 기업 규모 통계 */}
        <div className="mt-16 grid gap-8 border-t border-gray-200 pt-10 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold tracking-tight">{stat.value}</p>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* 기능 카드 */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {features.map((feature, i) => (
            <div key={feature.title} className="rounded-lg bg-white p-8">
              <span className="inline-flex text-black [&>svg]:h-9 [&>svg]:w-9">
                {featureIcons[i]}
              </span>
              <h3 className="mt-5 text-xl font-bold">{feature.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* 리소스 가이드 */}
        <div className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h3 className="text-2xl font-bold tracking-tight">
              {t("물류팀을 위한 리소스", "Resources for logistics teams")}
            </h3>
            <Link
              href="#insights"
              className="inline-flex items-center gap-2 text-base font-semibold underline-offset-4 hover:underline"
            >
              {t("전체 보기", "See all")}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href="#contact"
                className="group flex items-start justify-between gap-4 rounded-lg bg-white p-7 transition-shadow hover:shadow-md"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    {resource.tag}
                  </span>
                  <h4 className="mt-3 text-lg font-bold leading-snug group-hover:underline group-hover:underline-offset-4">
                    {resource.title}
                  </h4>
                </div>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0" aria-hidden="true">
                  <path d="M12 4v12M6 11l6 6 6-6M5 21h14" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
