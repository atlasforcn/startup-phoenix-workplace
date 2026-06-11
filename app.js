const STORAGE_KEY = "phoenix-workplace-demo-state";

const jobs = [
  {
    id: "job-aurora-pm",
    company: "晨弧數位服務",
    title: "產品專案經理",
    city: "台北",
    workMode: "混合辦公",
    salary: "月薪 58K - 78K",
    score: 91,
    benefits: ["薪酬透明", "彈性工時", "申訴保護", "夜歸補助"],
    note: "公開薪資級距，面試前提供流程、窗口與夜間交通補助規則。",
    interviewRisk: "低"
  },
  {
    id: "job-green-data",
    company: "綠映資料顧問",
    title: "資料分析師",
    city: "新北",
    workMode: "遠端優先",
    salary: "月薪 52K - 68K",
    score: 88,
    benefits: ["薪酬透明", "彈性工時", "申訴保護"],
    note: "遠端優先，每季公布薪酬校準區間與主管溝通訓練進度。",
    interviewRisk: "低"
  },
  {
    id: "job-nova-ops",
    company: "新衡製造雲",
    title: "營運流程設計師",
    city: "台中",
    workMode: "固定辦公",
    salary: "月薪 46K - 60K",
    score: 76,
    benefits: ["申訴保護", "夜歸補助"],
    note: "有申訴窗口與夜間返家補助，薪資與彈性制度仍在改善中。",
    interviewRisk: "中"
  },
  {
    id: "job-harbor-care",
    company: "港灣照護科技",
    title: "客戶成功顧問",
    city: "高雄",
    workMode: "混合辦公",
    salary: "月薪 43K - 58K",
    score: 83,
    benefits: ["彈性工時", "申訴保護", "夜歸補助"],
    note: "排班可交換，夜間拜訪需雙人同行，匿名回饋回覆速度佳。",
    interviewRisk: "低"
  },
  {
    id: "job-mica-design",
    company: "米卡文化設計",
    title: "品牌企劃",
    city: "台北",
    workMode: "固定辦公",
    salary: "月薪 38K - 48K",
    score: 69,
    benefits: ["彈性工時"],
    note: "創意環境完整，但申訴流程、薪資透明與晚間活動支援尚待補強。",
    interviewRisk: "中"
  },
  {
    id: "job-bright-engineer",
    company: "明曜能源平台",
    title: "前端工程師",
    city: "新北",
    workMode: "混合辦公",
    salary: "月薪 60K - 86K",
    score: 93,
    benefits: ["薪酬透明", "彈性工時", "申訴保護", "夜歸補助"],
    note: "制度揭露完整，女性工程師 mentorship 與照顧者假別清楚。",
    interviewRisk: "低"
  }
];

const companies = [
  {
    id: "company-aurora",
    name: "晨弧數位服務",
    industry: "SaaS / 數位服務",
    score: 91,
    tags: ["薪酬透明", "夜間交通", "創傷知情"],
    indicators: {
      "薪酬透明": 94,
      "申訴安全": 90,
      "彈性工作": 88,
      "育兒支持": 82,
      "夜歸保護": 96
    },
    risk: "低風險：面試流程與回報窗口完整，近三月匿名回饋偏正向。",
    next: "把主管訓練紀錄與職缺頁連動，降低求職者詢問成本。"
  },
  {
    id: "company-green",
    name: "綠映資料顧問",
    industry: "資料顧問 / 研究",
    score: 88,
    tags: ["遠端優先", "薪資校準", "匿名回饋"],
    indicators: {
      "薪酬透明": 90,
      "申訴安全": 84,
      "彈性工作": 96,
      "育兒支持": 78,
      "夜歸保護": 80
    },
    risk: "低風險：遠端制度成熟，但外部客戶拜訪時的安全規範需要更一致。",
    next: "建立客戶現場拜訪的同行與報平安流程。"
  },
  {
    id: "company-nova",
    name: "新衡製造雲",
    industry: "製造科技 / 營運",
    score: 76,
    tags: ["申訴 SOP", "夜歸補助", "制度補強中"],
    indicators: {
      "薪酬透明": 62,
      "申訴安全": 78,
      "彈性工作": 66,
      "育兒支持": 72,
      "夜歸保護": 86
    },
    risk: "中風險：安全補助已有雛形，薪資揭露與彈性工作規則仍不清楚。",
    next: "先公開薪酬級距與混合辦公適用條件。"
  },
  {
    id: "company-harbor",
    name: "港灣照護科技",
    industry: "照護科技 / 客戶成功",
    score: 83,
    tags: ["排班彈性", "雙人拜訪", "快速回覆"],
    indicators: {
      "薪酬透明": 76,
      "申訴安全": 88,
      "彈性工作": 84,
      "育兒支持": 80,
      "夜歸保護": 90
    },
    risk: "低至中風險：外勤保護明確，薪資透明仍可提升。",
    next: "把客戶拜訪風險分級加入排班系統。"
  },
  {
    id: "company-mica",
    name: "米卡文化設計",
    industry: "文創 / 品牌設計",
    score: 69,
    tags: ["文化活躍", "彈性試行", "需補制度"],
    indicators: {
      "薪酬透明": 54,
      "申訴安全": 58,
      "彈性工作": 75,
      "育兒支持": 68,
      "夜歸保護": 60
    },
    risk: "中風險：活動與晚間提案多，安全與申訴流程需要明文化。",
    next: "建立晚間活動交通支援與第三方申訴窗口。"
  },
  {
    id: "company-bright",
    name: "明曜能源平台",
    industry: "能源科技 / 軟體",
    score: 93,
    tags: ["工程 mentorship", "照顧者支持", "完整揭露"],
    indicators: {
      "薪酬透明": 96,
      "申訴安全": 92,
      "彈性工作": 90,
      "育兒支持": 88,
      "夜歸保護": 95
    },
    risk: "低風險：制度揭露完整，技術團隊留任支持明確。",
    next: "持續公開跨職級晉升樣本，增加女性技術職涯可見度。"
  }
];

