import PrimaryBtn from "./components/PrimaryBtn";

const App = () => {
  return (
    <>
      <div
        className="wrapper"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <PrimaryBtn />
      </div>
    </>
  );
};

export default App;
