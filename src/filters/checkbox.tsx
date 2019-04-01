import * as React from "react";
import { Survey } from "../typings";

interface Props {
  answer: string;
  isSelected?: boolean;
  onSelect: (
    answer: string,
    isSelected: boolean,
    type: keyof Survey.Response
  ) => void;
  type: keyof Survey.Response;
}

interface State {}

export default class Checkbox extends React.Component<Props> {
  public displayName = "Checkbox";

  constructor(props: Props) {
    super(props);

    this.startOnSelect = this.startOnSelect.bind(this);
  }

  public render() {
    return (
      <div className="filters-filter-checkbox-cont">
        <button
          className="filters-filter-checkbox"
          onClick={this.startOnSelect}
          style={{
            backgroundColor: this.props.isSelected ? "tomato" : "transparent"
          }}
        >
          {/* <p className="filters-filter-checkbox-inner-box" /> */}
        </button>

        <p className="filters-filter-checkbox-answer-text">
          {this.props.answer}
        </p>
      </div>
    );
  }

  startOnSelect(e: React.SyntheticEvent<HTMLButtonElement>) {
    this.props.onSelect(
      this.props.answer,
      !!this.props.isSelected,
      this.props.type
    );
  }
}
