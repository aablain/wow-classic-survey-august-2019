import * as React from "react";
import PieChart from "react-minimal-pie-chart";
import BarGraph from "./bargraph";
// import Chart from "react-google-charts";
import Data from "../filters/data";
import { Survey } from "../typings";

interface Props {
  idx: number;
  isColorBlind: boolean;
  answerCounts: {
    [x: string]: number;
  };
  question: keyof Survey.Response;
  totalAnswers: number;
}

interface State {
  counts: {
    title: string;
    value: number;
    color: string;
  }[];
  countsArr?: [string, number][];
}

export default class Result extends React.Component<Props, State> {
  public displayName = "Result";

  constructor(props: Props) {
    super(props);

    this.state = {
      counts: this._getCountsAsArray(props.answerCounts)
      //   countsArr: this._getCountsAssARrayofArrays(props.answerCounts)
    };

    this.getColor = this.getColor.bind(this);
    this.getChartType = this.getChartType.bind(this);
    this.renderBarGraph = this.renderBarGraph.bind(this);
    this.renderPieChart = this.renderPieChart.bind(this);
  }

  _getCountsAsArray(answerCounts: {
    [x: string]: number;
  }): {
    title: string;
    value: number;
    color: string;
  }[] {
    return Object.entries(answerCounts).map(([key, value], idx) => ({
      title: key,
      value,
      color: this.getColor(idx, key)
    }));
  }

  _getCountsAssARrayofArrays(answerCounts: {
    [x: string]: number;
  }): [string, number][] {
    return Object.entries(answerCounts);
  }

  componentDidUpdate(prevProps: Props) {
    if (
      this.props.answerCounts !== prevProps.answerCounts ||
      this.props.isColorBlind !== prevProps.isColorBlind
    ) {
      this.setState({
        counts: this._getCountsAsArray(this.props.answerCounts)
        // countsArr: this._getCountsAssARrayofArrays(this.props.answerCounts)
      });
    }
  }

  public render() {
    return (
      <div className="result-cont">
        <h4 className="result-title">{Data.titles[this.props.question]}?</h4>
        <div className="info-cont">
          {this.getChartType() === "BarChart"
            ? this.renderBarGraph()
            : this.renderPieChart()}

          <ul className="stats-list-cont">
            {!!this.state.counts.length &&
              this.state.counts.map(({ color, title, value }) => (
                <li
                  className={`result-text${!value ? " none-match" : ""}`}
                  key={title}
                  style={{
                    color
                    // textDecoration: !value ? "line-through" : ""
                  }}
                >
                  <span className="result-text-title">{title}:</span>{" "}
                  <span className="result-text-value">
                    {value} -{" "}
                    <span
                      className="result-text-value-percentage"
                      style={{
                        borderColor: color
                        // backgroundColor: color
                      }}
                    >
                      {((value / this.props.totalAnswers) * 100).toFixed(2)}%
                    </span>
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }

  getColor(idx: number, key: string): string {
    if (this.props.isColorBlind) {
      return Data.colorBlindColors[idx];
    }

    return this.props.question === "class"
      ? (Data.colorsObj as { [x: string]: string })[key]
      : Data.colors[idx];
  }

  getChartType(): "PieChart" | "BarChart" {
    switch (this.props.question) {
      case "prof60":
      case "profLeveling":
      case "contentInterest":
        return "BarChart";
      default:
        return "PieChart";
    }
  }

  renderBarGraph() {
    return (
      <BarGraph
        answers={this.state.counts}
        totalAnswers={this.props.totalAnswers}
      />
    );
  }

  renderPieChart() {
    const props = {
      data: this.state.counts,
      label: label,
      labelPosition: 114,
      labelStyle: {
        fontSize: "8x"
      }
    };

    // @ts-ignore
    return <PieChart {...props} />;
  }
}

const label = (labelProps: {
  dx: number;
  dy: number;
  data: { color: string; percentage: number }[];
  dataIndex: number;
  key: string;
  textAnchor: string;
  x: number;
  y: number;
}) => {
  const percent = labelProps.data[labelProps.dataIndex].percentage;
  return (
    <text
      className="chart-result-percent"
      textAnchor={labelProps.textAnchor}
      alignmentBaseline="middle"
      dx={labelProps.dx}
      dy={labelProps.dy}
      fill={labelProps.data[labelProps.dataIndex].color}
      key={labelProps.key}
      x={labelProps.x}
      y={labelProps.y}
    >
      {percent ? `${percent.toFixed(2)}%` : ""}
    </text>
  );
};