const defaultFeedback = [
  {
    company: "晨弧數位服務",
    category: "面試安全",
    rating: 5,
    text: "面試前一天收到完整流程，包含接待人員、會議室位置與離場交通提醒。",
    time: "今日 09:20"
  },
  {
    company: "新衡製造雲",
    category: "制度透明",
    rating: 3,
    text: "主管介紹申訴窗口很清楚，但薪資級距需要到最後一關才知道。",
    time: "昨日 18:45"
  },
  {
    company: "米卡文化設計",
    category: "主管互動",
    rating: 2,
    text: "面試氣氛友善，但晚間活動頻率與交通安排沒有被主動說明。",
    time: "週一 13:10"
  }
];

const defaultTasks = [
  {
    id: "task-1",
    title: "公開所有職缺薪資級距與面試流程",
    owner: "人資",
    due: "2026-07-15",
    done: true
  },
  {
    id: "task-2",
    title: "建立晚間面試交通補助規則",
    owner: "營運",
    due: "2026-07-30",
    done: false
  },
  {
    id: "task-3",
    title: "完成主管性別友善溝通訓練",
    owner: "主管群",
    due: "2026-08-12",
    done: false
  }
];

const state = loadState();

const elements = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  populateSelects();
  setDefaultDates();
  bindEvents();
  renderAll();
});

function cacheElements() {
  Object.assign(elements, {
    heroAverage: document.querySelector("#heroAverage"),
    jobCount: document.querySelector("#jobCount"),
    taskCount: document.querySelector("#taskCount"),
    feedbackCount: document.querySelector("#feedbackCount"),
    keywordInput: document.querySelector("#keywordInput"),
    workModeFilter: document.querySelector("#workModeFilter"),
    cityFilter: document.querySelector("#cityFilter"),
    scoreFilter: document.querySelector("#scoreFilter"),
    scoreValue: document.querySelector("#scoreValue"),
    resetFilters: document.querySelector("#resetFilters"),
    clearSaved: document.querySelector("#clearSaved"),
    jobResultText: document.querySelector("#jobResultText"),
    jobList: document.querySelector("#jobList"),
    savedList: document.querySelector("#savedList"),
    compareTable: document.querySelector("#compareTable"),
    companyList: document.querySelector("#companyList"),
    companyDetail: document.querySelector("#companyDetail"),
    feedbackForm: document.querySelector("#feedbackForm"),
    feedbackCompany: document.querySelector("#feedbackCompany"),
    feedbackCategory: document.querySelector("#feedbackCategory"),
    feedbackRating: document.querySelector("#feedbackRating"),
    ratingValue: document.querySelector("#ratingValue"),
    feedbackText: document.querySelector("#feedbackText"),
    feedbackStats: document.querySelector("#feedbackStats"),
    feedbackList: document.querySelector("#feedbackList"),
    policyForm: document.querySelector("#policyForm"),
    policyResult: document.querySelector("#policyResult"),
    interviewForm: document.querySelector("#interviewForm"),
    interviewJob: document.querySelector("#interviewJob"),
    interviewDate: document.querySelector("#interviewDate"),
    interviewTime: document.querySelector("#interviewTime"),
    interviewPlace: document.querySelector("#interviewPlace"),
    lateInterview: document.querySelector("#lateInterview"),
    safetyResult: document.querySelector("#safetyResult"),
    taskForm: document.querySelector("#taskForm"),
    taskTitle: document.querySelector("#taskTitle"),
    taskOwner: document.querySelector("#taskOwner"),
    taskDue: document.querySelector("#taskDue"),
    taskProgressText: document.querySelector("#taskProgressText"),
    taskProgressBar: document.querySelector("#taskProgressBar"),
    taskList: document.querySelector("#taskList")
  });
}

