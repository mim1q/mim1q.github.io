<script lang="ts">
  import MdClearAll from 'svelte-icons/md/MdClearAll.svelte';
  import MdClose from 'svelte-icons/md/MdClose.svelte';

  export let pages: { title: string; path: string }[];
  export let current_page = 'Home';

  let visible = false;

  const switchVisible = () => {
    visible = !visible;
  };
</script>

<style lang="scss">
  button {
    position: fixed;
    top: 0.5rem;
    right: 0.5rem;
    border: none;
    width: 3rem;
    height: 3rem;

    color: var(--text-color);
    background-color: transparent;

    cursor: pointer;
  }

  nav {
    position: fixed;
    border-radius: 0 0 1rem 1rem;
    overflow: hidden;
    top: -20rem;
    left: 0px;
    right: 0px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0.5rem 16px var(--shadow-color);
    background: var(--bg-color);
    transition: top 0.2s ease-in-out;

    &.visible {
      top: 0%;
    }
  }

  a {
    display: block;
    width: 100%;
    line-height: 4rem;
    text-align: left;

    font-family: var(--title-font);
    color: var(--text-color);
    text-decoration: none;
    padding-left: 2rem;

    &.active {
      padding-left: calc(2rem - 6px);
      border-left: 6px solid var(--accent-color);
    }

    &:focus {
      background-color: #ffffff10;
    }
  }
</style>

<nav class:visible>
  {#each pages as page}
    <a class:active={current_page == page.title} href={page.path}>{page.title}</a>
  {/each}
</nav>
<button on:click={switchVisible}>
  {#if visible}
    <MdClose />
  {:else}
    <MdClearAll />
  {/if}
</button>
