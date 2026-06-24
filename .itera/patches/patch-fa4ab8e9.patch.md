# Patch Proposal patch-fa4ab8e9

生成最小功能补丁，先满足可验证的核心需求。

## Files

## index.html

Intent: 实现最小可验证功能，并保留配置开关。

```diff
diff --git a/index.html b/index.html
--- a/index.html
+++ b/index.html
@@
+<ul class="product-trust" data-itera-product-trust>
+  <li>正品保障</li>
+  <li>7 天无理由退换</li>
+  <li>安全支付</li>
+</ul>

```

## styles.css

Intent: 实现最小可验证功能，并保留配置开关。

```diff
diff --git a/styles.css b/styles.css
--- a/styles.css
+++ b/styles.css
@@
+/* data-itera-product-trust */
+.product-trust {
+  display: grid;
+  gap: 6px;
+  margin: 14px 0 0;
+  padding: 12px;
+  color: #164e63;
+  background: #ecfeff;
+  border: 1px solid #a5f3fc;
+  border-radius: 8px;
+  font-weight: 700;
+}

```

## scripts/check-site.js

Intent: 实现最小可验证功能，并保留配置开关。

```diff
diff --git a/scripts/check-site.js b/scripts/check-site.js
--- a/scripts/check-site.js
+++ b/scripts/check-site.js
@@
+if (!html.includes("data-itera-product-trust")) {
+  throw new Error("index.html is missing product trust marker data-itera-product-trust");
+}
+if (!css.includes("data-itera-product-trust")) {
+  throw new Error("styles.css is missing product trust marker data-itera-product-trust");
+}

```

## Verification Commands

- `npm test`
- `npm run lint`

## Risk Gates

- [ ] PR 必须通过 CI
- [ ] 人工 Review 后才允许合并
- [ ] 预览环境完成浏览器巡检
- [ ] 高风险任务必须启用灰度发布和回滚预案
