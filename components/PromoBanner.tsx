"use client";

import Link from "next/link";
import { useState } from "react";
import { useT } from "@/components/LanguageProvider";

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);
  const t = useT();
  if (!visible) return null;

  return (
    <div className="relative bg-black text-white">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-4 py-4 pr-14 lg:px-8">
        <div>
          <p className="text-sm font-bold">
            {t(
              "신규 가입 운임 할인 프로모션 안내",
              "New member freight discount promotion",
            )}
          </p>
          <p className="mt-0.5 text-sm text-gray-300">
            {t(
              "첫 선적 운임 10% 할인 혜택을 확인해 보세요!",
              "Get 10% off the freight on your first shipment!",
            )}
          </p>
        </div>
        <Link
          href="#contact"
          className="rounded-full bg-[#d6f3e4] px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-80"
        >
          {t("프로모션 더보기", "See promotions")}
        </Link>
      </div>
      <button
        type="button"
        aria-label={t("배너 닫기", "Close banner")}
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full transition-colors hover:bg-white/10"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <path d="M2 2l10 10M12 2L2 12" />
        </svg>
      </button>
    </div>
  );
}
