const styles = {
  backdrop: {
    height: "100vh",
    width: "100vw",
    display: "grid",
    placeItems: "center",
    backgroundColor: "#fff",
    zIndex: (theme: { zIndex: { drawer: number } }) => theme.zIndex.drawer + 1,
  },
};

export default styles;
