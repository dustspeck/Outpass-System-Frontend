import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { Encoder, ErrorCorrectionLevel } from "@nuintun/qrcode";
import FullScreenDialog from "../../../components/Dialog/Dialog";

const GenerateQR = ({ id, disabled }: { id: string; disabled: boolean }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [qrData, setQRData] = useState(null);
  const [qrDataURL, setQRDataURL] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const fetchQrData = async (id: string) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`http://127.0.0.1:5000/outpass/${id}`); //TODO: replace with server url
      console.log(data);
      if (data.data) {
        setQRData(data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      handleDialogOpen();
    }
  };

  const buildQR = (data: string | null) => {
    if (!data) return;
    const qr = new Encoder();
    qr.setEncodingHint(true);
    qr.setErrorCorrectionLevel(ErrorCorrectionLevel.H);
    qr.write(data);
    qr.make();
    setQRDataURL(qr.toDataURL());
  };

  useEffect(() => {
    console.log("rebuilding qr");
    buildQR(qrData);
  }, [qrData]);

  return (
    <div>
      <Button
        disabled={disabled || isLoading}
        variant="outlined"
        color="primary"
        type="submit"
        onClick={() => {
          fetchQrData(id);
        }}
      >
        {!isLoading ? "Show QR" : "Loading..."}
      </Button>

      <FullScreenDialog
        heading="Outpass QR"
        open={open}
        handleClose={handleDialogClose}
      >
        <div>
          {isLoading ? <div>Loading...</div> : <img src={qrDataURL} alt="" />}
        </div>
      </FullScreenDialog>
    </div>
  );
};

export default GenerateQR;
