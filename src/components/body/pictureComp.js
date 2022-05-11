import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import yasin from "../../assets/images/cat.jpg";
import { Typography } from "@mui/material";
import { PaleContainer } from "../paleContainer";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";

export function PictureComp() {
  return (
    <Box sx={{ flexGrow: 1, m: 5, mx: 10 }}>
      <Grid container spacing={0} sx={{ p: 5 }}>
        <Grid item sx={{ flexGrow: 1 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: ["Homemade Apple", "cursive"].join(","),
            }}
          >
            Yasin Moosavi
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
            <GitHubIcon />
            <Box sx={{ mx: 1 }} />
            <LinkedInIcon />
            <Box sx={{ mx: 1 }} />
            <TelegramIcon />
          </Box>

          {/* <Typography>sdsads</Typography> */}
        </Grid>
        <Grid item xs={4}>
          <img
            src={yasin}
            width={"100%"}
            height={"100%"}
            alt={"yasin moosavi"}
            loading="lazy"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
