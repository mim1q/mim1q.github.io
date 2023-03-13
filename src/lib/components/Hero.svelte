<style lang="scss">
  .hero-container {
    display: flex;
    align-items: center;
    margin-right: 128px;
  }

  .title-container {
    max-width: 600px;
  }

  img {
    margin: 8px;
    width: 240px;
    height: 240px;
  }

  h1 {
    margin: 0px;

    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
  }

  p {
    font-family: 'Open Sans', sans-serif;
  }

  @media screen and (max-width: 960px) {
    .hero-container {
      flex-direction: column;
      margin-right: 0px;
      text-align: center;
    }
  }
</style>

<div class="hero-container">
  <img src="./favicon.png" alt="Logo" />
  <div class="title-container">
    <h1>Hello, I'm Dominik!</h1>
    <span class="subtitle">
      <p>
        Online, I go by Mim1q. I'm a hobbyist programmer and artist who loves to create cool things.
        I'm the author of several popular Minecraft mods for the Fabric mod loader. <br />
      </p>
      <p>My preferred languages are: Java, Kotlin, Python and TypeScript</p>
    </span>
  </div>
</div>
