function getElement(ElementId)
{
    return document.getElementById(ElementId);
}

var cursor;
window.onload = init;

function init() {
cursor = $("cursor");
cursor.style.left = "0px";
}

function nl2br(txt)
{
    return txt.replace(/\n/g, '');
}

function typeIt(from, e)
{
    e = e || window.event;
    var w = $("typer");
    var tw = from.value;
    // if (!pw){
      w.innerHTML = nl2br(tw);
    // }
    }