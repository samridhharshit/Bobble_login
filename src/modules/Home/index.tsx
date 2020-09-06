import { Grid, Paper } from "@material-ui/core";
import React, { useEffect, useState } from 'react'
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Form from "./form";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            width: '700px',
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        center: {
            display: 'flex',
            justifyContent: 'center'
        }
    }),
);

export default function Home() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container={true} spacing={3}>
                <Grid item={true} xs={12} className={classes.center}>
                   <Paper style={{padding: '2rem', width: '700px'}}>
                       <Form />
                   </Paper>
                </Grid>
            </Grid>
        </div>
    )
}