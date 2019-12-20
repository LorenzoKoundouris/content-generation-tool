import React, { useState } from "react";
import { Container, Body } from "./App.styles";
import ContentTypeSelector from "./components/ContentTypeSelector";
import IReactSelectItem from "./interfaces/i-react-select-item";
import ContentForm from "./components/ContentForm/ContentForm";
import Header from "./components/Header";

function App() {
  const [selectedOption, setSelectedOption] = useState<IReactSelectItem | null>(
    null
  );

  const handleChange = (option: IReactSelectItem): void => {
    setSelectedOption(option);
  };

  return (
    <Container>
      <Header />
      <Body>
        <h1>Content Generation Tool (Beta)</h1>
        <ContentTypeSelector
          value={selectedOption}
          handleChange={handleChange}
        />
        {selectedOption && <ContentForm type={selectedOption.value} />}
      </Body>
    </Container>
  );
}

export default App;
