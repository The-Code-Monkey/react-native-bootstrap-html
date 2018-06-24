import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const UlWrapper = styled.Text`
  padding-left: ${props => props.style.paddingLeft ? props.style.paddingLeft : 40}
`



const Ul = props => (
  <UlWrapper {...this.props.style}>
    {props.children}
  </UlWrapper>
)

export default Ul;