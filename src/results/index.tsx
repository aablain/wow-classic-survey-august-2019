import * as React from "react";
import Data from "../filters/data";
import Result from "./result";
import { Survey } from "../typings";

export interface AnswersCounts {
  ageRange: {
    [x: string]: number;
  };
  characterGender: {
    [x: string]: number;
  };
  class: {
    [x: string]: number;
  };
  classComparison: {
    [x: string]: number;
  };
  contentInterest: {
    [x: string]: number;
  };
  expectedTimeTo60: {
    [x: string]: number;
  };
  faction: {
    [x: string]: number;
  };
  firstRetailExpansionPlayed: {
    [x: string]: number;
  };
  hasActiveSub: {
    [x: string]: number;
  };
  hasPlayedPrivateServer: {
    [x: string]: number;
  };
  mostRecentExpansionPlayed: {
    [x: string]: number;
  };
  prof60: {
    [x: string]: number;
  };
  profLeveling: {
    [x: string]: number;
  };
  race: {
    [x: string]: number;
  };
  region: {
    [x: string]: number;
  };
  responseDate: {
    [x: string]: number;
  };
  role: {
    [x: string]: number;
  };
  serverType: {
    [x: string]: number;
  };
}

import "./styles.scss";

interface Props {
  activeFilters?: [keyof Survey.Response, Survey.AllAnswers[]][];
  allResponsesCount: number;
  responses: Survey.Response[];
}

interface State {
  answerCounts: AnswersCounts;
}

export default class Results extends React.Component<Props, State> {
  public displayName = "Results";

  constructor(props: Props) {
    super(props);

    this.state = {
      answerCounts: this._calcAnswerQuantities() || {
        ageRange: {},
        characterGender: {},
        class: {},
        classComparison: {},
        contentInterest: {},
        expectedTimeTo60: {},
        faction: {},
        firstRetailExpansionPlayed: {},
        hasActiveSub: {},
        hasPlayedPrivateServer: {},
        mostRecentExpansionPlayed: {},
        prof60: {},
        profLeveling: {},
        race: {},
        region: {},
        responseDate: {},
        role: {},
        serverType: {}
      }
    };

    this._getAnswersTemplate = this._getAnswersTemplate.bind(this);
    this._calcAnswerQuantities = this._calcAnswerQuantities.bind(this);
  }

  _calcAnswerQuantities() {
    const { responses } = this.props;

    const answerCounts = responses.reduce(
      (accum, response) => {
        const respAsArray = Object.entries(response);

        respAsArray.forEach(([questionKey, answer]: string[]) => {
          if (questionKey === "responseDate") {
            return accum;
          }
          if (
            questionKey === "prof60" ||
            questionKey === "profLeveling" ||
            questionKey === "contentInterest"
          ) {
            const subAnswers = answer.split(", ");

            subAnswers.forEach(subAnswer => {
              if (!accum[questionKey as keyof Survey.Response][subAnswer]) {
                accum[questionKey as keyof Survey.Response][subAnswer] = 1;
              } else {
                accum[questionKey as keyof Survey.Response][subAnswer]++;
              }
            });
          } else {
            if (!accum[questionKey as keyof Survey.Response][answer]) {
              accum[questionKey as keyof Survey.Response][answer] = 1;
            } else {
              accum[questionKey as keyof Survey.Response][answer]++;
            }
          }

          return accum;
        });

        return accum;
      },
      this._getAnswersTemplate()
      //   {
      //     ageRange: {},
      //     characterGender: {},
      //     class: {},
      //     classComparison: {},
      //     contentInterest: {},
      //     expectedTimeTo60: {},
      //     faction: {},
      //     firstRetailExpansionPlayed: {},
      //     hasActiveSub: {},
      //     hasPlayedPrivateServer: {},
      //     mostRecentExpansionPlayed: {},
      //     prof60: {},
      //     profLeveling: {},
      //     race: {},
      //     region: {},
      //     responseDate: {},
      //     role: {},
      //     serverType: {}
      //   } as AnswersCounts
    );

    return answerCounts;
  }

  _getAnswersTemplate() {
    return Object.entries(Data.answers).reduce(
      (accum, [q, answers]) => {
        accum[q as keyof AnswersCounts] = {};
        answers.forEach(a => {
          accum[q as keyof AnswersCounts][a] = 0;
        });
        return accum;
      },
      {} as AnswersCounts
    );
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.responses !== this.props.responses) {
      this.setState({ answerCounts: this._calcAnswerQuantities() });
    }
  }

  public render() {
    const filtersLength = !!this.props.activeFilters
      ? this.props.activeFilters.length
      : 0;

    return (
      <div className="results-main-cont">
        <h1 className="results-title">Results</h1>
        <h3 className="results-subtitle">
          {this.props.responses.length} Responses match your filters,
          Representing{" "}
          {(
            (this.props.responses.length / this.props.allResponsesCount) *
            100
          ).toFixed(2)}
          % of respondees
        </h3>
        <p>
          Filtering for{" "}
          {!!this.props.activeFilters &&
            this.props.activeFilters.map(([category, catFilters], catIdx) => {
              return `${catIdx + 1}.[ ${catFilters.map((filter, idx) =>
                !!idx && idx + 1 === catFilters.length
                  ? ` or ${filter}`
                  : ` ${filter}`
              )} ]
              ${catIdx + 1 !== filtersLength ? ", and " : ""}`;
            })}
        </p>
        <div className="results-results-cont">
          {Data.questions.map((questionKey, idx) => (
            <Result
              idx={idx}
              key={questionKey}
              question={questionKey as keyof Survey.Response}
              answerCounts={
                this.state.answerCounts[questionKey as keyof Survey.Response]
              }
              totalAnswers={this.props.responses.length}
            />
          ))}
        </div>
      </div>
    );
  }
}
