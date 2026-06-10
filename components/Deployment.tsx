"use client";

import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

const icons = [
  (
    <svg key="onprem" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="5" width="22" height="9" rx="2" />
      <rect x="5" y="18" width="22" height="9" rx="2" />
      <circle cx="10" cy="9.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="10" cy="22.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  ),
  (
    <svg key="cloud" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 24a6 6 0 0 1-1-11.9A8 8 0 0 1 23.6 14 5.5 5.5 0 0 1 23 24z" />
      <path d="M16 28v-8M13 23l3 3 3-3" />
    </svg>
  ),
];

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
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-16 lg:px-8 lg:py-24">
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
          {t("비즈니스 환경에 맞는", "Choose the deployment")}
          <br />
          {t("도입 방식을 선택하세요", "that fits your business")}
        </h2>
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {options.map((option, i) => (
            <div key={option.title} className="rounded-lg border border-gray-200 p-8 lg:p-10">
              <span className="inline-flex text-black [&>svg]:h-10 [&>svg]:w-10">
                {icons[i]}
              </span>
              <h3 className="mt-5 text-2xl font-bold">{option.title}</h3>
              <p className="mt-3 max-w-md text-lg leading-relaxed text-gray-600">
                {option.description}
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <circle cx="9" cy="9" r="9" fill="#000" />
                      <path d="M5.5 9l2.5 2.5L13 6.5" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-base font-semibold underline-offset-4 hover:underline"
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
