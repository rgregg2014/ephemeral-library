import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import UpdateBook from "./pages/UpdateBook";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/add">
            <AddBook />
          </Route>
          <Route exact path="/update">
            <UpdateBook />
          </Route>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
