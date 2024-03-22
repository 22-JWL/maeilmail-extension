// if (typeof init === "undefined") {

// const init = function () {
//   const injectElement = document.createElement("div");
//   injectElement.className = "JWL-Element";
//   injectElement.innerHTML = "hello from JWL-Element";
//   document.body.appendChild(injectElement);

//   const hostElement = document.createElement("div");
//   hostElement.className = "JWL-Host";
//   hostElement.innerHTML = "hello from JWL-Host";
//   document.body.appendChild(hostElement);

//   var host = document.querySelector(".JWL-Host");
//   var root = host.attachShadow({ mode: "open" });
//   var div = document.createElement("div");
//   div.className = "div root-class";
//   div.innerHTML =
//     "<style>.div{border:3px solid blue; margin: 10px;padding: 10px} </style>" +
//     "Hello from shadow root Element";
//   root.appendChild(div);

// var lolololo = document.querySelector("#\\:dv");
// lolololo.innerHTML = "이젠 들어가라";

//   };
//   init();
// };

// const qwert = document.createElement("div");
// qwert.className = "JWL-Host";
// qwert.valueName = "fuck you";
// document.querySelector("#\\:du").appendChild(qwert);

// document.querySelector("#\\:dv").appendChild(document.createElement("div"));

// ////진짜 어캐 찾았누,,,,,
// document.querySelector("#\\:du").textContent = "fuckyou";

function pasteMessage(message) {
  const simple = message.data;
  console.log("message? : " + message.data.body);
  console.log("simple? : " + simple.subject);

  // Gmail의 메시지 입력란을 찾습니다.
  const messageInput = document.querySelector(".tS-tW");

  if (messageInput) {
    console.log("paste? : " + message.data.subject);
    // 메시지 입력란이 있으면 메시지를 붙여넣습니다.
    messageInput.innerText =
      simple.subject +
      "\n" +
      "\n" +
      simple.greeting +
      simple.body +
      simple.closing;
  } else {
    console.error("메시지 입력란을 찾을 수 없습니다.");
  }
}

// background.js 또는 popup.js에서 보낸 메시지를 받습니다.
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "pasteMessage") {
    pasteMessage(request.message);
  }
});
// let messageBody = document.querySelector(".tS-tW");
// console.log(message.data.greeting);
