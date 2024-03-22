const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const message = {
  code: 201,
  success: true,
  message: "성공적으로 이메일 전문을 생성하였습니다.",
  data: {
    user_id: 1,
    subject:
      "[수강신청] 컴퓨터공학과 21학번 홍길동 수강신청 관련 메일드립니다.",
    greeting:
      "김철수 교수님, 안녕하세요. \n 저는 컴퓨터공학과 21학번 홍길동입니다. \n 교수님의 소중한 강의를 듣고 싶어, 매번 이례적인 방법으로 수강신청 메일을 드리고 있습니다.",
    body: "이번 학기도 교수님의 강의가 많이 나오길 기다렸습니다. \n \n 제 시간에는 [ 수강 신청 일정 ]에 모두 교수님의 강의가 있어, 경쟁률이 높지만 포기하지 않고자 합니다. \n \n 이에 교수님의 강의에 수강신청을 위해 경쟁률 및 교수님의 허락이 필요합니다. \n 제 수강희망 과목은 다음과 같습니다.\n - [ 과목명 ] : [ 강좌번호 ]\n \n 이론과 실제가 아주 훌륭히 교수님의 강의에서 융합되어, 우수한 인재로 길러나가고 싶습니다. \n 이에 교수님의 강의를 통해 제 꿈에 한 발짝 더 나아갈 기회를 주시면 감사하겠습니다.",
    closing:
      "교수님의 바쁘신 일정 속에서도 제 메일 읽어주셔서 감사드립니다. \n 오늘도 좋은 하루 되시기 바랍니다.\n \n 홍길동 드림.",
  },
};

const json = JSON.stringify(message);
const simple = message.data;
console.log(json + "1");
console.log(
  simple.subject + "\n" + "\n" + simple.greeting + simple.body + simple.closing
);
// console.log(message["data"["subject"]] + "3");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
