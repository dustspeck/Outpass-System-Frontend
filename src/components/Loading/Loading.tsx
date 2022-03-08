import React, { useState, ReactNode, ReactElement } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useSelector, shallowEqual } from "react-redux";
import { CircularProgress, Box, Typography } from "@mui/material";
import LoadingAnimation from "../../assets/images/airplane.json";
import styles from "../../assets/styles/jss/components/loadingStyles";
import { RootState } from "../../app/rootReduces";

interface ILoadingProps {
  children: ReactElement | null;
}
const Loading: React.FC<ILoadingProps> = ({ children }) => {
  const { authLoading } = useSelector((state: RootState) => {
    return {
      authLoading: state.auth.loading,
    };
  }, shallowEqual);

  const loadingMessages = [
    "Kindly hold on as our intern quits vim...",
    "Winter is coming...",
    "Installing dependencies...",
    "Switching to the latest JS framework...",
    "Distracted by cat gifs",
    "Everything in this universe is either a potato or not a potato",
  ];

  if (authLoading) {
    return (
      <Box sx={styles.backdrop}>
        <div>
          <Player
            autoplay
            loop
            src={LoadingAnimation}
            style={{ height: "300px", width: "400px" }}
          />
          {/* <CircularProgress color="primary" /> */}
          <Typography textAlign="center">
            {
              loadingMessages[
                Math.floor(Math.random() * loadingMessages.length)
              ]
            }
          </Typography>
        </div>
      </Box>
    );
  }
  return children;
};

export default Loading;
