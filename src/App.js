import { Header } from "./components/header/header";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { PictureComp } from "./components/body/pictureComp";
import { Box, Grid, List, ListItem } from "@mui/material";
import collorBg from "./assets/images/collor_bg.jpg";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.92), rgba(255, 250, 240, 0.63)),url("${collorBg}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Header />
        <List
          sx={{
            p: 0,
          }}
        >
          <ListItem disablePadding>
            <PictureComp />
          </ListItem>
        </List>
      </Box>
    </ThemeProvider>
  );
}

export default App;
