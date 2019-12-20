import React from "react";
import { StyledRow } from "./Row.styles";
import { StyledButton } from "../common/button/Button.styles";
import { TEXT_AREA } from "../../utils/constants";
import TextArea from "../common/TextArea";
import Input from "../common/Input";

interface IRowGenericProps {
  component: ComponentType;
  changeHandler: (changedValue: string) => void;
  isValid: boolean;
  label: string;
  placeholder?: string;
  value: string | number;
}

interface IRowInputProps extends IRowGenericProps {
  component: "input";
  type?: "text" | "number";
}

interface IRowTextAreaProps extends IRowGenericProps {
  component: "textarea";
  rows?: number;
}

type ComponentType = "input" | "textarea";

class Row extends React.Component<IRowInputProps | IRowTextAreaProps> {
  private pasteFromClipboard = (): void => {
    const { changeHandler, value } = this.props;

    navigator.clipboard.readText().then(clipboardText => {
      changeHandler(`${value}${clipboardText}`);
    });
  };

  private getComponentByType() {
    const { component, changeHandler, isValid, ...otherProps } = this.props;
    const className = isValid ? "" : "error";
    const Component = component === TEXT_AREA ? TextArea : Input;

    return (
      <Component
        className={className}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
          changeHandler(evt.currentTarget.value)
        }
        {...otherProps}
      />
    );
  }

  public render(): JSX.Element {
    const { label } = this.props;

    return (
      <StyledRow>
        <p>{label}</p>
        {this.getComponentByType()}
        <StyledButton onClick={this.pasteFromClipboard}>Paste</StyledButton>
      </StyledRow>
    );
  }
}

export default Row;
