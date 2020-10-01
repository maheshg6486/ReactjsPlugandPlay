import React from "react";

import { Grid, Icon, IconButton, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ScheduleIcon from "@material-ui/icons/Schedule";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "auto",
    height: "calc(100vh - 132px)"
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%"
  },
  gridItem: {
    alignContent: "flex-end"
  },
  itemcontent: {
    margin: "auto"
  },
  buttonItem: {
    position: "absolute",
    alignContent: "center",
    justifyContent: "center"
  },
  itemback: {
    position: "absolute"
  },
  poc: {
    margin: 5
  },
  paperContainer: {
    backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/c/ca/Calendar_icon_2.svg")`,
    width: 200,
    height: 200
  }
}));

const SuccessfulCard = (props) => {
  const classes = useStyles();

  return (
    <Paper>
      <Typography>Your table has been reserved</Typography>

      <Grid direction="row" container justify="center" alignItems="center">
        <Grid item sm={4} container direction="row">
          <Grid item sm={4} container direction="column">
            <Typography>12</Typography>
            <Typography>Sept</Typography>
            <Typography>Wed</Typography>
          </Grid>
        </Grid>
        <Grid item sm={4} container direction="row">
          <LocalBarIcon /> <Typography> Hotel name</Typography>
          <Typography>
            <ScheduleIcon />
            Sept
          </Typography>
          <Typography>
            <AccountCircleIcon />
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default SuccessfulCard;
