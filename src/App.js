import React, { useState } from "react";
import "./styles.css";
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Fab,
  Grid,
  IconButton,
  Typography
} from "@material-ui/core";
import { BackspaceOutlined, HotTubOutlined, Image } from "@material-ui/icons";
import RestaurantCard from "./RestaurantCard";

export default function App() {
  return (
    <div className="App">
      <Card>
        <RestaurantCard />
      </Card>{" "}
    </div>
  );
}
