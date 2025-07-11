import { useVersions } from "@docusaurus/plugin-content-docs/client";
import { useLocation } from "@docusaurus/router";

export function useActiveVersion(pluginId?: string) {
  const { pathname } = useLocation();
  const versions = useVersions(pluginId);

  if (pathname.startsWith("/guides/next") || pathname.startsWith("/api/next")) {
    return versions.find(version => version.name === "current");
  }

  return versions.find(version => version.isLast);
}
