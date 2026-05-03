export const chapters = [
  {
    title: 'Getting Started',
    items: [
      { label: 'Preface', path: '/' },
      { label: 'Introduction', path: '/introduction' },
    ],
  },
];

export const allPages = chapters.flatMap((ch) => ch.items);
