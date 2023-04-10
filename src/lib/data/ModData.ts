export interface ModData {
  icon: string;
  title: string;
  description: string;
  modrinthId: string;
  curseforgeId: string;
  curseforgeSlug: string;
  githubId: string;
  totalDownloads?: number;
}

const CURSEFORGE_API_PREFIX = 'https://api.cfwidget.com/minecraft/mc-mods/';
const MODRINTH_API_PREFIX = 'https://api.modrinth.com/v2/project/';

export async function populateTotalDownloads(data: ModData): Promise<ModData> {
  const modrinthResponse = await fetch(MODRINTH_API_PREFIX + data.modrinthId);
  const curseforgeResponse = await fetch(CURSEFORGE_API_PREFIX + data.curseforgeId);
  const modrinthDownloads = (await modrinthResponse.json())['downloads'];
  const curseforgeDownloads = (await curseforgeResponse.json())['downloads']['total'];
  data.totalDownloads = parseInt(modrinthDownloads) + parseInt(curseforgeDownloads);
  return data;
}
