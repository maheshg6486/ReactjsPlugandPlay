import React, { useState } from "react";
import {
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Typography,
  CardActionArea,
  Button
} from "@material-ui/core";

import { BackspaceOutlined } from "@material-ui/icons";
import NumberCard from "./NumberCard";
import RestaurantDetail from "./RestaurantDetail";
import DateCard from "./DateCard";
import TimeCard from "./TimeCard";
import SuccessfulCard from "./SuccessfulCard";

const RestaurantCard = (props) => {
  const [substeps, setSubSteps] = useState(0);

  onReserveClick = () => {};

  setSubStepsData = (substepinfo, data) => {};
  onBackPressed = (substepinfo) => {};

  return (
    <Card>
      <CardHeader
        title={"Hi Hello"}
        action={
          <IconButton
            aria-label="back"
            onClick={() => {
              console.log("On Back Clicked!");
            }}
          >
            <BackspaceOutlined />
          </IconButton>
        }
        subheader="Chinese"
      />
      {<SuccessfulCard />}
      {<RestaurantDetail />}
      {<NumberCard />}
      {<DateCard />}
      {<TimeCard />}
    </Card>
  );
};

export default RestaurantCard;
