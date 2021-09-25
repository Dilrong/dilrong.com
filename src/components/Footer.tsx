import React from "react";
import { Grid, Typography } from "@mui/material";

import Header from "./Header";

const Footer: React.FC = () => {
  return (
    <div>
      <Grid container spacing={1} direction="column">
        <Grid item>
          <Typography variant="body2">
            © 2021 dilrong All Rights Reserved
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
