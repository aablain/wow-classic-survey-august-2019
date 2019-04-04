import * as React from "react";
import Data from "./data";
import Checkbox from "./checkbox";
import { Survey } from "../typings";

interface Props {
  idx: number;
  isColorBlind: boolean;
  selectedAnswers: {
    [x: string]: boolean;
  };
  toggleAnswer: (
    answer: string,
    isSelected: boolean,
    type: keyof Survey.Response
  ) => void;
  type: keyof Survey.Response;
}

interface State {}

export default class FilterComp extends React.Component<Props, State> {
  public displayName = "FilterComp";

  constructor(props: Props) {
    super(props);
  }

  render() {
    const { idx, selectedAnswers, type } = this.props;
    const title = Data.titles[type];
    const answers = (Data.answers as { [x: string]: string[] })[type];

    return (
      <div className="filters-filter-cont">
        <h4 className="filters-filter-title">
          {idx}. {title}?
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
}
