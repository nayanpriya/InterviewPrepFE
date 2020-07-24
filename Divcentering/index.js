document.getElementById("position_div").onclick = () => {
    positionDivs()
};
document.getElementById("grid_div").onclick = () => {
    gridDivs()
};
document.getElementById("flex_div").onclick = () => {
    flexDivs()
};
document.getElementById("inline_div").onclick = () => {
    inlineDivs()
};
document.getElementById("translate_div").onclick = () => {
    translateDivs()
};

function positionDivs() {
    document.getElementById("app").innerHTML = ``;
    document.getElementById("app").innerHTML = `
<div id="position_parent">
    <div id="position_child"></div>
</div>`;

}
function gridDivs() {
    document.getElementById("app").innerHTML = ``;
    document.getElementById("app").innerHTML = `
<div id="grid_parent">
    <div id="grid_child"></div>
</div>`;

}
function inlineDivs() {
    document.getElementById("app").innerHTML = ``;
    document.getElementById("app").innerHTML = `
<div id="inline_parent">
    <div id="inline_child"></div>
</div>`;

}
function flexDivs() {
    document.getElementById("app").innerHTML = ``;
    document.getElementById("app").innerHTML = `
<div id="flex_parent">
    <div id="flex_child"></div>
</div>`;

}
function translateDivs() {
    document.getElementById("app").innerHTML = ``;
    document.getElementById("app").innerHTML = `
<div id="translate_parent">
    <div id="translate_child"></div>
</div>`;

}