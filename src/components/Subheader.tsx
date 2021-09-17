import type {FC} from 'react';

export const Subheader : FC<{ codedText: string }> = ({codedText}) => {
    return(
        <p className={`description`}>
          Get started by editing{' '}
          <code className={`code`}>{codedText}</code>
        </p>
    )
}