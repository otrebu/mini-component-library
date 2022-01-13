/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 4px;
/* Trim off corners when progress bar is near-full. */
/* This is essential for small and medium sizes */
  overflow: hidden;

  ${props => 
    props.size === "large" ? css`padding: 4px; border-radius: 8px` : null
  }
`;

const sizeStyle = {
  small: css`
    height: 8px
  `,
  medium: css`
    height: 12px
  `,
  large: css`
    height: 16px;
  `
};

const Bar = styled.div`
  width: var(--width); 
  background-color: ${COLORS.primary};
  height: 8px;
  border-radius: 4px 0px 0px 4px;
  ${props => sizeStyle[props.size]}
  ${props => props.value >= 99.8 ? css`border-radius: 4px` : null}
`;

const ProgressBar = ({ value, size }) => {
  return <Wrapper size={size} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
    <VisuallyHidden>{value}</VisuallyHidden>
    <Bar style={{"--width": `${value}%`}} size={size} value={value} />
  </Wrapper>
};

export default ProgressBar;
