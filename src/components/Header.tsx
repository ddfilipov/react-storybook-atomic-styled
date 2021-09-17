import React, { FC } from "react";

export const Header: FC<{ url: string, projectName: string }> = ({ url, projectName }) => {
    return (
        <h1 className={`title`}>
            Welcome to <a href={url}>{projectName}!</a>
        </h1>
    );
}