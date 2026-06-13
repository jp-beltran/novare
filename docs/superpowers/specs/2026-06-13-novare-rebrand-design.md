# Novare Rebrand Design

## Goal

Replace every identifier of the former store name, StudioPixel, with Novare while preserving the existing slogan "Alta performance em cada pixel" and unrelated technical uses of "Pixel".

## Scope

- Replace visible `StudioPixel` brand labels with `Novare`.
- Replace package identifiers from `studiopixel` to `novare`.
- Replace `contato@studiopixel.com.br` with `contato@novare.com.br`.
- Replace brand-specific alternative text.
- Do not edit generated `.next` files; regenerate them through the build.
- Do not replace "Pixel Meta", "Google Analytics & Pixel Meta", or example names such as "Studio Bella".

## Verification

Add a source-level regression test that asserts the former brand identifier is absent from maintained source and manifest files, then run tests, lint, build, and a final global search excluding generated and dependency directories.
