<script>
  import ModProject from './ModProject.svelte';
</script>

<style lang="scss">
  .project-list {
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
  }
</style>

<div class="project-list">
  <ModProject
    data={{
      icon: 'https://cdn.modrinth.com/data/9Qdvz1OV/6995132866962a61b21427d6fc1b74ce682a8446.png',
      title: 'Mine Cells',
      description:
        'Mine Cells brings content from Dead Cells into Minecraft\nExplore new dimensions, fight challenging mobs and bosses using fun new weapons!',
      modrinthId: 'minecells',
      curseforgeId: '618790',
      curseforgeSlug: 'minecells',
      githubId: 'mim1q/MineCells',
    }}
  />
  <ModProject
    data={{
      icon: 'https://cdn.modrinth.com/data/gMWAhU1n/21ebea0e3f802dc4726be01e804514f2171d2625.png',
      title: 'Convenient Decor',
      description:
        'Convenient Decor introduces many decorations that will make your world prettier, while also having a functionality.\nWeather vanes, umbrellas, leaf piles and more!',
      modrinthId: 'convenient-decor',
      curseforgeId: '794452',
      curseforgeSlug: 'convenient-decor',
      githubId: 'mim1q/ConvenientDecor',
    }}
  />
  <ModProject
    data={{
      icon: 'https://cdn.modrinth.com/data/eUsHC1iS/7aa0b2b97cb79f1a1c54657d8cd474531a41e3b1.png',
      title: 'Convenient Name Tags',
      description:
        'Convenient Name Tags implements several improvements to vanilla Name Tags - most notably a "Rename Name Tag" screen.',
      modrinthId: 'convenient-name-tags',
      curseforgeId: '662763',
      curseforgeSlug: 'convenient-name-tags',
      githubId: 'mim1q/ConvenientNameTags',
    }}
  />
</div>
