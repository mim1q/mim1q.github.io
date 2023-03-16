<script>
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

<Navbar current_page="Contact" />
<main>Page content</main>
<Footer />
