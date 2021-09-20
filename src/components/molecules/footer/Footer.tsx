import type { FC } from 'react'
import styled from 'styled-components'

const FooterStyled = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }  
`;

const FooterLogoStyled = styled.span`
  height: 1em;
  margin-left: 0.5rem;
`;

export const Footer : FC = () => {
    return(
        <FooterStyled>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <FooterLogoStyled>
                    <img src="./favicon.ico" alt="React Logo" width={30} height={20} />
                </FooterLogoStyled>
            </a>
        </FooterStyled>
    )
}