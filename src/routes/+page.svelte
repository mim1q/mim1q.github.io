<script>
  import Hero from '$lib/components/common/Hero.svelte';
  import Footer from '$lib/components/common/Footer.svelte';
  import Navbar from '$lib/components/common/Navbar.svelte';
  import Main from '$lib/components/common/Main.svelte';
  import CtaButton from '$lib/components/home/CtaButton.svelte';
</script>

<style lang="scss">
  .cta-buttons {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 3rem 0px;
    width: 925px;
    gap: 1rem;
    flex-wrap: wrap;

    @media screen and (max-width: 960px) {
      margin: 1rem 0px;
      width: auto;
      justify-content: center;
    }
  }
</style>

<Navbar current_page="Home" />
<Main>
  <Hero />
  <div class="cta-buttons">
    <CtaButton text="Support me on Ko-Fi" link="https://ko-fi.com/mim1q" />
    <CtaButton text="Contact me" link="/contact" full={false} />
  </div>
  <h2 id="projects">My projects</h2>
</Main>
<Footer />
