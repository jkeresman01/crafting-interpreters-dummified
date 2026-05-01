export const chapters = [
  {
    title: 'Getting Started',
    items: [{ label: 'Preface', path: '/' }],
  },
];

export const allPages = chapters.flatMap((ch) => ch.items);
