import React from "react";

import Row from "../Row";
import Preview from "../Preview";
import { ErrorMessage, Separator } from "./Tipster.styles";
import { INPUT } from "../../utils/constants";

interface InputField {
  value: string | number;
  isValid: boolean;
}

interface IStats {
  date: InputField;
  wins: InputField;
  losses: InputField;
  push: InputField;
  roi: InputField;
}

interface IAppState {
  fullName: InputField;
  socialMediaURL: InputField;
  username: InputField;
  avatarURL: InputField;
  bio: InputField;
  stats: IStats;
  payload: string;
}

class Tipster extends React.Component<any, IAppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      fullName: {
        value: "",
        isValid: false
      },
      socialMediaURL: {
        value: "",
        isValid: false
      },
      username: {
        value: "",
        isValid: false
      },
      avatarURL: {
        value: "",
        isValid: false
      },
      stats: {
        date: {
          value: "",
          isValid: false
        },
        wins: {
          value: 0,
          isValid: false
        },
        losses: {
          value: 0,
          isValid: false
        },
        push: {
          value: 0,
          isValid: false
        },
        roi: {
          value: "",
          isValid: false
        }
      },
      bio: {
        value: "",
        isValid: false
      },
      payload: ""
    };
  }

  private handleDetailChange = (key: string, changedDetail: string) => {
    this.setState<never>(
      {
        [key]: {
          value: changedDetail,
          isValid: !!changedDetail
        }
      },
      this.validateForm
    );
  };

  private handleStatChange = (key: string, changedStat: string) => {
    const updatedStats = Object.assign(this.state.stats, {
      [key]: {
        value: changedStat,
        isValid: !!changedStat
      }
    });

    this.setState<never>(
      {
        stats: updatedStats
      },
      this.validateForm
    );
  };

  private validateForm = () => {
    const {
      fullName,
      socialMediaURL,
      username,
      avatarURL,
      bio,
      stats: { date, wins, losses, push, roi }
    } = this.state;
    const isValidForm =
      fullName.isValid &&
      socialMediaURL.isValid &&
      username.isValid &&
      avatarURL.isValid &&
      bio.isValid &&
      date.isValid &&
      wins.isValid &&
      losses.isValid &&
      push.isValid &&
      roi.isValid;

    this.setState({
      payload: isValidForm
        ? `<p name="tipster">${JSON.stringify({
            fullName: fullName.value,
            socialMediaURL: socialMediaURL.value,
            username: username.value,
            avatarURL: avatarURL.value,
            bio: bio.value,
            stats: {
              date: date.value,
              wins: wins.value,
              losses: losses.value,
              push: push.value,
              roi: roi.value
            }
          })}</p>`
        : ""
    });
  };

  public render() {
    const {
      avatarURL,
      fullName,
      socialMediaURL,
      username,
      bio,
      stats,
      payload
    } = this.state;

    return (
      <>
        <Row
          component={INPUT}
          label="Full name"
          changeHandler={value => this.handleDetailChange("fullName", value)}
          isValid={fullName.isValid}
          placeholder="Ben Rolfe"
          value={fullName.value}
        />
        <Row
          component={INPUT}
          label="Social media URL"
          changeHandler={value =>
            this.handleDetailChange("socialMediaURL", value)
          }
          isValid={socialMediaURL.isValid}
          placeholder="https://twitter.com/benrolfe15"
          value={socialMediaURL.value}
        />
        <Row
          component={INPUT}
          label="Username"
          changeHandler={value => this.handleDetailChange("username", value)}
          isValid={username.isValid}
          placeholder="@benrolfe15"
          value={username.value}
        />
        <Row
          component={INPUT}
          label="Avatar URL"
          changeHandler={value => this.handleDetailChange("avatarURL", value)}
          isValid={avatarURL.isValid}
          placeholder="https://pbs.twimg.com/profile_images/1176747891563667458/PyTXtfBl_400x400.jpg"
          value={avatarURL.value}
        />
        <Row
          component={INPUT}
          label="Bio"
          changeHandler={value => this.handleDetailChange("bio", value)}
          isValid={bio.isValid}
          placeholder="Head of NFL Content - The Touchdown NFL, Editor at Pro Football Network and RotoBaller. Writer at Oddschecker US, Pro Football Network."
          value={bio.value}
        />
        <Separator />
        <Row
          component={INPUT}
          label="Date"
          changeHandler={value => this.handleStatChange("date", value)}
          isValid={stats.date.isValid}
          placeholder="Nov 2019"
          value={stats.date.value}
        />
        <Row
          component={INPUT}
          label="Wins"
          changeHandler={value => this.handleStatChange("wins", value)}
          isValid={stats.wins.isValid}
          type="number"
          value={stats.wins.value}
        />
        <Row
          component={INPUT}
          label="Losses"
          changeHandler={value => this.handleStatChange("losses", value)}
          isValid={stats.losses.isValid}
          type="number"
          value={stats.losses.value}
        />
        <Row
          component={INPUT}
          label="Push"
          changeHandler={value => this.handleStatChange("push", value)}
          isValid={stats.push.isValid}
          type="number"
          value={stats.push.value}
        />
        <Row
          component={INPUT}
          label="ROI"
          changeHandler={value => this.handleStatChange("roi", value)}
          isValid={stats.roi.isValid}
          placeholder="22.2%"
          value={stats.roi.value}
        />

        {!payload && (
          <ErrorMessage>
            All the fields above must contain a value to generate Tipster
          </ErrorMessage>
        )}

        <Preview value={payload} />
      </>
    );
  }
}

export default Tipster;
