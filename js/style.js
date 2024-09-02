// 호버함수 시작
//호버 함수

let hoverListeners = [];

function addHoverEffect(atagClass, hoverClass) {
  const atag = document.querySelector(atagClass);
  const hoverElement = document.querySelector(hoverClass);

  if (!atag || !hoverElement) return; // 요소가 없을 경우 반환

  const mouseOverListener = function () {
    hoverElement.style.display = "block";
  };

  const mouseOutListener = function () {
    hoverElement.style.display = "none";
  };

  atag.addEventListener("mouseover", mouseOverListener);
  atag.addEventListener("mouseout", mouseOutListener);

  hoverListeners.push({ atag, mouseOverListener, mouseOutListener });
}

// function initializeHoverEffects() {
//   if (window.innerWidth > 1023) {
//     addHoverEffect(".notebookAtag", ".notebookHover");
//     addHoverEffect(".phoneAtag", ".phoneHover");
//     addHoverEffect(".bikeAtag", ".bikeHover");
//     addHoverEffect(".paperAtag", ".paperHover");
//     addHoverEffect(".gamepadAtag", ".gamepadHover");
//     addHoverEffect(".cardAtag", ".cardHover");
//     addHoverEffect(".cupAtag", ".cupHover");
//   }
// }

// function removeHoverEffects() {
//   hoverListeners.forEach(({ atag, mouseOverListener, mouseOutListener }) => {
//     atag.removeEventListener("mouseover", mouseOverListener);
//     atag.removeEventListener("mouseout", mouseOutListener);
//   });
//   hoverListeners = [];
// }

// 페이지 로드 시 호버 효과 초기화
// initializeHoverEffects();

// 윈도우 크기 조절 시 다시 확인하여 동적으로 호버 효과 추가/제거
window.addEventListener("resize", function () {
  removeHoverEffects();
  // initializeHoverEffects();
});

// --------
function openNewWindow(url) {
  // 새 창의 너비와 높이를 설정합니다.
  let newWindow = window.open(url, "_blank", "width=360,height=740");
  // 포커스를 새 창에 맞춥니다.
  if (newWindow) {
    newWindow.focus();
  }
}

// 그래프 관련 함수
let skillData = [80, 60, 50, 45, 55, 60, 70, 55]; // 숙련도 데이터

// Canvas 요소 가져오기
let ctx = document.getElementById("myBarChart").getContext("2d");

// 애니메이션 상태 저장 변수
let animationComplete = false;

// 막대 그래프 생성
let myBarChart = new Chart(ctx, {
  type: "bar", // 그래프 유형: 막대 그래프
  data: {
    labels: [
      "HTML+CSS",
      "JavaScript",
      "Jquery",
      "React",
      "Bootstrap",
      "SCSS",
      "Tailwind",
      "TypeScript",
    ], // X 축 레이블
    datasets: [
      {
        label: "숙련도", // 레이블 비움
        data: skillData, // 각 막대의 데이터 값
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)", // 막대 색상
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(255, 102, 102, 0.7)",
          "rgba(255, 203, 153, 0.7)",
          "rgba(152, 125, 154, 0.7)",
          "rgba(125, 138, 188, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)", // 막대 테두리 색상
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 102, 102, 1)",
          "rgba(255, 203, 153, 1)",
          "rgba(152, 125, 154, 1)",
          "rgba(125, 138, 188, 1)",
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
    animation: {
      duration: 500,
      easing: "easeOutQuart",
      onProgress: function (animation) {
        if (animationComplete) return; // 애니메이션이 완료된 경우 실행 중지
        const chart = animation.chart;
        const width = chart.width;
        const height = chart.height;
        const ctx = chart.ctx;
        ctx.save();
        ctx.clearRect(0, 0, width, height);
        ctx.translate(width / 2, height / 2);
        ctx.scale(
          animation.currentStep / animation.numSteps,
          animation.currentStep / animation.numSteps
        );
        ctx.translate(-width / 2, -height / 2);
        chart.draw();
        ctx.restore();
      },
      onComplete: function () {
        animationComplete = true; // 애니메이션 완료 상태 설정
        // 애니메이션 콜백 제거
        myBarChart.options.animation.onProgress = null;
        myBarChart.options.animation.onComplete = null;
      },
    },
  },
});

