import { Box, Button, TextField, Typography } from "@mui/material";

const Signup = () => {
  const handleSubmit = () => {};
  return (
    <div>
      <Typography variant="h2">Signup</Typography>
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
          <TextField margin="normal" />
          <TextField margin="normal" />
          <TextField margin="normal" />
          <Button type="submit">Signup</Button>
        </Box>
      </form>
    </div>
  );
};

export default Signup;
