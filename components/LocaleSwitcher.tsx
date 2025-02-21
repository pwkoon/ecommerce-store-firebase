import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
      {routing.locales.map((cur) => (
        <option
          className="bg-green bg-opacity-75 text-darkYellow font-inria font-bold"
          key={cur}
          value={cur}
        >
          {t("locale", { locale: cur.replace("-", "_") })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
