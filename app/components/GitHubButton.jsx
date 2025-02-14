import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";

const GitHubButton = ({ href }) => {
  return (
    <Button
      size="large"
      startIcon={<GitHubIcon />}
      endIcon={<GitHubIcon />}
      variant="contained"
      href={href}
    >
      View on GitHub
    </Button>
  );
};

export default GitHubButton;
