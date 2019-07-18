import { makeColorToken } from './color'
import { makeSpacingTokens } from './spacing'
import { makeElevationTokens } from './elevation'
import { makeClickboundsTokens } from './clickbounds'
import { makeTextTokens } from './typography'
import { makeShapeTokens } from './shape'
import { makeStatesTokens } from './states'
import { fixPageName } from '@utils'

export const makeTokens = (figmaPages) => {
  const tokens = []

  figmaPages.forEach((page) => {
    const fixedPageName = fixPageName(page.name)
    const data = page.children

    switch (fixedPageName) {
      case 'color':
        tokens.push({
          name: 'colors',
          value: makeColorToken(data),
        })
        break
      case 'spacing':
        tokens.push({
          name: 'spacings',
          value: makeSpacingTokens(data),
        })
        break
      case 'elevation':
        tokens.push({
          name: 'elevation',
          value: makeElevationTokens(data),
        })
        break
      case 'clickbounds':
        tokens.push({
          name: 'clickbounds',
          value: makeClickboundsTokens(data),
        })
        break
      case 'typography':
        tokens.push({
          name: 'typography',
          value: makeTextTokens(data),
        })
        break
      case 'shape':
        tokens.push({
          name: 'shape',
          value: makeShapeTokens(data),
        })
        break
      case 'interaction: states':
        tokens.push({
          name: 'states',
          value: makeStatesTokens(data),
        })
        break
      default:
        break
    }
  })

  return tokens
}
