
export async function getSurveyData(callback) {
  const [part1, part2] = await Promise.all([
    getSurveyDataPart1(),
    getSurveyDataPart2()
  ]);

  callback(null, [...part1, ...part2]);
}

function getSurveyDataPart1() {
  return new Promise((res, rej) => {
    var req = new XMLHttpRequest();

    req.addEventListener("load", onDataLoaded);
    req.addEventListener("error", onFail);
    req.addEventListener("abort", onFail);

    req.open(
      "GET",
      "https://aablain.github.io/classic-survey-results-august-2019/classic-survey-results-august-2019-part-1.json"
    );
    req.send();

    function onDataLoaded(event) {
      if (req.status >= 400) {
        onFail(event);
      } else {
        var json = JSON.parse(this.responseText);
        res(json);
      }
    }

    function onFail(event) {
      rej(new Error("..."));
    }
  });
}

export function getSurveyDataPart2() {
  return new Promise((res, rej) => {
    var req = new XMLHttpRequest();

    req.addEventListener("load", onDataLoaded);
    req.addEventListener("error", onFail);
    req.addEventListener("abort", onFail);

    req.open(
      "GET",
      "https://aablain.github.io/classic-survey-results-august-2019/classic-survey-results-august-2019-part-2.json"
    );
    req.send();

    function onDataLoaded(event) {
      if (req.status >= 400) {
        onFail(event);
      } else {
        var json = JSON.parse(this.responseText);
        res(json);
      }
    }

    function onFail(event) {
      rej(new Error("..."));
    }
  });
}

export function objectEntries(obj) {
  return Object.entries
    ? Object.entries(obj)
    : Object.keys(obj).map(key => [key, obj[key]]);
}
