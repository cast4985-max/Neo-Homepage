"use client";

import { useT } from "@/components/LanguageProvider";

export default function AiLogistics() {
  const t = useT();

  const focuses = [
    {
      stat: "99.1%",
      title: t("화물 자동 분류 정확도", "Cargo sorting accuracy"),
      description: t(
        "크기·형태·색상 기준 분류로 적재 효율을 높입니다.",
        "Sorting by size, shape, and color loads containers tighter.",
      ),
    },
    {
      stat: "0.3s",
      title: t("라벨·바코드 판독 속도", "Label & barcode read time"),
      description: t(
        "검수 누락과 오출고를 출고 단계에서 차단합니다.",
        "Missed inspections and wrong shipments stop at the door.",
      ),
    },
    {
      stat: "100%",
      title: t("입출고 이력 데이터화", "In/out movements recorded"),
      description: t(
        "창고 안 화물의 위치와 이동이 전부 데이터로 남습니다.",
        "Every cargo movement inside the warehouse becomes data.",
      ),
    },
  ];

  return (
    <section id="logistics" className="bg-paper-warm">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-4 py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-8 lg:py-28">
        <div>
          <p className="text-sm font-bold text-accent">{t("물류 AI", "Logistics AI")}</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-snug tracking-tight sm:text-4xl">
            {t("현장에서 학습한 AI가", "AI trained on the floor")}
            <br />
            {t("반복 작업을 걷어냅니다", "takes over the repetitive work")}
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
            {t(
              "화물 자동 분류, 라벨·바코드 인식, 로봇 피킹까지 — 실데이터로 학습한 모델이 창고와 항만의 생산성을 끌어올립니다.",
              "Automated sorting, label and barcode recognition, robotic picking — models trained on real field data raise warehouse and port productivity.",
            )}
          </p>
        </div>

        <div className="flex flex-col divide-y divide-line border-y border-line">
          {focuses.map((focus) => (
            <div key={focus.title} className="flex items-baseline gap-8 py-7">
              <p className="w-28 shrink-0 text-3xl font-extrabold tracking-tight">
                {focus.stat}
              </p>
              <div>
                <h3 className="text-lg font-extrabold">{focus.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">
                  {focus.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
