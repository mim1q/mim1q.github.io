<script lang="ts">
  import MediaQuery from 'svelte-media-queries';
  import MobileNavbar from './MobileNavbar.svelte';

  export let pages: { title: string; path: string }[] = [
    { title: 'Home', path: '/' },
    { title: 'My Projects', path: '/projects' },
    { title: 'Commissions', path: '/commissions' },
    { title: 'Donate', path: 'https://ko-fi.com/mim1q' },
    { title: 'Contact', path: '/contact' },
  ];
  export let current_page = 'Home';
</script>

<style lang="scss">
  nav {
    border-radius: 0 0 1rem 1rem;
    border: 3px solid var(--shadow-color);
    border-top: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 calc(50vw - 400px);
    margin-bottom: 1rem;
    box-shadow: 0px 0.5rem 16px var(--shadow-color);
  }

  .nav-element {
    width: 100%;
    line-height: 4rem;
    text-align: center;

    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
      transform 0.2s ease-in-out;

    & a {
      display: block;
      font-family: var(--title-font);
      font-weight: 400;
      color: var(--text-color);
      text-decoration: none;
      transition: transform 0.2s ease-in-out;
    }

    &.active {
      background-color: #fff5c610;
      & a {
        color: var(--accent-color);
      }

      &::after {
        content: '';
        display: block;
        width: 100%;
        border-bottom: 3px solid var(--accent-color);
        border-radius: 0 0 3px 3px;
        margin-top: -3px;
      }
    }

    &:hover {
      background-color: #fff5c610;
      & a {
        color: var(--accent-color);
        transform: scale(1.05) translateY(-0.15rem);
      }
    }

    &:focus {
      background-color: #fff5c610;
    }
  }
</style>

<MediaQuery query="(min-width: 961px)" let:matches>
  {#if !matches}
    <MobileNavbar {pages} {current_page} />
  {:else}
    <nav>
      {#each pages as page}
        <div class="nav-element" class:active={current_page == page.title}>
          <a href={page.path}>{page.title}</a>
        </div>
      {/each}
    </nav>
  {/if}
</MediaQuery>
