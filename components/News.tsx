"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

export default function News() {
  const t = useT();

  const featured = {
    category: t("뉴스", "News"),
    title: t(
      "Neo Trading Network, LA 물류 허브 오픈",
      "Neo Trading Network opens Los Angeles logistics hub",
    ),
    excerpt: t(
      "북미 서부 풀필먼트와 통관을 한 곳에서 처리하는 LA 허브가 문을 열었습니다. 미주 항로 리드타임이 평균 1.8일 단축됩니다.",
      "The new LA hub handles West Coast fulfillment and customs in one place, cutting average lead time on US routes by 1.8 days.",
    ),
    date: "2026.06.01",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80",
    alt: t("신문이 쌓여 있는 모습", "Stacked newspapers"),
  };

  const items = [
    {
      category: t("이벤트", "Event"),
      title: t("글로벌 트레이드테크 서밋 2026 참가 안내", "Join us at the Global TradeTech Summit 2026"),
      date: "2026.05.26",
    },
    {
      category: t("리포트", "Report"),
      title: t("하반기 미국·중국 원자재 시장 전망 리포트 발간", "H2 US & China raw materials market outlook"),
      date: "2026.05.12",
    },
    {
      category: t("고객 사례", "Case study"),
      title: t("한림스틸, 선적 서류 처리 시간 47% 단축", "Hanrim Steel cuts shipping document time 47%"),
      date: "2026.04.30",
    },
  ];

  return (
    <section id="insights" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t("새로운 소식", "Latest updates")}
          </h2>
          <Link href="#insights" className="inline-flex items-center gap-1.5 pb-1 text-base font-bold text-accent">
            {t("전체 보기", "See all")}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Link href="#insights" className="group">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src={featured.image}
                alt={featured.alt}
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm">
              <span className="font-bold text-accent">{featured.category}</span>
              <span className="text-ink-soft">{featured.date}</span>
            </div>
            <h3 className="mt-2.5 text-2xl font-extrabold leading-snug tracking-tight group-hover:text-accent">
              {featured.title}
            </h3>
            <p className="mt-3 leading-relaxed text-ink-soft">{featured.excerpt}</p>
          </Link>

          <div className="flex flex-col divide-y divide-line">
            {items.map((item) => (
              <Link key={item.title} href="#insights" className="group flex flex-col gap-2 py-7 first:pt-0">
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-bold text-accent">{item.category}</span>
                  <span className="text-ink-soft">{item.date}</span>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <h3 className="text-xl font-extrabold leading-snug group-hover:text-accent">
                    {item.title}
                  </h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0 text-ink-soft group-hover:text-accent" aria-hidden="true">
                    <path d="M4 12h16M14 6l6 6-6 6" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
