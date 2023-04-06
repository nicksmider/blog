import { prefix } from '@/lib/prefix'
import NextImage from 'next/image'

// opt-out of image optimization, no-op
const imageLoader = ({ src }) => {
  return `${prefix}${src}`
}
// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({ src, ...rest }) => <NextImage src={src} loader={imageLoader} {...rest} />

export default Image
