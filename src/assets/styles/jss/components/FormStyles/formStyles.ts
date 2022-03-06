const styles = {
  root: {
    "& > * ": {
      marginTop: 4,
      width: "25ch",
    },
  },
  buttonGrid: {
    width: "40vw",
  },
  button: {
    width: "100%",
  },
  secondaryButton: {
    width: "100%",
    fontWeight: "bold",
    color: "white",
    borderColor: "white",
    backgroundColor: "primary.main",
    "&:hover": {
      backgroundColor: "primary.dark",
    },
  },
  link: {
    textDecoration: "none",
    color: "primary.main",
  },

  selectLabel: {
    left: "auto",
    top: "auto",
  },

  typography: {
    textAlign: "center",
    fontWeight: "bold",
    padding: "0.4rem 1.6rem",
  },
  cssFocused: {
    color: "primary.light",
  },
  heading: {
    marginBottom: "1rem",
  },

  wrapper: {
    padding: "2rem 4rem",
    marginTop: "2.5rem",
  },
  formWrapper: {
    padding: "0rem 2rem 0rem 2rem",
  },
  signin: {
    textAlign: "center",
  },
  backButton: {
    margin: "0.2rem auto auto 0.2rem",
  },
  titleText: {
    fontWeight: 600,
  },
  formControl: {
    width: "100%",
    margin: "0px 0px 18px 0px",
    "&  *": {
      fontSize: "14px",
    },
  },
  label: {
    margin: "0px 0px 6px 0px",
  },
  fontGridColumn: {
    display: "grid",
    gridTemplateColumns: [
      "repeat(2, 1fr)",
      "repeat(2, 1fr)",
      "repeat(2, 1fr)",
      "repeat(2, 1fr)",
    ],
    gap: "1.5rem",
  },
  background: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
  },
  infoGrid: {
    display: "grid",
    backgroundColor: "#f8fafc",
    padding: "1.5rem",
    borderRadius: "10px",
    gridTemplateColumns: [
      "repeat(2, 1fr)",
      "repeat(2, 1fr)",
      "repeat(2, 1fr)",
      "repeat(3, 1fr)",
    ],
    gap: "1rem",

    "& > *": {
      "& > *": {
        "&:nth-child(1)": {
          fontSize: "0.85rem",
          color: "text.secondary",
        },
        "&:nth-child(2)": {
          fontWeight: "500",
        },
      },
    },
  },
};

export default styles;
