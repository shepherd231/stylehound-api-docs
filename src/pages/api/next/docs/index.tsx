import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// @ts-ignore
import Redoc from "@theme/Redoc";
import { useMemo } from "react";
import oasEn from "./openapi/en.openapi.json";
import oasKo from "./openapi/ko.openapi.json";

export default function OAS() {
  const spec = useSpec();
  return (
    <Layout title="API Reference">
      <Redoc spec={spec} />
    </Layout>
  );
}

function useSpec() {
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
