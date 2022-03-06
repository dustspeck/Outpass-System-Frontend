const styles = {
  background: {
    backgroundColor: "#f8fafc",
    height: "100vh",
    width: "100vw",
    display: "grid",
    placeItems: "center",
  },
  container: {
    backgroundColor: "#fff",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  illustrationContainer: {
    width: "50vh",
    height: "100vh",
    backgroundColor: "#ccc",
    overflow: "hidden",

    "& img": {
      width: "auto",
      height: "100%",
      backgroundPosition: "center",
    },
  },
};

export default styles;
