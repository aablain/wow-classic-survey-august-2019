export function hitApi(url, callback) {
  var req = new XMLHttpRequest();

  req.addEventListener("load", onLoad);
  req.addEventListener("error", onFail);
  req.addEventListener("abort", onFail);

  req.open("GET", url);
  req.send();

  function onLoad(event) {
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
