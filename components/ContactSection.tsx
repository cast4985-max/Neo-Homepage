"use client";

import { useT } from "@/components/LanguageProvider";

export default function ContactSection() {
  const t = useT();

  const steps = [
    {
      number: "1",
      title: t("정보 입력", "Tell us about you"),
      description: t(
        "품목, 물동량, 현재 고민을 간단히 알려주세요.",
        "Share your products, volume, and current challenges.",
      ),
    },
    {
      number: "2",
      title: t("전문가 상담", "Talk to an expert"),
      description: t(
        "물류 전문가가 1영업일 내에 맞춤 활용 방안을 안내합니다.",
        "A logistics expert follows up within one business day with a tailored plan.",
      ),
    },
  ];

  return (
    <section id="contact" className="bg-black text-white">
      <div className="mx-auto grid max-w-[1280px] gap-14 px-4 py-16 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-24">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            {t("지금, 글로벌 네트워크에", "Connect to the global")}
            <br />
            {t("연결되세요", "network today")}
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-gray-300">
            {t(
              "도입 비용부터 예상 효과까지, 비즈니스에 맞는 답을 드립니다.",
              "From costs to expected impact — answers tailored to your business.",
            )}
          </p>
          <ol className="mt-12 flex flex-col gap-8">
            {steps.map((step) => (
              <li key={step.number} className="flex gap-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-base font-bold text-black">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-1 text-gray-400">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <form className="rounded-xl bg-white p-7 text-black lg:p-9">
          <h3 className="text-xl font-bold">
            {t("도입 상담 신청", "Request a consultation")}
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium">{t("이름", "Name")}</span>
              <input
                type="text"
                placeholder={t("홍길동", "Jane Doe")}
                className="rounded-lg bg-[#f3f3f3] px-4 py-3 text-base outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium">
                {t("회사명", "Company")}
              </span>
              <input
                type="text"
                placeholder={t("회사명을 입력하세요", "Your company name")}
                className="rounded-lg bg-[#f3f3f3] px-4 py-3 text-base outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium">
                {t("이메일", "Email")}
              </span>
              <input
                type="email"
                placeholder="name@company.com"
                className="rounded-lg bg-[#f3f3f3] px-4 py-3 text-base outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium">
                {t("연락처", "Phone")}
              </span>
              <input
                type="tel"
                placeholder={t("010-0000-0000", "+82 10-0000-0000")}
                className="rounded-lg bg-[#f3f3f3] px-4 py-3 text-base outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black"
              />
            </label>
            <label className="flex flex-col gap-1.5 sm:col-span-2">
              <span className="text-sm font-medium">
                {t("문의 내용", "Message")}
              </span>
              <textarea
                rows={4}
                placeholder={t(
                  "취급 품목, 월 물동량, 현재 고민을 알려주세요.",
                  "Tell us about your products, monthly volume, and current challenges.",
                )}
                className="resize-none rounded-lg bg-[#f3f3f3] px-4 py-3 text-base outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-black px-7 py-4 text-base font-medium text-white transition-opacity hover:opacity-80"
          >
            {t("상담 신청하기", "Request consultation")}
          </button>
          <p className="mt-4 text-xs leading-relaxed text-gray-400">
            {t(
              "제출 시 개인정보처리방침에 동의하는 것으로 간주됩니다. 입력하신 정보는 상담 목적으로만 사용됩니다.",
              "By submitting, you agree to our privacy policy. Your information is used only for this consultation.",
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
