<script lang="ts">
  export let pages: { title: string; path: string }[];
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
      &::after {
        content: '';
        display: block;
        width: 100%;
        border-bottom: 3px solid rgb(56, 129, 54);
        margin-bottom: -3px;
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

<nav>
  {#each pages as page}
    <a class:active={current_page == page.title} href={page.path}>{page.title}</a>
  {/each}
</nav>
