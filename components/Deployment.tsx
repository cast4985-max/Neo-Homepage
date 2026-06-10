"use client";

import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

export default function Deployment() {
  const t = useT();

  const options = [
    {
      title: t("온프레미스 · 엣지", "On-premise & Edge"),
      description: t(
        "인터넷 연결 없이 현장 장비에서 직접 AI가 동작합니다. 보안이 중요한 항만·보세창고 환경에 적합합니다.",
        "AI runs directly on field equipment with no internet connection — built for security-sensitive ports and bonded warehouses.",
      ),
      features: [
        t("외부망 차단 환경 지원", "Works in air-gapped environments"),
        t("현장 장비 직접 설치", "Installs on on-site equipment"),
        t("데이터 외부 반출 없음", "No data leaves your site"),
      ],
    },
    {
      title: t("클라우드 · API", "Cloud & API"),
      description: t(
        "설치 없이 API 연동만으로 시작합니다. 물동량에 따라 유연하게 확장할 수 있어 빠른 도입에 적합합니다.",
        "Start with a simple API integration — nothing to install. Scales flexibly with your volume for fast rollouts.",
      ),
      features: [
        t("수 일 내 연동 완료", "Integrated in days"),
        t("물동량 기반 과금", "Volume-based pricing"),
        t("기존 WMS·ERP 연동", "Connects to your WMS & ERP"),
      ],
    },
  ];

  return (
    <section className="bg-white pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          {t("도입 방식을 선택하세요", "Choose how to deploy")}
        </h2>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {options.map((option) => (
            <div key={option.title} className="rounded-lg border border-line p-8 lg:p-10">
              <h3 className="text-2xl font-extrabold">{option.title}</h3>
              <p className="mt-3 max-w-md text-lg leading-relaxed text-ink-soft">
                {option.description}
              </p>
              <ul className="mt-7 flex flex-col gap-3 border-t border-line pt-7">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 font-medium">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0" aria-hidden="true">
                      <path d="M3.5 9.5l3.5 3.5 7.5-8" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className="mt-8 inline-flex items-center gap-1.5 text-base font-bold text-accent"
              >
                {t("도입 상담하기", "Talk about deployment")}
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
