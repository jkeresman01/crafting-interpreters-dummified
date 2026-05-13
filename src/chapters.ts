export const chapters = [
  {
    title: 'Getting Started',
    items: [
      { label: 'Preface', path: '/' },
      { label: 'Introduction', path: '/introduction' },
      { label: 'Interpreters vs Compilers', path: '/interpreters-vs-compilers' },
      { label: 'Jargon & some boring stuff', path: '/jargon' },
      { label: 'Phases of Compiler', path: '/phases-of-compiler' },
    ],
  },
  {
    title: 'SmallBoober',
    items: [
      { label: 'Introduction', path: '/smallboober/introduction' },
      { label: 'DataTypes', path: '/smallboober/data-types' },
    ],
  },
];

export const allPages = chapters.flatMap((ch) => ch.items);
