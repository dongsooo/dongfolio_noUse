function addHoverEffect(atagClass, hoverClass) {
  const atag = document.querySelector(atagClass);
  const hoverElement = document.querySelector(hoverClass);

  atag.addEventListener("mouseover", function () {
    hoverElement.style.display = "block";
  });

  atag.addEventListener("mouseout", function () {
    hoverElement.style.display = "none";
  });
}

addHoverEffect(".notebookAtag", ".notebookHover");
addHoverEffect(".phoneAtag", ".phoneHover");
addHoverEffect(".bikeAtag", ".bikeHover");
addHoverEffect(".paperAtag", ".paperHover");
addHoverEffect(".gamepadAtag", ".gamepadHover");

function openNewWindow(url) {
  // 새 창의 너비와 높이를 설정합니다.
  let newWindow = window.open(url, "_blank", "width=360,height=740");
  // 포커스를 새 창에 맞춥니다.
  if (newWindow) {
    newWindow.focus();
  }
}

var skillData = [70, 60, 50, 45]; // 숙련도 데이터

// Canvas 요소 가져오기
var ctx = document.getElementById("myBarChart").getContext("2d");

// 막대 그래프 생성
var myBarChart = new Chart(ctx, {
  type: "bar", // 그래프 유형: 막대 그래프
  data: {
    labels: ["HTML", "CSS", "JavaScript", "React"], // X 축 레이블
    datasets: [
      {
        label: "숙련도", // 레이블 비움
        data: skillData, // 각 막대의 데이터 값
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)", // 막대 색상
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)", // 막대 테두리 색상
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1, // 막대 테두리 두께
      },
    ],
  },
  options: {
    indexAxis: "x", // Y 축에 데이터 표시
    plugins: {
      legend: {
        display: false, // 레전드(범례) 숨기기
      },
    },
    scales: {
      x: {
        beginAtZero: true, // X 축 시작 값 설정
      },
    },
    responsive: true, // 반응형 크기 조정
    maintainAspectRatio: false, // 캔버스 비율 유지 해제
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const paperAtag = document.querySelector(".paperAtag");
  const xMark = document.querySelector(".xMark");
  const myIntroduce = document.querySelector(".myIntroduce");

  paperAtag.addEventListener("click", function (event) {
    event.preventDefault();
    myIntroduce.style.display = "block";
  });

  xMark.addEventListener("click", function () {
    myIntroduce.style.display = "none";
  });
});
