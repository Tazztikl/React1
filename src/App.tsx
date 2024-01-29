import Home from "./components/Home"

const App = () => {
  const person = { name: 'John', age: 14 }
  return (
    <>
      <h1>My app</h1>
      <Home />
    </>
  );
};

export default App;
