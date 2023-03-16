<script>
  import Hero from '$lib/components/common/Hero.svelte';
  import Footer from '$lib/components/common/Footer.svelte';
  import Navbar from '$lib/components/common/Navbar.svelte';
  import Main from '$lib/components/common/Main.svelte';
</script>

<Navbar current_page="Home" />
<Main>
  <Hero />
</Main>
<Footer />
