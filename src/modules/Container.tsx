import React from 'react'
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import Routes from './routes'
import AppDrawer from '../components/appDrawer'
// import callApi from '../api'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: { display: 'flex', flexDirection: 'column', height: '100%' },
        content: {
            background: theme.palette.background.default,
            flexGrow: 1,
            padding: theme.spacing(4),
        }
    })
)

export default function Container() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppDrawer />
            <div className={classes.content}>
                <Routes />
            </div>
        </div>
    )
}
