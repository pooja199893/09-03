import Counter from "./test/counter";

const App = () =>{
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/counter"  element={<Counter />}></Route>
        </Routes>
      </Router>
     </div>
  );
}

export default App;
