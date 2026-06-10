"use client";

import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

/* 제품 화면 목업 — 차분한 그레이 크롬, 포인트는 블루만 */
function DashboardMock() {
  const t = useT();

  const shipments = [
    { id: "NTN-2607", route: "SEL → LAX", status: t("운송 중", "In transit"), progress: 72 },
    { id: "NTN-2598", route: "SHA → SEL", status: t("통관 중", "Customs"), progress: 88 },
    { id: "NTN-2611", route: "SEL → SHA", status: t("선적 대기", "Booked"), progress: 15 },
  ];

  return (
    <div className="overflow-hidden rounded-lg border border-line bg-white shadow-lg shadow-ink/5">
      <div className="flex items-center justify-between border-b border-line bg-paper-warm px-5 py-3">
        <span className="text-sm font-bold">{t("Neo 대시보드", "Neo Dashboard")}</span>
        <span className="text-xs text-ink-soft">v2.4</span>
      </div>

      <div className="grid grid-cols-3 divide-x divide-line border-b border-line">
        {[
          [t("진행 선적", "Active"), "24"],
          [t("이번 주 도착", "Arriving"), "7"],
          [t("미결 정산", "To settle"), "3"],
        ].map(([label, value]) => (
          <div key={label as string} className="px-5 py-4">
            <p className="text-xs text-ink-soft">{label}</p>
            <p className="mt-0.5 text-2xl font-extrabold">{value}</p>
          </div>
        ))}
      </div>

      <ul className="divide-y divide-line">
        {shipments.map((s) => (
          <li key={s.id} className="px-5 py-4">
            <div className="flex items-center justify-between text-sm">
              <span className="font-mono font-bold">{s.id}</span>
              <span className="text-ink-soft">{s.route}</span>
              <span className="text-xs font-bold text-accent">{s.status}</span>
            </div>
            <div className="mt-2.5 h-1 w-full rounded-full bg-paper-warm">
              <div className="h-1 rounded-full bg-accent" style={{ width: `${s.progress}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function LoginSection() {
  const t = useT();

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-4 py-20 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-28">
        <DashboardMock />

        <div>
          <h2 className="text-3xl font-extrabold leading-snug tracking-tight sm:text-4xl">
            {t("즉시견적부터 예약과 정산까지", "From instant quotes to booking")}
            <br />
            {t("하나의 플랫폼에서 가능합니다", "and settlement — one platform")}
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
            {t(
              "진행 중인 견적, 선적 위치, 통관 단계, 정산 내역을 한 화면에서 관리하세요. 이메일과 엑셀은 이제 필요 없습니다.",
              "Manage open quotes, cargo locations, customs stages, and settlements on one screen. No more email threads and spreadsheets.",
            )}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="rounded bg-accent px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-accent-deep"
            >
              {t("계정 만들기", "Create an account")}
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 text-base font-bold text-accent"
            >
              {t("로그인", "Log in")}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
