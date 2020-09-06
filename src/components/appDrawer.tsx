import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import {Grid, Paper} from "@material-ui/core";

const useStyles = makeStyles(theme =>
    createStyles({
        drawer: {
            width: 100,
            flexShrink: 0,
            boxShadow: "0 3px 0 0 rgba(255, 105, 135, .3)",
        },
        drawerPaper: { width: 100 },
        drawerBox: { padding: 16, paddingBottom: 5 },
        large: {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
        container: {
            boxShadow: "0 8px 6px -6px black",
        },
        content: {
            textAlign: 'center',
            fontSize: '3rem'
        }
    })
)

export default function AppDrawer() {
    const classes = useStyles()

    return (
        <Grid container={true} spacing={3} className={classes.container}>
            <Grid item={true} md={3} />
            <Grid item={true} md={6} sm={12} className={classes.content}>
                <Paper>
                   Login System
                </Paper>
            </Grid>
            <Grid item={true} md={3} />
        </Grid>
    )
}