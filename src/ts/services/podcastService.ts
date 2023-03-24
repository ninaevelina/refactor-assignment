import axios from 'axios'
import type { IPodcast } from '../models/IPodcast'
import type { ISRResponse } from '../models/ISRResponse'

const SRApiUrl: string = import.meta.env.VITE_APP_API_URL as string

export async function getSRPodcasts (): Promise<IPodcast[]> {
  try {
    const response = await axios.get<ISRResponse>(SRApiUrl)
    return response.data.programs
  } catch (error) {
    console.log(error)
    console.log('Something went wrong! Cannot get podcasts, please try again later! :)')
    return []
  }
}
