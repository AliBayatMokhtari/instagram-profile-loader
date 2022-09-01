import { useEffect, useState } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import api from "./api/api";
import ProfileLoader from "./components/ProfileLoader";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Instagram Profile Loader
          </Typography>
        </Toolbar>
      </AppBar>

      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <div style={{ marginTop: "3rem", display: "block", width: "100%" }}>
          <ProfileLoader />
        </div>
      </div>
    </div>
  );
}

export default App;
