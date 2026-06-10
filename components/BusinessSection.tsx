"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

export default function BusinessSection() {
  const t = useT();

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
      title: t("물류비 20% 절감을 위한 운임 관리 전략", "Freight management strategies to cut logistics costs 20%"),
    },
    {
      tag: t("체크리스트", "Checklist"),
      title: t("수출 기업을 위한 ESG 물류 전환 체크리스트", "The ESG logistics transition checklist for exporters"),
    },
    {
      tag: t("리포트", "Report"),
      title: t("2026 글로벌 공급망 리스크 전망", "2026 global supply chain risk outlook"),
    },
  ];

  return (
    <section id="business" className="bg-paper-warm">
      <div className="mx-auto max-w-[1280px] px-4 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-bold text-accent">{t("기업용", "For business")}</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-snug tracking-tight sm:text-4xl">
              {t("우리 회사의 물류를", "Your company's logistics,")}
              <br />
              {t("하나의 대시보드에서", "on a single dashboard")}
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
              {t(
                "임직원 권한 관리, 비용 통제, 정산, 탄소 리포트까지. 기업 물류팀에 필요한 모든 관리 기능을 제공합니다.",
                "Employee permissions, cost controls, settlement, and carbon reports — every management tool your logistics team needs.",
              )}
            </p>

            <div className="mt-9 flex flex-col divide-y divide-line border-y border-line">
              {features.map((feature) => (
                <div key={feature.title} className="py-5">
                  <h3 className="text-lg font-extrabold">{feature.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="rounded bg-accent px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-accent-deep"
              >
                {t("기업용 시작하기", "Get started for business")}
              </Link>
              <Link href="#contact" className="text-base font-bold text-accent">
                {t("영업팀에 문의", "Contact sales")}
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="relative aspect-[16/11] overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
                alt={t("물류 운영을 함께 검토하는 기업 팀", "A corporate team reviewing logistics operations together")}
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="rounded-lg border border-line bg-white p-7">
              <p className="text-sm font-bold text-ink-soft">
                {t("물류팀을 위한 리소스", "Resources for logistics teams")}
              </p>
              <div className="mt-3 flex flex-col divide-y divide-line">
                {resources.map((r) => (
                  <Link key={r.title} href="#contact" className="group flex items-center gap-4 py-3.5">
                    <span className="w-20 shrink-0 text-xs font-bold text-accent">{r.tag}</span>
                    <span className="flex-1 text-[15px] font-bold leading-snug group-hover:text-accent">
                      {r.title}
                    </span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-ink-soft group-hover:text-accent" aria-hidden="true">
                      <path d="M4 12h16M14 6l6 6-6 6" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
