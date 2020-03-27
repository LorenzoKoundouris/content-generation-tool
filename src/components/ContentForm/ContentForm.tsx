import React from "react";
import { FLOURISH, TIPSTER, TWITTER, YOUTUBE } from "../../utils/constants";
import { ContentType } from "../../types/ContentType";
import Flourish from "../../views/Flourish";
import Tipster from "../../views/Tipster";
import Twitter from "../../views/Twitter";
import YouTube from "../../views/YouTube";

interface IContentFormProps {
  type: ContentType;
}

function ContentForm({ type }: IContentFormProps): JSX.Element {
  switch (type) {
    case FLOURISH:
      return <Flourish />;
    case TIPSTER:
      return <Tipster />;

    case TWITTER:
      return <Twitter />;

    case YOUTUBE:
      return <YouTube />;

    default:
      return <div />;
  }
}

export default ContentForm;
