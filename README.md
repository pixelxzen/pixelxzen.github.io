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

> 未填写时页面会自动隐藏微信号整行、并移除失效的「复制」按钮（见 `main.js` 的占位兜底），所以不填也不会露出半成品，只是少一个联系方式入口。

### 2. 二维码（已完成）

两张码已处理好并放进 `assets/`，页面直接引用：

| 文件 | 来源 | 处理 |
|------|------|------|
| `assets/wechat-qr.png` | 个人微信码 | **原图对比度不足**（最暗仅灰度 93，二值化后可解、但任何缩放都解不出），已用原图解码出的 `https://u.wechat.com/MKpDoUYDCB_Bck5LSxVHQwI?s=4` 重新生成标准码（504px / H 级纠错 / 41 模块），生成后复测可解码 |
| `assets/wechat-mp.png` | 公众号码 | 原图对比度正常，仅做 Otsu 二值化 + 统一到 504px |

> ⚠️ 个人微信码是**重新编码**的，内容等于原图二维码解码出的链接。发布后请用手机实扫一次确认能弹出好友名片；若失效，换回原图处理版本。

原图未入库 —— `assets/` 里放的是处理后的成品；两张原始 JPG（1280×1280）留在本地物料目录，不进版本库。

---

## 本地预览

```bash
python3 -m http.server 8912
# 打开 http://127.0.0.1:8912
```

---

## 设计说明

视觉语言对齐 **Hermes Agent 官网**的排版美学（实测提炼，非印象）：

| 手法 | 做法 |
|------|------|
| 纯色硬切分区 | hero 视频 → 纯紫 `#5B3FE8` → 纯白 `#FCFBF8` → 墨黑 `#0B0912` → 纯紫，区块之间无渐变过渡 |
| 衬线超大字 | 标题走 `Songti SC / 思源宋体` 900 字重，hero 字号 `clamp(50px, 8.4vw, 122px)` |
| 全站直角 | 所有卡片/按钮/二维码圆角归零，删掉全部投影 |
| 1px 细线 | 用 `border` 划分区域与卡片，替代原先的「卡片 + 阴影」 |
| 极端字号对比 | 122px 标题 ↔ 10px mono 小标，中间用宽字距大写字母标记 |
| 分类色克制 | 主题色只在区块间切换；青 `#3AD9E8` / 朱砂 `#C8453E` 仅作点缀 |

- **Hero**：沉浸式背景视频（无声循环、`autoplay muted loop playsinline`），
  遮罩只在左侧文字区做局部暗晕，右侧留亮让画面透出来；
  底部渐入纯紫与下一区块衔接。首屏不含任何卡片，视频独享满屏。
- **Logo**：导航与页脚用线条头像 `assets/avatar.png` 圆形呈现；
  个人简介条（落在「相逢」区）用 3D 渲染形象 `assets/me.jpg`。
- **台阶线条**：hero 底部的内联 SVG 折线 + 星轨，纯白细线压在视频上。
- **中英双语**：字典在 `main.js` 的 `EN` 对象；`data-i18n` 走文本、`data-i18n-html` 走富文本（首屏主文案靠它控制断行）。
- **动效**：滚动入场用 IntersectionObserver；`.js` 类保证 JS 失效时不白屏，
  `prefers-reduced-motion` 下自动关闭动效并停播背景视频。

## 维护备忘

- 作品数据（Star 数）写在 `index.html` 的「壁上陈列」列表里，需手动更新
- 新增作品：复制一个 `<li>` 到 `<ul class="shelf">`，星数为 0 时给 `.s-star` 加 `zero` 类
- 头像：`assets/avatar.png`（线条形象，导航/页脚 logo + favicon + og:image）
  与 `assets/me.jpg`（3D 形象，简介条）
- 换背景视频：重压一版替换 `assets/hero-loop.mp4`，并从视频抽一帧更新 `assets/hero-poster.jpg`
  ```bash
  ffmpeg -i 源视频.mp4 -an -vf fps=30 -c:v libx264 -preset slow -crf 30 -g 60 \
    -pix_fmt yuv420p -profile:v high -movflags +faststart assets/hero-loop.mp4
  ffmpeg -ss 1.5 -i assets/hero-loop.mp4 -frames:v 1 -q:v 6 assets/hero-poster.jpg
  ```
- 区块配色在 `style.css` 的 `.on-violet` / `.on-white` / `.on-ink` 三个主题类里改，
  HTML 里对应 `<section class="sec on-*">`
