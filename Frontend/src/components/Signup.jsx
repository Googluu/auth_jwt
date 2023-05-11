import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";

const Signup = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const history = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.name, "value", e.target.value);
  };

  const { name, email, password } = inputs;

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/signup", {
        name,
        email,
        password,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    // send http request
    sendRequest().then(() => history("/login"));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          marginLeft="auto"
          marginRight="auto"
          width={300}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h2">Signup</Typography>

          <TextField
            name="name"
            value={inputs.name}
            onChange={handleChange}
            variant="outlined"
            label="Name"
            margin="normal"
          />
          <TextField
            name="email"
            type="email"
            value={inputs.email}
            onChange={handleChange}
            variant="outlined"
            label="Email Address"
            margin="normal"
          />
          <TextField
            name="password"
            type="password"
            value={inputs.password}
            onChange={handleChange}
            variant="outlined"
            label="Password"
            margin="normal"
          />
          <Button variant="contained" type="submit">
            Signup
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Signup;
