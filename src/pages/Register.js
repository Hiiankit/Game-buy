import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { auth, db } from "../firebase";
import { useHistory } from "react-router-dom";
import "./Register.css";

export default function SignUp() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    contact: "",
    city: "",
    favourites: "",
    description: "",
    workplace: "",
  });

  const { username, email, password, contact, city, favourites, description, workplace } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        db.collection('users').doc(auth.user.uid).set(formData);
        auth.user.updateProfile({ displayName: username });
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <Container className="container" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className="form" noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="lname"
                value={username}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <div className="inputContainer">
            <TextField
              variant="outlined"
              required
              className="inputHalf"
              id="contact"
              label="Contact"
              name="contact"
              autoComplete="contact"
              value={contact}
              onChange={onChange}
            />
            <TextField
              variant="outlined"
              required
              className="inputHalf"
              id="city"
              label="City"
              name="city"
              autoComplete="city"
              value={city}
              onChange={onChange}
            />
          </div>
          <div className="inputContainer">
            <TextField
              variant="outlined"
              required
              className="inputHalf"
              id="favourites"
              label="Favourites"
              name="favourites"
              autoComplete="favourites"
              value={favourites}
              onChange={onChange}
            />
            <TextField
              variant="outlined"
              required
              className="inputHalf"
              id="description"
              label="Description"
              name="description"
              autoComplete="description"
              value={description}
              onChange={onChange}
            />
          </div>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="workplace"
            label="Workplace"
            name="workplace"
            autoComplete="workplace"
            value={workplace}
            onChange={onChange}
            className="fullWidth"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
            onClick={register}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
