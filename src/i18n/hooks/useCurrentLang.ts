import { useEffect } from "react";
import { useTranslation } from "react-i18next";

/**
 * Custom hook that:
 * - returns current language
 * - triggers callback when language changes
 */
export default function useCurrentLang(
  onLangChange?: (lang: string) => void
): string {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (!onLangChange) return;

    const handleLanguageChange = (lng: string) => {
      onLangChange(lng);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n, onLangChange]);

  return i18n.language;
}
