import * as React from "react";
import Data from "../filters/data";
import Result from "./result";
import { FilterTypes, Survey } from "../typings";

import "./styles.scss";
import data from "../filters/data";

interface Props {
  activeFilters?: [keyof Survey.Response, Survey.AllAnswers[]][];
  answerCounts: FilterTypes.AnswersCounts;
  computedResponsesLength: number;
  allResponsesCount: number;
  innerHeight: number;
  isColorBlind: boolean;
}

export default (props: Props) => {
  const filtersLength = !!props.activeFilters ? props.activeFilters.length : 0;

  return (
    <div className="results-main-cont" style={{ height: props.innerHeight }}>
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
            return (
              <>
                <span
                  style={{
                    color: props.isColorBlind
                      ? data.colorBlindColors[catIdx]
                      : data.colors[catIdx]
                  }}
                >
                  {catIdx + 1}.[
                  {catFilters.map((filter, idx) =>
                    !!idx && idx + 1 === catFilters.length
                      ? ` or ${filter}`
                      : `${
                          idx!! && idx + 1 !== catFilters.length ? ", " : " "
                        }${filter}`
                  )}{" "}
                  ]
                </span>{" "}
                {catIdx + 1 !== filtersLength ? ", and " : ""}
              </>
            );
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