function loadState() {
  const fallback = {
    savedJobs: [],
    compareJobs: [],
    selectedCompany: companies[0].id,
    feedback: defaultFeedback,
    checkedPolicies: ["薪酬級距公開", "反騷擾申訴 SOP", "夜間交通安全"],
    safetyPlan: null,
    tasks: defaultTasks
  };

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return fallback;
    }
    const parsed = JSON.parse(stored);
    return {
      ...fallback,
      ...parsed,
      feedback: Array.isArray(parsed.feedback) ? parsed.feedback : fallback.feedback,
      tasks: Array.isArray(parsed.tasks) ? parsed.tasks : fallback.tasks
    };
  } catch (error) {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function populateSelects() {
  elements.feedbackCompany.innerHTML = companies
    .map((company) => `<option value="${company.name}">${company.name}</option>`)
    .join("");

  elements.interviewJob.innerHTML = jobs
    .map((job) => `<option value="${job.id}">${job.title}｜${job.company}</option>`)
    .join("");
}

function setDefaultDates() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const nextMonth = new Date(today);
  nextMonth.setDate(today.getDate() + 30);

  elements.interviewDate.value = formatDate(tomorrow);
  elements.taskDue.value = formatDate(nextMonth);
}

function bindEvents() {
  [elements.keywordInput, elements.workModeFilter, elements.cityFilter, elements.scoreFilter].forEach((input) => {
    input.addEventListener("input", renderJobs);
  });

  document.querySelectorAll("input[name='benefit']").forEach((checkbox) => {
    checkbox.addEventListener("change", renderJobs);
  });

  elements.resetFilters.addEventListener("click", () => {
    elements.keywordInput.value = "";
    elements.workModeFilter.value = "all";
    elements.cityFilter.value = "all";
    elements.scoreFilter.value = "75";
    document.querySelectorAll("input[name='benefit']").forEach((checkbox) => {
      checkbox.checked = false;
    });
    renderJobs();
  });

  elements.clearSaved.addEventListener("click", () => {
    state.savedJobs = [];
    state.compareJobs = [];
    saveState();
    renderJobs();
    renderSavedAndCompare();
  });

  elements.feedbackRating.addEventListener("input", () => {
    elements.ratingValue.textContent = `${elements.feedbackRating.value} / 5`;
  });

  elements.feedbackForm.addEventListener("submit", handleFeedbackSubmit);
  elements.policyForm.addEventListener("change", handlePolicyChange);
  elements.interviewForm.addEventListener("submit", handleInterviewSubmit);
  elements.taskForm.addEventListener("submit", handleTaskSubmit);
}

function renderAll() {
  restorePolicyChecks();
  renderHeroMetrics();
  renderJobs();
  renderSavedAndCompare();
  renderCompanies();
  renderFeedback();
  renderPolicyResult();
  renderSafetyPlan();
  renderTasks();
}

function renderHeroMetrics() {
  const average = Math.round(companies.reduce((sum, company) => sum + company.score, 0) / companies.length);
  elements.heroAverage.textContent = average;
  elements.jobCount.textContent = jobs.length;
  elements.taskCount.textContent = state.tasks.length;
  elements.feedbackCount.textContent = state.feedback.length;
}

