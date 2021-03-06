module.exports = {
  title: 'Lando',
  description: 'The liberating local development tool for all your projects.',
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}],
    ['link', {rel: 'stylesheet', href: '/styles/overrides.css'}],
    ['link', {rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Dosis&display=swap'}],
    ['link', {rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap'}],
    ['link', {rel: 'stylesheet', href: '//cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css'}],
    ['link', {rel: 'stylesheet', href: '//cdn.jsdelivr.net/devicons/1.8.0/css/devicons.min.css'}],
    ['script', {src: '//js.hs-scripts.com/6478338.js'}],
    ['script', {src: '//js.hsforms.net/forms/shell.js'}],
  ],
  plugins: {
    '@vuepress/google-analytics': {
      ga: 'UA-74237404-3',
    },
    'autometa': {
      site: {
        name: 'Lando',
        twitter: 'devwithlando',
      },
      canonical_base: 'https://lando.dev',
    },
    'canonical': {
      baseURL: 'https://lando.dev',
    },
    'robots': {
      host: 'https://lando.dev',
    },
    'sitemap': {
      hostname: 'https://lando.dev',
      exclude: ['/404.html'],
    },
  },
  themeConfig: {
    docsDir: 'website',
    docsBranch: 'master',
    logo: '/images/logo-small-white.png',
    search: false,
    editLinks: false,
    nav: [
      {text: 'Get Lando!', link: '/download/'},
      {text: 'Join The Alliance', link: '/alliance/join/'},
      // {text: 'Services', link: '/services/'},
      // {text: 'Support', link: '/support/'},
      {text: 'Documentation', link: 'https://docs.lando.dev'},
      {text: 'GitHub', link: 'https://github.com/lando/lando'},
    ],
  },
};
