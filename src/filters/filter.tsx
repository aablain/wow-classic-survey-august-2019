import * as React from "react";
import Data from "./data";
import Checkbox from "./checkbox";
import { Survey } from "../typings";

import HideIcon from "../icons/hide";
import ShowIcon from "../icons/show";

interface Props {
  idx: number;
  isColorBlind: boolean;
  questionIsShowing: boolean;
  selectedAnswers: {
    [x: string]: boolean;
  };
  toggleAnswer: (
    answer: string,
    isSelected: boolean,
    type: keyof Survey.Response
  ) => void;
  type: keyof Survey.Response;
  updateQuestionsShowing: (question: string) => void;
}

interface State {}

export default class FilterComp extends React.Component<Props, State> {
  public displayName = "FilterComp";

  constructor(props: Props) {
    super(props);

    this.startUpdate = this.startUpdate.bind(this);
  }

  render() {
    const { idx, selectedAnswers, type } = this.props;
    const title = Data.titles[type];
    const answers = (Data.answers as { [x: string]: string[] })[type];

    return (
      <div className="filters-filter-cont">
        <h4 className="filters-filter-title">
          <span
            className={`filters-filter-title-text${
              this.props.questionIsShowing ? "" : " is-not-showing"
            }`}
          >
            {idx}. {title}?{" "}
          </span>
          <button
            className="filters-filter-title-showing-button"
            onClick={this.startUpdate}
          >
            {this.props.questionIsShowing ? (
              <ShowIcon fill="black" size={16} />
            ) : (
              <HideIcon fill="black" size={16} />
            )}
          </button>
        </h4>

        {answers &&
          answers.map((answer: string) => (
            <Checkbox
              answer={answer}
              isColorBlind={this.props.isColorBlind}
              isSelected={!!selectedAnswers[answer]}
              key={answer}
              onSelect={this.props.toggleAnswer}
              type={this.props.type}
            />
          ))}
      </div>
    );
  }

  startUpdate() {
    this.props.updateQuestionsShowing(this.props.type);
  }
}
