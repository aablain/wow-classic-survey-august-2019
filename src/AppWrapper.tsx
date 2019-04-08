import * as React from "react";
import Filters from "./filters/";
import Results from "./results/";
// import Responses from "./db";
import Data from "./filters/data";
import { FilterTypes, Survey } from "./typings";
import { getSurveyData, objectEntries } from "./utils";

interface Props {}

interface State {
  activeFilters?: [keyof Survey.Response, Survey.AllAnswers[]][];
  answerCounts: FilterTypes.AnswersCounts;
  answers: FilterTypes.SelectedAnswers;
  computedResponsesLength: number;
  failedToLoad?: boolean;
  filtering: boolean;
  innerHeight: number;
  isMobile: boolean;
  isColorBlind: boolean;
  loaded: boolean;
  questionsShowing: FilterTypes.QuestionsShowing;
  responses: Survey.Response[];
  showFilters: boolean;
}

export default class Wrapper extends React.Component<Props, State> {
  public displayName = "Wrapper";

  constructor(props: Props) {
    super(props);

    this.state = {
      answers: {
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
      },
      answerCounts: this._calcAnswerQuantities([]),
      computedResponsesLength: 0,
      filtering: false,
      innerHeight: window.innerHeight,
      isMobile: window.innerWidth < 480,
      isColorBlind: false,
      loaded: false,
      questionsShowing: {
        ageRange: true,
        characterGender: true,
        class: true,
        classComparison: true,
        contentInterest: true,
        expectedTimeTo60: true,
        faction: true,
        firstRetailExpansionPlayed: true,
        hasActiveSub: true,
        hasPlayedPrivateServer: true,
        mostRecentExpansionPlayed: true,
        prof60: true,
        profLeveling: true,
        race: true,
        region: true,
        responseDate: true,
        role: true,
        serverType: true
      },
      responses: [],
      showFilters: window.innerWidth > 480
    };

    this._calcAnswerQuantities = this._calcAnswerQuantities.bind(this);
    this._getAnswersTemplate = this._getAnswersTemplate.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.resetQuestionsShowing = this.resetQuestionsShowing.bind(this);
    this.toggleAnswerFilter = this.toggleAnswerFilter.bind(this);
    this.updateQuestionShowing = this.updateQuestionShowing.bind(this);
  }

  _calcAnswerQuantities(responses: Survey.Response[]) {
    const answerCounts = responses.reduce((accum, response) => {
      const respAsArray = objectEntries(response);

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
    }, this._getAnswersTemplate());

    return answerCounts;
  }

  _getAnswersTemplate() {
    return objectEntries(Data.answers).reduce(
      (accum, [q, answers]) => {
        accum[q as keyof FilterTypes.AnswersCounts] = {};
        answers.forEach((a: string) => {
          accum[q as keyof FilterTypes.AnswersCounts][a] = 0;
        });
        return accum;
      },
      {} as FilterTypes.AnswersCounts
    );
  }

  _getSurveyResults() {
    getSurveyData((error: Error | null, responses: Survey.Response[]) => {
      if (error) {
        this.setState({ failedToLoad: true });
        return;
      }

      const answerCounts = this._calcAnswerQuantities(responses);
      this.setState({
        answerCounts,
        computedResponsesLength: responses.length,
        responses,
        loaded: true
      });
    });
  }

  _setHeight() {
    // @ts-ignore
    if (this.timeoutID) {
      // @ts-ignore
      clearTimeout(this.timeoutID);
    }

    // @ts-ignore
    this.timeoutID = setTimeout(() => {
      this.setState({ innerHeight: window.innerHeight });
    }, 300);
  }

