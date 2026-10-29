export const chapters = [
  {
    title: 'General introduction',
    items: [
      { label: 'Preface', path: '/' },
      { label: 'Introduction', path: '/introduction' },
      { label: 'Shortcuts & Alternate Routes', path: '/shortcuts' },
      { label: 'Interpreters vs Compilers', path: '/interpreters-vs-compilers' },
      { label: 'Jargon & some boring stuff', path: '/jargon' },
      { label: 'Phases of Compiler', path: '/phases-of-compiler' },
      { label: 'Lets begin', path: '/lets-begin' },
    ],
  },
  {
    title: 'Sealox && Jlox',
    items: [
      { label: 'Introduction', path: '/sealox/introduction' },
  ],
  },
  {
    title: 'Luapp',
    items: [
      { label: 'Introduction', path: '/sealox/introduction' },
   ],
  },
  {
    title: 'Jlang',
    items: [
      { label: 'Introduction', path: '/sealox/introduction' },
      ],
  },
];

export const allPages = chapters.flatMap((ch) => ch.items);
