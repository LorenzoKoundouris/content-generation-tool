import React from "react";

import TextAreaWithCTA from "../../components/TextAreaWithCTA";
import { StatsGrid, GridHeader, Separator, GridCell } from "./Tipster.styles";
import { IStatRecord } from "../../interfaces/i-stat-record";
import { UsageType } from "../../components/TextAreaWithCTA/TextAreaWithCTA";

interface IAppState {
  invalid: boolean;
  pastedStats: string;
  payload: null | string;
  stats: IStatRecord[];
}

class Tipster extends React.Component<any, IAppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      invalid: false,
      pastedStats: "",
      payload: null,
      stats: []
    };
  }

  private getErrorMessage = (error: string) =>
    `Invalid input. Error: ${error}\n\nPlease check that the stats resemble the following example\n${JSON.stringify(
      [
        { date: "2019-10-01", wins: 21, losses: 5, push: 1, roi: "22.2%" },
        { date: "2019-09-01", wins: 20, losses: 4, push: 1, roi: "21.2%" },
        { date: "2019-08-01", wins: 19, losses: 3, push: 1, roi: "20.2%" }
      ],
      null,
      4
    )}`;

  private handleStatChange = (
    id: string,
    evt: React.ChangeEvent<HTMLInputElement>,
    type: "number" | "string" = "string"
  ) => {
    const { stats } = this.state;
    const [date, key] = id.split("_");
    const getTypedValue = (value: string) =>
      type === "number" ? Number(value) : value;
    const getUpdatedStat = (stat: IStatRecord) => ({
      ...stat,
      [key]: getTypedValue(evt.target.value)
    });
    const updatedStats = stats.map(stat =>
      stat.date === date ? getUpdatedStat(stat) : stat
    );

    this.setState({
      stats: updatedStats,
      payload: JSON.stringify(updatedStats)
    });
  };

  private renderTipsterStats = () => {
    const { stats } = this.state;
    if (!stats) return;

    return (
      <StatsGrid>
        <GridHeader>Date</GridHeader>
        <GridHeader>Wins</GridHeader>
        <GridHeader>Losses</GridHeader>
        <GridHeader>Push</GridHeader>
        <GridHeader>ROI</GridHeader>
        {stats.map(({ date, wins, losses, push, roi }) => (
          <>
            <GridCell
              key={date}
              type="date"
              defaultValue={date}
              onChange={evt => this.handleStatChange(`${date}_date`, evt)}
            />
            <GridCell
              key={`${date}-${wins}`}
              type="number"
              defaultValue={wins}
              onChange={evt =>
                this.handleStatChange(`${date}_wins`, evt, "number")
              }
            />
            <GridCell
              key={`${date}-${losses}`}
              type="number"
              defaultValue={losses}
              onChange={evt =>
                this.handleStatChange(`${date}_losses`, evt, "number")
              }
            />
            <GridCell
              key={`${date}-${push}`}
              type="number"
              defaultValue={push}
              onChange={evt =>
                this.handleStatChange(`${date}_push`, evt, "number")
              }
            />
            <GridCell
              key={`${date}-${roi}`}
              defaultValue={roi}
              onChange={evt => this.handleStatChange(`${date}_roi`, evt)}
            />
          </>
        ))}
      </StatsGrid>
    );
  };

  private handleChange = (pastedStats: string) => {
    this.setState({ pastedStats });

    try {
      const parsedStats: IStatRecord[] = JSON.parse(pastedStats);
      if (!Array.isArray(parsedStats)) throw "Tipster Stats not an array";

      this.setState(
        {
          stats: parsedStats,
          payload: pastedStats.replace(" ", ""),
          invalid: false
        },
        () => console.log("3. state", this.state)
      );
    } catch (error) {
      this.setState({
        payload: this.getErrorMessage(error),
        invalid: true
      });
    }
  };

  public render() {
    const { invalid, pastedStats, payload, stats } = this.state;

    return (
      <>
        <TextAreaWithCTA
          value={pastedStats}
          type={UsageType.INPUT}
          handleChange={this.handleChange}
          invalid={invalid}
        />

        <Separator />

        {!!stats.length && !invalid && this.renderTipsterStats()}

        {payload !== null && (
          <TextAreaWithCTA
            value={payload}
            type={UsageType.PREVIEW}
            invalid={invalid}
          />
        )}
      </>
    );
  }
}

export default Tipster;
