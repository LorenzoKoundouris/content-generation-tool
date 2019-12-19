import React from "react";
import Select from "react-select";
import IReactSelectItem from "../../interfaces/i-react-select-item";
import { TIPSTER, TWITTER, YOUTUBE } from "../../utils/constants";

interface IContentTypeSelectorProps {
  value: IReactSelectItem | null;
  handleChange: (option: IReactSelectItem) => void;
}

interface IContentTypeSelectorState {
  selectedContentType: null | IReactSelectItem;
}

class ContentTypeSelector extends React.Component<
  IContentTypeSelectorProps,
  IContentTypeSelectorState
> {
  private contentTypes = [
    { value: TIPSTER, label: "Tipster" },
    { value: TWITTER, label: "Twitter" },
    { value: YOUTUBE, label: "YouTube" }
  ];

  constructor(props: any) {
    super(props);
    this.state = { selectedContentType: null };
  }

  public render() {
    const { handleChange, value } = this.props;
    return (
      <Select
        value={value}
        // https://github.com/JedWatson/react-select/issues/2902
        onChange={handleChange as any}
        options={this.contentTypes}
      />
    );
  }
}

export default ContentTypeSelector;
