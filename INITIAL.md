# FEATURE:

- 构建一套 UI 交互颜色系统。类似 Apple UIKit 中的颜色体系。

颜色体系分类：

- 常规颜色：blue, red, green, yellow, purple, orange, pink, brown, gray, black, white, sky, netural
- 元素颜色：border, separator, link, text(深度体系), placeholderText, disabled-control, disabled-text
- 背景颜色：background（深度体系）
- 材质颜色：material-ultra-thick, material-thick, material-medium, material-thin, material-ultra-thin, material-opaque
- 填充颜色：fill(深度体系)
- 应用颜色：accent, primary, secondary

**深度体系**：常规（没有任何前缀），第二颜色（secondary），第三颜色（tertiary），第四颜色（quaternary），第五颜色（quinary）

除了常规颜色和应用颜色之外的部分需要给出应用此颜色的场景。

- 颜色支持 P3 色域。
- 颜色系统定义使用 TypeScript 编写，导出颜色系统定义常量。
- 支持 TailwindCSS V4, 编写 tailwindcss 的配置文件（v4 采用 css 作为配置文件）。
- 使用 Monorepo 分离颜色系统的定义和 tailwindcss 的配置。
- TailwindCSS 的配置文件应该根据 子包颜色系统定义包自动生成。

TailwindCSS V4: https://context7.com/context7/tailwindcss/llms.txt
