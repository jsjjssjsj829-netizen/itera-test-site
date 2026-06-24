# Patch Proposal patch-af2952b3

生成最小功能补丁，先满足可验证的核心需求。

## Files

## index.html

Intent: 实现最小可验证功能，并保留配置开关。

```diff
diff --git a/index.html b/index.html
--- a/index.html
+++ b/index.html
@@
+<div class="itera-ai-example" data-itera-ai-example>   <div class="itera-ai-promo-copy">     <p class="itera-ai-kicker">Weekend Picks</p>   

```

## styles.css

Intent: 实现最小可验证功能，并保留配置开关。

```diff
diff --git a/styles.css b/styles.css
--- a/styles.css
+++ b/styles.css
@@
+/* data-itera-ai-example: homepage and catalog visual refresh * / .itera-ai-example {   display: flex;   align-items: center;   justify-cont

```

## scripts/check-site.js

Intent: 实现最小可验证功能，并保留配置开关。

```diff
diff --git a/scripts/check-site.js b/scripts/check-site.js
--- a/scripts/check-site.js
+++ b/scripts/check-site.js
@@
+if (!html.includes("data-itera-ai-example")) throw new Error("index.html is missing AI generated marker data-itera-ai-example");

```

## Verification Commands

- `npm test`
- `npm run lint`

## Risk Gates

- [ ] PR 必须通过 CI
- [ ] 人工 Review 后才允许合并
- [ ] 预览环境完成浏览器巡检
