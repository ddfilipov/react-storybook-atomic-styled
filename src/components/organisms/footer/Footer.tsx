import type { FC } from 'react'

export const Footer : FC = () => {
    return(
        <footer className={`footer`}>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <span className={`logo`}>
                    <img src="./favicon.ico" alt="React Logo" width={30} height={20} />
                </span>
            </a>
        </footer>

    )
}