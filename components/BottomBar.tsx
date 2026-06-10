"use client";

import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

/* 모바일 전용 고정 CTA */
export default function BottomBar() {
  const t = useT();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white p-2.5 lg:hidden">
      <Link
        href="#contact"
        className="flex h-12 w-full items-center justify-center rounded bg-accent text-base font-bold text-white transition-colors hover:bg-accent-deep"
      >
        {t("견적 요청하기", "Request a quote")}
      </Link>
    </div>
  );
}
