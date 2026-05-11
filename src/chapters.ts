export const chapters = [
  {
    title: 'Getting Started',
    items: [
      { label: 'Preface', path: '/' },
      { label: 'Introduction', path: '/introduction' },
      { label: 'Interpreters vs Compilers', path: '/interpreters-vs-compilers' },
      { label: 'Jargon & some boring stuff', path: '/jargon' },
      { label: 'Phases of Compiler', path: '/phases-of-compiler' },
      { label: 'SmallBoober', path: '/smallboober' },
    ],
  },
];

export const allPages = chapters.flatMap((ch) => ch.items);
