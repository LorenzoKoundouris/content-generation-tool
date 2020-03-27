import React, { useEffect, useState } from "react";
import Row from "../../components/Row";
import TextAreaWithCTA from "../../components/TextAreaWithCTA";
import { INPUT } from "../../utils/constants";
import { UsageType } from "../../components/TextAreaWithCTA/TextAreaWithCTA";

function Flourish() {
  const [flourishURL, setFlourishURL] = useState("");
  const [payload, setPayload] = useState("");

  useEffect(() => {
    setPayload(`<p flourish="${flourishURL}"></p>`);
  }, [flourishURL]);

  return (
    <div>
      <Row
        component={INPUT}
        label="Flourish embed URL"
        changeHandler={setFlourishURL}
        invalid={!flourishURL}
        placeholder="https://public.flourish.studio/visualisation/1680197/embed"
        value={flourishURL}
      />

      <TextAreaWithCTA
        value={payload}
        type={UsageType.PREVIEW}
        invalid={!flourishURL}
      />
    </div>
  );
}

export default Flourish;
