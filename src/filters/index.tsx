import * as React from "react";
import Data from "./data";
import Filter from "./filter";
import { FilterTypes, Survey } from "../typings";
import Checkbox from "./checkbox";

import "./styles.scss";

interface Props {
  applyFilter: () => void;
  clearFilter: () => void;
  innerHeight: number;
  isColorBlind: boolean;
  questionsShowing: FilterTypes.QuestionsShowing;
  resetQuestionsShowing: () => void;
  selectedAnswers: FilterTypes.SelectedAnswers;
  toggleAnswer: (
    answer: string,
    isSelected: boolean,
    type: keyof Survey.Response
  ) => void;
  updateColorBlind: () => void;
  updateQuestionsShowing: (question: string) => void;
}

interface State {}

export default class Filters extends React.Component<Props, State> {
  public displayName = "Filters";

  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <div
        className="filters-main-cont"
        style={{ height: this.props.innerHeight }}
      >
        <h2 className="filters-title">
          Filters{" "}
          <button
            className="filters-title-reset-button"
            onClick={this.props.resetQuestionsShowing}
          >
            Reset Results Showing
          </button>
        </h2>

        <div className="filters-filters-cont">
          {Data.questions.map((question, idx) => (
            <Filter
              idx={idx + 1}
              isColorBlind={this.props.isColorBlind}
              key={question}
              questionIsShowing={
                this.props.questionsShowing[
                  question as keyof FilterTypes.QuestionsShowing
                ]
              }
              selectedAnswers={
                this.props.selectedAnswers[
                  question as keyof FilterTypes.SelectedAnswers
                ]
              }
              type={question as keyof Survey.Response}
              toggleAnswer={this.props.toggleAnswer}
              updateQuestionsShowing={this.props.updateQuestionsShowing}
            />
          ))}
        </div>
        <div className="filter-button-cont">
          <button
            className="filter-button-clear"
            onClick={this.props.clearFilter}
          >
            Clear
          </button>
          <button className="filter-button" onClick={this.props.applyFilter}>
            Apply Filter
          </button>
          <Checkbox
            isSelected={this.props.isColorBlind}
            isColorBlind={true}
            answer="I'm colorblind"
            onSelect={(
              answer: string,
              isSelected: boolean,
              type: keyof Survey.Response
            ) => this.props.updateColorBlind()}
            style={{ transform: "scale(0.7)" }}
            type={"expectedTimeTo60"}
          />
        </div>
      </div>
    );
  }
}
