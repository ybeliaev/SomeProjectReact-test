import React, { FC } from 'react'
import { ColumnContainer, ColumnTitle } from './styles'

type ColumnProps = {
    text: string
}

export const Column: FC<ColumnProps> = ({ children, text }) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {children}
        </ColumnContainer>
    )
}
