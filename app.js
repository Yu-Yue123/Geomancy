const FIGURES = {
  "1111": {
    name: "Via",
    zh: "道路",
    coreElement: "水",
    luck: "中性",
    tone: "流动、变化、旅程，事情尚未定型。",
    money: "资金流动大，宜周转、流通，不宜固守。",
    love: "关系在变化中，常见距离、旅行或心意摇摆。",
    career: "适合变动、跑动、转换路径。",
    health: "注意水液代谢、睡眠和情绪波动。",
    friendship: "朋友来去频繁，联系可恢复但稳定性不足。"
  },
  "2222": {
    name: "Populus",
    zh: "众民",
    coreElement: "水",
    luck: "中性",
    tone: "群体、顺势、环境压力，需看外缘。",
    money: "随大环境起伏，适合集体项目或大众市场。",
    love: "容易受家人朋友意见影响，关系本身缺少主动性。",
    career: "团队、社群、群众事务明显，个人主导力较弱。",
    health: "体质受环境影响，需留意群体性、反复性问题。",
    friendship: "朋友多但关系浅，适合融入群体。"
  },
  "1222": {
    name: "Laetitia",
    zh: "喜悦",
    coreElement: "火",
    luck: "吉",
    tone: "上升、喜庆、顺利开展。",
    money: "收益有增长迹象，适合乐观推进。",
    love: "感情轻松愉快，有好消息或和解机会。",
    career: "事业上升，适合展示成果、争取机会。",
    health: "恢复力较好，精神状态提升。",
    friendship: "聚会、庆祝、朋友支持。"
  },
  "2221": {
    name: "Tristitia",
    zh: "忧伤",
    coreElement: "土",
    luck: "凶",
    tone: "压抑、延迟、沉重但可稳住根基。",
    money: "收益迟缓，容易被固定成本压住。",
    love: "情绪低落，关系有疏离、失望或等待。",
    career: "进展慢，适合扎根、修补基础。",
    health: "注意低能量、慢性不适和压力累积。",
    friendship: "朋友支持有限，宜少期待、多自稳。"
  },
  "2111": {
    name: "Caput Draconis",
    zh: "龙首",
    coreElement: "北交点",
    luck: "吉",
    tone: "开端、入口、增长，适合启动。",
    money: "新财路、新资源、新客户。",
    love: "新关系、关系新阶段，适合开始。",
    career: "新机会出现，利面试、立项、入职。",
    health: "适合开始治疗、调养和新习惯。",
    friendship: "新朋友、新圈层带来助力。"
  },
  "1112": {
    name: "Cauda Draconis",
    zh: "龙尾",
    coreElement: "南交点",
    luck: "凶",
    tone: "结束、出口、释放旧事。",
    money: "支出、清算、结账，宜止损。",
    love: "旧关系收尾，纠缠需要切断。",
    career: "项目结束、离职、退出旧轨道。",
    health: "排毒、手术、告别坏习惯可有利。",
    friendship: "旧友疏远，或关系自然告终。"
  },
  "2211": {
    name: "Fortuna Major",
    zh: "大吉",
    coreElement: "太阳",
    luck: "大吉",
    tone: "强势成功、贵助、长久之利。",
    money: "财势稳健，长期收益较佳。",
    love: "关系稳定，适合承诺和公开。",
    career: "有权威支持，利升迁、名声、成果落地。",
    health: "元气较足，恢复前景好。",
    friendship: "可靠朋友和贵人支持。"
  },
  "1122": {
    name: "Fortuna Minor",
    zh: "小吉",
    coreElement: "太阳",
    luck: "小吉",
    tone: "短期顺利、机会明亮但需把握时机。",
    money: "短期进账或小收益，难以久持。",
    love: "有吸引力和热度，但稳定性待观察。",
    career: "利短项目、曝光、临时机会。",
    health: "短期好转，仍需继续维护。",
    friendship: "朋友带来及时帮助。"
  },
  "1212": {
    name: "Amissio",
    zh: "失去",
    coreElement: "金星",
    luck: "多凶，问舍弃则吉",
    tone: "耗散、让渡、减损；问舍弃时反而有利。",
    money: "破财、花费、让利，适合处理亏损。",
    love: "失落、放手、感情能量流失。",
    career: "资源减少，可能让出位置或机会。",
    health: "体力流失，注意消耗和虚弱。",
    friendship: "关系淡化，避免单方面付出。"
  },
  "2121": {
    name: "Acquisitio",
    zh: "获得",
    coreElement: "木星",
    luck: "吉",
    tone: "取得、增加、交换成功。",
    money: "得财、收款、资源增加。",
    love: "关系有收获，适合确认承诺。",
    career: "获得职位、订单、资源或认可。",
    health: "体力补回，但注意过度增加带来的负担。",
    friendship: "朋友带来资源或实质帮助。"
  },
  "1221": {
    name: "Carcer",
    zh: "牢狱",
    coreElement: "土星",
    luck: "凶，问稳定则可用",
    tone: "限制、固定、阻隔，也表示保护和约束。",
    money: "资金被锁住，适合储蓄，不宜冒进。",
    love: "关系受限、冷淡或被责任困住。",
    career: "制度、流程、合同限制明显。",
    health: "注意阻塞、僵硬、慢性病。",
    friendship: "社交收缩，边界感增强。"
  },
  "2112": {
    name: "Conjunctio",
    zh: "结合",
    coreElement: "水星",
    luck: "中吉",
    tone: "会合、连接、中介、转折点。",
    money: "通过交易、撮合、合作获利。",
    love: "相遇、复合、沟通带来转机。",
    career: "适合谈判、签约、协作、转岗。",
    health: "需连接信息与诊断，适合会诊。",
    friendship: "朋友牵线，关系重新接上。"
  },
  "1211": {
    name: "Puella",
    zh: "少女",
    coreElement: "金星",
    luck: "吉",
    tone: "和合、审美、关系与柔性处理。",
    money: "利美业、艺术、女性消费、舒适品。",
    love: "温和有吸引力，适合修复和示好。",
    career: "适合设计、服务、协调与公关。",
    health: "注意肾、皮肤、内分泌与放纵。",
    friendship: "朋友关系和谐，适合聚会。"
  },
  "1121": {
    name: "Puer",
    zh: "少年",
    coreElement: "火星",
    luck: "多凶，问竞争则吉",
    tone: "冲动、竞争、行动力，易急躁。",
    money: "冲动投资或消费，利快进快出。",
    love: "激情强但容易争吵。",
    career: "适合竞争、开拓、执行，忌鲁莽。",
    health: "注意炎症、外伤、发热和急症。",
    friendship: "朋友间易较劲，也能激发行动。"
  },
  "2212": {
    name: "Albus",
    zh: "白者",
    coreElement: "水星",
    luck: "吉",
    tone: "清明、智慧、冷静分析。",
    money: "理性理财，适合审账、规划。",
    love: "关系平静，靠理解与沟通推进。",
    career: "利研究、写作、咨询、策略。",
    health: "适合检查、诊断、温和调理。",
    friendship: "理性可靠的朋友，适合谈心。"
  },
  "2122": {
    name: "Rubeus",
    zh: "红者",
    coreElement: "火星",
    luck: "凶",
    tone: "强烈、失衡、欲望与风险，需要节制。",
    money: "高风险、冲动损失、争议款项。",
    love: "激情、嫉妒、冲突或失控。",
    career: "冲突、压力、危机处理，宜降温。",
    health: "注意出血、炎症、意外和过度刺激。",
    friendship: "朋友间有火气，避免争执升级。"
  }
};

