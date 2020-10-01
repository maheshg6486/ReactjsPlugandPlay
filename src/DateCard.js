import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  GridListTileBar,
  Typography,
  GridList,
  GridListTile,
  Grid,
  CardHeader,
  IconButton
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    overflowY: "scroll"
  },
  horientalcontainer: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    overflow: "auto"
  },
  rootitem: {
    maxHeight: 500,
    margin: 10
  },
  tileitem: {
    maxHeight: 300
  },
  titleBar: {
    background: "grey"
  },
  title: {
    color: "black"
  },
  titleBarSelected: {
    background: "white"
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  listitem: {
    maxHeight: 200,
    maxWidth: 200,
    padding: 18
  }
}));

const DateCard = (props) => {
  const classes = useStyles();
  const [isSelected, setSelected] = useState(-1);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    setSelected(-1);
  }, []);

  const itemsobj = [
    {
      date: "17 Sept",
      day: "Mon"
    },
    {
      date: "18 Sept",
      day: "Tue"
    },
    {
      date: "19 Sept",
      day: "Wed"
    },
    {
      date: "17 Sept",
      day: "Mon"
    },
    {
      date: "18 Sept",
      day: "Tue"
    },
    {
      date: "19 Sept",
      day: "Wed"
    }
  ];
  return (
    <CardContent>
      <CardHeader
        title="Date"
        action={
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        }
      />
      <List className={classes.horientalcontainer}>
        {itemsobj.map((item, index) => (
          <ListItem dense button divider className={classes.listitem}>
            <ListItemText primary={item.date} secondary={item.day} />
          </ListItem>
        ))}
      </List>

      {/*     <GridList  className={classes.gridList}>
        {itemsobj.map((item, index) => (
          <GridListTile
            key={index}
            
            onClick={(e) => {
              setSelected(index);
            }}
          >
            <GridListTileBar
              classes={{
                root:
                  isSelected === index
                    ? classes.titleBarSelected
                    : classes.titleBar,
                title: classes.title,
                subtitle: classes.title
              }}
              title="Wed"
              subtitle="17 Sept"
            />{" "}
          </GridListTile>
        ))}
      </GridList>*/}
    </CardContent>
  );
};

export default DateCard;
