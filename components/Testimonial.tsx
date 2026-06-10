"use client";

import { useT } from "@/components/LanguageProvider";

export default function Testimonial() {
  const t = useT();

  const testimonials = [
    {
      quote: t(
        "이메일과 엑셀로 관리하던 수출 업무를 플랫폼으로 옮긴 뒤, 선적 한 건당 들어가던 관리 시간이 눈에 띄게 줄었습니다.",
        "After moving our export workflow off email and spreadsheets, the admin time per shipment dropped noticeably.",
      ),
      name: t("해외영업 총괄", "Head of Overseas Sales"),
      role: t("철강 수출 기업", "Steel exporter"),
    },
    {
      quote: t(
        "미국 신규 바이어 발굴이 늘 막막했는데, 파트너 네트워크를 통해 처음으로 데이터를 보고 거래처를 골랐습니다.",
        "Finding new US buyers always felt like guesswork. Through the partner network, we chose a counterparty based on data for the first time.",
      ),
      name: t("대표", "CEO"),
      role: t("식품 제조 기업", "Food manufacturer"),
    },
    {
      quote: t(
        "AI 수요 예측 덕분에 원자재 매입 타이밍을 감이 아니라 데이터로 결정하게 됐습니다.",
        "With AI demand forecasting, we now time raw-material purchases with data instead of gut feel.",
      ),
      name: t("구매총괄 이사", "Director of Procurement"),
      role: t("화학 소재 기업", "Chemical materials company"),
    },
  ];

  return (
    <section id="customers" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-16 lg:px-8 lg:py-24">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
          {t("고객이 말하는", "What customers say about")}
          <br />
          Neo Trading Network
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-2xl border border-gray-200 p-8"
            >
              <svg width="32" height="24" viewBox="0 0 32 24" fill="currentColor" aria-hidden="true">
                <path d="M0 24V14.4C0 6.4 4.8 1.2 12.4 0l1.4 3.6C9 5 6.8 7.6 6.6 10.8H13V24H0zm19 0V14.4C19 6.4 23.8 1.2 31.4 0l1.4 3.6C28 5 25.8 7.6 25.6 10.8H32V24H19z" transform="scale(0.9)" />
              </svg>
              <blockquote className="mt-6 flex-1 text-lg leading-relaxed">
                {item.quote}
              </blockquote>
              <figcaption className="mt-8">
                <p className="font-bold">{item.name}</p>
                <p className="mt-1 text-sm text-gray-500">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
