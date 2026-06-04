const pages = Array.from(document.querySelectorAll(".page"));
const lessonTabs = Array.from(document.querySelectorAll(".lesson-tab"));
const liquid = document.querySelector("#liquid");
const experimentFeedback = document.querySelector("#experiment-feedback");
const solutionButtons = document.querySelector("#solution-buttons");
const predictionButtons = document.querySelector("#prediction-buttons");
const addCabbageButton = document.querySelector("#add-cabbage");
const pourStream = document.querySelector("#pour-stream");
const recordBody = document.querySelector("#record-body");
const studentSummary = document.querySelector("#student-summary");
const materialsList = document.querySelector("#materials-list");
const sortItems = document.querySelector("#sort-items");
const sortFeedback = document.querySelector("#sort-feedback");
const celebration = document.querySelector("#celebration");
const quizProgress = document.querySelector("#quiz-progress");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const nextQuestionButton = document.querySelector("#next-question");
const scoreCard = document.querySelector("#score-card");
const prevStepButton = document.querySelector("#prev-step");
const nextStepButton = document.querySelector("#next-step");
const restartButton = document.querySelector("#restart");

const solutions = [
  {
    name: "檸檬汁",
    color: "#f68bb7",
    group: "red",
    note: "檸檬汁讓高麗菜汁變成粉紅色，顏色偏紅。",
    material: "酸酸的果汁，實驗時只用少量觀察。"
  },
  {
    name: "醋",
    color: "#c34a92",
    group: "red",
    note: "醋讓高麗菜汁變成紅紫色，也屬於偏紅的變化。",
    material: "廚房常見的調味品，味道很明顯。"
  },
  {
    name: "純水",
    color: "#6f4cc3",
    group: "purple",
    note: "純水讓顏色維持紫色，變化不明顯。",
    material: "最適合拿來比較顏色變化的材料。"
  },
  {
    name: "食鹽水",
    color: "#5b65ca",
    group: "purple",
    note: "食鹽水讓顏色接近紫色或紫藍色，變化不明顯。",
    material: "食鹽加水調成的水溶液。"
  },
  {
    name: "糖水",
    color: "#704fc0",
    group: "purple",
    note: "糖水通常讓高麗菜汁維持紫色。",
    material: "糖加水調成的水溶液。"
  },
  {
    name: "小蘇打水",
    color: "#19b7a3",
    group: "green",
    note: "小蘇打水讓高麗菜汁變成藍綠色。",
    material: "小蘇打粉加水調成，實驗時由老師準備。"
  },
  {
    name: "肥皂水",
    color: "#62bd59",
    group: "green",
    note: "肥皂水讓高麗菜汁變成綠色。",
    material: "肥皂加水調成，不可以喝，也不要碰眼睛。"
  }
];

const cabbageMaterial = {
  name: "紫色高麗菜汁",
  color: "#6f4cc3",
  material: "今天的顏色小偵探，會幫我們觀察變化。"
};

const groupLabels = {
  red: "偏紅色組",
  purple: "紫色不明顯組",
  green: "藍綠色組"
};

// 預測選項用學生看得懂的顏色名稱，不使用 pH 數字概念。
const predictionChoices = [
  { label: "粉紅色", color: "#f68bb7" },
  { label: "紅紫色", color: "#c34a92" },
  { label: "紫色", color: "#6f4cc3" },
  { label: "紫藍色", color: "#5b65ca" },
  { label: "藍綠色", color: "#19b7a3" },
  { label: "綠色", color: "#62bd59" }
];

