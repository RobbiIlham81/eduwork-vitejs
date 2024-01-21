// import Parent from "./components/Parent"; TUGAS BASIC COMPONENT
// import Button from "./components/Button/Index";
// import InputRadio from "./components/Button/InputRadio";
import "../src/assets/CSS/globals.css";
import { Container } from "react-bootstrap";
import FormCom from "./components/FormCom/Index";

function App() {
  return (
    <div className="App">
      {/* <Button /> */}

      <Container>
        <div className="wrapper">
          <FormCom />
        </div>
      </Container>
    </div>
  );
}

export default App;
