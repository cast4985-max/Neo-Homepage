"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

function HatchHeading() {
  return (
    <svg viewBox="0 0 1180 290" className="w-full max-w-5xl" role="img" aria-label="NEO EVENT & NEWS">
      <defs>
        <pattern id="hatch-news" patternUnits="userSpaceOnUse" width="7" height="7" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="7" stroke="#d9d9d9" strokeWidth="2.5" />
        </pattern>
      </defs>
      <text
        x="0"
        y="118"
        fontFamily="var(--font-geist-sans), sans-serif"
        fontSize="132"
        fontWeight="800"
        letterSpacing="2"
        fill="url(#hatch-news)"
      >
        NEO EVENT
      </text>
      <text
        x="0"
        y="262"
        fontFamily="var(--font-geist-sans), sans-serif"
        fontSize="132"
        fontWeight="800"
        letterSpacing="2"
        fill="url(#hatch-news)"
      >
        & NEWS
      </text>
    </svg>
  );
}

export default function News() {
  const t = useT();

  const items = [
    {
      category: t("뉴스", "News"),
      title: t(
        "Neo Trading Network, LA 물류 허브 오픈",
        "Neo Trading Network opens Los Angeles logistics hub",
      ),
      date: "2026. 06. 01",
      image:
        "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=75",
      alt: t("항만의 컨테이너 야적장", "A container yard at the port"),
    },
    {
      category: t("이벤트", "Event"),
      title: t(
        "글로벌 트레이드테크 서밋 2026 참가 안내",
        "Join us at the Global TradeTech Summit 2026",
      ),
      date: "2026. 05. 26",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=75",
      alt: t(
        "노트북을 보며 회의 중인 사람들",
        "People in a meeting around a laptop",
      ),
    },
    {
      category: t("마켓 리포트", "Market report"),
      title: t(
        "하반기 미국·중국 원자재 시장 전망 리포트 발간",
        "H2 US & China raw materials market outlook",
      ),
      date: "2026. 05. 12",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=75",
      alt: t(
        "보고서와 노트북이 놓인 책상",
        "A desk with reports and a laptop",
      ),
    },
    {
      category: t("고객 사례", "Case study"),
      title: t(
        "한림스틸, 선적 서류 처리 시간 47% 단축",
        "Hanrim Steel cuts shipping document time 47%",
      ),
      date: "2026. 04. 30",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=75",
      alt: t(
        "물류 창고에서 작업 중인 지게차",
        "A forklift working in a warehouse",
      ),
    },
  ];

  return (
    <section id="insights" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-16 lg:px-8 lg:py-24">
        <HatchHeading />
        <div className="mt-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("새로운 소식", "Latest updates")}
          </h2>
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
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Link key={item.title} href="#insights" className="group flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="mt-4 text-xs font-bold uppercase tracking-widest text-gray-500">
                {item.category}
              </span>
              <h3 className="mt-2 flex-1 text-lg font-bold leading-snug group-hover:underline group-hover:underline-offset-4">
                {item.title}
              </h3>
              <time className="mt-3 text-sm text-gray-500">{item.date}</time>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
