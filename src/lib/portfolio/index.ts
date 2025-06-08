import { nockTradeProject, nockTradeWebsite } from './nock-exchange.svelte'

export type PortfolioItem = {
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

export const portfolio: PortfolioItem[] = [
  nockTradeWebsite,
  nockTradeWebsite,
  nockTradeWebsite,
  nockTradeWebsite,
  nockTradeWebsite,
  nockTradeWebsite,
  nockTradeWebsite,
  nockTradeProject,
  nockTradeProject,
  nockTradeProject,
  nockTradeProject,
  nockTradeProject,
  nockTradeProject,
  nockTradeProject,
  nockTradeProject
]
