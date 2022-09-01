import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import * as React from "react";
import api from "../api/api";

const ProfileLoader = () => {
  const [username, setUserName] = React.useState<string>("");
  const [loadProfilePictureUrlHasError, setLoadProfilePictureUrlHasError] =
    React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const getProfilePicture = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username) return;

    setLoading(true);

    api
      .getProfilePictureUrl(username)
      .then((data) => {
        window.open(data.Result, "_blank");
        setLoadProfilePictureUrlHasError(false);
      })
      .catch((errData) => setLoadProfilePictureUrlHasError(true))
      .finally(() => setLoading(false));
  };

  return (
    <div style={{ display: "block" }}>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          width: "100%",
          justifyContent: "center",
          flexDirection: "column",
        }}
        onSubmit={getProfilePicture}
      >
        <TextField
          required
          label="Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          variant="outlined"
          autoComplete="off"
          style={{
            maxWidth: "max(calc(100% - 20px), 400px)",
            minWidth: "min(calc(100% - 20px), 400px)",
          }}
        />
        <Button
          type="submit"
          variant="contained"
          startIcon={
            loading ? (
              <CircularProgress size="1rem" style={{ color: "white" }} />
            ) : undefined
          }
        >
          Search
        </Button>
      </form>

      {loadProfilePictureUrlHasError === null ? (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <Typography variant="h2" color="error" fontWeight="bold">
            User Not Found
          </Typography>
        </div>
      ) : null}
    </div>
  );
};

export default ProfileLoader;
