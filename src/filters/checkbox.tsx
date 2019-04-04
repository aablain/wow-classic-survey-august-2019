import * as React from "react";
import { Survey } from "../typings";

interface Props {
  answer: string;
  isSelected?: boolean;
  isColorBlind: boolean;
  onSelect: (
    answer: string,
    isSelected: boolean,
    type: keyof Survey.Response
  ) => void;
  style?: React.CSSProperties;
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
      <div className="filters-filter-checkbox-cont" style={this.props.style}>
        <button
          className="filters-filter-checkbox"
          onClick={this.startOnSelect}
          style={{
            backgroundColor: this.props.isSelected
              ? this.props.isColorBlind
                ? "#1F618D"
                : "#F1C40F"
              : "transparent"
          }}
        />

        <label
          className="filters-filter-checkbox-answer-text"
          role="button"
          onClick={this.startOnSelect}
        >
          {this.props.answer}
        </label>
      </div>
    );
  }

  startOnSelect(
    e:
      | React.SyntheticEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLLabelElement, MouseEvent>
  ) {
    this.props.onSelect(
      this.props.answer,
      !!this.props.isSelected,
      this.props.type
    );
  }
}
