import React, { useState } from "react";
import AccordionContent, { IAccordionContent } from "./AccordionContent";
import TextAreaWithCTA from "../../components/TextAreaWithCTA";
import { UsageType } from "../../components/TextAreaWithCTA/TextAreaWithCTA";

import { Button, ButtonWrapper } from "./Evergreen.styles";

function Evergreen() {
  const initialState = [{ header: "", content: "", openByDefault: false }];
  const [accordions, setAccordions] = useState<IAccordionContent[]>(
    initialState
  );
  const [payload, setPayload] = React.useState<string>("");

  React.useEffect(() => {
    generatePayload();
  }, [accordions]);

  const generatePayload = () => {
    let payload = "";

    accordions.forEach((accordion) => {
      payload += `<section${
        accordion.openByDefault ? ' open="true"' : ""
      }> <h2>${accordion.header}</h2>${accordion.content}</section>`;
    });

    setPayload(payload);
  };

  const changeContent = (content: IAccordionContent, index: number): void => {
    const newAccordions = [...accordions];

    newAccordions[index] = content;

    setAccordions(newAccordions);
  };

  const addNewAccordion = (): void => {
    const newAccordions = [...accordions];

    newAccordions.push({ header: "", content: "", openByDefault: false });

    setAccordions(newAccordions);
  };

  return (
    <div>
      {accordions.map((accordion, index) => (
        <AccordionContent
          accordionContent={accordion}
          changeContent={changeContent}
          index={index}
        />
      ))}

      <ButtonWrapper>
        <Button onClick={addNewAccordion}>Add new accordion</Button>
      </ButtonWrapper>

      <TextAreaWithCTA
        value={payload}
        type={UsageType.PREVIEW}
        invalid={!payload}
      />
    </div>
  );
}

export default Evergreen;
