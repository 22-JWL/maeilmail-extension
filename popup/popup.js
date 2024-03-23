const images = Array.from(document.querySelectorAll("img"));

window.onload = () => {
  document.querySelector(".dropbtn_click").onclick = () => {
    dropdown();
  };

  // fastfood 클래스를 가진 모든 요소에 대해 이벤트 리스너를 추가
  var fastfoodItems = document.getElementsByClassName("fastfood");
  for (let i = 0; i < fastfoodItems.length; i++) {
    fastfoodItems[i].onclick = (e) => {
      // 이벤트 발생한 요소의 텍스트를 showMenu 함수에 전달
      showMenu(e.target.innerText);
    };
  }

  window.onload = () => {
    // 모든 드롭다운 버튼에 대해 이벤트 리스너 추가
    document.querySelectorAll(".dropbtn_click").forEach((btn) => {
      btn.onclick = function () {
        var dropdownContent =
          this.parentElement.querySelector(".dropdown-content");
        dropdown(dropdownContent);
      };
    });

    // dropdown 함수 정의
    dropdown = (dropdownContent) => {
      // 토글 메소드를 사용하여 show 클래스를 추가/제거
      dropdownContent.classList.toggle("show");

      // 선택된 드롭다운 버튼의 테두리 색 변경
      var dropbtn = dropdownContent.previousElementSibling;
      dropbtn.style.borderColor = "rgb(94, 94, 94)";
    };

    // showMenu 함수 수정이 필요함. 여기에서는 showMenu 함수의 구체적인 수정 사항을 제공하지 않았습니다.
    // showMenu 함수를 호출하는 코드가 없으므로, 해당 기능에 대한 더 자세한 설명이 필요합니다.
  };

  //창 밖의 클릭을 감지하여 모든 드롭다운을 닫는 코드
  window.onclick = (event) => {
    if (!event.target.matches(".dropbtn_click")) {
      var dropdowns = document.querySelectorAll(".dropdown-content");
      dropdowns.forEach((dropdown) => {
        if (dropdown.classList.contains("show")) {
          dropdown.classList.remove("show");
        }
      });
    }
  };

  document.getElementsByClassName("fastfood").onclick = () => {
    showMenu(value);
  };
  dropdown = () => {
    var v = document.querySelector(".dropdown-content");
    var dropbtn = document.querySelector(".dropbtn");
    v.classList.toggle("show");
    dropbtn.style.borderColor = "rgb(94, 94, 94)";
  };

  showMenu = (value) => {
    var dropbtn_icon = document.querySelector(".dropbtn_icon");
    var dropbtn_content = document.querySelector(".dropbtn_content");
    var dropbtn_click = document.querySelector(".dropbtn_click");
    var dropbtn = document.querySelector(".dropbtn");

    dropbtn_icon.innerText = "";
    dropbtn_content.innerText = value;
    dropbtn_content.style.color = "#252525";
    dropbtn.style.borderColor = "#3992a8";
  };
};
window.onclick = (e) => {
  if (!e.target.matches(".dropbtn_click")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");

    var dropbtn_icon = document.querySelector(".dropbtn_icon");
    var dropbtn_content = document.querySelector(".dropbtn_content");
    var dropbtn_click = document.querySelector(".dropbtn_click");
    var dropbtn = document.querySelector(".dropbtn");

    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const loginForm = document.querySelector("#inquiryForm");
const loginInput = document.querySelectorAll("#inquiryForm input");

function onLoginSubmit(event) {
  event.preventDefault();

  document.getElementById("overlay").style.visibility = "visible";
  document.querySelector(".tablermail-ai-wrapper").style.display = "none";

  var data = Array.from(loginInput).reduce((acc, input) => {
    acc[input.id] = input.value;
    return acc;
  }, {});

  //어캐했누ㅠ
  const dropbtn_content = document.querySelector(".dropbtn_content"); // 추가

  data["receiver_info"] = dropbtn_content.innerText; // 추가
  delete data[""];
  data["user_id"] = 1;
  console.log(data);

  fetch("https://maeilmail.site/api/helper", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data here
      //이렇게하면 데이터가 json형식으로 출력됨
      const message = data;

      // document.addEventListener("DOMContentLoaded", function () {
      //   const pasteButton = document.getElementById("pasteButton");

      // pasteButton.addEventListener("click", function () {
      ///메시지 가져옴

      // 현재 활성화된 탭을 찾습니다.
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log("tabs.id" + tabs.id);
        // 메시지를 contentScript.js로 전달합니다.
        chrome.tabs.sendMessage(tabs[0].id, {
          action: "pasteMessage",
          message: message,
        });

        console.log(message);
        document.getElementById("overlay").style.visibility = "hidden";
        document.querySelector(".tablermail-ai-wrapper").style.display =
          "inline-block";
        alert("메일 작성 성공!");
      });
      // });
      // });
    })
    .catch((error) => {
      // Handle any errors here
      console.error(error);
      document.getElementById("overlay").style.visibility = "hidden";
      document.querySelector(".tablermail-ai-wrapper").style.display =
        "inline-block";
      alert("메일 작성 실패!");
    });
}

loginForm.addEventListener("submit", onLoginSubmit);

// document.getElementById("sendButton").addEventListener("click", sendRequest);

// document
//   .getElementById("insertTemplate")
//   .addEventListener("click", function () {
//     // 이메일 본문을 찾는 셀렉터. 주어진 div의 id나 클래스명을 기반으로 적절히 조정해야 할 수 있습니다.
//     var emailBodySelector = 'div[id=":yp"]';

//     // 이메일 본문을 찾습니다.
//     var emailBody = document.querySelector(emailBodySelector);

//     if (emailBody) {
//       // 이메일 본문에 원하는 텍스트를 삽입합니다.
//       emailBody.innerHTML = "여기에 원하는 텍스트를 삽입하세요.";
//     } else {
//       console.log("이메일 본문을 찾을 수 없습니다.");
//       console.log(emailBody);
//     }
//   });

// document
//   .getElementById("insertTemplate")
//   .addEventListener("click", function () {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       chrome.tabs.sendMessage(tabs[0].id, { text: "insert_template" });
//     });
//   });

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.text === "insert_template") {
//     var emailBody = document.querySelector('[aria-label="메일 본문"]');
//     if (emailBody) {
//       emailBody.innerHTML = "여기에 원하는 템플릿을 삽입하세요.";
//     }
//   }
// });
