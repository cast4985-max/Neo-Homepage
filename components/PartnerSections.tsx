"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

export default function PartnerSections() {
  const t = useT();

  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-20 px-4 py-20 lg:gap-28 lg:px-8 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
              alt={t("거래 계약서에 서명하는 모습", "Signing a trade agreement")}
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold text-accent">{t("파트너 네트워크", "Partner network")}</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-snug tracking-tight sm:text-4xl">
              {t("한·미·중 바이어와", "Trade directly with buyers")}
              <br />
              {t("직접 거래하세요", "in Korea, the US & China")}
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
              {t(
                "검증된 파트너 네트워크를 연결해 드립니다. 거래 이력을 확인하고 안심하고 첫 거래를 시작하세요.",
                "We connect you to a vetted partner network. Review trade history and start your first deal with confidence.",
              )}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="rounded bg-accent px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-accent-deep"
              >
                {t("시작하기", "Get started")}
              </Link>
              <Link href="#contact" className="text-base font-bold text-accent">
                {t("파트너 등록 안내", "Become a partner")}
              </Link>
            </div>
          </div>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="lg:order-1">
            <p className="text-sm font-bold text-accent">{t("안전 거래", "Trade safety")}</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-snug tracking-tight sm:text-4xl">
              {t("어디서나 안심할 수 있는", "A trade system you can")}
              <br />
              {t("거래 시스템", "trust anywhere")}
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
              {t(
                "에스크로 결제, 무역 보험, 파트너 신용 평가까지. 국경을 넘는 거래의 모든 리스크를 시스템이 관리합니다.",
                "Escrow payments, trade insurance, and partner credit checks — the system manages every risk of cross-border trade.",
              )}
            </p>
            <ul className="mt-7 flex flex-col gap-3">
              {[
                t("에스크로 결제 기본 적용", "Escrow payments by default"),
                t("전 구간 무역 보험", "Trade insurance on every leg"),
                t("파트너 신용 평가 리포트", "Partner credit reports"),
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 font-medium">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0" aria-hidden="true">
                    <path d="M3.5 9.5l3.5 3.5 7.5-8" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              className="mt-9 inline-flex rounded bg-accent px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-accent-deep"
            >
              {t("안전 정책 보기", "See our safety policies")}
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:order-2">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
              alt={t("기업 빌딩의 외관", "A corporate office building")}
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
