import { defineConfigWithTheme } from 'vitepress';
import type { ThemeConfig } from '../src/types';
import { getPosts } from '../src/utils/getPosts';

const { posts, rewrites } = await getPosts({ pageSize: 7, index: false, folder: 'posts' });

export default defineConfigWithTheme<ThemeConfig>({
  title: 'Touch Grass',
  titleTemplate: 'VitePress Theme Minimalism',
  description: 'My Blog',
  base: '',
  rewrites,
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    posts,
    page: {
      max: 5,
      pinned: 'pinned'
    },
    comment: {
      serverURL: 'https://domain.com'
    },
    logo: '/grass.jpg',
    outline: { level: 2 },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/page-1' },
      { text: 'Docs', link: '/docs/doc1' },
      { text: 'Archives', link: '/pages/archives' },
      { text: 'Tags', link: '/pages/tags' }
    ],
    sidebar: {
      '/docs': [
        {
          text: 'Docs',
          items: [
            { text: 'Doc 1', link: '/docs/doc1' },
            { text: 'Doc 2', link: '/docs/doc2' },
            { text: 'Doc 3', link: '/docs/doc3' },
            { text: 'Doc 4', link: '/docs/doc4' },
            { text: 'Doc 5', link: '/docs/doc5' }
          ]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/vinitkesh' }],
    footer: {
    },
    search: { provider: 'local' }
  },
  markdown: {
    theme: 'dark-plus',
    lineNumbers: true
  }
});