const quizzes = [
  {
    question: "紫色高麗菜汁遇到檸檬汁，可能會變成什麼顏色？",
    options: ["粉紅色", "黑色", "透明"],
    answer: 0,
    feedback: "答對了！檸檬汁會讓顏色偏紅。"
  },
  {
    question: "純水讓紫色高麗菜汁的顏色通常會怎樣？",
    options: ["維持紫色或變化不明顯", "一定變成綠色", "一定變成黃色"],
    answer: 0,
    feedback: "很好！純水通常讓顏色變化不明顯。"
  },
  {
    question: "小蘇打水比較可能讓高麗菜汁變成哪一類顏色？",
    options: ["藍綠色", "粉紅色", "白色"],
    answer: 0,
    feedback: "沒錯！小蘇打水會讓顏色偏藍綠。"
  },
  {
    question: "醋加入紫色高麗菜汁後，比較像哪一種變化？",
    options: ["紅紫色", "藍綠色", "沒有任何材料"],
    answer: 0,
    feedback: "答對了！醋會讓紫色高麗菜汁變成紅紫色。"
  },
  {
    question: "食鹽水加入紫色高麗菜汁後，通常比較接近哪一類？",
    options: ["紫色或紫藍色", "亮綠色", "粉紅色"],
    answer: 0,
    feedback: "很好！食鹽水通常讓顏色維持紫色附近，變化不明顯。"
  },
  {
    question: "肥皂水比較可能讓紫色高麗菜汁變成什麼顏色？",
    options: ["綠色", "粉紅色", "透明"],
    answer: 0,
    feedback: "沒錯！肥皂水會讓顏色偏綠。"
  },
  {
    question: "做這個實驗時，哪一件事是安全的做法？",
    options: ["實驗後洗手", "把材料喝下去", "自己混合不認識的清潔用品"],
    answer: 0,
    feedback: "答對了！實驗後洗手是好習慣。"
  },
  {
    question: "如果預測和實驗結果不一樣，最適合怎麼做？",
    options: ["把結果記錄下來，再想想原因", "假裝沒有做實驗", "直接把材料倒掉不看"],
    answer: 0,
    feedback: "太好了！預測不同也很有價值，記錄下來才能發現規律。"
  },
  {
    question: "這堂課最重要的是練習什麼？",
    options: ["觀察、比較、分類與歸納", "背很難的化學名詞", "猜哪一杯最好喝"],
    answer: 0,
    feedback: "太棒了！我們是用眼睛和腦袋找規律。"
  },
  {
    question: "把檸檬汁和醋分在同一組，主要是因為什麼？",
    options: ["它們都讓顏色偏紅", "它們都會變成綠色", "它們都是透明杯子"],
    answer: 0,
    feedback: "答對了！分類時可以看顏色變化是不是相似。"
  }
];

let currentPage = 0;
let selectedSort = "";
let sortedAnswers = {};
let selectedSolution = "";
let selectedPrediction = "";
let learningRecords = [];
let quizIndex = 0;
let quizScore = 0;
let quizLocked = false;

function renderMaterials() {
  const allMaterials = [cabbageMaterial, ...solutions];
  materialsList.innerHTML = allMaterials.map((item) => `
    <article class="material-card">
      <h3><span class="material-swatch" style="background:${item.color}"></span>${item.name}</h3>
      <p>${item.material}</p>
    </article>
  `).join("");
}

function renderSolutions() {
  solutionButtons.innerHTML = solutions.map((item) => `
    <button class="solution-btn ${selectedSolution === item.name ? "is-selected" : ""}" type="button" style="--btn-color:${item.color}" data-solution="${item.name}">
      ${item.name}
    </button>
  `).join("");
}

// 每次重新渲染可同步目前選取狀態，讓手機點選也有明確回饋。
function renderPredictions() {
  predictionButtons.innerHTML = predictionChoices.map((item) => `
    <button class="prediction-btn ${selectedPrediction === item.label ? "is-selected" : ""}" type="button" data-prediction="${item.label}">
      <span class="prediction-chip" style="--prediction-color:${item.color}"></span>
      ${item.label}
    </button>
  `).join("");
}

function renderSortItems() {
  sortItems.innerHTML = solutions.map((item) => `
    <button class="sort-card" type="button" data-sort="${item.name}">
      ${item.name}
    </button>
  `).join("");
}

