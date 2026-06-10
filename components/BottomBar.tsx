"use client";

import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

export default function BottomBar() {
  const t = useT();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-2">
      <Link
        href="#contact"
        className="flex h-14 w-full items-center justify-center rounded-xl bg-black text-base font-medium text-white shadow-lg transition-opacity hover:opacity-90"
      >
        {t("견적 보기", "See quotes")}
      </Link>
    </div>
  );
}
