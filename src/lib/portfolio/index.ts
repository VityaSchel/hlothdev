import { nockTradeProject } from './nock-exchange.svelte'

export type Project = {
  type: 'website' | 'project'
  id: string
  name: string
  description: import('svelte').Snippet
  banner: string
  images: { url: string; alt: string }[]
  links: {
    url: string
    label: string
  }[]
}

export const portfolio: Project[] = [nockTradeProject]
