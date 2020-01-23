import React from "react";

// import Preview from "../../components/Preview";
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

interface IAppState {
  // stats: IStats[];
  // payload: string;
  tipsters: ITipster[];
  selectedEnv: IReactSelectItem | null;
  selectedRepub: IReactSelectItem | null;
  selectedTipster: IReactSelectItem | null;
}

const environments = [
  { value: "local", label: "LOCAL" },
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
  local = "http://localhost:8092/us/show-all-tipsters-data",
  dev = "https://www.dev.occloud.io/{repub}/show-all-tipsters-data",
  stg = "https://www.stg.occloud.io/{repub}/show-all-tipsters-data",
  prod = "https://www.oddschecker.com/{repub}/show-all-tipsters-data"
}

const mockTipsters = [
  {
    name: "John Doe",
    authorId: "1",
    stats: JSON.parse(
      '[{"date":"2019-10-01","wins":21,"losses":5,"push":1,"roi":"22.2%"},{"date":"2019-09-01","wins":20,"losses":4,"push":1,"roi":"21.2%"},{"date":"2019-08-01","wins":19,"losses":3,"push":1,"roi":"20.2%"}]'
    )
  },
  {
    name: "Aleksandra Marszalek",
    authorId: "666",
    stats: JSON.parse(
      '[{"date":"2019-10-01","wins":21,"losses":5,"push":1,"roi":"22.2%"},{"date":"2019-09-01","wins":20,"losses":4,"push":1,"roi":"21.2%"},{"date":"2019-08-01","wins":19,"losses":3,"push":1,"roi":"20.2%"}]'
    )
  },
  {
    name: "Ryan Elliott",
    authorId: "614",
    stats: JSON.parse(
      '[{"date":"2019-10-01","wins":21,"losses":5,"push":1,"roi":"22.2%"},{"date":"2019-09-01","wins":20,"losses":4,"push":1,"roi":"21.2%"},{"date":"2019-08-01","wins":19,"losses":3,"push":1,"roi":"20.2%"}]'
    )
  }
];

class Tipster extends React.Component<any, IAppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      tipsters: mockTipsters,
      selectedEnv: { value: "dev", label: "DEV" },
      selectedRepub: { value: "us", label: "US" },
      selectedTipster: this.tipsterToSelectOption(mockTipsters[1])
      // tipsters: [],
      // selectedEnv: null,
      // selectedRepub: null,
      // selectedTipster: null
    };
  }

  private fetchTipsters = () => {
    const { selectedEnv: envOption, selectedRepub: repubOption } = this.state;
    if (!envOption || !repubOption) {
      return;
    }

    //mock
    this.setState({
      tipsters: mockTipsters
      // selectedTipster: this.tipsterToSelectOption(mockTipsters[0])
    });

    // @ts-ignore
    // let url = ENV_URL[envOption.value].replace("{repub}", repubOption.value);
    //
    // fetch(url)
    //   .then(response => response.json())
    //   .then(({ tipsters }) => {
    //     this.setState({ tipsters, selectedTipster: tipsters[0] });
    //   })
    //   .catch(e => {
    //     console.log("Failed to fetch tipsters. ", e);
    //   });
  };

  private handleChange = (key: string, selectedItem: IReactSelectItem) => {
    this.setState<never>(
      {
        [key]: selectedItem
      },
      this.fetchTipsters
    );
  };

  private tipsterToSelectOption = ({ authorId, name }: ITipster) => ({
    value: authorId,
    label: name
  });

  private getSelectedTipsterStats = () => {
    const { tipsters, selectedTipster } = this.state;
    const tipsterData = tipsters.find(
      tipster => tipster.authorId === selectedTipster?.value
    );

    if (!tipsterData) return;

    const { stats } = tipsterData;

    return (
      <StatsGrid>
        <GridHeader>Date</GridHeader>
        <GridHeader>Wins</GridHeader>
        <GridHeader>Losses</GridHeader>
        <GridHeader>Push</GridHeader>
        <GridHeader>ROI</GridHeader>
        {stats.map(({ date, wins, losses, push, roi }) => (
          <>
            <GridCell>{date}</GridCell>
            <GridCell>{wins}</GridCell>
            <GridCell>{losses}</GridCell>
            <GridCell>{push}</GridCell>
            <GridCell>{roi}</GridCell>
          </>
        ))}
      </StatsGrid>
    );
  };

  public render() {
    const {
      // stats,
      // payload
      selectedEnv,
      selectedRepub,
      selectedTipster,
      tipsters
    } = this.state;

    return (
      <>
        <ConfigGrid>
          <GenericSelector
            value={selectedEnv}
            handleChange={value => this.handleChange("selectedEnv", value)}
            options={environments}
          />
          <GenericSelector
            value={selectedRepub}
            handleChange={value => this.handleChange("selectedRepub", value)}
            options={repubs}
          />

          {!!tipsters.length && (
            <GenericSelector
              value={selectedTipster}
              handleChange={value =>
                this.handleChange("selectedTipster", value)
              }
              options={tipsters.map(this.tipsterToSelectOption)}
            />
          )}
        </ConfigGrid>

        <Separator />

        {selectedTipster && this.getSelectedTipsterStats()}
        {/* <GenericSelector
          value={null}
          handleChange={() => {}}
          options={this.tipsters}
        /> */}
        {/* {!payload && (
          <ErrorMessage>
            All the fields above must contain a value to generate Tipster
          </ErrorMessage>
        )}

        <Preview value={payload} /> */}
      </>
    );
  }
}

// styles

export default Tipster;
