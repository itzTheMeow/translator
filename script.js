let dictionary = {
  _this: {
    A: "e^",
    a: "e",
    B: "ee^",
    b: "ee",
    C: "eee^",
    c: "eee",
    D: "eeee^",
    d: "eeee",
    E: "$^",
    e: "$",
    F: "EE^",
    f: "EE",
    G: "EEE^",
    g: "EEE",
    H: "EEEE^",
    h: "EEEE",
    I: "Eeee^",
    i: "Eeee",
    J: "EEee^",
    j: "EEee",
    K: "EEEe^",
    k: "EEEe",
    L: "eeeE^",
    l: "eeeE",
    M: "eeEE^",
    m: "eeEE",
    N: "eEEE^",
    n: "eEEE",
    O: "EeeEe^",
    o: "EeeEe",
    P: "EEeE^",
    p: "EEeE",
    Q: "EeEE^",
    q: "EeEE",
    R: "EEEEE^",
    r: "EEEEE",
    S: "EeeeeE^",
    s: "EeeeeE",
    T: "EEeeE^",
    t: "EEeeE",
    U: "EeEEE^",
    u: "EeEEE",
    V: "EEeee^",
    v: "EEeee",
    W: "Eeeee^",
    w: "Eeeee",
    X: "eeeee^",
    x: "eeeee",
    Y: "EeeeE^",
    y: "EeeeE",
    Z: "eEEEe^",
    z: "eEEEe",
    1: "Ee",
    2: "EeEe",
    3: "EeEeEe",
    4: "EeEeEeEe",
    5: "EeEeEeEeEe",
    6: "EeEeEeEeEeEe",
    7: "EeEeEeEeEeEeEe",
    8: "EeEeEeEeEeEeEeEe",
    9: "EeEeEeEeEeEeEeEeEe",
    0: "EeEeEeEeEeEeEeEeEeEe",
    " ": "E",
    "/": "n",
    $: "EEEeeeEEEEEEEe",
    "^": "c",
    ".": "EEEEEEEEEEEEEEEEEEEEeeeeE",
    "\n": "o",
    ":": "EEEEEEEEEEEEEEEEEEEEEeeeeeeeeeeeeeeeeEEE",
    "-": "EEEEeeeEEeEEEE",
    "*": "EEEEeeeeEEe",
  },
  get: function (key, other) {
    if (!other) return dictionary._this[key] || key;
    else return Object.keys(dictionary._this)[Object.values(dictionary._this).indexOf(key)] || key;
  },
};

function to() {
  let text = document.getElementById("input").value;
  let words = text.split(" ");
  let string = [];

  words.forEach((word) => {
    let letters = word.split("");
    letters.forEach((letter) => {
      let E = dictionary.get(letter);
      return string.push(E);
    });
    if (word) string.push(dictionary.get(" "));
  });

  document.getElementById("output").value = string.slice(0, string.length - 1).join(" / ");
}

function from() {
  let text2 = document.getElementById("output").value;
  let words2 = text2.split(" / ");
  let string2 = [];

  words2.forEach((word) => {
    let letters = word.split(" / " + dictionary.get(" ") + " / ");
    letters.forEach((letter) => {
      let E = dictionary.get(letter, true);
      return string2.push(E);
    });
  });

  document.getElementById("input").value = string2.join("").trim();
  to();
}

setInterval(function () {
  let c1 = document.getElementById("count1");
  let c2 = document.getElementById("count2");
  let l1 = document.getElementById("input").value.length;
  let l2 = document.getElementById("output").value.length;

  c1.innerHTML = l1.toLocaleString();
  c2.innerHTML = l2.toLocaleString();

  if (l1 > 2000) c1.innerHTML = '<b style="color: Red;">' + c1.innerHTML + "</b>";
  if (l2 > 2000) c2.innerHTML = '<b style="color: Red;">' + c2.innerHTML + "</b>";

  if (l1 == 69) c1.innerHTML = '<b style="color: Yellow;">' + c1.innerHTML + "</b>";
  if (l2 == 69) c2.innerHTML = '<b style="color: Yellow;">' + c2.innerHTML + "</b>";

  let l = document.getElementById("output");

  l.value = l.value.trim();
}, 500);

function copy(item, current) {
  var copyText = document.getElementById(item);

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");

  document.getElementById(current).style.display = "none";
  document.getElementById("copy").style.display = "inline";

  setTimeout(function () {
    document.getElementById(current).style.display = "inline";
    document.getElementById("copy").style.display = "none";
  }, 1500);
}
function cut(item, current) {
  var cutText = document.getElementById(item);

  cutText.select();
  cutText.setSelectionRange(0, 99999);

  document.execCommand("cut");

  document.getElementById(current).style.display = "none";
  document.getElementById("cut").style.display = "inline";

  setTimeout(function () {
    document.getElementById(current).style.display = "inline";
    document.getElementById("cut").style.display = "none";
  }, 1500);
  if (item == "input") to();
  if (item == "output") from();
}
async function paste(item, current) {
  var pasteText = document.getElementById(item);
  let txt = await navigator.clipboard.readText();

  pasteText.value = txt;

  document.getElementById(current).style.display = "none";
  document.getElementById("paste").style.display = "inline";

  setTimeout(function () {
    document.getElementById(current).style.display = "inline";
    document.getElementById("paste").style.display = "none";
  }, 1500);
  if (item == "input") to();
  if (item == "output") from();
}