function showPage(index) {
  currentPage = Math.max(0, Math.min(index, pages.length - 1));
  pages.forEach((page, pageIndex) => {
    page.classList.toggle("is-current", pageIndex === currentPage);
  });
  lessonTabs.forEach((tab, tabIndex) => {
    const isCurrentTab = tabIndex === currentPage;
    tab.classList.toggle("is-active", isCurrentTab);
    if (isCurrentTab) {
      tab.setAttribute("aria-current", "page");
    } else {
      tab.removeAttribute("aria-current");
    }
  });
  prevStepButton.disabled = currentPage === 0;
  nextStepButton.textContent = currentPage === pages.length - 1 ? "回到首頁" : "下一步";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function selectSolution(name) {
  const solution = solutions.find((item) => item.name === name);
  if (!solution) return;
  selectedSolution = name;
  liquid.style.backgroundColor = "#d8f1ff";
  liquid.style.filter = "saturate(0.85)";
  experimentFeedback.textContent = `你選了「${name}」。接著先預測，加入紫色高麗菜汁後會變成什麼顏色？`;
  renderSolutions();
  updateAddButton();
}

function selectPrediction(label) {
  selectedPrediction = label;
  experimentFeedback.textContent = selectedSolution
    ? `你預測會變成「${label}」。準備好就按「加入紫色高麗菜汁」。`
    : `你預測會變成「${label}」。請再選一種水溶液。`;
  renderPredictions();
  updateAddButton();
}

function updateAddButton() {
  addCabbageButton.disabled = !(selectedSolution && selectedPrediction);
}

function runExperiment() {
  const solution = solutions.find((item) => item.name === selectedSolution);
  if (!solution || !selectedPrediction) {
    experimentFeedback.textContent = "請先選水溶液，也選好你的預測顏色。";
    return;
  }

  addCabbageButton.disabled = true;
  pourStream.classList.remove("hidden");
  liquid.style.filter = "saturate(1.15)";

  // 先播放倒入效果，再把液體平滑轉成結果色。
  setTimeout(() => {
    liquid.style.backgroundColor = solution.color;
  }, 180);

  setTimeout(() => {
    pourStream.classList.add("hidden");
    const isSame = selectedPrediction === getResultLabel(solution);
    experimentFeedback.textContent = isSame
      ? `預測成功！${solution.note}`
      : `觀察到新線索了！你預測「${selectedPrediction}」，實驗結果是「${getResultLabel(solution)}」。${solution.note}`;
    addLearningRecord(solution, selectedPrediction);
    selectedPrediction = "";
    renderPredictions();
    updateAddButton();
  }, 980);
}

// 將每種材料對應成三年級學生能描述的觀察結果。
function getResultLabel(solution) {
  if (solution.name === "食鹽水") return "紫藍色";
  if (solution.name === "小蘇打水") return "藍綠色";
  if (solution.name === "肥皂水") return "綠色";
  if (solution.name === "醋") return "紅紫色";
  if (solution.name === "檸檬汁") return "粉紅色";
  return "紫色";
}

// 記錄每次預測與結果，讓學生能回頭比較自己的觀察。
function addLearningRecord(solution, prediction) {
  learningRecords.push({
    solution: solution.name,
    prediction,
    result: getResultLabel(solution),
    color: solution.color
  });
  renderRecords();
  updateStudentSummary();
}

function renderRecords() {
  if (learningRecords.length === 0) {
    recordBody.innerHTML = `
      <tr>
        <td colspan="3">還沒有紀錄，完成一次實驗後會出現在這裡。</td>
      </tr>
    `;
    return;
  }

  recordBody.innerHTML = learningRecords.map((record) => `
    <tr>
      <td>${record.solution}</td>
      <td>${record.prediction}</td>
      <td><span class="result-swatch" style="--swatch-color:${record.color}"></span>${record.result}</td>
    </tr>
  `).join("");
}

function updateStudentSummary() {
  if (learningRecords.length === 0) {
    studentSummary.textContent = "完成幾次預測實驗後，這裡會出現你的學習鼓勵語。";
    return;
  }

  const tried = new Set(learningRecords.map((record) => record.solution)).size;
  const matched = learningRecords.filter((record) => record.prediction === record.result).length;
  studentSummary.textContent = `你完成了 ${learningRecords.length} 次預測實驗，觀察過 ${tried} 種水溶液，其中 ${matched} 次預測和結果一樣。太好了，你正在像小科學家一樣先預測、再觀察、最後找規律！`;
}

function selectSortCard(name) {
  if (sortedAnswers[name]) return;
  selectedSort = name;
  document.querySelectorAll(".sort-card").forEach((card) => {
    card.classList.toggle("is-selected", card.dataset.sort === name);
  });
  sortFeedback.textContent = `你選了「${name}」，請點一個分類組別。`;
}

function placeSortCard(group) {
  if (!selectedSort) {
    sortFeedback.textContent = "先選一張水溶液小卡，再選分類組別。";
    return;
  }

  const solution = solutions.find((item) => item.name === selectedSort);
  const card = document.querySelector(`[data-sort="${selectedSort}"]`);

  if (solution.group !== group) {
    sortFeedback.textContent = `再想想看，「${selectedSort}」實驗時比較像哪一種顏色變化？`;
    return;
  }

  sortedAnswers[selectedSort] = group;
  card.classList.remove("is-selected");
  card.classList.add("is-done");
  card.textContent = `${selectedSort} ✓ ${groupLabels[group]}`;
  selectedSort = "";
  sortFeedback.textContent = "分對了！繼續完成其他小卡。";

  if (Object.keys(sortedAnswers).length === solutions.length) {
    sortFeedback.textContent = "太棒了！你發現了顏色變化的規律。";
    launchCelebration();
  }
}

function launchCelebration() {
  celebration.innerHTML = "";
  const colors = ["#ffd966", "#f68bb7", "#62bd59", "#19b7a3", "#7c55d8"];

  for (let index = 0; index < 24; index += 1) {
    const star = document.createElement("span");
    star.className = "star";
    star.style.setProperty("--x", `${Math.random() * 520 - 260}px`);
    star.style.setProperty("--y", `${Math.random() * 360 - 230}px`);
    star.style.setProperty("--star-color", colors[index % colors.length]);
    star.style.animationDelay = `${index * 24}ms`;
    celebration.appendChild(star);
  }

  setTimeout(() => {
    celebration.innerHTML = "";
  }, 1400);
}

function renderQuiz() {
  const quiz = quizzes[quizIndex];
  quizLocked = false;
  quizProgress.textContent = `第 ${quizIndex + 1} 題，共 ${quizzes.length} 題`;
  quizQuestion.textContent = quiz.question;
  quizFeedback.textContent = "讀完題目後，選一個答案。";
  nextQuestionButton.classList.add("hidden");
  scoreCard.classList.add("hidden");
  quizOptions.innerHTML = quiz.options.map((option, index) => `
    <button class="quiz-option" type="button" data-answer="${index}">
      ${option}
    </button>
  `).join("");
}

function answerQuiz(answerIndex) {
  if (quizLocked) return;
  quizLocked = true;

  const quiz = quizzes[quizIndex];
  const isCorrect = answerIndex === quiz.answer;

  if (isCorrect) {
    quizScore += 1;
    quizFeedback.textContent = quiz.feedback;
  } else {
    quizFeedback.textContent = `再想想，正確答案是「${quiz.options[quiz.answer]}」。`;
  }

  document.querySelectorAll(".quiz-option").forEach((button) => {
    const buttonIndex = Number(button.dataset.answer);
    button.classList.toggle("correct", buttonIndex === quiz.answer);
    button.classList.toggle("wrong", buttonIndex === answerIndex && !isCorrect);
    button.disabled = true;
  });

  if (quizIndex === quizzes.length - 1) {
    showScore();
  } else {
    nextQuestionButton.classList.remove("hidden");
  }
}

function showScore() {
  const message = quizScore === quizzes.length
    ? "滿分！你是超厲害的變色小偵探。"
    : "完成了！再觀察一次實驗，你會抓到更多線索。";
  scoreCard.textContent = `你的得分：${quizScore} / ${quizzes.length}。${message}`;
  scoreCard.classList.remove("hidden");
}

function resetAll() {
  selectedSort = "";
  sortedAnswers = {};
  selectedSolution = "";
  selectedPrediction = "";
  learningRecords = [];
  quizIndex = 0;
  quizScore = 0;
  quizLocked = false;
  liquid.style.backgroundColor = "#6f4cc3";
  liquid.style.filter = "saturate(1)";
  experimentFeedback.textContent = "先選一種水溶液，再選你預測的顏色。";
  sortFeedback.textContent = "選好水溶液小卡後，就可以開始分類。";
  pourStream.classList.add("hidden");
  renderSolutions();
  renderPredictions();
  renderRecords();
  updateStudentSummary();
  updateAddButton();
  renderSortItems();
  renderQuiz();
  showPage(0);
}

renderMaterials();
renderSolutions();
renderPredictions();
renderSortItems();
renderRecords();
updateStudentSummary();
renderQuiz();
showPage(0);

document.querySelector("[data-start]").addEventListener("click", () => showPage(1));

lessonTabs.forEach((tab) => {
  tab.addEventListener("click", () => showPage(Number(tab.dataset.go)));
});

solutionButtons.addEventListener("click", (event) => {
  const button = event.target.closest("[data-solution]");
  if (button) selectSolution(button.dataset.solution);
});

predictionButtons.addEventListener("click", (event) => {
  const button = event.target.closest("[data-prediction]");
  if (button) selectPrediction(button.dataset.prediction);
});

addCabbageButton.addEventListener("click", runExperiment);

sortItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-sort]");
  if (button) selectSortCard(button.dataset.sort);
});

document.querySelectorAll(".group-bin").forEach((button) => {
  button.addEventListener("click", () => placeSortCard(button.dataset.group));
});

quizOptions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-answer]");
  if (button) answerQuiz(Number(button.dataset.answer));
});

nextQuestionButton.addEventListener("click", () => {
  quizIndex += 1;
  renderQuiz();
});

prevStepButton.addEventListener("click", () => showPage(currentPage - 1));

nextStepButton.addEventListener("click", () => {
  if (currentPage === pages.length - 1) {
    showPage(0);
  } else {
    showPage(currentPage + 1);
  }
});

restartButton.addEventListener("click", resetAll);
