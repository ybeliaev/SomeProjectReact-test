import { FC } from 'react'

import { Column } from './Column'
import { Card } from './Card'
import { AppContainer } from './styles'

const App: FC = ({ children }) => {
    return (
        <AppContainer>
            <Column text="To Do">
                <Card text="Generate app scaffold" />
            </Column>
        </AppContainer>
    )
}

export default App