const POSITIONS = {
  mothers: ["第一母", "第二母", "第三母", "第四母"],
  daughters: ["第一女", "第二女", "第三女", "第四女"],
  nieces: ["第一侄", "第二侄", "第三侄", "第四侄"],
  witnesses: ["右见证", "左见证"],
  judge: "判官",
  sentence: "调停者"
};

const HOUSES = [
  { name: "一宫", meaning: "命主、身体、性格、当前状态。" },
  { name: "二宫", meaning: "钱财、资源、动产、收入与得失。" },
  { name: "三宫", meaning: "沟通、文书、学习、兄弟姐妹、短途出行。" },
  { name: "四宫", meaning: "家宅、父母、土地、根基、事情的结局。" },
  { name: "五宫", meaning: "恋爱、子女、娱乐、创造、投机。" },
  { name: "六宫", meaning: "工作日常、疾病、雇员、消耗与服务。" },
  { name: "七宫", meaning: "伴侣、合作、婚姻、公开对手。" },
  { name: "八宫", meaning: "债务、共享资源、他人钱财、危机与死亡。" },
  { name: "九宫", meaning: "远行、信念、法律、出版、高等学习。" },
  { name: "十宫", meaning: "事业、名望、上级、目标与结果呈现。" },
  { name: "十一宫", meaning: "朋友、社群、愿望、支持者。" },
  { name: "十二宫", meaning: "隐事、隔离、损耗、潜伏敌人、无意识。" }
];

