export const chapters = [
  {
    title: 'General introduction',
    items: [
      { label: 'Preface', path: '/' },
      { label: 'Introduction', path: '/introduction/introduction' },
      { label: 'Interpreters vs Compilers', path: '/introduction/interpreters-vs-compilers' },
      { label: 'Programming languages lingo', path: '/introduction/jargon' },
      { label: 'Phases of Compiler', path: '/introduction/phases-of-compiler' },
      { label: 'Our options', path: '/introduction/shortcuts' },
      { label: 'Lets begin', path: '/introduction/lets-begin' },
    ],
  },
  {
    title: 'Sealox && Jlox',
    items: [
      { label: 'Introduction', path: '/sealox/introduction' },
      { label: 'DataTypes', path: '/sealox/data-types' },
      { label: 'Expressions', path: '/sealox/expressions' },
      { label: 'Statements', path: '/sealox/statements' },
      { label: 'Control Flow', path: '/sealox/control-flow' },
  ],
  },
  {
    title: 'Luapp',
    items: [
      { label: 'Introduction', path: '/luapp/introduction' },
   ],
  },
  {
    title: 'Jlang',
    items: [
      { label: 'Introduction', path: '/jlang/introduction' },
      ],
  },
];

export const allPages = chapters.flatMap((ch) => ch.items);
