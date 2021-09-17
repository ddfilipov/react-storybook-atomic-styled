import type {FC} from 'react'

export interface CardProps{
    text: string;
    href: string;
    title: string;
}

export const Card: FC<CardProps> = (props) => {
    return (
        <a href={props.href} className={`card`}>
            <h2>{props.title}&rarr;</h2>
            <p>{props.text}</p>
        </a>
    );
}