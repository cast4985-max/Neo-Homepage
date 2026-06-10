"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

export default function CaseStudies() {
  const t = useT();

  const cases = [
    {
      tag: t("케이스 스터디 01", "Case study 01"),
      title: t(
        "창고 원자재 입출고를 AI가 추적합니다",
        "AI tracks raw materials in and out of your warehouse",
      ),
      description: t(
        "비전 AI가 원자재의 시리얼 넘버를 인식하고 이동 경로와 보관 위치를 자동으로 기록합니다. 수기 대장 없이도 어떤 자재가 어디에 있는지 실시간으로 파악할 수 있습니다.",
        "Vision AI reads serial numbers and automatically logs movement paths and storage locations. Know where every material is in real time — no paper ledgers.",
      ),
      points: [
        t("시리얼 넘버 자동 인식", "Automatic serial number recognition"),
        t("이동 경로 실시간 추적", "Real-time movement tracking"),
        t("보관 위치 자동 배정", "Automatic storage assignment"),
      ],
      image:
        "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80",
      alt: t(
        "선반이 늘어선 대형 물류 창고 내부",
        "Inside a large warehouse lined with shelving",
      ),
    },
    {
      tag: t("케이스 스터디 02", "Case study 02"),
      title: t(
        "바코드·라벨 검수를 자동화합니다",
        "Barcode and label inspection, automated",
      ),
      description: t(
        "박스의 4면을 촬영해 개별 ID를 부여하고, 바코드 판독과 라벨 OCR을 한 번에 처리합니다. 검수 누락과 오출고를 출고 단계에서 차단합니다.",
        "Cameras capture all four sides of each box, assign an ID, and run barcode reading and label OCR in one pass — stopping missed inspections and wrong shipments at the door.",
      ),
      points: [
        t("4면 촬영 · 개체 ID 부여", "4-side capture & per-box IDs"),
        t("바코드 자동 판독", "Automatic barcode reading"),
        t("라벨 문자 인식(OCR)", "Label text recognition (OCR)"),
      ],
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
      alt: t(
        "오렌지색 랙이 설치된 물류 센터",
        "A fulfillment center with orange racking",
      ),
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-16 lg:px-8 lg:py-24">
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
          {t("현장에서 증명된", "Logistics AI solutions")}
          <br />
          {t("물류 AI 솔루션", "proven on the floor")}
        </h2>
        <div className="mt-12 flex flex-col gap-16 lg:gap-24">
          {cases.map((item, i) => (
            <div
              key={item.tag}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-lg ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-500">
                  {item.tag}
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-gray-600">
                  {item.description}
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                        <circle cx="9" cy="9" r="9" fill="#000" />
                        <path d="M5.5 9l2.5 2.5L13 6.5" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="mt-8 inline-flex rounded-lg bg-black px-6 py-3 text-base font-medium text-white transition-opacity hover:opacity-80"
                >
                  {t("솔루션 상담하기", "Talk to an expert")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
