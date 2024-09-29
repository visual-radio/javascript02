// 기본 문법 구성
//  - 일반 객체 : 여러 데이터를 담을 수 객체(수정 포함)
// - 내장 객체 : Date(날짜), 문자객체(String), 수학객체(Number), 배열객체(Array)
//- Document Object Model(DOM) : 문서공간에서 선택자를 지정하여 해당하는 곳에 스크립트의 영역을 구성하는 객체 모델
// - 함수 : y = x + 1
// - 이벤트 : 사용자가 어떠한 액션을 취했을 때, 결과적으로 개발자가 구성해 놓은 함수의 결과로 출력을 시킴
// - Browser Object Model(BOM) : 문서 공간을 제외한 모든 부분에서 내장 스크립트를 작동시켜야할 때(history, navigator, setTimout, setInterval)

// 객체(object) 란? : 하나 이상의 특징을 갖고있는 사물
// 변수명 = 단일 데이터(문자형, 숫자형, 논리형, undifined, null)
// 변수명 = {key: value1. value2, value3, ...}
// 갤럭시26 = {price: "2,000,000원", screenSize: "7inches", caseColor: "purple", memory: "256GB", ....}

document.write(`<h2>객체</h2>`);
var myPhone = {
  name: "iPhone17",
  color: "metalGray",
  memory: 512,
  buyState: false,
};
console.log(myPhone);
console.log(myPhone.name);
console.log(myPhone?.["name"]); // iPhone 이라는 변수가 존재하면 name에 접근
console.log(myPhone.color);
console.log(myPhone.memory);
console.log(myPhone.buyState);

// 게임 캐릭터 구성

var myCharacter = {
  shape: "character.gif",
  name: "피카츄",
  level: 1,
  skill: "백만볼트",
  hp: 100,
  exp: 0,
};
document.write(
  `<img src="./img/${myCharacter.shape}" alt="캐릭터 이미지", style="width:80px;"/>`
);
document.write(`<p>나의 캐릭터 이름 : ${myCharacter.name}</p>`);
document.write(`<p>캐릭터 레벨 : ${myCharacter.level}</p>`);
document.write(
  `<p>모험이 시작되었습니다. ${myCharacter.name}이(가) 모험을 떠납니다</p>`
);

document.write(
  `<p>${myCharacter.name}이(가) ${myCharacter.skill} 공격으로 1단계 악당을 물리쳤습니다.</p>`
);

// 보상으로 레벨 업
myCharacter.level++;
document.write(`<p>캐릭터 레벨 : ${myCharacter.level}</p>`);
// 기존 경험치(exp)에서 50을 올려준다. 현재 나의 경험치 값을 출력
// 기존 체력(hp)에서 100을 올려준다. 현재 나의 체력 값을 출력

myCharacter.exp += 50;
myCharacter.hp += 100;
document.write(
  `<p>exp 50을 얻었습니다 <br/> 현재 exp : ${myCharacter.exp}</p>`
);
document.write(
  `<p>hp가 100 상승했습니다 <br/> 현재 hp : ${myCharacter.hp}</p>`
);

document.write(`<hr/>`);

// 날짜 객체
// time Server로 부터 동기화시킨 값을 활용
// 로컬 컴퓨터(pc, tablet, mobile)의 시스템으로 정보를 받아서 활용하겠다고 선언
// Date() : 날짜 및 시간 정보를 가져오세요.

document.write(`<h3>날짜 객체</h3>`);
var $today = new Date();
console.log($today);
var $cur_year = $today.getFullYear();
document.write(`<p>${$cur_year}년</p>`);
var $cur_month = $today.getMonth();
document.write(`<p>${$cur_month}월</p>`); // 8월 getMonth()는 컴퓨터 상에서 인식하는 첫번째 숫자를 0으로 인식 그러므로 +1 필요
var $cur_month = $today.getMonth() + 1;
document.write(`<p>${$cur_month}월</p>`);

var $cur_date = $today.getDate();
document.write(`<p>${$cur_date}일</p>`); // getDate()는 컴퓨터 상에서 서수 개념으로 인지

