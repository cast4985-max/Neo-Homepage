"use client";

import { useT } from "@/components/LanguageProvider";

/* 인트로 + 핵심 숫자 — 검정 대형 숫자에 민트 마크 하나만 */
function Stat({ value, unit, lines }: { value: string; unit: string; lines: string[] }) {
  return (
    <div className="text-center">
      <p className="relative inline-block text-[56px] font-extrabold leading-none tracking-tight">
        {value}
        <span className="text-[28px]">{unit}</span>
        <span className="absolute -right-4 top-0 h-3 w-3 bg-mint" aria-hidden="true" />
      </p>
      <div className="mt-4 text-[15px] leading-relaxed text-ink-soft">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}

const partners = [
  "HANRIM STEEL",
  "DAEYANG FOODS",
  "K-CHEM",
  "SEMYUNG ELEC",
  "PACIFIC AGRO",
  "MIRAE TEXTILE",
];

export default function LogoCloud() {
  const t = useT();

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-20 lg:px-8 lg:py-28">
        <h2 className="text-center text-3xl font-extrabold leading-snug tracking-tight sm:text-4xl">
          {t("미국으로 수출하는 기업을 위한", "Built for companies shipping")}
          <br />
          {t("항공 물류 플랫폼", "to the United States")}
        </h2>

        <div className="mx-auto mt-16 grid max-w-3xl gap-14 sm:grid-cols-3">
          <Stat
            value="14"
            unit="+"
            lines={[t("주간 미주 항공 스케줄", "Weekly US-bound flights"), t("인천 — LA · NY · 시카고", "Incheon — LA · NY · Chicago")]}
          />
          <Stat
            value="50"
            unit={t("개 주", "states")}
            lines={[t("미국 전역 내륙 배송망", "US domestic delivery network"), t("통관 후 48시간 내 배송", "Delivered within 48h of customs")]}
          />
          <Stat
            value="98.2"
            unit="%"
            lines={[t("항공 정시 운항률", "On-time flight rate"), t("24/7 화물 관제", "24/7 cargo monitoring")]}
          />
        </div>

        <div className="mt-20 border-t border-line pt-10">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {partners.map((name) => (
              <span key={name} className="text-sm font-bold tracking-[0.12em] text-ink/30">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
