import React, { useEffect, useState } from "react";
import Row from "../Row";
import Preview from "../Preview";

function Twitter() {
  const [twitterURL, setTwitterURL] = useState("");
  const [payload, setPayload] = useState("");

  useEffect(() => {
    //Validate the tweet with a regex
    setPayload(`<p tweet="${twitterURL}"></p>`);
  }, [twitterURL]);

  const handleChange = (evt: any) => {
    setTwitterURL(evt.currentTarget.value);
  };

  return (
    <div>
      <Row
        label="Twitter URL"
        changeHandler={handleChange}
        isValid
        placeholder="https://twitter.com/OddscheckerUS/status/1207625525029752833"
        value={twitterURL}
      />

      <Preview value={payload} />
    </div>
  );
}

export default Twitter;
