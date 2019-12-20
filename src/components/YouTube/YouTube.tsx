import React, { useEffect, useState } from "react";
import Row from "../Row";
import Preview from "../Preview";
import { TEXT_AREA } from "../../utils/constants";

function YouTube() {
  const [youTubeEmbed, setYouTubeEmbed] = useState("");
  const [payload, setPayload] = useState("");

  useEffect(() => {
    //Validate the tweet with a regex
    setPayload(`<p name="video">${youTubeEmbed}</p>`);
  }, [youTubeEmbed]);

  return (
    <div>
      <Row
        component={TEXT_AREA}
        label="YouTube Embed Code"
        changeHandler={setYouTubeEmbed}
        isValid={!!youTubeEmbed}
        placeholder='<iframe width="560" height="315" src="https://www.youtube.com/embed/mFh9c6BMeVk?start=2" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        value={youTubeEmbed}
        rows={5}
      />

      <Preview value={payload} />
    </div>
  );
}

export default YouTube;
