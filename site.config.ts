import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '85bcf033140642818216fb45fdd6f290',

  // optional: restrict pages to a single notion workspace
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'calisyj',
  domain: 'calisyj.vercel.app',
  author: 'calisyj',

  // open graph metadata (optional)
  description: 'AI, stillness. calisyj’s tech/philosophy essays and research journey.',

  // social usernames (optional)
  twitter: '',
  github: 'calismaster98',
  linkedin: 'calisyj',

  // default notion icon and cover images for site-wide consistency (optional)
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to important pages
  navigationStyle: 'default'
})
