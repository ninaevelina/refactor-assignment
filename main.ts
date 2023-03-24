import './src/scss/main.scss'
import { createHtml } from './src/ts/createHtml'

async function init (): Promise<void> {
  await createHtml()
}

await init()
