#!/usr/bin/env node
// Patches @docusaurus/core/lib/ssg/ssgNodeRequire.js to add require.resolveWeak.
//
// Problem: Docusaurus's route map (ComponentCreator) calls require.resolveWeak()
// for every page/doc route in the server SSG bundle. The eval() context only
// receives a custom require created by createSSGRequire, which is missing the
// resolveWeak method. Node.js's native require also has no resolveWeak.
// Result: TypeError: require.resolveWeak is not a function during SSG.
//
// Fix: Stub resolveWeak to return the resolved path (or undefined on failure).
// It is only used for client-side prefetch hinting — the SSG path never
// actually lazy-loads; safe to no-op.

const fs = require("fs");
const path = require("path");

const target = path.join(
  __dirname,
  "..",
  "node_modules",
  "@docusaurus",
  "core",
  "lib",
  "ssg",
  "ssgNodeRequire.js"
);

if (!fs.existsSync(target)) {
  console.log("[patch-docusaurus-ssg] ssgNodeRequire.js not found — skipping");
  process.exit(0);
}

let src = fs.readFileSync(target, "utf-8");

if (src.includes("resolveWeak")) {
  console.log("[patch-docusaurus-ssg] already patched — nothing to do");
  process.exit(0);
}

// Insert after the last ssgRequireFunction.* assignment before the return
const ANCHOR = "ssgRequireFunction.main = realRequire.main;";
const PATCH = `    ssgRequireFunction.resolveWeak = (id) => {
        try { return realRequire.resolve(id); } catch (_) { return undefined; }
    };`;

if (!src.includes(ANCHOR)) {
  console.error(
    "[patch-docusaurus-ssg] anchor string not found — manual fix required"
  );
  process.exit(1);
}

src = src.replace(ANCHOR, `${ANCHOR}\n${PATCH}`);
fs.writeFileSync(target, src, "utf-8");
console.log("[patch-docusaurus-ssg] successfully added resolveWeak polyfill");
