import React, { useState, ReactNode } from "react";
import { CircularProgress, Box, Backdrop } from "@mui/material";
import styles from "../../assets/styles/jss/components/loadingStyles";

interface ILoadingProps {
  children: ReactNode;
}
const Loading: React.FC<ILoadingProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Backdrop sx={styles.backdrop} open={loading}>
        <CircularProgress size={50} color="inherit" />
      </Backdrop>
      {children}
    </>
  );
};

export default Loading;
