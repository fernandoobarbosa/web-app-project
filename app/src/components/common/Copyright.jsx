import React from "react";
import Typography from "@material-ui/core/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      Fernando Barbosa {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default Copyright;
