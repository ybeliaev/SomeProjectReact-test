import React, { FC, useState } from 'react'

import { AddItemButton } from './styles'

type AddNewItemProps = {
    onAdd(text: string): void
    toggleButtonText: string
    dark?: boolean
}

const AddNewItem = (props: AddNewItemProps) => {
    const [showForm, setShowForm] = useState(false)
    const { onAdd, toggleButtonText, dark } = props

    if (showForm) {
        // We show item creation form here
    }

    return (
        <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
            {toggleButtonText}
        </AddItemButton>
    )
}

export default AddNewItem
