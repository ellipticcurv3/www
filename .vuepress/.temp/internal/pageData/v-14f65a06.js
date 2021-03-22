export const data = {
  "key": "v-14f65a06",
  "path": "/src/zh/",
  "title": "首页",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "title": "首页",
    "heroImage": "/images/hero.png",
    "actions": [
      {
        "text": "快速上手",
        "link": "/zh/guide/getting-started.html",
        "type": "primary"
      },
      {
        "text": "项目简介",
        "link": "/zh/guide/",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "简洁至上",
        "details": "以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。"
      },
      {
        "title": "Vue 驱动",
        "details": "享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。"
      },
      {
        "title": "高性能",
        "details": "VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2018-present Evan You"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "像数 1, 2, 3 一样容易",
      "slug": "像数-1-2-3-一样容易",
      "children": []
    }
  ],
  "filePathRelative": "src/zh/README.md",
  "git": {
    "updatedTime": 1614853239000,
    "contributors": [
      {
        "name": "Ricardo Balk",
        "email": "14904229+ricardobalk@users.noreply.github.com",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updatePageData(data)
}
