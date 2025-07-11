import type { WrapperProps } from "@docusaurus/types";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import type DefaultNavbarItemType from "@theme/NavbarItem/DefaultNavbarItem";
import DefaultNavbarItem from "@theme-original/NavbarItem/DefaultNavbarItem";
import Handlebars from "handlebars";
import React, { useMemo, type ReactNode } from "react";
import { useActiveVersion } from "../../../versions";

export interface DefaultNavbarItemContext {
  version?: string;
  slug?: string;
  lang: string;
}

type Props = WrapperProps<typeof DefaultNavbarItemType>;

export default function DefaultNavbarItemWrapper({
  to,
  ...props
}: Props): ReactNode {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();
  const version = useActiveVersion();

  const context = useMemo(() => {
    const value: DefaultNavbarItemContext = {
      version: version?.name,
      slug: version?.name,
      lang: currentLocale,
    };
    if (value.version === "current") {
      value.slug = "next";
    }
    if (version?.isLast) {
      delete value.slug;
    }
    return value;
  }, [version, currentLocale]);

  const computedTo = useMemo(() => {
    if (!to) {
      return to;
    }
    const compiled = Handlebars.compile(to);
    const computed = compiled(context).replace(/\\n/g, "").replace(/\s/g, "");
    return computed;
  }, [to, context]);

  return (
    <>
      <DefaultNavbarItem to={computedTo} {...props} />
    </>
  );
}
