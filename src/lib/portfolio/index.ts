import { nockTradeWebsite } from './nock-trade.svelte'
import { moreOfMeWebsite } from './moreofme.svelte'
import { x5Websites } from './x5-websites.svelte'
import { undditWebsite } from './unddit-website.svelte'
import { ryoCoinWebsite } from './ryo-coin-website.svelte'
import { batumiBikeWebsite } from './batumi-bike-website.svelte'
import { sessionWebWebsite } from './session-web-website.svelte'
import { sipackerWebsite } from './sipacker-website.svelte'
import { ogeGeneratorWebsite } from './oge-generator.svelte'
import { atmosCraftWebsite } from './atmos-craft-website.svelte'

import { lufinProject } from './lufin-project.svelte'
import { onsRegistryProject } from './ons-registry-project.svelte'
import { samsungPingerProject } from './samsung-pinger-project.svelte'
import { sessionNativeProject } from './session-native-project.svelte'
import { bunsogsProject } from './bunsogs-project.svelte'
import { sessionNotifierProject } from './session-notifier-project.svelte'
import { jswitcherProject } from './jswitcher-project.svelte'
import { sessionWatchosProject } from './session-watchos-project.svelte'
import { mtprotoMobileProject } from './mtproto-mobile-project.svelte'
import { ps4mergerProject } from './ps4merger-project.svelte'

export type PortfolioItem = {
  type: 'website' | 'project'
  id: string
  name: string
  description: import('svelte').Snippet
  /** Description for meta-tags under 160 characters */
  shortDescription: string
  banner: string
  images: {
    url: string
    alt: string
    class?: string
  }[]
  links?: {
    url: string
    label: string
  }[]
}

const websites: PortfolioItem[] = [
  nockTradeWebsite,
  moreOfMeWebsite,
  x5Websites,
  undditWebsite,
  ryoCoinWebsite,
  batumiBikeWebsite,
  sessionWebWebsite,
  sipackerWebsite,
  ogeGeneratorWebsite,
  atmosCraftWebsite
]

const projects: PortfolioItem[] = [
  lufinProject,
  onsRegistryProject,
  samsungPingerProject,
  sessionNativeProject,
  bunsogsProject,
  sessionNotifierProject,
  jswitcherProject,
  sessionWatchosProject,
  mtprotoMobileProject,
  ps4mergerProject
]

export const portfolio: PortfolioItem[] = [...websites, ...projects]
