"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

export default function PartnerSections() {
  const t = useT();

  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-20 px-4 py-16 lg:gap-28 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80"
              alt={t(
                "계약을 맺는 두 비즈니스 파트너의 악수",
                "Two business partners shaking hands on a deal",
              )}
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
              {t("한·미·중 바이어와", "Trade directly with buyers")}
              <br />
              {t("직접 거래하세요", "in Korea, the US & China")}
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-gray-600">
              {t(
                "한국·미국·중국 전역의 검증된 파트너 네트워크를 연결해 드립니다. 거래 이력을 확인하고 안심하고 첫 거래를 시작하세요.",
                "We connect you to a vetted partner network across Korea, the US, and China. Review trade history and start your first deal with confidence.",
              )}
            </p>
            <div className="mt-8 flex items-center gap-5">
              <Link
                href="#contact"
                className="rounded-lg bg-black px-7 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-80"
              >
                {t("시작하기", "Get started")}
              </Link>
              <Link
                href="#contact"
                className="text-base font-medium underline underline-offset-4 hover:text-gray-600"
              >
                {t("파트너 등록 안내", "Become a partner")}
              </Link>
            </div>
          </div>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="lg:order-1">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
              {t("어디서나 안심할 수 있는", "A trade system you can")}
              <br />
              {t("거래 시스템", "trust anywhere")}
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-gray-600">
              {t(
                "에스크로 결제, 무역 보험, 파트너 신용 평가까지. 국경을 넘는 거래의 모든 리스크를 시스템이 관리합니다.",
                "Escrow payments, trade insurance, and partner credit checks — the system manages every risk of cross-border trade.",
              )}
            </p>
            <div className="mt-8 flex items-center gap-5">
              <Link
                href="#contact"
                className="rounded-lg bg-black px-7 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-80"
              >
                {t("안전 정책 보기", "See our safety policies")}
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:order-2">
            <Image
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80"
              alt={t(
                "정렬된 컨테이너 야드의 항공 전경",
                "Aerial view of an organized container yard",
              )}
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
