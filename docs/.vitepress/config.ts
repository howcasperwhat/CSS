import mathjax3 from 'markdown-it-mathjax3';
import { defineConfig } from 'vitepress'

const customElements = ['mjx-container'];

export default defineConfig({
  base: '/CSS/',
  title: 'CSS Note',
  description: 'CSS Note.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
  themeConfig: {
    siteTitle: 'CSS Note',
    logo: 'img/logo.png',
    nav: [
      // { text: 'Guide', link: '/guide', activeMatch: '/' },
    ],
    sidebar: [
      {
        text: 'Flex',
        link: '/flex/',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Casper Huang.'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/howcasperwhat/CSS' }
    ]
  },
})