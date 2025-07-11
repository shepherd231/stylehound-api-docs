#!/usr/bin/env zx

import "zx/globals";
import yaml from "js-yaml";
import { readFileSync, writeFileSync } from "fs";

await $`ldm install`;

const targets = [
  "src/pages/api/docs/openapi/en.openapi.yaml",
  "src/pages/api/docs/openapi/ko.openapi.yaml",
  "src/pages/api/next/docs/openapi/en.openapi.yaml",
  "src/pages/api/next/docs/openapi/ko.openapi.yaml",
];

for (const target of targets) {
  const oas = yaml.load(readFileSync(target, "utf-8"));
  writeFileSync(
    target.replace(".yaml", ".json"),
    JSON.stringify(oas, null, 2),
    "utf-8",
  );
}
