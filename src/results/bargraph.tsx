import * as React from "react";

import "./bargraph.scss";

interface Props {
  answers: { color: string; title: string; value: number }[];
  totalAnswers: number;
}

interface State {}

export default class BarGraph extends React.Component<Props> {
  public displayName = "BarGraph";

  constructor(props: Props) {
    super(props);

    this.getAnswerWidth = this.getAnswerWidth.bind(this);
  }

  public render() {
    return (
      <div className="bar-graph">
        {this.props.answers &&
          this.props.answers.map(
            answer =>
              !!answer.value && (
                <p
                  className="answer-bar"
                  data-content={`${answer.title}: ${
                    answer.value
                  } (${this.getAnswerWidth(answer)}%)`}
                  key={answer.title}
                  style={{
                    width: `${this.getAnswerWidth(answer)}%`,
                    backgroundColor: answer.color
                  }}
                />
              )
          )}
        <p className="bar-graph-range">
          <span>0</span>
          <span>{this.props.totalAnswers}</span>
        </p>
      </div>
    );
  }

  getAnswerWidth(answer: { color: string; title: string; value: number }) {
    return ((answer.value / this.props.totalAnswers) * 100).toFixed(2);
  }
}
