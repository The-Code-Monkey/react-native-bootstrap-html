import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const OlWrapper = styled.Text`
  padding-left: ${props => props.style.paddingLeft ? props.style.paddingLeft : 40};
  display: ${props => props.style.display ? props.style.display : 'block'};
  list-style-type: ${props => props.style.ListStyleType ? props.style.ListStyleType : 'disc'};
  margin: ${props => props.style.margin ? props.style.margin : '16 0'};
`



const Ol = props => {
  const { children } = this.props;

    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { style: {
        listStyleType: 'decimal'
       } 
      }));
  return (
  <OlWrapper {...this.props.style}>
    {childrenWithProps}
  </OlWrapper>
)

}

export default Ol;