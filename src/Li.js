import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Li = styled.Text`
  flex: ${props => props.style.flex ? props.style.flex : 1};
  color: ${props => props.style.color ? props.style.color : 'black'};
  display: ${props => props.style.display ? props.style.display : 'list-item'};
  list-style-type: ${props => props.style.listStyleType ? props.style.listStyleType : 'disc'};
  text-align: ${props => props.style.textAlign ? props.style.textAlign : 'left'};
`



const Li = props => (
  <Li {...this.props.style}>
    {props.bullet} {props.children}
  </Li>
)

export default Li;