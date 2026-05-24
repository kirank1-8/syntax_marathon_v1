// ===============================
// SYNTAX MARATHON ULTIMATE
// ADVANCED VERSION
// ===============================

// ---------- SNIPPETS ----------

const quotes = {

  python: {
    easy: [
      `print("Hello World")`,
      `x = 10\nprint(x)`,
      `for i in range(5):\n    print(i)`
    ],

    medium: [
      `def add(a, b):\n    return a + b`,
      `nums = [1,2,3,4]\nevens = [n for n in nums if n % 2 == 0]`
    ],

    hard: [
      `class Stack:\n    def __init__(self):\n        self.items = []\n\n    def push(self, item):\n        self.items.append(item)`,
      `def binary_search(arr, target):\n    low, high = 0, len(arr)-1\n\n    while low <= high:\n        mid = (low + high) // 2\n\n        if arr[mid] == target:\n            return mid`
    ]
  },

  javascript: {
    easy: [
      `console.log("Hello World");`,
      `let x = 5;\nconsole.log(x);`
    ],

    medium: [
      `const add = (a, b) => a + b;`,
      `const nums = [1,2,3];\nnums.forEach(n => console.log(n));`
    ],

    hard: [
      `class User {\n  constructor(name){\n    this.name = name;\n  }\n}`,
      `const debounce = (fn, delay) => {\n  let timer;\n\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n};`
    ]
  },

  java: {
    easy: [
      `System.out.println("Hello World");`,
      `int x = 10;\nSystem.out.println(x);`
    ],

    medium: [
      `public static int add(int a, int b){\n    return a + b;\n}`,
    ],

    hard: [
      `class Stack<T>{\n    private LinkedList<T> list = new LinkedList<>();\n}`
    ]
  },

  cpp: {
    easy: [
      `cout << "Hello World";`,
      `for(int i=0;i<5;i++){\n  cout << i;\n}`
    ],

    medium: [
      `vector<int> nums = {1,2,3};`,
    ],

    hard: [
      `template<typename T>\nclass Node {\npublic:\n    T data;\n    Node* next;\n};`
    ]
  },

  c: {
    easy: [
      `printf("Hello World");`,
      `int x = 10;\nprintf("%d", x);`
    ],

    medium: [
      `for(int i=0;i<5;i++){\n    printf("%d", i);\n}`
    ],

    hard: [
      `struct Node {\n    int data;\n    struct Node* next;\n};`
    ]
  },

  csharp: {
    easy: [
      `Console.WriteLine("Hello World");`
    ],

    medium: [
      `public int Add(int a, int b)\n{\n    return a + b;\n}`
    ],

    hard: [
      `class Program\n{\n    static void Main(string[] args)\n    {\n        Console.WriteLine("Hello");\n    }\n}`
    ]
  },

  go: {
    easy: [
      `fmt.Println("Hello World")`
    ],

    medium: [
      `func add(a int, b int) int {\n    return a + b\n}`
    ],

    hard: [
      `type User struct {\n    Name string\n    Age int\n}`
    ]
  },

  rust: {
    easy: [
      `println!("Hello World");`
    ],

    medium: [
      `fn add(a:i32,b:i32)->i32{\n    a+b\n}`
    ],

    hard: [
      `struct User {\n    name:String,\n    age:u8,\n}`
    ]
  },

  php: {
    easy: [
      `echo "Hello World";`
    ],

    medium: [
      `function add($a, $b){\n    return $a + $b;\n}`
    ],

    hard: [
      `class User {\n    public $name;\n}`
    ]
  },

  swift: {
    easy: [
      `print("Hello World")`
    ],

    medium: [
      `func add(a:Int, b:Int) -> Int {\n    return a + b\n}`
    ],

    hard: [
      `class User {\n    var name:String\n\n    init(name:String){\n        self.name = name\n    }\n}`
    ]
  },

  kotlin: {
    easy: [
      `println("Hello World")`
    ],

    medium: [
      `fun add(a:Int,b:Int):Int{\n    return a+b\n}`
    ],

    hard: [
      `data class User(val name:String,val age:Int)`
    ]
  },

  ruby: {
    easy: [
      `puts "Hello World"`
    ],

    medium: [
      `def add(a,b)\n  a+b\nend`
    ],

    hard: [
      `class User\n  attr_accessor :name\nend`
    ]
  },

  html: {
    easy: [
      `<h1>Hello World</h1>`
    ],

    medium: [
      `<div class="container">\n  <p>Hello</p>\n</div>`
    ],

    hard: [
      `<!DOCTYPE html>\n<html>\n<head>\n<title>Page</title>\n</head>\n<body>\n</body>\n</html>`
    ]
  },

  css: {
    easy: [
      `body {\n  background:black;\n}`
    ],

    medium: [
      `.container {\n  display:flex;\n  justify-content:center;\n}`
    ],

    hard: [
      `@keyframes glow {\n  0% {opacity:0.5;}\n  100% {opacity:1;}\n}`
    ]
  },

  sql: {
    easy: [
      `SELECT * FROM users;`
    ],

    medium: [
      `SELECT name, age\nFROM users\nWHERE age > 18;`
    ],

    hard: [
      `WITH ranked AS (\nSELECT *, ROW_NUMBER() OVER(PARTITION BY dept) rn\nFROM employees\n)\nSELECT * FROM ranked;`
    ]
  },

  react: {
    easy: [
      `function App(){\n  return <h1>Hello</h1>\n}`
    ],

    medium: [
      `const Button = ({text}) => {\n  return <button>{text}</button>\n}`
    ],

    hard: [
      `const [count,setCount] = useState(0);\n\nuseEffect(()=>{\n  console.log(count);\n},[count]);`
    ]
  },

  typescript: {
    easy: [
      `let name:string = "Kiran";`
    ],

    medium: [
      `function add(a:number,b:number):number{\n  return a+b;\n}`
    ],

    hard: [
      `interface User {\n  name:string;\n  age:number;\n}`
    ]
  },

  bash: {
    easy: [
      `echo "Hello World"`
    ],

    medium: [
      `for file in *.txt; do\n  echo $file\ndone`
    ],

    hard: [
      `#!/bin/bash\nset -e\n\nif [ -f file.txt ]; then\n  echo "Exists"\nfi`
    ]
  },

  leetcode: {
    easy: [
      `def twoSum(nums, target):\n    seen = {}\n\n    for i, n in enumerate(nums):\n        if target - n in seen:\n            return [seen[target-n], i]`
    ],

    medium: [
      `def isPalindrome(x):\n    return str(x) == str(x)[::-1]`
    ],

    hard: [
      `def trap(height):\n    left, right = 0, len(height)-1\n    water = 0`
    ]
  }

};

