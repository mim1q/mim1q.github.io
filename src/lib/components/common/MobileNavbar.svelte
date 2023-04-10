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
    z-index: 101;
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

    z-index: 100;

    &.visible {
      top: 0%;

      & + .fullscreen-dim {
        opacity: 1;
      }
    }
  }

  .fullscreen-dim {
    position: fixed;
    inset: 0;
    background-color: var(--shadow-color);
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    pointer-events: none;
  }

  a {
    display: block;
    position: relative;
    width: 100%;
    line-height: 4rem;
    text-align: left;

    font-family: var(--title-font);
    color: var(--text-color);
    text-decoration: none;
    padding-left: 2rem;

    &.active::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      border-radius: 0 6px 6px 0;
      width: 6px;
      background-color: var(--accent-color);
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
<div class="fullscreen-dim" />
<button on:click={switchVisible}>
  {#if visible}
    <MdClose />
  {:else}
    <MdClearAll />
  {/if}
</button>
