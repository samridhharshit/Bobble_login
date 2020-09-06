import {Button, Grid, Paper, TextField, Typography} from "@material-ui/core";
import React, { useEffect, useState } from 'react'
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        center: {
            display: 'flex',
            justifyContent: 'center'
        },
        container: {
            maxWidth: 700,
            textAlign: 'center'
        },
        button: {
            width: 'auto',
            display: 'flex',
            justifyContent: 'space-between'
        },
        submitButton: {
            padding: "10px 0",
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around'
        },
        buttonsContainer: {
            display: 'flex',
            justifyContent: 'space-around'
        },
        form: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            },
        },
        img: {
            height: "20px"
        },
        gridCenter: {
            padding: '5px',
            display: 'flex',
            justifyContent: 'center'
        }
    }),
);

export default function Form() {
    const classes = useStyles()

    const handleFacebookLogin = () => {
        alert('facebook login handled')
    }

    const handleGoogleLogin = () => {
        alert('google login handled')
    }

    const handleManualLogin = () => {
        alert('manual login')
    }

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <Typography variant="h4" color="textPrimary" gutterBottom={true}>Create your Account</Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom={true}>
                    We Welcome you to our App... Hope you enjoy the journey with us!
                </Typography>
                <br/>
                <Grid container className={classes.buttonsContainer}>
                    <Grid className={classes.gridCenter} item lg={6} xs={12}>
                        <Button
                            onClick={handleGoogleLogin}
                            className={classes.button}
                            variant="outlined"
                        >
                            <img
                                className={classes.img}
                                src="https://www.pngkey.com/png/detail/10-109089_google-logo-png-transparent-google-logo-round-png.png"
                                alt="google"
                            />
                            Continue with google
                        </Button>
                    </Grid>
                    <Grid className={classes.gridCenter} lg={6} item xs={12}>
                        <Button
                            onClick={handleFacebookLogin}
                            className={classes.button}
                            variant="outlined"
                        >
                            <img
                                className={classes.img}
                                src="https://f0.pngfuel.com/png/497/515/facebook-scalable-graphics-icon-facebook-logo-facebook-logo-png-clip-art.png"
                                alt="facebook"
                            />
                            Continue with Facebook
                        </Button>
                    </Grid>
                </Grid>
                <br/>
                <hr />
                <br/>
                <form
                    className={classes.form}
                    noValidate={true}
                    autoComplete={'off'}
                    action="/"
                >
                    <TextField
                        required
                        id="first_name"
                        label="First Name"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="last_name"
                        label="Last Name"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="email"
                        label="email"
                        defaultValue="Your email"
                        variant="outlined"
                    />
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                    />
                    <br/>
                    <Typography variant="subtitle2" color="textSecondary" gutterBottom={true}>
                        By clicking up, you agree to our terms and conditions
                    </Typography>
                    <br/>
                    <Button
                        onClick={handleManualLogin}
                        className={classes.submitButton}
                        variant="contained"
                        color="primary"
                    >
                        SIGN UP
                    </Button>
                </form>
            </div>
        </div>
    )
}