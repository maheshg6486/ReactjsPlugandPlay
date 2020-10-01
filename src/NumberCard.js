import React, { useState } from "react";

import {
  Card,
  Grid,
  IconButton,
  Typography,
  CardContent
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const NumberCard = (props) => {
  const [noofguests, setNumberOfGuests] = useState(1);

  incrementNo = () => {
    let tempno = noofguests;
    setNumberOfGuests(tempno + 1);
  };
  decrementNum = () => {
    let tempno = noofguests;
    if (tempno > 1) setNumberOfGuests(tempno - 1);
  };

  return (
    <>
      <CardContent>
        <Typography variant="h6">Number of Guests</Typography>
        <Grid container alignItems="center" alignContent="center">
          <Grid sm={4} item>
            <IconButton onClick={incrementNo}>
              <AddIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid sm={4} item>
            <Typography variant="body2"> {noofguests} </Typography>
          </Grid>
          <Grid sm={4} item>
            <IconButton onClick={decrementNum}>
              <RemoveIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </>
  );
};

export default NumberCard;
