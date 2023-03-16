<style lang="scss">
  .hero-container {
    display: flex;
    align-items: center;
    margin-right: 3%;
    margin-top: 2rem;
  }

  .title-container {
    max-width: 600px;
  }

  img {
    border-radius: 1rem;
    margin: 8px;
    margin-right: 3rem;
    width: 240px;
    height: 240px;
    box-shadow: 0.5rem 0.5rem 16px var(--shadow-color);
  }

  h1 {
    margin: 0px;

    font-family: var(--title-font);
    font-size: 3rem;
  }

  @media screen and (max-width: 960px) {
    .hero-container {
      flex-direction: column;
      margin-right: 0px;
      text-align: center;
    }

    .title-container {
      padding: 0px 1em;
    }

    h1 {
      font-size: min(8vw, 3rem);
    }

    img {
      margin: 2rem;
    }
  }
</style>

<div class="hero-container">
  <img src="./avatar.png" alt="Mim1q's Avatar" />
  <div class="title-container">
    <h1>Hello, I'm <span class="accent-color">Dominik</span>!</h1>
    <span class="subtitle">
      <p>
        Online, I go by Mim1q. I'm a hobbyist programmer and artist who loves to create cool things.
        I'm the author of several popular Minecraft mods for the Fabric mod loader.
        <br />
      </p>
      <p>My preferred languages are: Java, Kotlin, Python and TypeScript</p>
    </span>
  </div>
</div>
