<script>
  import Hero from '$lib/components/common/Hero.svelte';
  import Footer from '$lib/components/common/Footer.svelte';
  import Navbar from '$lib/components/common/Navbar.svelte';
</script>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 850px;
  }
</style>

<Navbar current_page="Home" />
<main>
  <Hero />
</main>
<Footer />
