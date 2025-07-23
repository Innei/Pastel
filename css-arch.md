```css
/* light mode 下的颜色色值 */
@theme {
  --color-blue: oklch(0.65 0.18 237);
}

/* 同时定义 light mode 和 dark mode 下的颜色色值，在颜色 key 后面增加 -light 和 -dark 后缀 */
/* 同时定义 kawaii 和 high-contrast 下的颜色色值，在颜色 key 后面增加 -kawaii 和 -hc 后缀 */
@theme {
  --color-blue-light: oklch(0.65 0.18 237);
  --color-blue-dark: oklch(0.7 0.16 237);

  --color-blue-kawaii: ...
  --color-blue-hc: ...
}

@layer theme {
  * {
    /* 覆盖 light mode 下的颜色色值，在 dark mode 下的颜色色值 */
    /* 只覆盖不带 -light 和 -dark 后缀的颜色色值 */
    @variant dark {
      --color-blue: oklch(0.7 0.16 237);
    }
  }
}

@custom-variant kawaii (&:where([data-contrast=low], [data-theme=low] *));
@custom-variant high-contrast (&:where([data-contrast=high], [data-contrast=high] *));


@layer theme {
  [data-contrast=low], [data-contrast=low] * {

     /* 使用 kawaii 的 color 覆盖 regular 下的颜色色值 */
      --color-blue: ...

      /* 使用 kawaii 的 dark 下的 color 覆盖 regular 下的颜色色值 */
      @variant dark {
        --color-blue: ...
      }

  }
}



@layer theme {
   [data-contrast=high], [data-contrast=high] * {
     /* 使用 high-contrast 的 color 覆盖 regular 下的颜色色值 */
      --color-blue: ...

      /* 使用 high-contrast 的 dark 下的 color 覆盖 regular 下的颜色色值 */
      @variant dark {
        --color-blue: ...
      }

  }
}
```
