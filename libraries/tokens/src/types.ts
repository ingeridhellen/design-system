import { typography } from '../base/typography'

export type Typography = {
  color: string
  fontFamily: string
  fontSize: string
  fontWeight: number | string
  lineHeight: string
  textAlign: string
  letterSpacing?: string
  fontStyle?: string
  textTransform?: string
  textDecoration?: string
  fontFeature?: string
}

export type TypographyTokens = {
  [P1 in keyof typeof typography]: {
    [P2 in keyof typeof typography[P1]]: Typography
  }
}

export type Border = {
  radius: string
  color: string
  width: string
}

export type Spacing = {
  left: string
  right: string
  top: string
  bottom: string
}

export type Clickbounds = {
  jumbo__base: string
  default__base: string
  default__input: string
}

export type Elevations = {
  above_scrim: string
  none: string
  overlay: string
  raised: string
  sticky: string
  temporary_nav: string
}

export type Color = {
  hex: string
  hsla: string
  rgba: string
}

export type Spacings = {
  comfortable: {
    xxx_large: string
    xx_large: string
    x_large: string
    large: string
    medium: string
    medium_small: string
    small: string
    x_small: string
    xx_small: string
  }
}