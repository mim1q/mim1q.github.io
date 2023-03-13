<script>
  import Hero from '$lib/components/Hero.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 850px;
  }
</style>

<main>
  <Hero />
</main>
<Footer />
