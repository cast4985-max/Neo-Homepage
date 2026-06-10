"use client";

import { useT } from "@/components/LanguageProvider";

export default function Testimonial() {
  const t = useT();

  const testimonials = [
    {
      quote: t(
        "이메일과 엑셀로 관리하던 수출 업무를 전부 플랫폼으로 옮겼습니다. 선적 한 건당 들어가던 관리 시간이 절반 이하로 줄었어요.",
        "We moved our entire export workflow off email and spreadsheets. Admin time per shipment dropped by more than half.",
      ),
      name: t("김도현", "Dohyun Kim"),
      role: t(
        "한림스틸 해외영업팀장",
        "Head of Overseas Sales, Hanrim Steel",
      ),
    },
    {
      quote: t(
        "미국 신규 바이어를 찾는 데 보통 6개월 이상 걸렸는데, Neo의 파트너 네트워크로 3주 만에 첫 계약을 체결했습니다.",
        "Finding new buyers in the US used to take six months or more. Through Neo's partner network we signed our first contract in three weeks.",
      ),
      name: t("박서연", "Seoyeon Park"),
      role: t("대양식품 대표", "CEO, Daeyang Foods"),
    },
    {
      quote: t(
        "AI 수요 예측 덕분에 원자재 매입 타이밍을 데이터로 결정합니다. 작년 대비 재고 비용을 20% 가까이 절감했습니다.",
        "AI demand forecasting lets us time raw-material purchases with data. Inventory costs are down nearly 20% from last year.",
      ),
      name: t("이준호", "Junho Lee"),
      role: t("케이켐 구매총괄 이사", "Director of Procurement, K-Chem"),
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
