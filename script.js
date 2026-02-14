document.addEventListener("DOMContentLoaded", function() {

  const questions = [
    {
      question: "Baja 😘 Do you miss me now?",
      options: [
        { text: "Yes, romba miss panren 😘", reply: "Awwww 🥹 naanum romba miss panren da ❤️" },
        { text: "Konjam 😏", reply: "Konjam ah? Seri adhukku extra hug venum 😌" },
        { text: "Illa (poi solladha 😤)", reply: "Ayyooo poi solladha 😤 un face la theriyuthu!" }
      ]
    },
    {
      question: "If I am next to you now…?",
      options: [
        { text: "Tight hug 🤗", reply: "Appo vidama hug panra maari dhan irukanum 😌" },
        { text: "Kiss first 😘", reply: "Seri seri calm ah iru 😳 naanum ready dhan 😘🔥" },
        { text: "Just look at you 🥺", reply: "Enna paakura? Already unaku naan dhan world 😌❤️" }
      ]
    },
    {
      question: "Who loves more?",
      options: [
        { text: "Nee dhaan ❤️", reply: "Awww Baja 😭 ipdi sonna melt aagiten!" },
        { text: "Naan dhaan 💕", reply: "Adhu seri 😌 but naan konjam extra love panren 😏" },
        { text: "Both equally 🤝", reply: "Correct answer 😌 namma balance couple 💕" }
      ]
    },
    {
      question: "Will you be mine forever?",
      options: [
        { text: "Forever da 😍", reply: "Appo lifetime contract signed 😌❤️" },
        { text: "Of course loosu ❤️", reply: "Loosu ah? Seri un loosu dhan naan 😘" },
        { text: "Always and always ♾️", reply: "Infinity ah? Appo lifetime hugs unlimited 🥹💕" }
      ]
    }
  ];

  let index = 0;

  const questionElement = document.getElementById("question");
  const buttonsDiv = document.querySelector(".buttons");
  const resultElement = document.getElementById("result");
  const imageElement = document.getElementById("mainImage");
  const popup = document.getElementById("popup");
  const popupText = document.getElementById("popupText");

  function loadQuestion() {
    resultElement.innerHTML = "";
    questionElement.innerText = questions[index].question;
    buttonsDiv.innerHTML = "";

    questions[index].options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.onclick = () => nextQuestion(option);
      buttonsDiv.appendChild(button);
    });
  }

  function nextQuestion(option) {

    // Funny popup messages
    const funnyMessages = [
      "Hmmmm interesting choice 🤨",
      "Ayyooo seri seri 😏",
      "Nallaaa think pannitu click panniruka pola 😂",
      "Danger answer da 😈",
      "Ippo dhan unma theriyudhu 😌"
    ];

    const randomFunny =
      funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

    popupText.innerText = randomFunny;
    popup.style.display = "block";

    setTimeout(() => {
      popup.style.display = "none";
    }, 1000);

    resultElement.innerHTML = option.reply;

    setTimeout(() => {
      index++;
      if (index < questions.length) {
        loadQuestion();
      } else {
        showFinalMessage();
      }
    }, 1500);
  }

  function showFinalMessage() {
    document.getElementById("question-box").style.display = "none";

    // Change image to Baja + Aadhini
    imageElement.src = "baja-aadhini.jpg";

    resultElement.innerHTML =
      "Baja ❤️<br><br>" +
      "From lovers… to husband & wife… to Aadhini’s parents 🥹👶💕<br><br>" +
      "Namma kutty princess oda best Appa neetha da.<br><br>" +
      "Aadhini and I love you so much 💖<br><br>" +
      "Happy Valentine’s Day da 💌✨";
  }

  loadQuestion();

});
