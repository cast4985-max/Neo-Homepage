"use client";

import { useT } from "@/components/LanguageProvider";

export default function AiLogistics() {
  const t = useT();

  const metrics = [
    { value: "94%", label: t("상품 분류 정확도", "classification accuracy") },
    { value: "97%", label: t("품목 자동 인식률", "automatic item detection") },
    { value: "21%", label: t("적재 효율 개선", "better loading efficiency") },
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
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-5xl font-bold tracking-tight sm:text-6xl">
                {metric.value}
              </p>
              <p className="mt-3 text-base text-gray-400">{metric.label}</p>
            </div>
          ))}
        </div>

        <figure className="mt-16 max-w-3xl border-l-2 border-white pl-6">
          <blockquote className="text-xl leading-relaxed sm:text-2xl">
            {t(
              '"크기·형태·색상 기준으로 화물을 분류하는 모델을 Neo와 함께 구축했습니다. 컨테이너 적재 효율이 21% 개선되면서 같은 선복으로 더 많은 물량을 처리하고 있습니다."',
              '"We built a model with Neo that sorts cargo by size, shape, and color. Container loading efficiency improved 21%, so we move more volume with the same vessel space."',
            )}
          </blockquote>
          <figcaption className="mt-5 text-sm text-gray-400">
            {t(
              "최민재 · 퍼시픽로지스 물류운영팀장",
              "Minjae Choi · Logistics Operations Lead, Pacific Logis",
            )}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
