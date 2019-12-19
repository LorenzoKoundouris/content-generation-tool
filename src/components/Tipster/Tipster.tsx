import React from "react";

import Row from "../Row";
import Preview from "../Preview";
import { ErrorMessage, Separator } from "./Tipster.styles";

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

  // Tipster details section
  private handleNameChange = (evt: any) => {
    this.setState(
      {
        fullName: {
          value: evt.currentTarget.value,
          isValid: !!evt.currentTarget.value
        }
      },
      this.validateForm
    );
  };

  private handleSocialMediaURLChange = (evt: any) => {
    this.setState(
      {
        socialMediaURL: {
          value: evt.currentTarget.value,
          isValid: !!evt.currentTarget.value
        }
      },
      this.validateForm
    );
  };

  private handleUsernameChange = (evt: any) => {
    this.setState(
      {
        username: {
          value: evt.currentTarget.value,
          isValid: !!evt.currentTarget.value
        }
      },
      this.validateForm
    );
  };

  private handleAvatarURLChange = (evt: any) => {
    this.setState(
      {
        avatarURL: {
          value: evt.currentTarget.value,
          isValid: !!evt.currentTarget.value
        }
      },
      this.validateForm
    );
  };

  private handleBioChange = (evt: any) => {
    this.setState(
      {
        bio: {
          value: evt.currentTarget.value,
          isValid: !!evt.currentTarget.value
        }
      },
      this.validateForm
    );
  };

  // Stats section
  private updateStats = (updatedStats: IStats) => {
    this.setState(
      {
        stats: updatedStats
      },
      this.validateForm
    );
  };

  private handleStatsDateChange = (evt: any) => {
    const updatedStats = Object.assign(this.state.stats, {
      date: {
        value: evt.currentTarget.value,
        isValid: !!evt.currentTarget.value
      }
    });

    this.updateStats(updatedStats);
  };

  private handleStatsWinsChange = (evt: any) => {
    const updatedStats = Object.assign(this.state.stats, {
      wins: {
        value: Number(evt.currentTarget.value),
        isValid: !!evt.currentTarget.value
      }
    });

    this.updateStats(updatedStats);
  };

  private handleStatsLossesChange = (evt: any) => {
    const updatedStats = Object.assign(this.state.stats, {
      losses: {
        value: Number(evt.currentTarget.value),
        isValid: !!evt.currentTarget.value
      }
    });

    this.updateStats(updatedStats);
  };

  private handleStatsPushChange = (evt: any) => {
    const updatedStats = Object.assign(this.state.stats, {
      push: {
        value: Number(evt.currentTarget.value),
        isValid: !!evt.currentTarget.value
      }
    });

    this.updateStats(updatedStats);
  };

  private handleStatsROIChange = (evt: any) => {
    const updatedStats = Object.assign(this.state.stats, {
      roi: {
        value: evt.currentTarget.value,
        isValid: !!evt.currentTarget.value
      }
    });

    this.updateStats(updatedStats);
  };

  private handleStatChange = (evt: any) => {
    const updatedStats = Object.assign(this.state.stats, {
      [evt.currentTarget.name]: {
        value: evt.currentTarget.value,
        isValid: !!evt.currentTarget.value
      }
    });

    this.updateStats(updatedStats);
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
      <div>
        <div className="inputs">
          <Row
            label="Full name"
            changeHandler={this.handleNameChange}
            isValid={fullName.isValid}
            placeholder="Ben Rolfe"
            value={fullName.value}
          />
          <Row
            label="Social media URL"
            changeHandler={this.handleSocialMediaURLChange}
            isValid={socialMediaURL.isValid}
            placeholder="https://twitter.com/benrolfe15"
            value={socialMediaURL.value}
          />
          <Row
            label="Username"
            changeHandler={this.handleUsernameChange}
            isValid={username.isValid}
            placeholder="@benrolfe15"
            value={username.value}
          />
          <Row
            label="Avatar URL"
            changeHandler={this.handleAvatarURLChange}
            isValid={avatarURL.isValid}
            placeholder="https://pbs.twimg.com/profile_images/1176747891563667458/PyTXtfBl_400x400.jpg"
            value={avatarURL.value}
          />
          <Row
            label="Bio"
            changeHandler={this.handleBioChange}
            isValid={bio.isValid}
            placeholder="Head of NFL Content - The Touchdown NFL, Editor at Pro Football Network and RotoBaller. Writer at Oddschecker US, Pro Football Network."
            value={bio.value}
          />
          <Separator />
          <Row
            label="Date"
            changeHandler={this.handleStatsDateChange}
            isValid={stats.date.isValid}
            placeholder="Nov 2019"
            value={stats.date.value}
          />
          <Row
            label="Wins"
            changeHandler={this.handleStatsWinsChange}
            isValid={stats.wins.isValid}
            type="number"
            placeholder="23"
            value={stats.wins.value}
          />
          <Row
            label="Losses"
            changeHandler={this.handleStatsLossesChange}
            isValid={stats.losses.isValid}
            type="number"
            placeholder="5"
            value={stats.losses.value}
          />
          <Row
            label="Push"
            changeHandler={this.handleStatsPushChange}
            isValid={stats.push.isValid}
            type="number"
            placeholder="1"
            value={stats.push.value}
          />
          <Row
            label="ROI"
            changeHandler={this.handleStatsROIChange}
            isValid={stats.roi.isValid}
            placeholder="22.2%"
            value={stats.roi.value}
          />
        </div>

        {!payload && (
          <ErrorMessage>
            All the fields above must contain a value to generate Tipster
          </ErrorMessage>
        )}

        <Preview value={payload} />
      </div>
    );
  }
}

export default Tipster;
