import React, { useEffect, useState } from "react";
import Row from "../Row";
import Preview from "../Preview";

function YouTube() {
  const [youTubeEmbed, setYouTubeEmbed] = useState("");
  const [payload, setPayload] = useState("");

  useEffect(() => {
    //Validate the tweet with a regex
    setPayload(`<p name=video>${youTubeEmbed}</p>`);
  }, [youTubeEmbed]);

  const handleChange = (evt: any) => {
    setYouTubeEmbed(evt.currentTarget.value);
  };

  return (
    <div>
      <Row
        label="YouTube Embed Code"
        changeHandler={handleChange}
        isValid
        placeholder='<iframe width="560" height="315" src="https://www.youtube.com/embed/mFh9c6BMeVk?start=2" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        value={youTubeEmbed}
      />

      <Preview value={payload} />
    </div>
  );
}

export default YouTube;