const SHIELD_POSITION_MEANINGS = {
  "第一母": "四母之一，代表起卦的原始种子，常看问卜者、问题根基与第一层动因。",
  "第二母": "四母之一，代表原始条件中的第二股力量，可辅助判断资源、关系或外部牵引。",
  "第三母": "四母之一，代表原始条件中的第三股力量，常提示过程中的沟通、阻碍或变化。",
  "第四母": "四母之一，代表原始条件中的第四股力量，可看事情落脚点、根基与收束方向。",
  "第一女": "由四母第一行横取而来，显示四母共同生成的第一层派生信息。",
  "第二女": "由四母第二行横取而来，显示四母共同生成的第二层派生信息。",
  "第三女": "由四母第三行横取而来，显示四母共同生成的第三层派生信息。",
  "第四女": "由四母第四行横取而来，显示四母共同生成的第四层派生信息。",
  "第一侄": "由第一母与第二母相加而来，代表前两母的合力。",
  "第二侄": "由第三母与第四母相加而来，代表后两母的合力。",
  "第三侄": "由第一女与第二女相加而来，代表前两女的合力。",
  "第四侄": "由第三女与第四女相加而来，代表后两女的合力。",
  "右见证": "由第一侄与第二侄相加而来，偏向问卜者、过去、已知条件与主动方。",
  "左见证": "由第三侄与第四侄相加而来，偏向所问对象、未来、外部条件与回应方。",
  "判官": "由左右见证相加而来，是盾形图对问题给出的核心结论。",
  "调停者": "由判官与第一母相加而来，显示结果回到问卜者身上的余波和落点。"
};

const HOUSE_POSITIONS = [
  "house-1",
  "house-2",
  "house-3",
  "house-4",
  "house-5",
  "house-6",
  "house-7",
  "house-8",
  "house-9",
  "house-10",
  "house-11",
  "house-12"
];

