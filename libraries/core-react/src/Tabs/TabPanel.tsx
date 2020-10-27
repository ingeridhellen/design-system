import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { tabPanel as tokens } from './Tabs.tokens'

const {
  spacing: { top: paddingTop, bottom: paddingBottom },
  focused: {
    outline: { width: outlineWidth, style: outlineStyle, color: outlineColor },
    outlineOffset,
  },
} = tokens

const StyledTabPanel = styled.div.attrs(
  (): React.HTMLAttributes<HTMLDivElement> => ({
    tabIndex: 0,
    role: 'tabpanel',
  }),
)({
  paddingTop,
  paddingBottom,
  outline: 'none',
  '&[data-focus-visible-added]:focus': {
    outline: `${outlineWidth} ${outlineStyle} ${outlineColor}`,
    outlineOffset: `${outlineOffset}`,
  },
})

type Props = {
  /** If `true`, the panel will be hidden. */
  hidden?: boolean
} & React.HTMLAttributes<HTMLDivElement>

const TabPanel = forwardRef<HTMLDivElement, Props>(function TabPanel(
  { ...props },
  ref,
) {
  return (
    <StyledTabPanel ref={ref} {...props}>
      {props.children}
    </StyledTabPanel>
  )
})

export { TabPanel }