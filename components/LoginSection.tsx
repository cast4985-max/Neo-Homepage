"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

export default function LoginSection() {
  const t = useT();

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-24">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            {t("로그인하여 거래 현황을", "Log in to see your")}
            <br />
            {t("확인하세요", "trade activity")}
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-gray-600">
            {t(
              "진행 중인 견적, 선적 추적, 정산 내역과 맞춤 시장 리포트를 한곳에서 확인할 수 있습니다.",
              "Open quotes, shipment tracking, settlements, and personalized market reports — all in one place.",
            )}
          </p>
          <div className="mt-8 flex items-center gap-5">
            <Link
              href="#contact"
              className="rounded-lg bg-black px-7 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-80"
            >
              {t("계정에 로그인하기", "Log in to your account")}
            </Link>
            <Link
              href="#contact"
              className="text-base font-medium underline underline-offset-4 hover:text-gray-600"
            >
              {t("계정 만들기", "Create an account")}
            </Link>
          </div>
        </div>
        <div className="relative aspect-[16/11] overflow-hidden rounded-lg bg-[#f6f6f6]">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80"
            alt={t(
              "노트북으로 거래 현황을 살펴보는 팀",
              "A team reviewing trade activity on a laptop",
            )}
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
