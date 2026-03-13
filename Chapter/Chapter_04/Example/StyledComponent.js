import React from 'react'
import { Text, View } from 'react-native'
import { StyledContainer, StyleDCustomeText } from './styled'

function InlineStyles() {
  return (
    <StyledContainer>
      <StyleDCustomeText color="yellow">Primary</StyleDCustomeText>
      <StyleDCustomeText
      color='green'
      >Secondary</StyleDCustomeText>
    </StyledContainer>
  )
}

export default InlineStyles