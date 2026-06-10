"use client";

import { useT } from "@/components/LanguageProvider";

export default function ContactSection() {
  const t = useT();

  const inputClass =
    "w-full rounded border border-line bg-white px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-ink-soft/50 focus:border-accent";

  return (
    <section id="contact" className="bg-navy">
      <div className="mx-auto max-w-[1280px] px-4 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center text-white">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t("Neo와 함께, 디지털 물류 하세요", "Go digital with Neo")}
          </h2>
          <p className="mt-4 text-lg text-white/70">
            {t(
              "품목과 물동량을 알려주시면 1영업일 내에 전문가가 연락드립니다.",
              "Tell us your products and volume — an expert follows up within one business day.",
            )}
          </p>
        </div>

        <form className="mx-auto mt-12 max-w-2xl rounded-lg bg-white p-8 lg:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-bold">{t("이름", "Name")}</span>
              <input type="text" placeholder={t("홍길동", "Jane Doe")} className={inputClass} />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-bold">{t("회사명", "Company")}</span>
              <input type="text" placeholder={t("회사명을 입력하세요", "Your company name")} className={inputClass} />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-bold">{t("이메일", "Email")}</span>
              <input type="email" placeholder="name@company.com" className={inputClass} />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-bold">{t("관심 분야", "Interested in")}</span>
              <select className={inputClass} defaultValue="">
                <option value="" disabled>
                  {t("선택하세요", "Choose one")}
                </option>
                <option>{t("수출입 운송", "Import/export freight")}</option>
                <option>{t("물류 AI 도입", "Logistics AI")}</option>
                <option>{t("파트너 매칭", "Partner matching")}</option>
                <option>{t("기업용 플랫폼", "Business platform")}</option>
              </select>
            </label>
            <label className="flex flex-col gap-1.5 sm:col-span-2">
              <span className="text-sm font-bold">{t("문의 내용", "Message")}</span>
              <textarea
                rows={4}
                placeholder={t(
                  "취급 품목, 월 물동량, 현재 고민을 알려주세요.",
                  "Tell us about your products, monthly volume, and current challenges.",
                )}
                className={`${inputClass} resize-none`}
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded bg-accent px-7 py-4 text-base font-bold text-white transition-colors hover:bg-accent-deep"
          >
            {t("상담 신청하기", "Request consultation")}
          </button>
          <p className="mt-4 text-center text-xs leading-relaxed text-ink-soft">
            {t(
              "제출 시 개인정보처리방침에 동의하는 것으로 간주됩니다.",
              "By submitting, you agree to our privacy policy.",
            )}
          </p>
        </form>

        <p className="mt-10 text-center text-sm text-white/60">
          hello@neotrading.network · +82 2-0000-0000 ·{" "}
          {t("평일 09:00–18:00 KST", "Weekdays 09:00–18:00 KST")}
        </p>
      </div>
    </section>
  );
}
