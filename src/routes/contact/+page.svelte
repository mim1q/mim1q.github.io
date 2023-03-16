<script lang="ts">
  import Footer from '$lib/components/common/Footer.svelte';
  import Main from '$lib/components/common/Main.svelte';
  import Navbar from '$lib/components/common/Navbar.svelte';

  const socials = [
    {
      title: 'E-mail',
      name: 'mim1q.dev@gmail.com',
      href: 'mailto:mim1q.dev@gmail.com',
    },
    {
      title: 'GitHub',
      name: 'mim1q',
      href: 'https://github.com/mim1q',
    },
    {
      title: 'Discord Server',
      name: 'Invite link',
      href: 'https://discord.gg/HjHbtsY5Hg',
    },
    {
      title: 'Youtube',
      name: 'Mim1q',
      href: 'https://www.youtube.com/channel/UCw8q81zplU2G-_HpHrVH13w',
    },
  ];
</script>

<style lang="scss">
  h1 {
    margin-top: 3rem;
    font-family: var(--title-font);
    font-size: min(3rem, 8vw);
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0px;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.25rem;
    height: 2em;
  }

  .social {
    margin-right: 2rem;
    color: var(--accent-color);
    font-weight: 700;
  }

  a {
    color: var(--text-color);
  }

  @media screen and (max-width: 960px) {
    li {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      height: 4em;
    }
  }
</style>

<Navbar current_page="Contact" />
<Main>
  <h1>
    How can <span class="accent-color">You<br /></span> reach <span class="accent-color">me</span>?
  </h1>
  <ul>
    {#each socials as social}
      <li>
        <span class="social">{social.title}</span>
        <a href={social.href}>{social.name}</a>
      </li>
    {/each}
  </ul>
</Main>
<Footer />
