import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Aarsh\'s ILO Guide',
  description: 'My Tips For The ILO',
  base: '/', // Set the base URL for deployment
  head: [
    ["link", { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" }]
  ],
  /*
  build: {
    rollupOptions: {
      external: [
        '/code/mecanum/processing.min.js' // Ensure the path matches the public folder reference
      ],
    },
  },
   */
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'Aarsh\'s Guide', // Displayed in the nav bar
    editLink: {
      pattern: 'https://github.com/International-Logic-Olympiad-ILO/Aarsh-s-Guide/edit/master/:path',
      text: 'Edit this page on GitHub',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Competition', link: 'Competition/Competition-Overview' },
      { text: 'Tools', link: '/Tool-Tutorials/Tool-Tutorials-Overview' },
      { text: 'Extra Resources', link: '/Extra-Resources/Extra-Resources-Overview' }
    ],

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Introduction', link: '/Overview/Introduction' }
        ]
      },
      {
        text: 'Competition',
        items: [
          { text: 'Overview', link: '/Competition/Competition-Overview' },
          { text: 'ILO 2024', link: '' },
          {
            items: [
              {text: 'Overview', link: '/ILO-2024/ILO-2024-Overview'},
              {text: 'Problems', link: '/ILO-2024/ILO-2024-Problems'}
            ]
          },
          { text: 'ILO 2025', link: '' },
          {
            items: [
              {text: 'Overview', link: '/ILO-2025/ILO-2025-Overview'},
              {text: 'Problems', link: '/ILO-2025/ILO-2025-Problems'}
            ]
          }
        ]
      },
      {
        text: 'Tool Tutorials',
        items: [
          {text: 'Overview', link: '/Tool-Tutorials/Tool-Tutorials-Overview'},
          {text: 'Babbage', link: ''},
          {
            items: [
              {text: 'Overview', link: '/Tool-Tutorials/Babbage/Babbage-Overview'}
            ]
          },
          {text: 'Fitch', link: ''},
          {
            items: [
              {text: 'Overview', link: '/Tool-Tutorials/Fitch/Fitch-Overview'}
            ]
          },
          {text: 'Hilbert', link: ''},
          {
            items: [
              {text: 'Overview', link: '/Tool-Tutorials/Hilbert/Hilbert-Overview'}
            ]
          },
          {text: 'Robinson', link: ''},
          {
            items: [
              {text: 'Overview', link: '/Tool-Tutorials/Robinson/Robinson-Overview'}
            ]
          }
        ]
      },
      {
        text: 'Extra Resources',
        items: [
          { text: 'Overview', link: '/Extra-Resources/Extra-Resources-Overview' }
        ]
      }
    ],
  },
});
