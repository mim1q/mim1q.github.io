<script lang="ts">
  import IoMdDownload from 'svelte-icons/io/IoMdDownload.svelte';
  import { populateTotalDownloads, type ModData } from '$lib/data/ModData';
  import { onMount } from 'svelte';

  export let data: ModData;

  onMount(async () => {
    data = await populateTotalDownloads(data);
  });

  const githubLogoSvg = `<svg width="24" height="24" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="currentColor"/></svg>`;
  const curseforgeLogoSvg = `<svg width="24" height="24" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m 781.90522,392.23328 c 0,0 209.07747,-33.42024 242.09478,-130.89136 H 703.71939 V 184 H 0 l 86.690025,101.97005 v 104.4764 c 0,0 218.739415,-11.52986 303.351105,53.51083 115.81983,108.82061 -130.26394,255.9203 -130.26394,255.9203 L 217.57945,841.42565 C 283.56499,777.73522 409.32973,695.34087 639.91313,699.31221 552.16573,727.42326 463.93295,771.33419 395.24249,841.42565 H 861.36795 L 817.47357,699.87758 c 0,0 -337.83451,-201.9456 -35.56835,-307.6443 z" fill="currentColor"/></svg>`;
  const modrinthLogoSvg = `<svg width="24" height="24" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m 1006.3211,645.12488 c 22.78,-84.18 24.32,-175.3 0.08,-265.6 C 933.14114,106.46468 652.08114,-55.595317 378.66114,17.564703 167.62134,74.044683 22.780935,254.14488 1.3810171,458.94488 H 87.981135 c 20.600005,-166.28 139.500005,-311.4804 311.520005,-357.5204 212.6,-56.899997 430.76,57.9202 506.84,259.3404 l -84.28,22.54 c -38.78,-93.7 -116.92,-162.4 -209.46,-191.6604 l -15.48,87.6804 c 73.06,26.94 132.32,87.68 154,168.5 31.6,117.78 -27.24,238.46 -134,288.52 l 23.06,85.98 c 140.32,-57.9 224.62,-203.72 204.68,-354.04 l 83.96,-22.46 c 9,57.42 5.88,114.5 -7.72,168.32 z" fill="currentColor" style="stroke-width:2" /><path d="m 643.98114,1006.4449 c -273.44,73.16 -554.479805,-88.90002 -627.759785,-361.96002 -8.5399999,-31.86 -13.8802199,-63.82 -16.22021986,-95.56 H 86.541135 c 2.18,23.82 6.3998,47.78 12.8198,71.66 6.720005,25.02 15.540205,48.92 26.220205,71.56 l 77.18,-46.3 c -6.5002,-15 -11.98,-30.64 -16.34,-46.9 -48.08,-179.2 58.4,-363.4 237.84,-411.4198 34,-9.1 68.2,-12.64 101.6,-11.22 l -15.48,87.6998 c -20.92,0.1 -42.16,2.84 -63.32,8.5 -132.44,35.46 -211.04,171.4 -175.56,303.68 2.2,8.14 4.76,16.08 7.68,23.8 l 98.7,-59.22 -29.74,-78.86 93.2,-95.74 117.8,-25.38 34.1,41.98 -54.3,55 -47.36,14.9 -33.84,34.78 16.58,46.14 c 0,0 33.58,35.68 33.64,35.7 l 47.44,-12.62 33.76,-37.08 73.72,-23.34 21.96,49.4 -76.06,93.26 -127.46,40.36 -57.16,-63.64 -99.64,59.78 c 51.08,58.16 127.88,90.46 207.5,83.72 l 23.06,85.98 c -118.82,15.72 -234.88,-33.46 -306.98,-123.82 l -76.8202,46.08 c 101.2202,132.98 276.4002,198.86 447.9402,152.96 123.48,-33.04 219.58,-117.2 271.62,-223.56 l 85.28,31 c -61.78,132.56 -179.68,237.88 -332.14,278.68002 z" fill="currentColor" style="stroke-width:2" /></svg>`;
</script>

<style lang="scss">
  .mod-project-container {
    display: flex;
    width: 750px;
    margin: 1rem 0;

    @media screen and (max-width: 960px) {
      flex-direction: column;
      align-items: center;
      width: min(500px, 70vw);
      gap: 1rem;

      & .mod-icon {
        width: 128px;
        height: 128px;
      }

      & .mod-title {
        justify-content: center;
      }

      & .mod-nav {
        justify-content: center;
      }
    }
  }

  .mod-icon {
    border-radius: 1rem;
    height: 192px;
    width: 192px;
    margin-right: 1rem;
    box-shadow: 0.5rem 0.5rem 16px var(--shadow-color);
  }

  h3 {
    font-size: min(5vw, 1.5rem);
    font-family: var(--title-font);
    margin: 0;
    margin-right: 0.5rem;
    text-align: center;
  }

  .mod-title {
    display: flex;
    align-items: center;
  }

  .download-count {
    flex-shrink: 0;
    font-size: 1rem;
    display: flex;
    height: 1.5rem;
    opacity: 0.67;
  }

  .mod-nav {
    display: flex;
    gap: 1rem;
  }

  a {
    color: var(--text-color);
    display: inline-flex;
    gap: 0.25rem;
    transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05) translateY(-0.15rem);
      color: var(--accent-color);
    }
  }

  p {
    white-space: pre-wrap;
  }
</style>

<div class="mod-project-container">
  <img class="mod-icon" src={data.icon} alt="Mod Icon" />
  <div>
    <div class="mod-title">
      <h3>{data.title}</h3>
      <span class="download-count">
        {#if data.totalDownloads}
          <IoMdDownload /> {data.totalDownloads.toLocaleString()}+
        {/if}
      </span>
    </div>
    <div class="mod-data" />
    <p>{data.description}</p>
    <div class="mod-nav">
      <a href={'https://www.curseforge.com/minecraft/mc-mods/' + data.curseforgeSlug}>
        {@html curseforgeLogoSvg} CurseForge
      </a>
      <a href={'https://modrinth.com/mod/' + data.modrinthId}>
        {@html modrinthLogoSvg} Modrinth
      </a>
      <a href={'https://github.com/' + data.githubId}>
        {@html githubLogoSvg} GitHub
      </a>
    </div>
  </div>
</div>
