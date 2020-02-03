import React from "react";
import { TextAreaContainer, Content, StyledHeader } from "./TextAreaWithCTA.styles";
import { StyledButton } from "../common/Button/Button.styles";
import { StyledTextArea } from "../common/TextArea/TextArea.styles";

interface ITextAreaProps {
  value: string;
  type: UsageType.INPUT | UsageType.PREVIEW;
  ctaHandler: CopyHandler | PasteHandler;
  invalid: boolean;
}

type CopyHandler = (clipboardText: string) => void;
type PasteHandler = () => void;

export enum UsageType {
  INPUT = "input",
  PREVIEW = "preview"
}

class TextAreaWithCTA extends React.Component<ITextAreaProps> {
  constructor(props: ITextAreaProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { ctaHandler, invalid, value, type } = this.props;
    console.log("invalid", invalid);
    return (
      <TextAreaContainer>
        <StyledHeader>{type}</StyledHeader>
        <Content>
          <StyledTextArea
            className={invalid ? "invalid" : ""}
            value={value}
            rows={10}
            readOnly
          />

          {type === UsageType.INPUT && (
            <StyledButton onClick={ctaHandler as PasteHandler}>
              Paste
            </StyledButton>
          )}

          {type === UsageType.PREVIEW && !invalid && (
            <StyledButton onClick={() => ctaHandler(value)}>Copy</StyledButton>
          )}
        </Content>
      </TextAreaContainer>
    );
  }
}

export default TextAreaWithCTA;
