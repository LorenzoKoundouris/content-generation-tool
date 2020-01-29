import React from "react";

import Preview from "../../components/Preview";
import {
  ErrorMessage,
  ConfigGrid,
  StatsGrid,
  GridHeader,
  Separator,
  GridCell
} from "./Tipster.styles";
import GenericSelector from "../../components/GenericSelector";
import IReactSelectItem from "../../interfaces/i-react-select-item";
import { ITipster } from "../../interfaces/i-tipster";
import { IStatRecord } from "../../interfaces/i-stat-record";

interface IAppState {
  selectedEnvOption: IReactSelectItem | null;
  selectedRepubOption: IReactSelectItem | null;
  selectedTipsterOption: IReactSelectItem | null;
  selectedTipster: ITipster | null;
  tipsters: ITipster[];
}

const environments = [
  { value: "dev", label: "DEV" },
  { value: "stg", label: "STG" },
  { value: "prod", label: "PROD" }
];

const repubs = [
  { value: "us", label: "US" },
  { value: "it", label: "IT" },
  { value: "es", label: "ES" },
  { value: "au", label: "AU" }
];

enum ENV_URL {
  dev = "https://www.dev.occloud.io/{repub}/show-all-tipsters-data",
  stg = "https://www.stg.occloud.io/{repub}/show-all-tipsters-data",
  prod = "https://www.oddschecker.com/{repub}/show-all-tipsters-data"
}

const mockTipsters = [
  {
    name: "John Doe",
    authorId: "1",
    stats:
      '[{"date":"2019-10-01","wins":21,"losses":5,"push":1,"roi":"22.2%"},{"date":"2019-09-01","wins":20,"losses":4,"push":1,"roi":"21.2%"},{"date":"2019-08-01","wins":19,"losses":3,"push":1,"roi":"20.2%"}]'
  },
  {
    name: "Aleksandra Marszalek",
    authorId: "666",
    stats:
      '[{"date":"2019-10-01","wins":21,"losses":5,"push":1,"roi":"22.2%"},{"date":"2019-09-01","wins":20,"losses":4,"push":1,"roi":"21.2%"},{"date":"2019-08-01","wins":19,"losses":3,"push":1,"roi":"20.2%"}]'
  },
  {
    name: "Ryan Elliott",
    authorId: "614",
    stats:
      '[{"date":"2019-10-01","wins":21,"losses":5,"push":1,"roi":"22.2%"},{"date":"2019-09-01","wins":20,"losses":4,"push":1,"roi":"21.2%"},{"date":"2019-08-01","wins":19,"losses":3,"push":1,"roi":"20.2%"}]'
  }
];

class Tipster extends React.Component<any, IAppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      selectedEnvOption: null,
      selectedRepubOption: null,
      selectedTipsterOption: null,
      selectedTipster: null,
      tipsters: []
    };
  }

  private fetchTipsters = () => {
    const {
      selectedEnvOption: envOption,
      selectedRepubOption: repubOption
    } = this.state;
    if (!envOption || !repubOption) return;

    //mock
    this.setState({
      tipsters: mockTipsters.map((tipster: any) => ({
        ...tipster,
        stats: JSON.parse(tipster.stats)
      })) as ITipster[]
    });

    // // @ts-ignore
    // let url = ENV_URL[envOption.value].replace("{repub}", repubOption.value);

    // fetch(url)
    //   .then(response => response.json())
    //   .then(({ tipsters }) => {
    //     this.setState({
    //       tipsters: tipsters.map((tipster: any) => ({
    //         ...tipster,
    //         stats: JSON.parse(tipster.stats)
    //       })),
    //       selectedTipster: tipsters[0]
    //     });
    //   })
    //   .catch(e => {
    //     console.log("Failed to fetch tipsters. ", e);
    //   });
  };

  // private handleChange = (key: string, selectedItem: IReactSelectItem) => {
  //   this.setState<never>(
  //     {
  //       [key]: selectedItem
  //     },
  //     this.fetchTipsters
  //   );
  // };

  private handleStatChange = (
    id: string,
    evt: React.ChangeEvent<HTMLInputElement>,
    type: "number" | "string" = "string"
  ) => {
    const { selectedTipster } = this.state;
    const stats = selectedTipster?.stats || [];
    const [date, key] = id.split("_");
    const getTypedValue = (value: string) =>
      type === "number" ? Number(value) : value;
    const getUpdatedStat = (stat: IStatRecord) => ({
      ...stat,
      [key]: getTypedValue(evt.target.value)
    });

    this.setState({
      selectedTipster: {
        ...selectedTipster,
        stats: stats.map(stat =>
          stat.date === date ? getUpdatedStat(stat) : stat
        )
      } as ITipster
    });
  };

  private handleTipsterChange = (selectedTipsterOption: IReactSelectItem) => {
    const { tipsters } = this.state;
    const selectedTipster = tipsters.find(
      tipster => tipster.authorId === selectedTipsterOption.value
    );

    this.setState({
      selectedTipster: selectedTipster || null,
      selectedTipsterOption
    });
  };

  private tipsterToSelectOption = ({ authorId, name }: ITipster) => ({
    value: authorId,
    label: name
  });

  private renderTipsterStats = () => {
    const { selectedTipster } = this.state;
    if (!selectedTipster || !selectedTipster.stats) return;
    const { stats } = selectedTipster;

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

  public render() {
    const {
      selectedEnvOption,
      selectedRepubOption,
      selectedTipsterOption,
      selectedTipster,
      tipsters
    } = this.state;

    return (
      <>
        <ConfigGrid>
          <GenericSelector
            value={selectedEnvOption}
            handleChange={value =>
              this.setState({ selectedEnvOption: value }, this.fetchTipsters)
            }
            options={environments}
          />

          <GenericSelector
            value={selectedRepubOption}
            handleChange={value =>
              this.setState({ selectedRepubOption: value }, this.fetchTipsters)
            }
            options={repubs}
          />

          {!!tipsters.length && (
            <GenericSelector
              value={selectedTipsterOption}
              handleChange={this.handleTipsterChange}
              options={tipsters.map(this.tipsterToSelectOption)}
            />
          )}
        </ConfigGrid>

        <Separator />

        {selectedTipster?.stats && (
          <>
            {this.renderTipsterStats()}
            <Preview value={JSON.stringify(selectedTipster.stats)} />
          </>
        )}

        {/* <GenericSelector
          value={null}
          handleChange={() => {}}
          options={this.tipsters}
        /> */}
        {/* {!payload && (
          <ErrorMessage>
            All the fields above must contain a value to generate Tipster
          </ErrorMessage>
        )} */}
      </>
    );
  }
}

// styles

export default Tipster;
