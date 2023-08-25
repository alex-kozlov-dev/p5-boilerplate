import p5Module = require('p5')
import 'p5/global'

export = p5Module
export as namespace p5;
declare global {
  interface Window {
    p5: typeof p5Module
    setup: () => void
    draw: () => void
  }
}
