import {
  Box,
  TextField,
  Button,
  Paper,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      mt={20}
    >
      <Paper sx={{ width: "50%", p: 8 }} elevation={12}>
        <Typography variant="h2" align="center" gutterBottom color="primary">
          Contact Form
        </Typography>
        <form action={"/"}>
          <Stack gap={4}>
            <Stack direction={"row"} gap={4}>
              <TextField required fullWidth label="Name" />
              <TextField required fullWidth label="Email" />
            </Stack>
            <TextField required fullWidth label="Subject" />
            <TextField
              required
              fullWidth
              multiline
              minRows={10}
              maxRows={10}
              label="Message"
            />
            <Button
              sx={{ p: 2 }}
              endIcon={<SendIcon />}
              variant="contained"
              size="large"
              color="success"
            >
              Send Message
            </Button>
            <Stack direction={"row"} justifyContent={"center"}>
              <IconButton href="https://github.com/deividasdul">
                <GitHubIcon fontSize="large" color="primary" />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/deividas-dulinskas/">
                <LinkedInIcon fontSize="large" color="primary" />
              </IconButton>
            </Stack>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default Contact;
