var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); //display command
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");




setTimeout(function()
{
    loopLines(banner, "", 80);
    textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

textarea.value = "";
command.innerHTML = textarea.value;


function enterKey(e) {
    if (e.keyCode == 181) {
      document.location.reload(true);
    }
    if (e.keyCode == 13)
    {
        addLine("pombn/M/E:~$ " + command.innerHTML, "no-animation", 0);
        commander(command.innerHTML.toLowerCase());
        command.innerHTML = "";
        textarea.value = "";
    }
    command.innerHTML = textarea.value;
}

function commander(cmd) {
    switch (cmd.toLowerCase()) {
      case "help":
        loopLines(help, "color2 margin", 80);
        break;
      case "whoami":
        loopLines(whoami, "color2 margin", 80);
        break;
      case "video":
        addLine("Opening YouTube...", "color2", 80);
        newTab(youtube);
        break;
      case "social":
        loopLines(social, "color2 margin", 80);
        break;
      case "projects":
        loopLines(projects, "color2 margin", 80);
        break;
      case "history":
        addLine("<br>", "", 0);
        loopLines(commands, "color2", 80);
        addLine("<br>", "command", 80 * commands.length + 50);
        break;
      case "email":
        addLine('Opening mailto:<a href="mail To:t4ng1336@gmail.com">t4ng1336@gmail.com</a>...', "color2", 80);
        newTab(email);
        break;
      case "clear":
        setTimeout(function() {
          terminal.innerHTML = '<a id="before"></a>';
          before = document.getElementById("before");
        }, 1);
        break;
      case "banner":
        loopLines(banner, "", 80);
        break;
      // socials
      case "youtube":
        addLine("Opening YouTube...", "color2", 80);
        newTab(youtube);
        break;
      case "twitter":
        addLine("Opening Twitter...", "color2", 0);
        newTab(twitter);
        break;
      case "instagram":
        addLine("Opening Instagram...", "color2", 0);
        newTab(instagram);
        break;
      case "github":
        addLine("Opening GitHub...", "color2", 0);
        newTab(github);
        break;
      default:
        addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
        break;
    }
  }


  function newTab(link) {
    setTimeout(function() {
      window.open(link, "_blank");
    }, 500);
  }

  function addLine(text, style, time) {
    var t = "";
    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
        t += "&nbsp;&nbsp;";
        i++;
      } else {
        t += text.charAt(i);
      }
    }
    setTimeout(function() {
      var next = document.createElement("p");
      next.innerHTML = t;
      next.className = style;
  
      before.parentNode.insertBefore(next, before);
  
      window.scrollTo(0, document.body.offsetHeight);
    }, time);
  }

  function loopLines(name, style, time)
  {
    name.forEach(function(item, index) 
    {
      addLine(item, style, index * time);
    }
    );
  }