// ---------- DOM ----------

const quoteElement = document.getElementById("quote");
const input = document.getElementById("input");

const timerElement = document.getElementById("timer");
const wpmElement = document.getElementById("wpm");
const accuracyElement = document.getElementById("accuracy");
const scoreElement = document.getElementById("score");
const comboElement = document.getElementById("combo");

const difficulty = document.getElementById("difficulty");
const language = document.getElementById("language");

const resultBox = document.getElementById("resultBox");
const finalScore = document.getElementById("finalScore");

// ---------- STATE ----------

let currentQuote = "";

let timer = 60;
let totalTime = 60;

let started = false;
let paused = false;

let score = 0;
let combo = 0;
let maxCombo = 0;

let mistakes = 0;
let totalTyped = 0;

let startTime = null;
let interval = null;

let suddenDeath = false;
let ghostMode = false;
let zenMode = false;
let doubleScore = false;

// ---------- CHART ----------

const chart = new Chart(
  document.getElementById("progressChart"),
  {
    type: "line",

    data: {
      labels: [],
      datasets: [
        {
          label: "WPM",
          data: [],
          borderColor: "#c084fc",
          backgroundColor: "rgba(192,132,252,0.2)",
          tension: 0.4,
          fill: true
        }
      ]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }
);

// ---------- FUNCTIONS ----------

function getSnippet(){

  const lang = language.value;
  const diff = difficulty.value;

  const pool = quotes[lang][diff];

  return pool[
    Math.floor(Math.random() * pool.length)
  ];
}

function loadQuote(){

  currentQuote = getSnippet();

  quoteElement.innerHTML = "";

  currentQuote.split("").forEach((char,index)=>{

    const span = document.createElement("span");

    span.innerText = char;

    span.classList.add("pending");

    if(index === 0){
      span.classList.add("current-char");
    }

    quoteElement.appendChild(span);
  });

  input.value = "";

  updateFilename();

  updateCharCount();
}

function updateFilename(){

  const map = {
    python:"challenge.py",
    javascript:"challenge.js",
    java:"Main.java",
    cpp:"main.cpp",
    c:"main.c",
    csharp:"Program.cs",
    go:"main.go",
    rust:"main.rs",
    php:"index.php",
    swift:"main.swift",
    kotlin:"Main.kt",
    ruby:"main.rb",
    html:"index.html",
    css:"style.css",
    react:"App.jsx",
    sql:"query.sql",
    typescript:"main.ts",
    bash:"script.sh",
    leetcode:"solution.py"
  };

  document.getElementById("editorFilename").innerText =
    map[language.value];

  document.getElementById("langDisplay").innerText =
    language.value;
}

function updateCharCount(){

  document.getElementById("charCount").innerText =
    `${input.value.length} / ${currentQuote.length} chars`;
}

function startGame(){

  if(started) return;

  started = true;

  paused = false;

  score = 0;
  combo = 0;
  maxCombo = 0;

  mistakes = 0;
  totalTyped = 0;

  startTime = null;

  timer = totalTime;

  input.disabled = false;

  input.focus();

  resultBox.style.display = "none";

  loadQuote();

  clearInterval(interval);

  interval = setInterval(()=>{

    if(paused) return;

    if(!zenMode){

      timer--;

      timerElement.innerText = timer;

      if(timer <= 0){
        endGame();
      }
    }

    updateStats();

  },1000);
}

function pauseGame(){

  if(!started) return;

  paused = !paused;

  input.disabled = paused;

  document.getElementById("pauseBtn").innerText =
    paused ? "▶ Resume" : "⏸ Pause";

  if(!paused){
    input.focus();
  }
}

function restartGame(){

  clearInterval(interval);

  started = false;
  paused = false;

  timer = totalTime;

  score = 0;
  combo = 0;
  maxCombo = 0;

  mistakes = 0;
  totalTyped = 0;

  timerElement.innerText = timer;

  wpmElement.innerText = "0";

  accuracyElement.innerText = "100%";

  scoreElement.innerText = "0";

  comboElement.innerText = "x0";

  input.disabled = true;

  input.value = "";

  quoteElement.innerHTML =
    `<span style="color:#94a3b8;">Press Start to begin...</span>`;

  resultBox.style.display = "none";

  chart.data.labels = [];
  chart.data.datasets[0].data = [];
  chart.update();
}

function endGame(){

  clearInterval(interval);

  started = false;

  input.disabled = true;

  finalScore.innerHTML = `

    <div class="result-grid">

      <div class="result-stat">
        <span class="rv">${wpmElement.innerText}</span>
        <span class="rk">WPM</span>
      </div>

      <div class="result-stat">
        <span class="rv">${accuracyElement.innerText}</span>
        <span class="rk">ACCURACY</span>
      </div>

      <div class="result-stat">
        <span class="rv">${score}</span>
        <span class="rk">SCORE</span>
      </div>

      <div class="result-stat">
        <span class="rv">x${maxCombo}</span>
        <span class="rk">MAX COMBO</span>
      </div>

    </div>

  `;

  resultBox.style.display = "block";

  saveLeaderboard();
}

// ---------- INPUT ----------

input.addEventListener("input",()=>{

  if(!started || paused) return;

  if(!startTime){
    startTime = Date.now();
  }

  const typed = input.value;

  const chars =
    quoteElement.querySelectorAll("span");

  let correct = true;

  mistakes = 0;

  chars.forEach((char,index)=>{

    const typedChar = typed[index];

    char.classList.remove(
      "correct",
      "incorrect",
      "current-char",
      "pending"
    );

    if(typedChar == null){

      char.classList.add("pending");

      if(index === typed.length){
        char.classList.add("current-char");
      }

      correct = false;
    }

    else if(typedChar === char.innerText){

      char.classList.add("correct");
    }

    else{

      char.classList.add("incorrect");

      mistakes++;

      correct = false;
    }

  });

  totalTyped = typed.length;

  updateStats();

  updateProgress();

  updateCharCount();

  if(mistakes > 0){

    combo = 0;

    if(suddenDeath){
      endGame();
    }

  }else{

    if(typed.length > 0){
      combo++;
    }

    if(combo > maxCombo){
      maxCombo = combo;
    }
  }

  comboElement.innerText = `x${combo}`;

  // COMPLETE

  if(correct && typed.length === currentQuote.length){

    let points = 100 + combo * 10;

    if(doubleScore){
      points *= 2;
    }

    score += points;

    scoreElement.innerText = score;

    showToast(
      "🔥 SNIPPET COMPLETE",
      `+${points} points`
    );

    chart.data.labels.push(
      chart.data.labels.length + 1
    );

    chart.data.datasets[0].data.push(
      parseInt(wpmElement.innerText)
    );

    chart.update();

    loadQuote();
  }

});

// ---------- STATS ----------

function updateStats(){

  const elapsed =
    startTime
    ? (Date.now() - startTime) / 60000
    : 0;

  const wpm =
    elapsed > 0
    ? Math.round((totalTyped / 5) / elapsed)
    : 0;

  const accuracy =
    totalTyped > 0
    ? Math.max(
        0,
        Math.round(
          ((totalTyped - mistakes) / totalTyped) * 100
        )
      )
    : 100;

  wpmElement.innerText = wpm;

  accuracyElement.innerText = accuracy + "%";
}

function updateProgress(){

  const progress =
    (input.value.length / currentQuote.length) * 100;

  document.querySelector(".progress-bar").style.width =
    progress + "%";
}

// ---------- TOAST ----------

function showToast(title,msg){

  const toast = document.getElementById("toast");

  document.getElementById("toastTitle").innerText =
    title;

  document.getElementById("toastMsg").innerText =
    msg;

  toast.classList.add("show");

  clearTimeout(toast.timer);

  toast.timer = setTimeout(()=>{

    toast.classList.remove("show");

  },3000);
}

// ---------- LEADERBOARD ----------

function saveLeaderboard(){

  let lb =
    JSON.parse(
      localStorage.getItem("syntaxLeaderboard")
    ) || [];

  lb.push({
    score,
    wpm:wpmElement.innerText,
    language:language.value
  });

  lb.sort((a,b)=>b.score - a.score);

  lb = lb.slice(0,10);

  localStorage.setItem(
    "syntaxLeaderboard",
    JSON.stringify(lb)
  );

  renderLeaderboard();
}

function renderLeaderboard(){

  const list =
    document.getElementById("leaderboardList");

  let lb =
    JSON.parse(
      localStorage.getItem("syntaxLeaderboard")
    ) || [];

  if(lb.length === 0){

    list.innerHTML =
      `<li style="padding:15px;color:#94a3b8;">
        No scores yet
      </li>`;

    return;
  }

  list.innerHTML = "";

  lb.forEach((item,index)=>{

    const li = document.createElement("li");

    li.className = "lb-item";

    li.innerHTML = `
      <span class="lb-rank">
        ${index + 1}
      </span>

      <span class="lb-lang">
        ${item.language}
      </span>

      <span class="lb-wpm">
        ${item.wpm} WPM
      </span>

      <span class="lb-score">
        ${item.score} pts
      </span>
    `;

    list.appendChild(li);

  });
}

// ---------- POWERUPS ----------

document
.getElementById("freezeBtn")
.addEventListener("click",()=>{

  if(!started) return;

  timer += 10;

  timerElement.innerText = timer;

  showToast(
    "❄ FREEZE",
    "+10 seconds added"
  );

});

document
.getElementById("doubleBtn")
.addEventListener("click",()=>{

  if(!started) return;

  doubleScore = true;

  showToast(
    "⚡ DOUBLE SCORE",
    "2x score for 15 seconds"
  );

  setTimeout(()=>{

    doubleScore = false;

  },15000);

});

document
.getElementById("skipBtn")
.addEventListener("click",()=>{

  if(!started) return;

  loadQuote();

  score = Math.max(0, score - 25);

  scoreElement.innerText = score;

  showToast(
    "⏭ SKIPPED",
    "-25 points"
  );

});

document
.getElementById("hintBtn")
.addEventListener("click",()=>{

  if(!started) return;

  const next =
    currentQuote.slice(
      input.value.length,
      input.value.length + 5
    );

  showToast(
    "💡 NEXT CHARS",
    next
  );

});

// ---------- BUTTONS ----------

document
.getElementById("startBtn")
.addEventListener("click",startGame);

document
.getElementById("pauseBtn")
.addEventListener("click",pauseGame);

document
.getElementById("restartBtn")
.addEventListener("click",restartGame);

document
.getElementById("themeBtn")
.addEventListener("click",()=>{

  document.body.classList.toggle(
    "light-theme"
  );

});

document
.getElementById("ghostBtn")
.addEventListener("click",()=>{

  ghostMode = !ghostMode;

  document
  .getElementById("ghostBtn")
  .classList.toggle("active-purple");

  if(ghostMode){

    quoteElement.style.opacity = "0.15";

    showToast(
      "👻 GHOST MODE",
      "Code faded"
    );

  }else{

    quoteElement.style.opacity = "1";
  }

});

document
.getElementById("suddenDeathBtn")
.addEventListener("click",()=>{

  suddenDeath = !suddenDeath;

  const btn =
    document.getElementById("suddenDeathBtn");

  btn.innerText =
    suddenDeath
    ? "💀 Sudden Death ON"
    : "💀 Sudden Death OFF";

  btn.classList.toggle(
    "active-danger",
    suddenDeath
  );

});

// ---------- TIME BUTTONS ----------

document
.querySelectorAll(".time-btn")
.forEach(btn=>{

  btn.addEventListener("click",()=>{

    document
    .querySelectorAll(".time-btn")
    .forEach(b=>b.classList.remove("active"));

    btn.classList.add("active");

    totalTime =
      parseInt(btn.dataset.time);

    timer = totalTime;

    timerElement.innerText = timer;

  });

});

// ---------- MODE ----------

document
.getElementById("modeSelect")
.addEventListener("change",()=>{

  zenMode =
    document.getElementById("modeSelect").value
    === "zen";

  if(zenMode){

    timerElement.innerText = "∞";
  }else{

    timerElement.innerText = totalTime;
  }

});

// ---------- INIT ----------

renderLeaderboard();

quoteElement.innerHTML =
  `<span style="color:#94a3b8;">
    Press Start to begin...
  </span>`;