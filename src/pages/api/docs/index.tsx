import Layout from "@theme/Layout";
// @ts-ignore
import Redoc from "@theme/Redoc";
import useSpec from "./openapi/useSpec";

export default function OAS() {
  const spec = useSpec();
  return (
    <Layout title="API Reference">
      <Redoc spec={spec} />
    </Layout>
  );
}
