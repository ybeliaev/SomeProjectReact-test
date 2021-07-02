import React, { useState } from 'react'
import { NewItemFormContainer, NewItemButton, NewItemInput } from './styles'

type NewItemFormProp = {
    onAdd(text: string): void
}

const NewItemForm = ({ onAdd }: NewItemFormProp) => {
    const [text, setText] = useState('')
    return (
        <NewItemFormContainer>
            <NewItemInput
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
        </NewItemFormContainer>
    )
}

export default NewItemForm
