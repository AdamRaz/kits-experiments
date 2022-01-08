let variableText = document.querySelector('.variable-text');
let textArray = ["&#x0643;&#x062A;&#x0633", ]
console.log(variableText.innerHTML);
function repeatedCode () {
    variableText.innerText += " & (き:つ)";
}
function clearText () {
    variableText.innerText = "(ki:ts)";
}
let intervalID = setInterval(repeatedCode, 1500);
let intervalID2 = setInterval(clearText, 12000);