var $cur_day = $today.getDay(); //getDay()는 일요일을 0으로 표현
// document.write(`<p>${$cur_day}요일</p>`);
if ($cur_day == 0) {
  document.write(`<p>일요일</p>`);
} else if ($cur_day == 1) {
  document.write(`<p>월요일</p>`);
} else if ($cur_day == 2) {
  document.write(`<p>화요일</p>`);
} else if ($cur_day == 3) {
  document.write(`<p>수요일</p>`);
} else if ($cur_day == 4) {
  document.write(`<p>목요일</p>`);
} else if ($cur_day == 5) {
  document.write(`<p>금요일</p>`);
} else if ($cur_day == 6) {
  document.write(`<p>토요일</p>`);
}

var $cur_hours = $today.getHours();
document.write(`<p>${$cur_hours}시</p>`);
// 오전 => 오전 0시 ~ 오전 11시 59분 59초
// 오후 => 오후 12시 ~ 오후 11시 59분 59초

if ($cur_hours >= 12) {
  // 오후 시간대
  if ($cur_hours < 13) {
    document.write(`<p>오후 ${$cur_hours}시</p>`);
  } else {
    document.write(`<p>오전 ${$cur_hours - 12}시</p>`);
  }
} else {
  document.write(`<p>오전 ${$cur_hours}시</p>`);
}

var $cur_minutes = $today.getMinutes();
document.write(`<p>${$cur_minutes}분</p>`);

var $cur_seconds = $today.getSeconds();
document.write(`<p>${$cur_seconds}초</p>`);

// 1초 = 1000밀리초

var $cur_milliSeconds = $today.getMilliseconds();
document.write(`<p>${$cur_milliSeconds}밀리초</p>`);

document.write(`<hr/>`);
// D-day 계산시 활용하는 도구
var $cur_getTime = $today.getTime();
// 1970년 1월 1일 0시 0분 0초 로 부터 현재까지의 시간 기간을 가져옴 (밀리초 단위)

document.write(
  `1970년 1월 1일 0시 0분 0초로 부터 흘러온 현재 시간 : ${$cur_getTime}`
);

// D-day 계산시 24시간동안 팝업 열지 않기, 사용자가 동작 수행을 멈추었을 때부터 4시간 경과시 자동 로그아웃
document.write(`<hr/>`);
// 계정 별 이미지 변경하기
if ($cur_month >= 3 && $cur_month <= 5) {
  document.write(`<img src="./img/img-m.jpg" style="width:100px;">`);
} else if ($cur_month >= 6 && $cur_month <= 8) {
  document.write(`<img src="./img/img-s.jpg" style="width:100px;">`);
} else if ($cur_month >= 9 && $cur_month <= 11) {
  document.write(`<img src="./img/img-f.jpg" style="width:100px;">`);
} else {
  document.write(`<img src="./img/img-w.jpg" style="width:100px;">`);
}

// 태어난 날의 요일 정보 가져오기
var getDayByBirthDate = new Date("1994-08-10");
console.log(getDayByBirthDate);
console.log(`태어난 날의 요일 : ${getDayByBirthDate.getDay()}`);

// 태어난 날로부터 경과일을 계산하기

var now = new Date(); // 현재 날짜 획득
var birthDay = new Date("1994-08-10"); // 태어난 날짜 획득
var toNow = now.getTime(); // now - birthDay => 태어난 날짜로부터 값을 획득 가능
var toBirthDay = birthDay.getTime();
var passedTime = toNow - toBirthDay;
console.log(passedTime);

// 1일 = 24시간
// 1시간 = 60분
// 1분 = 60초
// 1초 = 1000밀리초
var passedDate = parseInt(passedTime / (24 * 60 * 60 * 1000));
console.log(`태어난 날로부터 경과일 : D+ ${passedDate}`);

document.write(`<hr/>`);
// 수학 객체 : 일반적인 숫자형 데이터 만으로는 적용할 수 없는 다소 복잡한 결과물을 도출시 사용
document.write(`<h3>수학 객체</h3>`);
var num_01 = 300000;
var ch_standardNum = num_01.toExponential(2);
console.log(ch_standardNum);
console.log(typeof ch_standardNum);

var num_02 = 1234.5678;
var ch_fixedNum = num_02.toFixed(2);
console.log(ch_fixedNum);
console.log(typeof ch_fixedNum);

var num_03 = 1234.5678;
var ch_Precision = num_03.toPrecision(3);
console.log(ch_Precision);
console.log(typeof ch_Precision);

var $num_min = Math.min(27, 35, 11, 19);
document.write(`<p>나열된 숫자 중 가장 작은 수 : ${$num_min}</p>`);

var $num_max = Math.max(27, 35, 11, 19);
document.write(`<p>나열된 숫자 중 가장 큰 수 : ${$num_max}</p>`);

