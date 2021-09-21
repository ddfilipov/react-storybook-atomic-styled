import React, { FC } from "react";
import styled from 'styled-components'
// import {StyledTitle} from '../src/styles/'

export interface TitleProps {
  url: string;
  projectName: string;
}

const StyledTitle = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;

  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }
`;

export const Title: FC<TitleProps> = ({ url, projectName }) => {
  return (
    //<h1 className={`title`}>
    <StyledTitle>
      Welcome to <a href={url}>{projectName}!</a>
    </StyledTitle>
  );
}

