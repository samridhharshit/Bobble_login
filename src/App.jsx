import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core'

import Container from './modules/Container'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: { main: '#0e82ea' }
  }
})

export default () => (
    // <SentryErrorBoundary>
    <Router>
        <ThemeProvider theme={theme}>
            <Container />
        </ThemeProvider>
    </Router>
)