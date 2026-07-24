import urlBuilder from '@sanity/image-url'
import { client } from './sanity'

const imageBuilder = urlBuilder(client)

export function urlFor(source: any) {
  return imageBuilder.image(source)
}
