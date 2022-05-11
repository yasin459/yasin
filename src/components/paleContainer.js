import * as React from "react";
import Box from "@mui/material/Box";
import collorBg from "../assets/images/collor_bg.jpg";
import { keyframes } from "@mui/system";

const spin = keyframes`
  0%   { transform: rotate(0deg);}
  25%  { transform: rotate(0.5deg);}
  50%  { transform: rotate(1deg);}
  75%  { transform: rotate(0.5deg);}
  100% { transform: rotate(0deg);}
`;
export function PaleContainer(props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        // width:100,
        // height : 100,
        borderRadius: 15,
        // backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.92), rgba(255, 250, 240, 0.63)),url("${collorBg}")`,
        backgroundColor:"rgba(255, 255, 255, 0.52)"
        
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // animation: `${spin} 1s infinite alternate ease`,

        
        // "&:hover": {
        //   //   backgroundColor: "primary.main",
        //   //   opacity: [0.9, 0.8, 0.7],
        //   animationPlayState: "paused",
        // },
      }}
    >
      {props.children}
    </Box>
  );
}