  componentDidMount() {
    this._getSurveyResults();
    window.addEventListener("resize", () =>
      this.setState({ innerHeight: window.innerHeight })
    );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () =>
      this.setState({ innerHeight: window.innerHeight })
    );
  }

  public render() {
    if (this.state.failedToLoad) {
      return (
        <div className="main-wrapper">Survey Results Failed to load :(</div>
      );
    }

    if (!this.state.loaded) {
      return (
        <div className="loading-cont ">
          <h1 className="loading-message">Loadin' that sweet, sweet data...</h1>
          <h4 className="loading-message-sub">That means Survey Results</h4>
        </div>
      );
    }

    return (
      <div className="main-wrapper">
        {this.state.isMobile && (
          <button
            className="filters-toggle"
            onClick={() =>
              this.setState({ showFilters: !this.state.showFilters })
            }
          >
            {this.state.showFilters ? "Hide" : "Filters"}
          </button>
        )}

        {this.state.showFilters && (
          <Filters
            applyFilter={this.applyFilter}
            clearFilter={this.clearFilter}
            innerHeight={this.state.innerHeight}
            isColorBlind={this.state.isColorBlind}
            questionsShowing={this.state.questionsShowing}
            resetQuestionsShowing={this.resetQuestionsShowing}
            selectedAnswers={this.state.answers}
            toggleAnswer={this.toggleAnswerFilter}
            updateColorBlind={() =>
              this.setState({ isColorBlind: !this.state.isColorBlind })
            }
            updateQuestionsShowing={this.updateQuestionShowing}
          />
        )}

        {this.state.answerCounts && (
          <Results
            answerCounts={this.state.answerCounts}
            activeFilters={this.state.activeFilters}
            computedResponsesLength={this.state.computedResponsesLength}
            allResponsesCount={this.state.responses.length}
            innerHeight={this.state.innerHeight}
            isColorBlind={this.state.isColorBlind}
            questionsShowing={this.state.questionsShowing}
          />
        )}
      </div>
    );
  }

  applyFilter() {
    this.setState({ filtering: true }, () => {
      const { answers } = this.state;
      const questionsWithFilters = this.getFilters(answers);

      if (!questionsWithFilters.length) {
        return this.setState({
          activeFilters: [],
          filtering: false,
          answerCounts: this._calcAnswerQuantities(this.state
            .responses as Survey.Response[]),
          computedResponsesLength: (this.state.responses as Survey.Response[])
            .length
        });
      }

      const computedResponses = this.getFilteredResponses(
        (this.state.responses as Survey.Response[]) || [],
        questionsWithFilters
      );
      const answerCounts = this._calcAnswerQuantities(computedResponses);

      this.setState({
        activeFilters: questionsWithFilters,
        answerCounts,
        filtering: false,
        computedResponsesLength: computedResponses.length
      });
    });
  }

  clearFilter() {
    this.setState({
      answers: {
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
    });
  }

  getFilters(
    answers: FilterTypes.SelectedAnswers
  ): [keyof Survey.Response, Survey.AllAnswers[]][] {
    return objectEntries(answers).reduce(
      (accum, [questionKey, selectedAnswers]) => {
        const filteredAnswers = objectEntries(selectedAnswers as {
          [x: string]: boolean;
        })
          .filter(([__, isSelected]) => isSelected)
          .map(([answer]) => answer);

        if (filteredAnswers.length) {
          // @ts-ignore
          return accum.concat([[questionKey, filteredAnswers]]);
        }

        return accum;
      },
      []
    );
  }

  getFilteredResponses(
    responses: Survey.Response[],
    filters: [keyof Survey.Response, Survey.AllAnswers[]][]
  ) {
    return responses.filter(response => {
      return filters.every(([questionKey, selectedAnswers]) => {
        return (selectedAnswers as string[]).some(selectedAnswer => {
          if (
            questionKey === "contentInterest" ||
            questionKey === "prof60" ||
            questionKey === "profLeveling"
          ) {
            // @ts-ignore
            return response[questionKey].includes(selectedAnswer);
          }

          return response[questionKey] === selectedAnswer;
        });
      });
    });
  }

  resetQuestionsShowing() {
    this.setState({
      questionsShowing: {
        ageRange: true,
        characterGender: true,
        class: true,
        classComparison: true,
        contentInterest: true,
        expectedTimeTo60: true,
        faction: true,
        firstRetailExpansionPlayed: true,
        hasActiveSub: true,
        hasPlayedPrivateServer: true,
        mostRecentExpansionPlayed: true,
        prof60: true,
        profLeveling: true,
        race: true,
        region: true,
        responseDate: true,
        role: true,
        serverType: true
      }
    });
  }

  toggleAnswerFilter(
    answer: string,
    isSelected: boolean,
    type: keyof Survey.Response
  ) {
    const updatedSection = {
      ...this.state.answers[type],
      [answer]: !isSelected
    };

    this.setState({
      answers: { ...this.state.answers, [type]: updatedSection }
    });
  }

  updateQuestionShowing(question: string) {
    this.setState({
      questionsShowing: {
        ...this.state.questionsShowing,
        [question]: !this.state.questionsShowing[
          question as keyof FilterTypes.QuestionsShowing
        ]
      }
    });
  }
}
