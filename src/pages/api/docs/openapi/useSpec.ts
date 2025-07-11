import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useMemo } from "react";
import oasEn from "./en.openapi.json";
import oasKo from "./ko.openapi.json";

export default function useSpec() {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();
  return useMemo(() => {
    let value: any;
    switch (currentLocale) {
      case "ko":
        value = oasKo;
        break;
      default:
        value = oasEn;
        break;
    }
    return value;
  }, [currentLocale]);
}