let state = {
  mode: "random",
  questionMode: "yesno",
  mothers: ["1111", "2222", "1222", "2211"],
  chart: null,
  detail: null,
  systemHidden: false
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function setPressed(buttons, activeButton) {
  buttons.forEach((button) => {
    const active = button === activeButton;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

const QUESTION_GUIDES = {
  yesno: {
    placeholder: "例如：A 是否会在未来三个月内与 B 确立恋爱关系？",
    title: "是否问题",
    formula: "谁 + 是否/能否/会不会 + 时间 + 具体事件"
  },
  development: {
    placeholder: "例如：A 和 B 未来三个月的恋情发展情况。",
    title: "发展问题",
    formula: "谁/什么关系 + 时间 + 哪方面发展"
  },
  custom: {
    placeholder: "自由输入。尽量写清楚主角、时间和主题。",
    title: "自定义问题",
    formula: "自由设问"
  }
};

function randomFigure() {
  return Array.from({ length: 4 }, () => (crypto.getRandomValues(new Uint8Array(1))[0] % 2 ? "1" : "2")).join("");
}

function addFigures(a, b) {
  return a
    .split("")
    .map((dot, index) => ((Number(dot) + Number(b[index])) % 2 === 0 ? "2" : "1"))
    .join("");
}

function makeChart(mothers) {
  const daughters = [0, 1, 2, 3].map((row) => mothers.map((mother) => mother[row]).join(""));
  const nieces = [
    addFigures(mothers[0], mothers[1]),
    addFigures(mothers[2], mothers[3]),
    addFigures(daughters[0], daughters[1]),
    addFigures(daughters[2], daughters[3])
  ];
  const witnesses = [addFigures(nieces[0], nieces[1]), addFigures(nieces[2], nieces[3])];
  const judge = addFigures(witnesses[0], witnesses[1]);
  const sentence = addFigures(judge, mothers[0]);
  return { mothers, daughters, nieces, witnesses, judge, sentence };
}

function figureInfo(pattern) {
  return FIGURES[pattern] || { name: pattern, zh: "未知", coreElement: "", luck: "", tone: "" };
}

function glyph(pattern) {
  return pattern
    .split("")
    .map((count) => {
      const dots = Number(count) === 1 ? '<span class="dot"></span>' : '<span class="dot"></span><span class="dot"></span>';
      return `<div class="dot-row">${dots}</div>`;
    })
    .join("");
}

function detailPayload(kind, pattern, title, houseIndex = null) {
  return { kind, pattern, title, houseIndex, customKey: `${kind}:${houseIndex ?? "none"}:${pattern}:${title}` };
}

function detailButton(payload, className = "chart-cell") {
  const info = figureInfo(payload.pattern);
  return `
    <button class="${className}" type="button"
      data-kind="${payload.kind}"
      data-pattern="${payload.pattern}"
      data-title="${payload.title}"
      data-house-index="${payload.houseIndex ?? ""}">
      <span class="cell-title">${payload.title}</span>
      <span class="cell-name">${info.zh}</span>
      <span class="glyph" aria-hidden="true">${glyph(payload.pattern)}</span>
    </button>
  `;
}

function getCustomKey(detail) {
  return `${detail.kind}:${detail.houseIndex ?? "none"}:${detail.pattern}:${detail.title}`;
}

function customMeaning(detail) {
  return localStorage.getItem(`geomancy-custom:${getCustomKey(detail)}`) || "";
}

function saveCustomMeaning(detail, value) {
  localStorage.setItem(`geomancy-custom:${getCustomKey(detail)}`, value);
}

function totalPoints() {
  if (!state.chart) return 0;
  return [...state.chart.mothers, ...state.chart.daughters, ...state.chart.nieces, ...state.chart.witnesses, state.chart.judge, state.chart.sentence]
    .join("")
    .split("")
    .reduce((sum, value) => sum + Number(value), 0);
}

function housePointTotal() {
  return [...state.chart.mothers, ...state.chart.daughters, ...state.chart.nieces]
    .join("")
    .split("")
    .reduce((sum, value) => sum + Number(value), 0);
}

function houseActivePointTotal() {
  return [...state.chart.mothers, ...state.chart.daughters, ...state.chart.nieces]
    .join("")
    .split("")
    .filter((value) => value === "1").length;
}

function remainderHouse(total) {
  const remainder = total % 12;
  return remainder === 0 ? 12 : remainder;
}

function partOfFortuneHouse() {
  return remainderHouse(housePointTotal());
}

function indexHouse() {
  return remainderHouse(houseActivePointTotal());
}

function renderManualGrid() {
  const labels = ["火", "风", "水", "土"];
  $("#manualGrid").innerHTML = state.mothers
    .map(
      (mother, motherIndex) => `
        <section class="manual-mother">
          <h3>${POSITIONS.mothers[motherIndex]}</h3>
          ${mother
            .split("")
            .map(
              (value, rowIndex) => `
                <label class="dot-toggle">
                  <span>${labels[rowIndex]}</span>
                  <button type="button" data-mother="${motherIndex}" data-row="${rowIndex}" aria-label="${POSITIONS.mothers[motherIndex]}${labels[rowIndex]}">${value === "1" ? "●" : "● ●"}</button>
                </label>`
            )
            .join("")}
        </section>`
    )
    .join("");
}

function renderQuestionGuide() {
  const guide = QUESTION_GUIDES[state.questionMode];
  $("#question").placeholder = guide.placeholder;
  $("#guideCopy").innerHTML = `
    <div class="guide-head">
      <strong>${guide.title}</strong>
      <span>${guide.formula}</span>
    </div>
    ${state.questionMode === "development" ? '<p>建议以三个月内为主要观察期；超过半年时，更适合作为趋势参考。</p>' : ""}
  `;
}

function renderShield() {
  const chart = state.chart;
  const topCells = [
    ...chart.daughters.map((pattern, index) => detailPayload("shield", pattern, POSITIONS.daughters[index])).reverse(),
    ...chart.mothers.map((pattern, index) => detailPayload("shield", pattern, POSITIONS.mothers[index])).reverse()
  ];
  const nieceCells = chart.nieces.map((pattern, index) => detailPayload("shield", pattern, POSITIONS.nieces[index])).reverse();
  const witnessCells = [
    detailPayload("shield", chart.witnesses[1], POSITIONS.witnesses[1]),
    detailPayload("shield", chart.witnesses[0], POSITIONS.witnesses[0])
  ];
  const judgeCell = detailPayload("shield", chart.judge, POSITIONS.judge);
  const sentenceCell = detailPayload("shield", chart.sentence, POSITIONS.sentence);
  const sentenceRow = $("#includeSentence").checked
    ? `<div class="shield-row sentence">${detailButton(sentenceCell, "chart-cell sentence-cell")}</div>`
    : "";

  $("#shieldView").innerHTML = `
    <section class="question-strip">
      <strong>${$("#question").value || "无问题"}</strong>
      <span>${new Date().toLocaleString("zh-CN", { hour12: false })}</span>
    </section>
    <div class="shield-board" aria-label="盾形图">
      <div class="shield-row top">${topCells.map((payload) => detailButton(payload)).join("")}</div>
      <div class="shield-row nieces">${nieceCells.map((payload) => detailButton(payload)).join("")}</div>
      <div class="shield-row witnesses">${witnessCells.map((payload) => detailButton(payload)).join("")}</div>
      <div class="shield-row judge">${detailButton(judgeCell)}</div>
      ${sentenceRow}
      <div class="total-row"><span>总点数</span><strong>${totalPoints()}</strong></div>
    </div>
  `;
}

function houseAssignments() {
  const chart = state.chart;
  const sequence = [...chart.mothers, ...chart.daughters, ...chart.nieces];
  if ($("#houseMethod").value === "basic") return sequence;
  const map = Array(12);
  map[0] = chart.mothers[0];
  map[9] = chart.mothers[1];
  map[6] = chart.mothers[2];
  map[3] = chart.mothers[3];
  map[1] = chart.daughters[0];
  map[10] = chart.daughters[1];
  map[7] = chart.daughters[2];
  map[4] = chart.daughters[3];
  map[2] = addFigures(map[6], map[10]);
  map[11] = addFigures(map[3], map[7]);
  map[8] = addFigures(map[0], map[4]);
  map[5] = addFigures(map[1], map[9]);
  return map;
}

function renderHouses() {
  const assignments = houseAssignments();
  const houseCells = assignments
    .map((pattern, index) => {
      const payload = detailPayload("house", pattern, HOUSES[index].name, index);
      return `
        <button class="house-slot ${HOUSE_POSITIONS[index]}" type="button"
          data-kind="house"
          data-pattern="${pattern}"
          data-title="${HOUSES[index].name}"
          data-house-index="${index}">
          <span class="glyph" aria-hidden="true">${glyph(pattern)}</span>
        </button>
      `;
    })
    .join("");

  $("#houseView").innerHTML = `
    <section class="question-strip">
      <strong>${$("#question").value || "无问题"}</strong>
      <span>${$("#houseMethod").value === "basic" ? "顺序入宫" : "Agrippa 入宫"}</span>
    </section>
    <div class="house-board" aria-label="入宫图">
      <svg class="house-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <rect x="0.25" y="0.25" width="99.5" height="99.5"></rect>
        <rect x="25" y="25" width="50" height="50"></rect>
        <line x1="0" y1="0" x2="25" y2="25"></line>
        <line x1="50" y1="0" x2="25" y2="25"></line>
        <line x1="50" y1="0" x2="75" y2="25"></line>
        <line x1="100" y1="0" x2="75" y2="25"></line>
        <line x1="100" y1="50" x2="75" y2="25"></line>
        <line x1="100" y1="50" x2="75" y2="75"></line>
        <line x1="100" y1="100" x2="75" y2="75"></line>
        <line x1="50" y1="100" x2="75" y2="75"></line>
        <line x1="50" y1="100" x2="25" y2="75"></line>
        <line x1="0" y1="100" x2="25" y2="75"></line>
        <line x1="0" y1="50" x2="25" y2="75"></line>
        <line x1="0" y1="50" x2="25" y2="25"></line>
      </svg>
      ${houseCells}
      <div class="house-center">
        <strong>${$("#houseMethod").value === "basic" ? "顺序入宫" : "Agrippa 入宫"}</strong>
        <span>福点 ${partOfFortuneHouse()}</span>
        <span>Index ${indexHouse()}</span>
      </div>
    </div>
  `;
}

function renderNotes() {
  const chart = state.chart;
  const judge = figureInfo(chart.judge);
  const right = figureInfo(chart.witnesses[0]);
  const left = figureInfo(chart.witnesses[1]);
  const sentence = figureInfo(chart.sentence);
  const yesNoTone = yesNoJudgement(judge);
  $("#notesView").innerHTML = `
    <div class="note-layout">
      <section class="note-block">
        <h2>核心判断</h2>
        <p>${state.questionMode === "yesno" ? yesNoTone : `判官为 ${judge.zh} · ${judge.name}。${judge.tone}`}</p>
        <p>右见证偏向问卜者、过去与已知条件：${right.zh}。左见证偏向所问对象、未来趋势与外部条件：${left.zh}。</p>
      </section>
      <section class="note-block">
        <h2>调停者</h2>
        <p>${sentence.zh} · ${sentence.name}：${sentence.tone}</p>
        <p>它由判官与第一母相加而来，可看作结果落回问卜者身上的余波。</p>
      </section>
    </div>
  `;
}

function yesNoJudgement(judge) {
  const luck = judge.luck || "";
  if (luck.includes("大吉") || luck.includes("小吉") || luck === "吉" || luck === "中吉") {
    return `是否判断：偏向“是”。判官为 ${judge.zh} · ${judge.name}，吉性较强。${judge.tone}`;
  }
  if (luck.includes("凶")) {
    return `是否判断：偏向“否”或阻力较大。判官为 ${judge.zh} · ${judge.name}。${judge.tone}`;
  }
  return `是否判断：结果不稳定，需看条件变化。判官为 ${judge.zh} · ${judge.name}。${judge.tone}`;
}

function renderSummary() {
  const judge = figureInfo(state.chart.judge);
  $("#judgeName").textContent = `${judge.zh} · ${judge.name}`;
  $("#judgeText").textContent = judge.tone;
}

function renderAll() {
  renderShield();
  renderHouses();
  renderNotes();
  renderSummary();
  localStorage.setItem(
    "geomancy-reading",
    JSON.stringify({
      question: $("#question").value,
      mothers: state.chart.mothers,
      houseMethod: $("#houseMethod").value,
      includeSentence: $("#includeSentence").checked
    })
  );
}

function cast() {
  if (state.mode === "random") {
    state.mothers = Array.from({ length: 4 }, randomFigure);
    renderManualGrid();
  }
  state.chart = makeChart(state.mothers);
  renderAll();
}

function openDetail(detail) {
  state.detail = detail;
  state.systemHidden = false;
  renderDetail();
  $("#detailPanel").hidden = false;
}

function closeDetail() {
  $("#detailPanel").hidden = true;
  state.detail = null;
}

function renderDetail() {
  if (!state.detail) return;
  const detail = state.detail;
  const info = figureInfo(detail.pattern);
  const house = detail.houseIndex === null || Number.isNaN(Number(detail.houseIndex)) ? null : HOUSES[Number(detail.houseIndex)];
  const panel = $("#detailPanel");
  const positionMeaning = detail.kind === "shield" ? SHIELD_POSITION_MEANINGS[detail.title] || "" : "";
  panel.querySelector(".detail-title").textContent = `${detail.title} · ${info.zh}`;
  panel.querySelector(".detail-subtitle").textContent = `${info.name} ${house ? ` / ${house.name}` : ""}`;
  panel.querySelector(".detail-glyph").innerHTML = glyph(detail.pattern);
  panel.querySelector("#systemContent").hidden = state.systemHidden;
  panel.querySelector("#hideSystemButton").textContent = state.systemHidden ? "显示" : "隐藏";
  panel.querySelector("#detailHouse").textContent = house ? house.meaning : positionMeaning;
  panel.querySelector("#detailTone").textContent = info.tone || "";
  panel.querySelector("#detailElement").textContent = info.coreElement || "";
  panel.querySelector("#detailLuck").textContent = info.luck || "";
  panel.querySelector("#detailMoney").textContent = info.money || "";
  panel.querySelector("#detailLove").textContent = info.love || "";
  panel.querySelector("#detailCareer").textContent = info.career || "";
  panel.querySelector("#detailHealth").textContent = info.health || "";
  panel.querySelector("#detailFriendship").textContent = info.friendship || "";
  panel.querySelector("#customMeaning").value = customMeaning(detail);
}

function readingText() {
  if (!state.chart) return "尚未起卦";
  return [
    `问题：${$("#question").value || "未填写"}`,
    `四母：${state.chart.mothers.map((p, i) => `${POSITIONS.mothers[i]} ${figureInfo(p).zh}/${figureInfo(p).name}`).join("；")}`,
    `四女：${state.chart.daughters.map((p, i) => `${POSITIONS.daughters[i]} ${figureInfo(p).zh}/${figureInfo(p).name}`).join("；")}`,
    `四侄：${state.chart.nieces.map((p, i) => `${POSITIONS.nieces[i]} ${figureInfo(p).zh}/${figureInfo(p).name}`).join("；")}`,
    `见证：右见证 ${figureInfo(state.chart.witnesses[0]).zh}/${figureInfo(state.chart.witnesses[0]).name}；左见证 ${figureInfo(state.chart.witnesses[1]).zh}/${figureInfo(state.chart.witnesses[1]).name}`,
    `判官：${figureInfo(state.chart.judge).zh}/${figureInfo(state.chart.judge).name}`,
    `调停者：${figureInfo(state.chart.sentence).zh}/${figureInfo(state.chart.sentence).name}`
  ].join("\n");
}

function toast(text) {
  const old = $(".toast");
  if (old) old.remove();
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = text;
  document.body.append(el);
  setTimeout(() => el.remove(), 1800);
}

function restore() {
  const saved = localStorage.getItem("geomancy-reading");
  if (!saved) {
    state.chart = makeChart(state.mothers);
    renderManualGrid();
    renderAll();
    return;
  }
  try {
    const parsed = JSON.parse(saved);
    $("#question").value = parsed.question || "";
    $("#houseMethod").value = parsed.houseMethod || "basic";
    $("#includeSentence").checked = parsed.includeSentence !== false;
    state.mothers = parsed.mothers || state.mothers;
    state.chart = makeChart(state.mothers);
    renderManualGrid();
    renderAll();
  } catch {
    cast();
  }
}

function detailFromTarget(target) {
  return {
    kind: target.dataset.kind,
    pattern: target.dataset.pattern,
    title: target.dataset.title,
    houseIndex: target.dataset.houseIndex === "" ? null : Number(target.dataset.houseIndex)
  };
}

function bindEvents() {
  $$(".segmented").forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      setPressed($$(".segmented"), button);
      $("#manualGrid").hidden = state.mode !== "manual";
    });
  });

  $$(".guide-mode").forEach((button) => {
    button.addEventListener("click", () => {
      state.questionMode = button.dataset.questionMode;
      setPressed($$(".guide-mode"), button);
      renderQuestionGuide();
      if (state.chart) renderNotes();
    });
  });

  $$(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      setPressed($$(".tab"), button);
      $$(".view").forEach((view) => view.classList.toggle("active", view.id === `${button.dataset.view}View`));
    });
  });

  $(".reading-area").addEventListener("click", (event) => {
    const cell = event.target.closest("[data-pattern][data-title]");
    if (!cell) return;
    openDetail(detailFromTarget(cell));
  });

  $("#manualGrid").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-mother]");
    if (!button) return;
    const motherIndex = Number(button.dataset.mother);
    const rowIndex = Number(button.dataset.row);
    const rows = state.mothers[motherIndex].split("");
    rows[rowIndex] = rows[rowIndex] === "1" ? "2" : "1";
    state.mothers[motherIndex] = rows.join("");
    renderManualGrid();
    state.chart = makeChart(state.mothers);
    renderAll();
  });

  $("#castButton").addEventListener("click", cast);
  $("#clearButton").addEventListener("click", () => {
    $("#question").value = "";
    localStorage.removeItem("geomancy-reading");
    state.mothers = ["1111", "2222", "1222", "2211"];
    cast();
    closeDetail();
    toast("已清空并重新起卦");
  });
  $("#copyButton").addEventListener("click", async () => {
    const text = readingText();
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const temp = document.createElement("textarea");
      temp.value = text;
      temp.setAttribute("readonly", "");
      temp.style.position = "fixed";
      temp.style.opacity = "0";
      document.body.append(temp);
      temp.select();
      document.execCommand("copy");
      temp.remove();
    }
    toast("结果已复制");
  });
  $("#houseMethod").addEventListener("change", renderAll);
  $("#includeSentence").addEventListener("change", renderAll);
  $("#question").addEventListener("input", () => state.chart && renderAll());
  $("#themeToggle").addEventListener("click", () => {
    const enabled = document.documentElement.classList.toggle("light");
    localStorage.setItem("geomancy-theme", enabled ? "dark" : "light");
  });
  $("#closeDetailButton").addEventListener("click", closeDetail);
  $("#hideSystemButton").addEventListener("click", () => {
    state.systemHidden = !state.systemHidden;
    renderDetail();
  });
  $("#customMeaning").addEventListener("input", (event) => {
    if (!state.detail) return;
    saveCustomMeaning(state.detail, event.target.value);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !$("#detailPanel").hidden) {
      closeDetail();
    }
  });
}

bindEvents();
if (localStorage.getItem("geomancy-theme") === "dark") {
  document.documentElement.classList.add("light");
}
setPressed($$(".segmented"), $(".segmented.active"));
setPressed($$(".guide-mode"), $(".guide-mode.active"));
setPressed($$(".tab"), $(".tab.active"));
renderQuestionGuide();
restore();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("./sw.js");
}
