import { AppBar, Stack, Toolbar } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const navLinkStyling = {
  textDecoration: "none",
  color: "white",
  fontSize: "small",
  fontStyle: "oblique",
  fontWeight: "bolder",
};

export const NavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "none",
        boxShadow: "none",
        height: "5vh",
      }}
      color={"transparent"}
    >
      <Toolbar>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "95vw",
          }}
        >
          <NavLink style={navLinkStyling} to={"/"}>
            LESMECS
          </NavLink>
          <NavLink style={navLinkStyling} to={"/directors"}>
            DIRECTORS
          </NavLink>
          <NavLink style={navLinkStyling} to={"/contact"}>
            CONTACT
          </NavLink>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
