import React, { useEffect, useState } from "react";
import Row from "../../components/Row";
import Preview from "../../components/Preview";
import { INPUT } from "../../utils/constants";

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
        isValid={!!twitterURL}
        placeholder="https://twitter.com/OddscheckerUS/status/1207625525029752833"
        value={twitterURL}
      />

      <Preview value={payload} />
    </div>
  );
}

export default Twitter;
