#!/bin/bash

cp -r docs versioned_docs/version-$1
cp -r docs i18n/ko/docusaurus-plugin-content-docs/version-$1
cp -r sidebars.json versioned_sidebars/version-$1-sidebars.json