//그래프 함수2
let ctx2 = document.getElementById("myChart2").getContext("2d");
var myChart = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: [
      "HTML+CSS",
      "JavaScript",
      "Jquery",
      "React",
      "Bootstrap",
      "SCSS",
      "Tailwind",
      "TypeScript",
    ],
    datasets: [
      {
        label: "숙련도", // 레이블 비움
        data: skillData, // 각 막대의 데이터 값
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)", // 막대 색상
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192,0.7)",
          "rgba(255, 102, 102, 0.7)",
          "rgba(255, 203, 153, 0.7)",
          "rgba(152, 125, 154, 0.7)",
          "rgba(125, 138, 188, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)", // 막대 테두리 색상
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 102, 102, 1)",
          "rgba(255, 203, 153, 1)",
          "rgba(152, 125, 154, 1)",
          "rgba(125, 138, 188, 1)",
        ],
        borderWidth: 1, // 막대 테두리 두께
      },
    ],
  },
  options: {
    indexAxis: "y", // 가로 막대 차트로 변경
    plugins: {
      legend: {
        display: false, // 범례 비활성화
      },
      title: {
        display: false, // 제목 비활성화
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// 호버 이벤트 함수

document.addEventListener("DOMContentLoaded", function () {
  const boardAtag = document.querySelector(".boardAtag");
  const xMark = document.querySelector(".scheduleXMark");
  const mySchedule = document.querySelector(".wholeWrap");

  boardAtag.addEventListener("click", function (event) {
    event.preventDefault();
    mySchedule.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  xMark.addEventListener("click", function () {
    mySchedule.style.display = "none";
    document.body.style.overflow = "auto";
  });
});

// 배경색 변경 함수
// 배경색 변경 함수
function changeBackgroundColor() {
  const wrap = document.querySelector(".wrap");
  const currentColor = wrap.style.backgroundColor;
  wrap.style.backgroundColor = currentColor === "skyblue" ? "navy" : "skyblue";

  // 배경색에 따라 .myRoom 요소에 필터 적용
  const myRoom = document.querySelector(".myRoom");
  if (wrap.style.backgroundColor === "navy") {
    myRoom.style.filter = "brightness(0.8)";
  } else {
    myRoom.style.filter = "brightness(1)";
  }
}

// 30초마다 배경색 변경
// setInterval(changeBackgroundColor, 20000);

// 페이지 로드 시 초기 배경색 설정
document.addEventListener("DOMContentLoaded", () => {
  const wrap = document.querySelector(".wrap");
  wrap.style.backgroundColor = "skyblue";
});

// Swiper 객체 생성
var swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  slidesPerView: "auto",
  // slidesPerView: 5,
  spaceBetween: 60,
  initialSlide: 4,
  centeredSlides: true,
  loop: false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    init: addClickListeners, // Swiper 초기화 시 클릭 리스너 추가
    slideChange: updateActiveSlide, // 슬라이드 변경 시 활성화 슬라이드 업데이트
  },
});

//
function addClickListeners() {
  const slides = document.querySelectorAll(".swiper-slide");

  slides.forEach((slide) => {
    slide.addEventListener("click", handleSlideClick);
  });
}

// 클릭 이벤트 핸들러
function handleSlideClick(event) {
  const clickedSlide = event.currentTarget;
  const activeIndex = swiper.activeIndex;
  const clickedIndex = Array.from(swiper.slides).indexOf(clickedSlide);

  if (clickedIndex !== activeIndex) {
    swiper.slideTo(clickedIndex); // 클릭된 슬라이드를 활성화
  }
}

// 슬라이드 변경 시 활성화 슬라이드 업데이트
function updateActiveSlide() {
  // 필요시 여기에 추가적인 로직을 삽입할 수 있습니다.
}

// 페이지 로드 시 초기 상태 설정
addClickListeners();

// 부트스트랩 툴팁
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// 스크롤 애니메이션
function logPaperPosition() {
  // .paper 요소를 선택합니다.
  const elementsToHide = [
    document.querySelector(".bike"),
    document.querySelector(".notebook"),
    document.querySelector(".phone"),
    document.querySelector(".paper"),
    document.querySelector(".gamepad"),
    document.querySelector(".card"),
    document.querySelector(".dog"),
    document.querySelector(".cup"),
    document.querySelector(".room"),
  ];

  const standElement = document.querySelector(".stand-man");
  const bikeElement = document.querySelector(".bike");
  const cupElement = document.querySelector(".cup");

  // 요소의 위치를 가져옵니다.
  const cupRect = cupElement.getBoundingClientRect();
  const bikeRect = bikeElement.getBoundingClientRect();

  // .cup의 위치에 따라 .man의 opacity를 조정합니다.
  document.querySelector(".man").style.opacity = cupRect.top <= 0 ? "0" : "1";

  // bike의 위치에 따라 여러 요소의 opacity를 조정합니다.
  const opacity = bikeRect.top <= 0 ? "0" : "1";

  elementsToHide.forEach((element) => {
    element.style.opacity = opacity;
  });

  // .stand-man의 opacity를 bike의 위치에 따라 조정합니다.
  standElement.style.opacity = bikeRect.top <= 0 ? "1" : "0";
}

// 스크롤 이벤트가 발생할 때마다 logPaperPosition 함수를 호출합니다.
window.addEventListener("scroll", logPaperPosition);

// 페이지 로드 시 초기 위치를 출력합니다.
window.addEventListener("load", logPaperPosition);

// 달력관련 함수
document.addEventListener("DOMContentLoaded", function () {
  const calendarWrap = document.querySelector(".calendarWrap");
  const todoListContainer = document.querySelector(".TodoListContainer");
  const currentMonthElement = document.getElementById("current-month");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const todoList = document.getElementById("todo-list");
  const input = document.getElementById("todo-input");
  const addButton = document.getElementById("add-button");
  const selectedDateElement = document.getElementById("selected-date");

  let currentYear = 2024; // 초기 연도
  let currentMonth = 8; // 초기 월 (0 = January, 8 = September)
  let selectedDate = null; // 선택된 날짜
  let datesWithTodos = new Map(); // 투두가 있는 날짜와 개수를 저장할 Map

  function updateMonthLabel(year, month) {
    const monthNames = [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ];
    currentMonthElement.textContent = `${monthNames[month]} ${year}`;
  }

  function generateCalendar(year, month) {
    calendarWrap.querySelector(".calendar")?.remove(); // 이전 달력 제거

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const table = document.createElement("table");
    table.classList.add("calendar");

    const headerRow = document.createElement("tr");
    daysOfWeek.forEach((day) => {
      const th = document.createElement("th");
      th.textContent = day;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    let currentDay = 1;
    for (let i = 0; i < 6; i++) {
      const row = document.createElement("tr");

      for (let j = 0; j < 7; j++) {
        const cell = document.createElement("td");

        if (i === 0 && j < firstDayOfMonth) {
          cell.classList.add("empty"); // 빈 셀
        } else if (currentDay > lastDayOfMonth) {
          cell.classList.add("empty"); // 빈 셀
        } else {
          const dateString = `${year}-${String(month + 1).padStart(
            2,
            "0"
          )}-${String(currentDay).padStart(2, "0")}`;
          cell.dataset.date = dateString;

          // 날짜가 있는 셀에는 날짜 숫자 표시
          const daySpan = document.createElement("span");
          daySpan.textContent = currentDay;
          cell.appendChild(daySpan);

          // 날짜가 있는 셀에는 동그라미를 항상 표시
          const todoCount = datesWithTodos.get(dateString) || 0;
          if (todoCount > 0) {
            cell.classList.add("has-todo");
            cell.dataset.todoCount = todoCount;
          } else {
            cell.dataset.todoCount = 0;
          }

          cell.addEventListener("click", function () {
            // 모든 날짜 셀의 동그라미 숫자를 0으로 초기화
            Array.from(calendarWrap.querySelectorAll(".calendar td")).forEach(
              (td) => {
                td.classList.remove("selected");
                td.classList.remove("has-todo");
                td.dataset.todoCount = 0;
              }
            );

            // 클릭된 날짜 셀에 'selected' 클래스 추가
            cell.classList.add("selected");
            selectedDate = cell.dataset.date;
            selectedDateElement.textContent = selectedDate;

            // 선택된 날짜의 투두리스트 보이기
            todoListContainer.style.display = "block";

            // 선택된 날짜의 투두리스트 초기화
            todoList.innerHTML = "";

            // 선택된 날짜의 동그라미 숫자 업데이트
            cell.dataset.todoCount = datesWithTodos.get(selectedDate) || 0;
          });

          currentDay++;
        }

        row.appendChild(cell);
      }

      table.appendChild(row);
    }

    calendarWrap.appendChild(table);

    // 선택된 날짜의 셀 다시 선택하기
    if (selectedDate) {
      const selectedCell = Array.from(
        calendarWrap.querySelectorAll(".calendar td")
      ).find((td) => td.dataset.date === selectedDate);
      if (selectedCell) {
        selectedCell.classList.add("selected");
      }
    }
  }

  function updateDeleteButtonVisibility(listItem) {
    const deleteButton = listItem.querySelector(".delete");
    if (listItem.classList.contains("completed")) {
      deleteButton.style.display = "none"; // 완료 상태일 때 삭제 버튼 숨기기
      if (!listItem.querySelector(".completed-text")) {
        const completedText = document.createElement("span");
        completedText.textContent = "👍";
        completedText.classList.add("completed-text");
        listItem.appendChild(completedText);
      }
    } else {
      deleteButton.style.display = "inline"; // 미완료 상태일 때 삭제 버튼 보이기
      const completedText = listItem.querySelector(".completed-text");
      if (completedText) {
        completedText.remove();
      }
    }
  }

  function setupEventListeners() {
    prevButton.addEventListener("click", function () {
      if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
      } else {
        currentMonth--;
      }
      updateMonthLabel(currentYear, currentMonth);
      generateCalendar(currentYear, currentMonth);
    });

    nextButton.addEventListener("click", function () {
      if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
      } else {
        currentMonth++;
      }
      updateMonthLabel(currentYear, currentMonth);
      generateCalendar(currentYear, currentMonth);
    });

    addButton.addEventListener("click", function () {
      const todoText = input.value.trim();

      if (todoText !== "" && selectedDate) {
        const listItem = document.createElement("li");
        listItem.textContent = todoText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "삭제";
        deleteButton.classList.add("delete");

        // 이벤트 전파를 막는 부분 추가
        deleteButton.addEventListener("click", function (event) {
          event.stopPropagation();

          // 삭제하려는 항목이 완료되지 않았으면 투두 카운트를 줄임
          if (!listItem.classList.contains("completed")) {
            const currentCount = datesWithTodos.get(selectedDate) || 0;
            if (currentCount > 1) {
              datesWithTodos.set(selectedDate, currentCount - 1);
            } else {
              datesWithTodos.delete(selectedDate);
            }
          }

          // 투두 항목 삭제
          todoList.removeChild(listItem);

          // 달력 업데이트
          generateCalendar(currentYear, currentMonth);

          // 선택된 날짜 셀의 상태 유지
          const selectedCell = Array.from(
            calendarWrap.querySelectorAll(".calendar td")
          ).find((td) => td.dataset.date === selectedDate);
          if (selectedCell) {
            selectedCell.classList.add("selected");
          }
        });

        listItem.appendChild(deleteButton);

        listItem.addEventListener("click", function () {
          listItem.classList.toggle("completed");
          updateDeleteButtonVisibility(listItem); // 완료 상태에 따라 삭제 버튼 업데이트

          // 완료 상태 변경 시, 이미 완료된 항목을 다시 클릭하여 미완료로 변경할 때만 카운트 증가
          const isCompleted = listItem.classList.contains("completed");
          const currentCount = datesWithTodos.get(selectedDate) || 0;

          if (isCompleted) {
            datesWithTodos.set(selectedDate, Math.max(currentCount - 1, 0));
          } else {
            datesWithTodos.set(selectedDate, currentCount + 1);
          }

          // 동그라미에 숫자 표시 업데이트
          const selectedCell = Array.from(
            calendarWrap.querySelectorAll(".calendar td")
          ).find((td) => td.dataset.date === selectedDate);
          if (selectedCell) {
            selectedCell.classList.add("has-todo");
            selectedCell.dataset.todoCount =
              datesWithTodos.get(selectedDate) || 0;
          }
        });

        todoList.appendChild(listItem);

        // 선택된 날짜의 투두 개수 업데이트
        const currentCount = datesWithTodos.get(selectedDate) || 0;
        datesWithTodos.set(selectedDate, currentCount + 1);

        // 동그라미에 숫자 표시 업데이트
        const selectedCell = Array.from(
          calendarWrap.querySelectorAll(".calendar td")
        ).find((td) => td.dataset.date === selectedDate);
        if (selectedCell) {
          selectedCell.classList.add("has-todo");
          selectedCell.dataset.todoCount = datesWithTodos.get(selectedDate);
        }

        input.value = ""; // 입력창 초기화
      }
    });
  }

  // 초기화
  updateMonthLabel(currentYear, currentMonth);
  generateCalendar(currentYear, currentMonth);
  setupEventListeners();
});
