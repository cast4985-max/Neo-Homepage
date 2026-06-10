"use client";

import { useT } from "@/components/LanguageProvider";

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
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-14 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500">
          {t(
            "국내외 선도 기업들이 Neo Trading Network와 함께합니다",
            "Leading companies at home and abroad trust Neo Trading Network",
          )}
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((name) => (
            <span
              key={name}
              className="text-center text-sm font-bold tracking-widest text-gray-400"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
