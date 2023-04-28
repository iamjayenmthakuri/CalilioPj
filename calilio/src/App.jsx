import "./App.css";
import styled from "styled-components";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";

const Main = styled.div`
  display: flex;
`;

function App() {
  return (
    <>
      <Main>
        <Sidebar />
        <Hero />
      </Main>
    </>
  );
}

export default App;
