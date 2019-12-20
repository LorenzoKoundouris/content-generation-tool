import React from "react";
import { PreviewContainer, Content } from "./Preview.styles";
import { StyledButton } from "../common/button/Button.styles";
import { StyledTextArea } from "../common/TextArea/TextArea.styles";

interface IPreviewProps {
  value: string;
}

class Preview extends React.Component<IPreviewProps> {
  constructor(props: IPreviewProps) {
    super(props);
    this.state = { clipboardText: "" };
  }

  private updateClipboard(clipboardText: string) {
    navigator.clipboard.writeText(clipboardText).then(
      e => console.log("clipboard successfully set", e),
      e => console.log("clipboard write failed", e)
    );
  }

  public render(): JSX.Element {
    const { value } = this.props;

    return (
      <PreviewContainer>
        <h2>Preview</h2>
        <Content>
          <StyledTextArea value={value} rows={10} readOnly />
          <StyledButton onClick={() => this.updateClipboard(value)}>
            Copy
          </StyledButton>
        </Content>
      </PreviewContainer>
    );
  }
}

export default Preview;
