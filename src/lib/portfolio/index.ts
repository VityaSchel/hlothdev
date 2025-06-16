import { nockTradeWebsite } from './nock-trade.svelte'
import { moreOfMeWebsite } from './moreofme.svelte'

export type PortfolioItem = {
  type: 'website' | 'project'
  id: string
  name: string
  description: import('svelte').Snippet
  /** Description for meta-tags under 160 characters */
  shortDescription: string
  banner: string
  images: { url: string; alt: string }[]
  links: {
    url: string
    label: string
  }[]
}

const websites: PortfolioItem[] = [
  nockTradeWebsite,
  moreOfMeWebsite,
  // x5Websites,
  // undditWebsite,
  // ryoCoinWebsite,
  // batumiBikeWebsite,
  // sessionWebWebsite
  // sipackerWebsite,
  // ogeGeneratorWebsite,
  // atmosCraftWebsite
]

const projects: PortfolioItem[] = [
  // lufinProject,
  // onsRegistryProject,
  // samsungPingerProject,
  // sessionNativeProject,
  // bunsogsProject,
  // sessionNotifierProject,
  // jswitcherProject,
  // sessionWatchosProject,
  // mtprotoMobileProject,
  // ps4mergerProject
]

export const portfolio: PortfolioItem[] = [...websites, ...projects]
