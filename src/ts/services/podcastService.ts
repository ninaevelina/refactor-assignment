import axios from 'axios'
import type { IPodcast } from '../models/IPodcast'
import type { ISRResponse } from '../models/ISRResponse'

export async function getSRPodcasts (): Promise<IPodcast[]> {
  const response = await axios.get<ISRResponse>('https://api.sr.se/api/v2/programs/index?programcategoryid=133&format=json&pagination=false&indent=true&filter=program.archived&filterValue=false')
  return response.data.programs
}
