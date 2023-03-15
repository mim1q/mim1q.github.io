<script>
  import Hero from '$lib/components/Hero.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';

  const navbar_links = [
    { title: 'Home', path: '/' },
    { title: 'My Projects', path: '/' },
    { title: 'Commissions', path: '/' },
    { title: 'Contact', path: '/' },
  ];
</script>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 850px;
  }
</style>

<Navbar pages={navbar_links} current_page="Home" />
<main>
  <Hero />
</main>
<Footer />
