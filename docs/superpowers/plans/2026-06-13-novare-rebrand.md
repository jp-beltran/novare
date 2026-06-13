# Novare Rebrand Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace former StudioPixel store identifiers with Novare without changing the pixel-based slogan or unrelated technical terms.

**Architecture:** Keep the change textual and scoped to maintained source files and package manifests. A regression test scans the explicit maintained files that carry brand identity so future changes cannot reintroduce the former name.

**Tech Stack:** Next.js 15, React 19, TypeScript, Node test runner

---

### Task 1: Add Brand Regression Coverage

**Files:**
- Create: `tests/branding.test.ts`

- [ ] Write a test that reads the maintained branding files and rejects `StudioPixel`, `studiopixel`, and the former email.
- [ ] Run `npm test` and confirm the new test fails because the former brand is still present.

### Task 2: Replace Store Identity

**Files:**
- Modify: `components/site-shell.tsx`
- Modify: `app/layout.tsx`
- Modify: `app/sucesso/page.tsx`
- Modify: `app/solicitar-orcamento/page.tsx`
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `pnpm-lock.yaml`

- [ ] Replace visible store labels, metadata, alternative text, package identifiers, and the contact email.
- [ ] Preserve the slogan and unrelated uses of "Pixel".
- [ ] Run `npm test` and confirm all tests pass.

### Task 3: Verify the Application

- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Search maintained files for the former brand and confirm no matches remain.
- [ ] Confirm the preserved slogan and technical Pixel terms remain present.
