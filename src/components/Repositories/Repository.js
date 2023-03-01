import Box from "@mui/material/Box";
import { Link, Typography } from "@mui/material";

const Repository = ({ repository }) => {
  return (
    <Box margin={3}>
      <Typography variant="h6" gutterBottom color={"blue"}>
        <Link
          target={"_blank"}
          href={`${repository.html_url}`}
          underline="hover"
        >
          {repository.name}
        </Link>
      </Typography>
      <Typography variant="body2" gutterBottom>
        {repository.description}
      </Typography>
      <hr />
    </Box>
  );
};
export default Repository;
