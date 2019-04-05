export function getSurveyData(callback) {
  var req = new XMLHttpRequest();

  req.addEventListener("load", onDataLoaded);
  req.addEventListener("error", onFail);
  req.addEventListener("abort", onFail);

  req.open(
    "GET",
    "https://aablain.github.io/classic-survey-results/classic-survey-export.json"
  );
  req.send();

  function onDataLoaded(event) {
    if (req.status >= 400) {
      onFail(event);
    } else {
      var json = JSON.parse(this.responseText);
      callback(null, json);
    }
  }

  function onFail(event) {
    callback(new Error("..."));
  }
}