function renderJobs() {
  elements.scoreValue.textContent = `${elements.scoreFilter.value} 分以上`;

  const keyword = elements.keywordInput.value.trim().toLowerCase();
  const selectedBenefits = Array.from(document.querySelectorAll("input[name='benefit']:checked")).map((item) => item.value);
  const minimumScore = Number(elements.scoreFilter.value);

  const filtered = jobs.filter((job) => {
    const keywordPool = [job.company, job.title, job.city, job.workMode, job.salary, job.note, ...job.benefits]
      .join(" ")
      .toLowerCase();
    const matchesKeyword = !keyword || keywordPool.includes(keyword);
    const matchesMode = elements.workModeFilter.value === "all" || job.workMode === elements.workModeFilter.value;
    const matchesCity = elements.cityFilter.value === "all" || job.city === elements.cityFilter.value;
    const matchesScore = job.score >= minimumScore;
    const matchesBenefits = selectedBenefits.every((benefit) => job.benefits.includes(benefit));

    return matchesKeyword && matchesMode && matchesCity && matchesScore && matchesBenefits;
  });

  elements.jobResultText.textContent = `找到 ${filtered.length} 個符合條件的職缺`;

  if (filtered.length === 0) {
    elements.jobList.innerHTML = `<div class="empty-state">目前沒有符合條件的職缺，可以降低友善分數或減少必要制度。</div>`;
    return;
  }

  elements.jobList.innerHTML = filtered.map((job) => {
    const isSaved = state.savedJobs.includes(job.id);
    const isCompared = state.compareJobs.includes(job.id);
    return `
      <article class="job-card">
        <header>
          <div>
            <h3>${job.title}</h3>
            <p>${job.company}</p>
          </div>
          <span class="score-pill" aria-label="友善分數 ${job.score} 分">${job.score}</span>
        </header>
        <div class="meta-row">
          <span>${job.city}</span>
          <span>${job.workMode}</span>
          <span>${job.salary}</span>
          <span>面試風險 ${job.interviewRisk}</span>
        </div>
        <p>${job.note}</p>
        <div class="benefit-tags">
          ${job.benefits.map((benefit) => `<span>${benefit}</span>`).join("")}
        </div>
        <div class="job-actions">
          <button class="${isSaved ? "is-active" : ""}" type="button" data-action="save-job" data-id="${job.id}">
            ${isSaved ? "已收藏" : "收藏"}
          </button>
          <button class="${isCompared ? "is-active" : ""}" type="button" data-action="compare-job" data-id="${job.id}">
            ${isCompared ? "比較中" : "加入比較"}
          </button>
          <button type="button" data-action="interview-job" data-id="${job.id}">面試提醒</button>
        </div>
      </article>
    `;
  }).join("");

  elements.jobList.querySelectorAll("button[data-action]").forEach((button) => {
    button.addEventListener("click", handleJobAction);
  });
}

