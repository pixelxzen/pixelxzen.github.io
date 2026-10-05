# pixelxzen.github.io

紫苏子ACG 的个人主页 —— **一格一阶，把想象铺成路**。

零依赖静态站：`index.html` + `style.css` + `main.js` + `assets/`，由 GitHub Pages 直接从 `main` 分支根目录托管。

线上地址：https://pixelxzen.github.io

---

## ⚠️ 待替换的占位符（发布前必做）

### 1. 微信号（6 处）

`index.html` 里共 6 处 `REPLACE_WECHAT_ID`，一次性替换：

```bash
sed -i '' 's/REPLACE_WECHAT_ID/你的微信号/g' index.html
```

分别位于：导航栏「加微信」、首屏主按钮、可托区「加微信，约一次」、可托区「私信谈合作」、相逢区微信号文本、相逢区「复制」按钮。

### 2. 两张二维码（2 处）

相逢区两个 `div.qr.qr-empty`（微信 / 公众号）目前是虚线占位块。把二维码图放进 `assets/`，然后把占位 div 换成图片：

```html
<!-- 微信：原 <div class="qr qr-empty" data-i18n="ct.qrph">二维码待替换</div> -->
<img class="qr" src="assets/wechat-qr.png" alt="微信二维码">

<!-- 公众号 -->
<img class="qr" src="assets/wechat-mp.png" alt="公众号二维码">
```

---

## 本地预览

```bash
python3 -m http.server 8912
# 打开 http://127.0.0.1:8912
```

---

## 设计说明

- **配色**取自线条头像：深靛紫 `#100C1E` 夜底 · 纸白 `#F4F1FB` · 主紫 `#8B6BFF` · 青 `#3AD9E8` · 朱砂印 `#C8453E`
- **结构**沿用竖向台阶叙事：第一阶·来路 → 第二阶·所铸 → 第三阶·可托 → 第四阶·相逢
- **节奏**整体夜紫，第三阶「可托」翻成亮色圆角纸块做视觉重音（暗-暗-**亮**-暗）
- **Hero** 的台阶折线与星轨是内联 SVG，无外部图片依赖
- **中英双语**切换，字典在 `main.js` 的 `EN` 对象里；`data-i18n` 走文本、`data-i18n-html` 走富文本（首屏主文案靠它控制断行）
- **滚动入场**用 IntersectionObserver；`.js` 类保证 JS 失效时不白屏，并在 `prefers-reduced-motion` 下自动关闭

## 维护备忘

- 作品数据（Star 数）写在 `index.html` 的「壁上陈列」列表里，需手动更新
- 新增作品：复制一个 `<li>` 到 `<ul class="shelf">`，星数为 0 时给 `.s-star` 加 `zero` 类
- 头像：`assets/avatar.png`（300×300，同时用作 favicon 与 og:image）
