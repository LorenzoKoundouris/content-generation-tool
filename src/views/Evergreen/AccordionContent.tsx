import * as React from "react";
import Row from "../../components/Row";
import { TEXT_AREA } from "../../utils/constants";
import { INPUT } from "../../utils/constants";

interface IProps {
  accordionContent: IAccordionContent;
  changeContent: (content: IAccordionContent, index: number) => void;
  index: number;
}

export interface IAccordionContent {
  header: string;
  content: string;
  openByDefault: boolean;
}

const AccordionContent: React.FC<IProps> = ({
  accordionContent,
  changeContent,
  index,
}): JSX.Element => {
  const { header, content, openByDefault } = accordionContent;

  React.useEffect(() => {
    changeContent({ header, content, openByDefault }, index);
  }, [header, content, openByDefault]);

  const setHeader = (headerVal: string): void => {
    changeContent({ ...accordionContent, header: headerVal }, index);
  };

  const setContent = (contentVal: string): void => {
    changeContent({ ...accordionContent, content: contentVal }, index);
  };

  const toggleCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    changeContent(
      { ...accordionContent, openByDefault: event.target.checked },
      index
    );
  };

  return (
    <div>
      <Row
        component={INPUT}
        label="Header (H2)"
        changeHandler={setHeader}
        invalid={!header}
        placeholder="Accordion header"
        value={header}
      />

      <Row
        component={TEXT_AREA}
        label="Accordion Content"
        changeHandler={setContent}
        invalid={!content}
        placeholder=""
        value={content}
        rows={10}
      />

      <label>
        {" "}
        Open by default?
        <input
          checked={openByDefault}
          type="checkbox"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            toggleCheckbox(event)
          }
        />
      </label>
    </div>
  );
};

export default AccordionContent;
