import React from "react";
import { TIPSTER, TWITTER, YOUTUBE } from "../../utils/constants";
import { ContentType } from "../../types/ContentType";
import Tipster from "../Tipster";
import Twitter from "../Twitter";
import YouTube from "../YouTube";

interface IContentFormProps {
  type: ContentType;
}

function ContentForm({ type }: IContentFormProps): JSX.Element {
  switch (type) {
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
