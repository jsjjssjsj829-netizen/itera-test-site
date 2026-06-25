# Patch Proposal patch-9a07d97d

生成最小修复补丁，优先覆盖用户反馈中的阻塞路径。

## Files

## index.html

Intent: 定位并修复用户反馈对应的异常路径。

```diff
diff --git a/index.html b/index.html
--- a/index.html
+++ b/index.html
@@
-Demo catalog
+智能生活精选

```

## scripts/check-site.js

Intent: 定位并修复用户反馈对应的异常路径。

```diff
diff --git a/scripts/check-site.js b/scripts/check-site.js
--- a/scripts/check-site.js
+++ b/scripts/check-site.js
@@
+// data-itera-text-replacement-zt4d2v
+if (!html.includes("智能生活精选")) {
+  throw new Error("index.html is missing replacement text 智能生活精选");
+}

```

## Verification Commands

- `npm test`
- `npm run lint`
- `npm run test:e2e`

## Risk Gates

- [ ] PR 必须通过 CI
- [ ] 人工 Review 后才允许合并
- [ ] 预览环境完成浏览器巡检
