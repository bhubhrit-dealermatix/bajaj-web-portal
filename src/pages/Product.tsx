import CategoriesList from "../components/CategoriesList/CategoriesList";

const headingStyle = {
  width: "100%",
  textAlign: "center" as React.CSSProperties["textAlign"],
  marginTop: "20px"
}

const App = () => {
  return (
    <>
      <h1 style={headingStyle}>Product Categories</h1>
      <CategoriesList />
    </>
  );
};

export default App;
