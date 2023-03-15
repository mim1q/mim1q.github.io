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
    box-shadow: 0px 0.5rem 16px #00000080;
  }

  a {
    display: block;
    width: 100%;
    line-height: 4rem;
    text-align: center;

    font-family: 'Montserrat';
    font-weight: 400;
    color: #e1dfe4;
    text-decoration: none;

    transition: background-color 0.2s ease-in-out;

    &.active {
      background-color: #ffffff05;
      color: rgb(56, 195, 54);
      &::after {
        content: '';
        display: block;
        width: 100%;
        border-bottom: 3px solid rgb(56, 195, 54);
        margin-top: -3px;
      }
    }

    &:hover {
      background-color: #ffffff05;
    }

    &:focus {
      background-color: #ffffff10;
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
