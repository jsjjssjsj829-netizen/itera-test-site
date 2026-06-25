# Patch Proposal patch-4f9baf7e

生成最小修复补丁，优先覆盖用户反馈中的阻塞路径。

## Files

## index.html

Intent: 定位并修复用户反馈对应的异常路径。

```diff
diff --git a/index.html b/index.html
--- a/index.html
+++ b/index.html
@@
+<div class="itera-ai-example" data-itera-ai-example>   <p class="itera-ai-product-price">¥129</p>   <p class="itera-ai-shipping-note">满 99 包

```

## styles.css

Intent: 定位并修复用户反馈对应的异常路径。

```diff
diff --git a/styles.css b/styles.css
--- a/styles.css
+++ b/styles.css
@@
+/* data-itera-ai-example * / .product-card .itera-ai-example {   width: 100%;   margin: 2px 0 0;   padding-top: 10px;   border-top: 1px soli

```

## scripts/check-site.js

Intent: 定位并修复用户反馈对应的异常路径。

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
- `npm run test:e2e`

## Risk Gates

- [ ] PR 必须通过 CI
- [ ] 人工 Review 后才允许合并
- [ ] 预览环境完成浏览器巡检
