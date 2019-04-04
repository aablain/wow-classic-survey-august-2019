import * as React from "react";
import Data from "./data";
import Filter from "./filter";
import { Survey } from "../typings";
import { SelectedAnswers } from "../AppWrapper";
import Checkbox from "./checkbox";

import "./styles.scss";

interface Props {
  applyFilter: () => void;
  isColorBlind: boolean;
  selectedAnswers: SelectedAnswers;
  toggleAnswer: (
    answer: string,
    isSelected: boolean,
    type: keyof Survey.Response
  ) => void;
  updateColorBlind: () => void;
}

interface State {}

export default class Filters extends React.Component<Props, State> {
  public displayName = "Filters";

  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <div className="filters-main-cont">
        <Checkbox
          isSelected={this.props.isColorBlind}
          answer="Yo Dingus, I'm colorblind"
          onSelect={(
            answer: string,
            isSelected: boolean,
            type: keyof Survey.Response
          ) => this.props.updateColorBlind()}
          type={"expectedTimeTo60"}
        />
        <h2 className="filters-title">Filters</h2>

        <div className="filters-filters-cont">
          {Data.questions.map((question, idx) => (
            <Filter
              idx={idx + 1}
              key={question}
              selectedAnswers={
                this.props.selectedAnswers[question as keyof SelectedAnswers]
              }
              type={question as keyof Survey.Response}
              toggleAnswer={this.props.toggleAnswer}
            />
          ))}
        </div>
        <button className="filter-button" onClick={this.props.applyFilter}>
          Apply Filter
        </button>
      </div>
    );
  }
}
