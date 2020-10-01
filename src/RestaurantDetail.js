import React from "react";
import {
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Typography,
  CardActionArea,
  Button
} from "@material-ui/core";

const RestaurantDetail = (props) => {
  return (
    <>
      <CardContent>
        <Typography variant="subbody1">Open Closes at 10 Am</Typography>
        <Typography variant="subbody2">Open Closes at 10 Am</Typography>
      </CardContent>

      <CardActionArea>
        <Button variant="contained" color="primary" onClick={() => {}}>
          Reserve it!{" "}
        </Button>
      </CardActionArea>
    </>
  );
};

export default RestaurantDetail;
