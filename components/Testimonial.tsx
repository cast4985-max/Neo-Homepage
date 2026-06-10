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
        "파트너 네트워크를 통해 처음으로 데이터를 보고 미국 거래처를 골랐습니다.",
        "Through the partner network, we chose a US counterparty based on data for the first time.",
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
      <div className="mx-auto max-w-[1280px] px-4 py-20 lg:px-8 lg:py-28">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          {t("고객이 말하는 Neo", "What customers say")}
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="flex flex-col rounded-lg border border-line p-8">
              <svg width="28" height="21" viewBox="0 0 32 24" fill="var(--accent)" aria-hidden="true">
                <path d="M0 24V14.4C0 6.4 4.8 1.2 12.4 0l1.4 3.6C9 5 6.8 7.6 6.6 10.8H13V24H0zm19 0V14.4C19 6.4 23.8 1.2 31.4 0l1.4 3.6C28 5 25.8 7.6 25.6 10.8H32V24H19z" />
              </svg>
              <blockquote className="mt-6 flex-1 leading-relaxed">
                {item.quote}
              </blockquote>
              <figcaption className="mt-7 border-t border-line pt-5">
                <p className="font-extrabold">{item.name}</p>
                <p className="mt-0.5 text-sm text-ink-soft">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
