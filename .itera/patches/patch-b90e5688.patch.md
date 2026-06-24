# Patch Proposal patch-b90e5688

生成最小功能补丁，先满足可验证的核心需求。

## Files

## index.html

Intent: 实现最小可验证功能，并保留配置开关。

```diff
diff --git a/index.html b/index.html
--- a/index.html
+++ b/index.html
@@
+<div class="itera-ai-example" data-itera-ai-example>   <p class="itera-ai-product-price">¥129</p>   <p class="itera-ai-shipping-note">满 99 包

```

## styles.css

Intent: 实现最小可验证功能，并保留配置开关。

```diff
diff --git a/styles.css b/styles.css
--- a/styles.css
+++ b/styles.css
@@
+/* data-itera-ai-example * / .itera-ai-example {   display: grid;   gap: 4px;   margin-top: 2px; }  .itera-ai-example .itera-ai-product-pric

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
