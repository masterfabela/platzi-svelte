import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'Jose Ramon',
    lastName: 'Vieites',
  },
});

export default app;
