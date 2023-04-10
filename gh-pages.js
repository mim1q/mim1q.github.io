import { publish } from 'gh-pages';

publish(
  'build',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/mim1q/mim1q.github.io.git',
    user: {
      name: 'Dominik Ziętko',
      email: 'mim1q.dev@gmail.com',
    },
    dotfiles: true,
  },
  () => {
    console.log('Deployed to GitHub Pages');
  },
).catch((error) => console.error(error));
