import React, { useState } from "react";
import { Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Typography, Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./Login.css";

const SignIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login-container'>
      <Container component='main'>
        <CssBaseline />
        <div className='paper'>
          <h1 className="heading">
            Sign in
          </h1>
          <form className='form' noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoFocus
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className='submit'
              onClick={login}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href='/register' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
