<style lang="scss">
  h1 {
    grid-area: title;
    display: inline-flex;
    align-items: flex-end;
    margin: 0px;

    font-family: 'Montserrat';
    font-weight: 900;
    font-size: 4rem;
    font-style: normal;
    letter-spacing: 0.05rem;
  }

  .subtitle {
    grid-area: subtitle;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;

    font-family: 'Open Sans';
    letter-spacing: 0.05rem;
    line-height: 1.25em;

    & p {
      margin-bottom: 0px;
    }
  }

  img {
    grid-area: logo;
    width: 256px;
    height: 256px;
  }

  .header-container {
    display: grid;
    grid-template-rows: 128px 128px;
    grid-template-columns: 256px 1fr;
    grid-template-areas:
      'logo title'
      'logo subtitle';

    padding-right: 128px;
  }
</style>

<div class="header-container">
  <img src="./favicon.png" alt="Logo" />
  <h1>Hello, I'm Dominik!</h1>
  <span class="subtitle">
    <p>
      Online, I go by Mim1q. I'm a hobbyist programmer who loves to create cool things <br />
      I'm the author of several popular Minecraft mods for the Fabric mod loader <br />
    </p>
    <p>My preferred languages are: Java, Python and TypeScript</p>
  </span>
</div>
