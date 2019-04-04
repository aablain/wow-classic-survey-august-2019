import * as React from "react";
import Data from "../filters/data";
import Result from "./result";
import { Survey } from "../typings";
import { AnswersCounts } from "../AppWrapper";

import "./styles.scss";

interface Props {
  activeFilters?: [keyof Survey.Response, Survey.AllAnswers[]][];
  answerCounts: AnswersCounts;
  computedResponsesLength: number;
  allResponsesCount: number;
  isColorBlind: boolean;
}

export default (props: Props) => {
  const filtersLength = !!props.activeFilters ? props.activeFilters.length : 0;

  return (
    <div className="results-main-cont">
      <h1 className="results-title">Results</h1>
      <h3 className="results-subtitle">
        {props.computedResponsesLength} Responses match your filters,
        Representing{" "}
        {(
          (props.computedResponsesLength / props.allResponsesCount) *
          100
        ).toFixed(2)}
        % of respondees
      </h3>
      {props.activeFilters && !!props.activeFilters.length && (
        <p>
          Filtering for{" "}
          {props.activeFilters.map(([category, catFilters], catIdx) => {
            return `${catIdx + 1}.[ ${catFilters.map((filter, idx) =>
              !!idx && idx + 1 === catFilters.length
                ? ` or ${filter}`
                : ` ${filter}`
            )} ]
              ${catIdx + 1 !== filtersLength ? ", and " : ""}`;
          })}
        </p>
      )}
      <div className="results-results-cont">
        {Data.questions.map((questionKey, idx) => (
          <Result
            idx={idx}
            isColorBlind={props.isColorBlind}
            key={questionKey}
            question={questionKey as keyof Survey.Response}
            answerCounts={
              props.answerCounts[questionKey as keyof Survey.Response]
            }
            totalAnswers={props.computedResponsesLength}
          />
        ))}
      </div>
    </div>
  );
};
