"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang, useT } from "@/components/LanguageProvider";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();
  const t = useT();

  const navLinks = [
    { label: t("플랫폼", "Platform"), href: "#platform" },
    { label: t("솔루션", "Solutions"), href: "#solutions" },
    { label: t("소개", "About"), href: "#about", caret: true },
  ];

  const toggleLang = () => setLang(lang === "en" ? "ko" : "en");

  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-[26px] font-bold tracking-tight">
            Neo
          </Link>
          <nav className="hidden items-center lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10"
              >
                {link.label}
                {link.caret && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2.5 4.5L6 8l3.5-3.5" />
                  </svg>
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-1 lg:flex">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t("언어 변경", "Change language")}
            className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <circle cx="8" cy="8" r="6.5" />
              <path d="M1.5 8h13M8 1.5c-4.5 4-4.5 9 0 13M8 1.5c4.5 4 4.5 9 0 13" />
            </svg>
            {lang === "en" ? "EN-US" : "KO-KR"}
          </button>
          <Link
            href="#contact"
            className="rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10"
          >
            {t("고객지원", "Support")}
          </Link>
          <Link
            href="#contact"
            className="rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10"
          >
            {t("로그인", "Log in")}
          </Link>
          <Link
            href="#contact"
            className="ml-1 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-opacity hover:opacity-80"
          >
            {t("가입하기", "Sign up")}
          </Link>
        </div>

        <button
          type="button"
          aria-label={t("메뉴 열기", "Open menu")}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10 lg:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? (
              <>
                <path d="M4 4l12 12" />
                <path d="M16 4L4 16" />
              </>
            ) : (
              <>
                <path d="M3 5h14" />
                <path d="M3 10h14" />
                <path d="M3 15h14" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/15 bg-black px-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium hover:bg-white/10"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={toggleLang}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-3 text-base font-medium hover:bg-white/10"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <circle cx="8" cy="8" r="6.5" />
                  <path d="M1.5 8h13M8 1.5c-4.5 4-4.5 9 0 13M8 1.5c4.5 4 4.5 9 0 13" />
                </svg>
                {lang === "en" ? "한국어로 보기" : "View in English"}
              </button>
            </li>
            <li className="mt-3 flex gap-3">
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full border border-white/30 px-5 py-3 text-center text-sm font-medium"
              >
                {t("로그인", "Log in")}
              </Link>
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-black"
              >
                {t("가입하기", "Sign up")}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
