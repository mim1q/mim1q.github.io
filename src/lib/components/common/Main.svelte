<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: calc(100vh - 10rem);

    @media screen and (max-width: 960px) {
      min-height: calc(100vh - 5rem);
    }
  }
</style>

<main>
  <slot />
</main>
