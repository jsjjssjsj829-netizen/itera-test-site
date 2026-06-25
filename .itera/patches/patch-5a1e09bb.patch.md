# Patch Proposal patch-5a1e09bb

生成最小功能补丁，先满足可验证的核心需求。

## Files

## index.html

Intent: 实现最小可验证功能，并保留配置开关。

```diff
diff --git a/index.html b/index.html
--- a/index.html
+++ b/index.html
@@
-Add to cart
+Add

```

## scripts/check-site.js

Intent: 实现最小可验证功能，并保留配置开关。

```diff
diff --git a/scripts/check-site.js b/scripts/check-site.js
--- a/scripts/check-site.js
+++ b/scripts/check-site.js
@@
+// data-itera-text-replacement-2mc63u
+if (!html.includes("Add")) {
+  throw new Error("index.html is missing replacement text Add");
+}

```

## Verification Commands

- `npm test`
- `npm run lint`

## Risk Gates

- [ ] PR 必须通过 CI
- [ ] 人工 Review 后才允许合并
- [ ] 预览环境完成浏览器巡检
