"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type Lang = "ko" | "en";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
}>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // 항상 영어로 시작 — 세션 중 토글만 유지하고 저장값은 복원하지 않는다
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("lang", next);
    document.documentElement.lang = next;
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

/** t("한글", "English") — 현재 언어에 맞는 문자열을 돌려준다 */
export function useT() {
  const { lang } = useLang();
  return useCallback(
    (ko: string, en: string) => (lang === "ko" ? ko : en),
    [lang],
  );
}
