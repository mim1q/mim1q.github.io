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

const URL = 'https://raw.githubusercontent.com/mim1q/DownloadCounter/master/output/mods.json';

export async function populateTotalDownloads(data: ModData): Promise<ModData> {
  const response = await fetch(URL);
  const mods = (await response.json())['mods'];
  for (const mod of mods) {
    if (mod['name'] == data.title) {
      data.totalDownloads = parseInt(mod['downloads']);
      return data;
    }
  }
  return data;
}
