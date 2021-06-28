import { FC } from 'react'

import { Column } from './Column'
import { Card } from './Card'
import { AppContainer } from './styles'

const App: FC = () => {
    return (
        <AppContainer>
            <Column text="Generate app scaffold" />
        </AppContainer>
    )
}

export default App
