import {Button, Grid, Paper, TextField, Typography} from "@material-ui/core";
import React, {useCallback, useEffect, useState} from 'react'
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import FacebookLogin from 'react-facebook-login'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

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

export default function Form(props: any) {
    const classes = useStyles()
    const [auth, setAuth] = useState<boolean>(false)
    const [name, setName] = useState<string>('')
    const [pic, setPic] = useState<string>('')
    const [user, setUser] = useState<boolean>(false)
    const [id, setId] = useState<any>(-1)

    const responseFacebook = async (res: any) => {
        console.log(res)
        if (res.status !== 'unknown') {
            await setAuth(true)
            await setName(res.name)
            await setPic(res.picture.data.url)
        }
    }


    const handleGoogleLogin = () => {
        return (
            <Redirect to={'/flogin'} />
        )
    }

    const handleManualLogin = useCallback(
        async e => {
            e.preventDefault()
            const { email, password, fname, lname  } = e.target.elements
            console.log(email.value, password.value, fname.value, lname.value)

            let data = {
                email: email.value,
                first_name: fname.value,
                last_name: lname.value,
                password: password.value
            }

            // let config = {
            //     method: 'post',
            //     url: 'https://reqres.in/api/register',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     data : data
            // };

            axios.post('https://reqres.in/api/register', data )
                .then(function (response) {
                    if (response.data.token) {
                        setUser(true)
                        setId(response.data.id)
                    }
                    console.log(response)
                    console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });

        }, []
    )

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
                        <FacebookLogin
                            appId={"764901230958591"}
                            autoLoad={false}
                            fields={"name, picture"}
                            onClick={() => {
                                console.log('login with facebook')}
                            }
                            callback={responseFacebook}
                        >
                            <Button
                                onClick={() => {
                                    console.log('login with facebook')}
                                }
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
                        </FacebookLogin>
                    </Grid>
                </Grid>
                <br/>
                <hr />
                <br/>
                <form
                    className={classes.form}
                    noValidate={true}
                    autoComplete={'off'}
                    onSubmit={handleManualLogin}
                >
                    <TextField
                        required
                        id="first_name"
                        label="First Name"
                        variant="outlined"
                        name="fname"
                    />
                    <TextField
                        required
                        id="last_name"
                        label="Last Name"
                        variant="outlined"
                        name="lname"
                    />
                    <TextField
                        required
                        id="email"
                        label="email"
                        variant="outlined"
                        name="email"
                    />
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        name="password"
                    />
                    <br/>
                    <Typography variant="subtitle2" color="textSecondary" gutterBottom={true}>
                        By clicking up, you agree to our terms and conditions
                    </Typography>
                    <br/>
                    {
                        auth ? (
                            <Button
                                onClick={handleManualLogin}
                                className={classes.submitButton}
                                variant="contained"
                                color="primary"
                                disabled={true}
                            >
                                { `${name} LOGGED IN...` }
                            </Button>
                        ) : user ? (
                            <Button
                                type={'submit'}
                                className={classes.submitButton}
                                variant="contained"
                                color="primary"
                            >
                                {`user with ${id} is logged in`}
                            </Button>
                        ) : (
                            <Button
                                type={'submit'}
                                className={classes.submitButton}
                                variant="contained"
                                color="primary"
                            >
                                SIGN UP
                            </Button>
                        )
                    }
                </form>
            </div>
        </div>
    )
}