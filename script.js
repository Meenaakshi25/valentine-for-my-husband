document.addEventListener("DOMContentLoaded", function() {

  const questions = [
    {
      question: "Baja 😘 Do you miss me now?",
      options: [
        "Yes, romba miss panren 😘",
        "Konjam 😏",
        "Illa (poi solladha 😤)"
      ]
    },
    {
      question: "If I am next to you now…?",
      options: [
        "Tight hug 🤗",
        "Kiss first 😘",
        "Just look at you 🥺"
      ]
    },
    {
      question: "Who loves more?",
      options: [
        "Nee dhaan ❤️",
        "Naan dhaan 💕",
        "Both equally 🤝"
      ]
    },
    {
      question: "Will you be mine forever?",
      options: [
        "Forever da 😍",
        "Of course loosu ❤️",
        "Always and always ♾️"
      ]
    }
  ];

  let index = 0;
  let answers = [];

  const questionElement = document.getElementById("question");
  const buttonsDiv = document.querySelector(".buttons");

  function loadQuestion() {
    questionElement.innerText = questions[index].question;
    buttonsDiv.innerHTML = "";

    questions[index].options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.onclick = () => nextQuestion(option);
      buttonsDiv.appendChild(button);
    });
  }

  function nextQuestion(choice) {
    answers.push(choice);
    index++;

    if (index < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }

  function showResult() {
    document.getElementById("question-box").style.display = "none";

    let finalMessage = "";

    if (answers.includes("Illa (poi solladha 😤)")) {
      finalMessage = "Ayyooo Baja 😤 poi solladha! I know you miss me rombaaa 😌❤️";
    } 
    else if (answers.includes("Kiss first 😘")) {
      finalMessage = "Seri seri 😘 already ready ah? Naanum ready dhan Baja ❤️🔥";
    }
    else if (answers.includes("Nee dhaan ❤️")) {
      finalMessage = "Awww Baja 😭 Nee dhaan romba love panra nu sollita… melt aagiten ❤️";
    }
    else {
      finalMessage = "No matter what you chose… Baja ❤️ naan unna rombaaa love panren 🥹💖";
    }

    document.getElementById("result").innerHTML =
      finalMessage + "<br><br>Happy Valentine’s Day da 💌✨";
  }

  loadQuestion();

});
