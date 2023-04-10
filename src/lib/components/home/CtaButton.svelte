<script lang="ts">
  export let link: string = '/#';
  export let text: string = 'Lorem Ipsum';
  export let full: boolean = true;
</script>

<style lang="scss">
  a {
    display: block;

    border-radius: 1rem;
    border: 2px solid var(--accent-color);
    padding: 1rem;

    color: var(--accent-color);
    text-decoration: none;
    text-align: center;
    font-family: var(--title-font);
    font-weight: 600;

    box-shadow: 0.5rem 0.5rem 16px var(--shadow-color);

    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
      border-color 0.2s ease-in-out, transform 0.2s ease-in-out;

    &.full {
      background-color: var(--accent-color);
      color: var(--bg-color);
    }

    &:hover {
      --accent-color: var(--text-color);
      transform: scale(1.05) translateY(-0.15rem);
    }
  }
</style>

<a class:full href={link}>{text}</a>