// 올림, 내림, 반올림, 랜덤 숫자 뽑기(로또)
var $num = 1234.5678;
var $round = Math.round($num);
document.write(`<p>소수점 첫번째 자리에서 반올림한 값 : ${$round}</p>`);

var $ceil = Math.ceil($num);
document.write(`<p>소수점 첫번째 자리에서 올림한 값 : ${$ceil}</p>`);

var $floor = Math.floor($num);
document.write(`<p>소수점 첫번째 자리에서 내림한 값 : ${$floor}</p>`);

var $random = Math.random();
document.write(`<p>0 초과 1 미만의 실수를 무작위로 반환한 값 : ${$random}</p>`);

// 1부터 10 사이의 값을 랜덤하게 반환 시켜야 함
var int_01 = Math.random() * 10; // 0.00000...1부터 9.99999.... 사이의 실수
//  최소값 0.0001 최대값 0.9999로 설정
var int_01 = Math.ceil(Math.random() * 10);
document.write(`<p>1부터 10 사이의 정수를 무작위로 반환한 값 : ${int_01}</p>`);

var int_02 = Math.random() * 10;
var int_02 = Math.floor(Math.random() * 10) + 1;
document.write(`<p>1부터 10 사이의 정수를 무작위로 반환한 값 : ${int_02}</p>`);

// shop_01.jpg ~ shop_04.jpg 이미지 중 랜덤값 적용된 이미지 표현
// 1 ~ 4라는 값을 랜덤으로 받는다

var ran = Math.random() * 4;
var ran = Math.ceil(Math.random() * 4);
document.write(`<img src="./img/shop_0${ran}.jpg" style="width:60px;">`);

document.write(`<hr/>`);
// 문자 객체 : 특정 문체 데이터를 가져와서 요구사항에 맞춰 조작
// 문자의 인덱스 번호 : 좌측으로부터 0부터 인덱스 번호의 시작
document.write(`<h3>수학 객체</h3>`);

var $str = "Have a good day";
var $charAt = $str.charAt(7); // 인덱스 번호를 기준으로 7의 자리에 작성된 문자를 추출한다.
console.log($charAt);

// 응용파트 - 주민등록번호의 남성과 여성 구분
var idNum = "791004-1******";
var genderNum = idNum.charAt(7);
console.log(genderNum);
if (genderNum % 2 == 0) {
  document.write(`여성 고객입니다.`);
} else {
  document.write(`남성 고객입니다.`);
}

// airbnb(@, 010, 0101234,..)의 금지어
// 댓글에서 특정 욕설 찾기("삐삐삐")
var $reply_str = "뿌뿌뿌 삐삐삐 빠빠빠";
var $badStr_search = $reply_str.indexOf("삐삐삐"); //지정된 문자를 찾아서 인덱스 번호를 반환
console.log($badStr_search);
if ($badStr_search >= 0) {
  console.log("금지어가 포함되어 있습니다.");
} else {
  console.log("댓글 등록 완료");
}

// 특정 문작의 마지막으로부터 탐색하여 인덱스 번호를 추출

var word = "nice thank cheer";
var searchLastWord = word.lastIndexOf("e");
console.log(searchLastWord);

// match()되는 문자 반환하기
var hunmin = "우리말은 중국과 달라서";
var match_01 = hunmin.match("중국");
console.log(match_01);
var match_02 = hunmin.match("호주");
console.log(match_02);

if (match_02 != null) {
  console.log("당신이 검색한 결과가 있습니다.");
} else {
  console.log("당신이 검색한 결과가 없습니다.");
}

// replace(바꿀 문자, 새문자)
// 5,000(문자형 데이터) => Number(5000(문자형 데이터)) => 5000(숫자형 데이터) => 연산 가능
// 5000 => 5,000

var buyPrice = "5,000";
var numBuyPrice_01 = Number("5,000");
console.log(numBuyPrice_01);

var numBuyPrice_01 = buyPrice.replace(",", "");
console.log(numBuyPrice_01);

// 실습문제 - 문구점에서 갸프 5개 구입, 샤프는 개당 1,000원 / 스케치북을 2개 구입, 스케치북은 개당 3,000원
// 총 구매 합계를 구하시오
// 최종 결과 - 현재 총 구입금액은 11000원 입니다. 출력
var sharp = "1,000";
var sketch = "3,000";

document.write(`현재 총 구입 금액은 ${total}원 입니다.`);
