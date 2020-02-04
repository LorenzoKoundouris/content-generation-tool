import React, { useState } from "react";
import { Container, Body } from "./App.styles";
import GenericSelector from "./components/GenericSelector";
import IReactSelectItem from "./interfaces/i-react-select-item";
import ContentForm from "./components/ContentForm/ContentForm";
import Header from "./components/Header";
import { TIPSTER, TWITTER, YOUTUBE } from "./utils/constants";
import { ContentType } from "./types/ContentType";

const contentTypes = [
  { value: TIPSTER, label: "Tipster" },
  { value: TWITTER, label: "Twitter" },
  { value: YOUTUBE, label: "YouTube" }
];

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
        <GenericSelector
          value={selectedOption}
          handleChange={handleChange}
          options={contentTypes}
        />
        {selectedOption && (
          <ContentForm type={selectedOption.value as ContentType} />
        )}
      </Body>
    </Container>
  );
}

export default App;
