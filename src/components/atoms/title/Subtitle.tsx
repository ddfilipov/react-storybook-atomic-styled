import type {FC} from 'react';
import styled from 'styled-components';

const SubtitleStyled = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`;

const SubtitleCodeStyled = styled.code`
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
  Bitstream Vera Sans Mono, Courier New, monospace;
`;

export const Subtitle : FC<{ codedText: string }> = ({codedText}) => {
    return(
        <SubtitleStyled>
          Get started by editing{' '}
          <SubtitleCodeStyled>{codedText}</SubtitleCodeStyled>
        </SubtitleStyled>
    )
}