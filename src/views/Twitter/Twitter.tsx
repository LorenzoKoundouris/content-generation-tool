import React, { useEffect, useState } from "react";
import Row from "../../components/Row";
import TextAreaWithCTA from "../../components/TextAreaWithCTA";
import { INPUT } from "../../utils/constants";
import { UsageType } from "../../components/TextAreaWithCTA/TextAreaWithCTA";

function Twitter() {
  const [twitterURL, setTwitterURL] = useState("");
  const [payload, setPayload] = useState("");

  useEffect(() => {
    //Validate the tweet with a regex
    setPayload(`<p tweet="${twitterURL}"></p>`);
  }, [twitterURL]);

  return (
    <div>
      <Row
        component={INPUT}
        label="Twitter URL"
        changeHandler={setTwitterURL}
        invalid={!twitterURL}
        placeholder="https://twitter.com/OddscheckerUS/status/1207625525029752833"
        value={twitterURL}
      />

      <TextAreaWithCTA
        value={payload}
        type={UsageType.PREVIEW}
        invalid={!twitterURL}
      />
    </div>
  );
}

export default Twitter;
