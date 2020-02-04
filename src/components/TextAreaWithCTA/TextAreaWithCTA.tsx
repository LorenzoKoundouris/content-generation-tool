import React from "react";
import {
  TextAreaContainer,
  Content,
  StyledHeader
} from "./TextAreaWithCTA.styles";
import { StyledButton } from "../common/Button/Button.styles";
import { StyledTextArea } from "../common/TextArea/TextArea.styles";

interface ITextAreaProps {
  value: string;
  type: UsageType.INPUT | UsageType.PREVIEW;
  invalid: boolean;
  handleChange?: (value: string) => void;
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

  private handlePaste = () => {
    const { handleChange } = this.props;
    if (!handleChange) return;

    navigator.clipboard.readText().then(
      clipText => handleChange(clipText),
      e => console.log("clipboard read failed", e)
    );
  };

  private handleCopy = (clipboardText: string) => {
    navigator.clipboard.writeText(clipboardText).then(
      e => console.log("clipboard successfully set", e),
      e => console.log("clipboard write failed", e)
    );
  };

  public render(): JSX.Element {
    const { invalid, value, type } = this.props;

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
            <StyledButton onClick={this.handlePaste}>Paste</StyledButton>
          )}

          {type === UsageType.PREVIEW && !invalid && (
            <StyledButton onClick={() => this.handleCopy(value)}>
              Copy
            </StyledButton>
          )}
        </Content>
      </TextAreaContainer>
    );
  }
}

export default TextAreaWithCTA;
