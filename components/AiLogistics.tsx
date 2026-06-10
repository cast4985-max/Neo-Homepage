"use client";

import { useT } from "@/components/LanguageProvider";

export default function AiLogistics() {
  const t = useT();

  const focuses = [
    {
      title: t("화물 자동 분류", "Automated cargo sorting"),
      description: t(
        "크기·형태·색상 기준으로 화물을 분류해 적재 효율을 높입니다.",
        "Sort cargo by size, shape, and color to load more efficiently.",
      ),
    },
    {
      title: t("라벨·바코드 인식", "Label & barcode recognition"),
      description: t(
        "라벨과 바코드를 자동 판독해 검수 누락을 줄입니다.",
        "Read labels and barcodes automatically to reduce missed inspections.",
      ),
    },
    {
      title: t("입출고 추적", "Inbound & outbound tracking"),
      description: t(
        "창고 안 화물의 위치와 이동을 데이터로 기록합니다.",
        "Record the location and movement of cargo as data.",
      ),
    },
  ];

  return (
    <section id="logistics" className="bg-black text-white">
      <div className="mx-auto max-w-[1280px] px-4 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
          {t("물류 AI", "Logistics AI")}
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
          {t("AI가 물류 현장의", "AI raises the productivity")}
          <br />
          {t("생산성을 끌어올립니다", "of your logistics floor")}
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-300">
          {t(
            "화물 자동 분류, 라벨·바코드 인식, 로봇 피킹까지. 현장에서 수집한 실데이터로 학습한 AI 모델이 창고와 항만의 반복 작업을 자동화합니다.",
            "Automated cargo sorting, label and barcode recognition, robotic picking. AI models trained on real field data automate repetitive work in warehouses and ports.",
          )}
        </p>

        <div className="mt-14 grid gap-10 border-t border-white/20 pt-10 md:grid-cols-3">
          {focuses.map((focus) => (
            <div key={focus.title}>
              <p className="text-xl font-bold sm:text-2xl">{focus.title}</p>
              <p className="mt-3 text-base leading-relaxed text-gray-400">
                {focus.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