function handleJobAction(event) {
  const action = event.currentTarget.dataset.action;
  const id = event.currentTarget.dataset.id;

  if (action === "save-job") {
    toggleArrayValue(state.savedJobs, id);
  }

  if (action === "compare-job") {
    if (state.compareJobs.includes(id)) {
      state.compareJobs = state.compareJobs.filter((jobId) => jobId !== id);
    } else if (state.compareJobs.length < 3) {
      state.compareJobs.push(id);
    } else {
      state.compareJobs.shift();
      state.compareJobs.push(id);
    }
  }

  if (action === "interview-job") {
    elements.interviewJob.value = id;
    document.querySelector("#interview").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  saveState();
  renderJobs();
  renderSavedAndCompare();
}

function renderSavedAndCompare() {
  const saved = state.savedJobs
    .map((id) => jobs.find((job) => job.id === id))
    .filter(Boolean);
  const compared = state.compareJobs
    .map((id) => jobs.find((job) => job.id === id))
    .filter(Boolean);

  elements.savedList.innerHTML = saved.length
    ? saved.map((job) => `<span>${job.title}｜${job.company}</span>`).join("")
    : `<p class="empty-state">尚未收藏職缺。</p>`;

  if (compared.length === 0) {
    elements.compareTable.innerHTML = `<p class="empty-state">將最多三個職缺加入比較，這裡會顯示友善分數、制度與面試風險。</p>`;
    return;
  }

  elements.compareTable.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>職缺</th>
          <th>企業</th>
          <th>友善分數</th>
          <th>制度亮點</th>
          <th>面試風險</th>
        </tr>
      </thead>
      <tbody>
        ${compared.map((job) => `
          <tr>
            <td>${job.title}</td>
            <td>${job.company}</td>
            <td>${job.score}</td>
            <td>${job.benefits.join("、")}</td>
            <td>${job.interviewRisk}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function renderCompanies() {
  elements.companyList.innerHTML = companies.map((company) => `
    <button class="company-button ${company.id === state.selectedCompany ? "is-active" : ""}" type="button" data-company="${company.id}">
      <strong>${company.name}</strong>
      <span>${company.industry}</span>
      <span>友善分數 ${company.score}</span>
    </button>
  `).join("");

  elements.companyList.querySelectorAll("[data-company]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedCompany = button.dataset.company;
      saveState();
      renderCompanies();
    });
  });

  const company = companies.find((item) => item.id === state.selectedCompany) || companies[0];

  elements.companyDetail.innerHTML = `
    <header>
      <div>
        <p class="section-kicker">Company profile</p>
        <h3>${company.name}</h3>
        <p>${company.industry}</p>
      </div>
      <strong class="index-badge">${company.score}</strong>
    </header>
    <div class="benefit-tags">
      ${company.tags.map((tag) => `<span>${tag}</span>`).join("")}
    </div>
    <div class="indicator-list">
      ${Object.entries(company.indicators).map(([label, value]) => `
        <div class="indicator-row">
          <strong>${label}</strong>
          <div class="bar" aria-hidden="true"><span style="width: ${value}%"></span></div>
          <span>${value}</span>
        </div>
      `).join("")}
    </div>
    <div class="risk-box">
      <strong>風險摘要</strong>
      <p>${company.risk}</p>
      <strong>建議下一步</strong>
      <p>${company.next}</p>
    </div>
  `;
}

function handleFeedbackSubmit(event) {
  event.preventDefault();
  const text = elements.feedbackText.value.trim();
  if (!text) {
    elements.feedbackText.focus();
    return;
  }

  state.feedback.unshift({
    company: elements.feedbackCompany.value,
    category: elements.feedbackCategory.value,
    rating: Number(elements.feedbackRating.value),
    text,
    time: "剛剛"
  });

  elements.feedbackText.value = "";
  elements.feedbackRating.value = "4";
  elements.ratingValue.textContent = "4 / 5";

  saveState();
  renderFeedback();
  renderHeroMetrics();
}

function renderFeedback() {
  const count = state.feedback.length;
  const average = count
    ? (state.feedback.reduce((sum, item) => sum + item.rating, 0) / count).toFixed(1)
    : "0.0";
  const safetyCount = state.feedback.filter((item) => item.category.includes("安全") || item.category.includes("申訴")).length;

  elements.feedbackStats.innerHTML = `
    <div class="stat-card"><span>總回饋</span><strong>${count}</strong></div>
    <div class="stat-card"><span>平均安心</span><strong>${average}</strong></div>
    <div class="stat-card"><span>安全相關</span><strong>${safetyCount}</strong></div>
  `;

  elements.feedbackList.innerHTML = state.feedback.map((item) => `
    <article class="feedback-card">
      <div class="meta-row">
        <span>${item.company}</span>
        <span>${item.category}</span>
        <span>安心 ${item.rating} / 5</span>
        <span>${item.time}</span>
      </div>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function restorePolicyChecks() {
  elements.policyForm.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    checkbox.checked = state.checkedPolicies.includes(checkbox.value);
  });
}

function handlePolicyChange() {
  state.checkedPolicies = Array.from(elements.policyForm.querySelectorAll("input[type='checkbox']:checked"))
    .map((checkbox) => checkbox.value);
  saveState();
  renderPolicyResult();
}

function renderPolicyResult() {
  const checked = Array.from(elements.policyForm.querySelectorAll("input[type='checkbox']:checked"));
  const score = checked.reduce((sum, checkbox) => sum + Number(checkbox.dataset.weight), 0);
  const allItems = Array.from(elements.policyForm.querySelectorAll("input[type='checkbox']"));
  const missing = allItems.filter((checkbox) => !checkbox.checked).slice(0, 3).map((checkbox) => checkbox.value);
  const level = score >= 82 ? "成熟" : score >= 58 ? "成長中" : "需優先補強";

  elements.policyResult.innerHTML = `
    <p class="section-kicker">Audit result</p>
    <div class="audit-score"><strong>${score}</strong><span>/ 100</span></div>
    <h3>友善成熟度：${level}</h3>
    <p>${getPolicyMessage(score)}</p>
    <strong>建議優先改善</strong>
    <ul class="suggestion-list">
      ${missing.length ? missing.map((item) => `<li>${item}</li>`).join("") : "<li>目前核心制度完整，建議進入季度追蹤與公開揭露。</li>"}
    </ul>
  `;
}

function getPolicyMessage(score) {
  if (score >= 82) {
    return "制度已具備可信揭露基礎，可把任務重點放在維持透明度與回饋速度。";
  }
  if (score >= 58) {
    return "已有幾個關鍵制度，但求職者仍可能看不到一致標準，建議先補齊高風險流程。";
  }
  return "目前制度訊號不足，應先建立申訴保護、薪酬揭露與面試安全規範。";
}

function handleInterviewSubmit(event) {
  event.preventDefault();
  const job = jobs.find((item) => item.id === elements.interviewJob.value) || jobs[0];
  const isLate = elements.lateInterview.checked || isLateTime(elements.interviewTime.value);
  const place = elements.interviewPlace.value.trim() || "尚未填寫地點";

  state.safetyPlan = {
    jobId: job.id,
    date: elements.interviewDate.value,
    time: elements.interviewTime.value,
    place,
    isLate
  };

  saveState();
  renderSafetyPlan();
}

function renderSafetyPlan() {
  if (!state.safetyPlan) {
    elements.safetyResult.innerHTML = `
      <p class="section-kicker">Safety checklist</p>
      <h3>尚未產生提醒</h3>
      <p>選擇職缺並填入面試資訊後，系統會整理面試前、中、後需要確認的事項。</p>
    `;
    return;
  }

  const job = jobs.find((item) => item.id === state.safetyPlan.jobId) || jobs[0];
  const lateItems = state.safetyPlan.isLate
    ? ["確認返家交通與預估抵達時間", "將面試地點與聯絡窗口傳給信任的人", "優先選擇公共空間或可查證的公司地址"]
    : ["確認面試流程、接待者姓名與公司地址"];
  const riskItems = job.interviewRisk === "中"
    ? ["詢問申訴窗口與面試異常回報方式", "避免接受臨時改到私人地點的面試安排"]
    : ["保留面試邀約與流程說明截圖"];

  elements.safetyResult.innerHTML = `
    <p class="section-kicker">Safety checklist</p>
    <h3>${job.title}｜${job.company}</h3>
    <p>${state.safetyPlan.date || "未填日期"} ${state.safetyPlan.time || ""}，${state.safetyPlan.place}</p>
    <ul>
      ${[...lateItems, ...riskItems, "面試後記錄感受與關鍵承諾，必要時送出匿名回饋"].map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function handleTaskSubmit(event) {
  event.preventDefault();
  const title = elements.taskTitle.value.trim();
  if (!title) {
    elements.taskTitle.focus();
    return;
  }

  state.tasks.unshift({
    id: `task-${Date.now()}`,
    title,
    owner: elements.taskOwner.value,
    due: elements.taskDue.value,
    done: false
  });

  elements.taskTitle.value = "";
  saveState();
  renderTasks();
  renderHeroMetrics();
}

function renderTasks() {
  const doneCount = state.tasks.filter((task) => task.done).length;
  const progress = state.tasks.length ? Math.round((doneCount / state.tasks.length) * 100) : 0;
  elements.taskProgressText.textContent = `${progress}%`;
  elements.taskProgressBar.style.width = `${progress}%`;

  elements.taskList.innerHTML = state.tasks.map((task) => `
    <article class="task-card ${task.done ? "is-complete" : ""}">
      <div>
        <strong>${task.title}</strong>
        <div class="task-meta">
          <span>${task.owner}</span>
          <span>期限 ${task.due || "未設定"}</span>
          <span>${task.done ? "已完成" : "進行中"}</span>
        </div>
      </div>
      <button class="${task.done ? "is-done" : ""}" type="button" data-task="${task.id}">
        ${task.done ? "標記未完成" : "完成"}
      </button>
    </article>
  `).join("");

  elements.taskList.querySelectorAll("[data-task]").forEach((button) => {
    button.addEventListener("click", () => {
      const task = state.tasks.find((item) => item.id === button.dataset.task);
      if (task) {
        task.done = !task.done;
        saveState();
        renderTasks();
      }
    });
  });
}

function toggleArrayValue(list, value) {
  const index = list.indexOf(value);
  if (index >= 0) {
    list.splice(index, 1);
  } else {
    list.push(value);
  }
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function isLateTime(timeValue) {
  if (!timeValue) {
    return false;
  }
  const hour = Number(timeValue.split(":")[0]);
  return hour >= 18 || hour < 7;
}
