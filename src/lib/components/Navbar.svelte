<script lang="ts">
  import MediaQuery from 'svelte-media-queries';
  import MobileNavbar from './MobileNavbar.svelte';

  export let pages: { title: string; path: string }[] = [
    { title: 'Home', path: '/' },
    { title: 'My Projects', path: '/projects' },
    { title: 'Commissions', path: '/commissions' },
    { title: 'Contact', path: '/contact' },
  ];
  export let current_page = 'Home';
</script>

<style lang="scss">
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 calc(50vw - 350px);
    margin-bottom: 1rem;
    box-shadow: 0px 0.5rem 16px var(--shadow-color);
  }

  a {
    display: block;
    width: 100%;
    line-height: 4rem;
    text-align: center;

    font-family: var(--title-font);
    font-weight: 400;
    color: var(--text-color);
    text-decoration: none;

    transition: background-color 0.2s ease-in-out;

    &.active {
      background-color: #ffffff10;
      color: var(--accent-color);
      &::after {
        content: '';
        display: block;
        width: 100%;
        border-bottom: 3px solid var(--accent-color);
        margin-top: -3px;
      }
    }

    &:hover {
      background-color: #ffffff10;
    }

    &:focus {
      background-color: #ffffff15;
    }
  }
</style>

<MediaQuery query="(min-width: 961px)" let:matches>
  {#if !matches}
    <MobileNavbar {pages} {current_page} />
  {:else}
    <nav>
      {#each pages as page}
        <a class:active={current_page == page.title} href={page.path}>{page.title}</a>
      {/each}
    </nav>
  {/if}
</MediaQuery>
