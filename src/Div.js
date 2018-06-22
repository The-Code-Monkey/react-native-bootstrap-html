import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const DivWrapper = styled.View`
  height: ${props => props.style.height ? props.style.height : 'auto'};
  width: ${props => props.style.width ? props.style.width : 'auto'};
  background-color: ${props => props.style.backgroundColor ? props.style.backgroundColor : ''};
  flex: ${props => props.style.flex ? props.style.flex : '' }
`

const Div = props => (
  <DivWrapper>
    {props.children}
  </DivWrapper>
)

export default Div;