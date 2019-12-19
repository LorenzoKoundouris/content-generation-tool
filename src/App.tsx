import React, { useState } from "react";

import { Container, Header, Body } from "./App.styles";
import ContentTypeSelector from "./components/ContentTypeSelector";
import IReactSelectItem from "./interfaces/i-react-select-item";
import ContentForm from "./components/ContentForm/ContentForm";

function App() {
  const [selectedOption, setSelectedOption] = useState<IReactSelectItem | null>(
    null
  );

  const handleChange = (option: IReactSelectItem): void => {
    setSelectedOption(option);
  };

  return (
    <Container>
      <Header>
        <h1>Content Generation Tool (Beta)</h1>
        <ContentTypeSelector
          value={selectedOption}
          handleChange={handleChange}
        />
      </Header>
      <Body>
        {selectedOption && <ContentForm type={selectedOption.value} />}
      </Body>
    </Container>
  );
}

export default App;
