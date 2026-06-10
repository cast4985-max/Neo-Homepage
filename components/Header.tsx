"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang, useT } from "@/components/LanguageProvider";

function Wordmark() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="flex h-8 w-8 items-center justify-center rounded bg-accent text-[15px] font-extrabold leading-none text-white">
        N
      </span>
      <span className="text-[18px] font-extrabold tracking-tight">
        Neo Trading Network
      </span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();
  const t = useT();

  const navLinks = [
    { label: t("플랫폼", "Platform"), href: "#platform" },
    { label: t("솔루션", "Solutions"), href: "#solutions" },
    { label: t("물류 AI", "Logistics AI"), href: "#logistics" },
    { label: t("기업용", "Business"), href: "#business" },
    { label: t("인사이트", "Insights"), href: "#insights" },
  ];

  const toggleLang = () => setLang(lang === "en" ? "ko" : "en");

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 lg:px-8">
        <Wordmark />

        <nav className="hidden items-center lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-[15px] font-medium text-ink transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t("언어 변경", "Change language")}
            className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
          >
            {lang === "en" ? "KO" : "EN"}
          </button>
          <Link href="#contact" className="text-[15px] font-medium transition-colors hover:text-accent">
            {t("로그인", "Log in")}
          </Link>
          <Link
            href="#contact"
            className="rounded bg-accent px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent-deep"
          >
            {t("상담 신청", "Talk to us")}
          </Link>
        </div>

        <button
          type="button"
          aria-label={t("메뉴 열기", "Open menu")}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            {open ? (
              <>
                <path d="M4 4l12 12" />
                <path d="M16 4L4 16" />
              </>
            ) : (
              <>
                <path d="M3 6h14" />
                <path d="M3 10h14" />
                <path d="M3 14h14" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-white px-4 py-3 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line px-1 py-3.5 text-base font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={toggleLang}
                className="w-full px-1 py-3.5 text-left text-base text-ink-soft"
              >
                {lang === "en" ? "한국어로 보기" : "View in English"}
              </button>
            </li>
            <li className="mt-2 flex gap-2 pb-2">
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex-1 rounded border border-ink px-5 py-3 text-center text-sm font-bold"
              >
                {t("로그인", "Log in")}
              </Link>
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex-1 rounded bg-accent px-5 py-3 text-center text-sm font-bold text-white"
              >
                {t("상담 신청", "Talk to us")}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
