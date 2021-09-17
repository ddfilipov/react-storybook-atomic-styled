import type { FC } from 'react'


export const Grid: FC = ({ children }) => {
    return (
        <div className={`grid`}>
            {children}
        </div>
    );
}
