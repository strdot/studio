import 'ideanuxt/dist/style.css'
import ideanuxt, { IWorkbenchConstructionOptions } from 'ideanuxt'

import { emoji } from './extensions/emoji/emoji'

(async function main() {
  ideanuxt.use(emoji)

  let owner: string = ''
  let slug: string = ''
  const matches = window.location.href.match(/([a-z0-9A-Z-_]+)\/([a-z0-9A-Z-_]+)\/edit/)
  if (matches && matches[1] && matches[2]) {
    owner = matches[1]
    slug = matches[2]
  }

  const options: IWorkbenchConstructionOptions = {
    resourceUri: owner && slug ? `/users/${owner}/${slug}` : 'memory://untitled'
  }

  ideanuxt.create(document.getElementById('root') || document.body, options)
})()
