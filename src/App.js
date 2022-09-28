import "./App.css";
import StyledButton, {
  FancyButton,
  Submitbutton,
} from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <StyledButton type="submit">Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton variant="outline">Styled Button</StyledButton>
      <div>
        <br />
      </div>
      {/* polymorphic prop ....................*/}
      <FancyButton as="a">Fancy Button</FancyButton>
      <div>
        <br />
      </div>
      {/* passed props and adding attributes */}
      <Submitbutton>Submit</Submitbutton>
    </div>
  );
}

export default App;
