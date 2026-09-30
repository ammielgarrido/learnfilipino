const lessons = [
  {
    id: "emotions-1", level: 1, icon: "😊", topic: "feelings", title: "Emotions and feelings",
    prompt: "How do you feel?", phrase: "Kumusta ang pakiramdam mo?",
    words: [
      ["Happy", "Masaya", "Masaya ako.", "😊"], ["Sad", "Malungkot", "Malungkot ako.", "😢"],
      ["Angry", "Galit", "Galit ako.", "😠"], ["Scared", "Takot", "Takot ako.", "😨"],
      ["Tired", "Pagod", "Pagod ako.", "😴"], ["Surprised", "Nagulat", "Nagulat ako.", "😲"],
      ["Shy", "Nahihiya", "Nahihiya ako.", "😳"], ["Hungry", "Gutom", "Gutom ako.", "🍽️"],
      ["Thirsty", "Uhaw", "Uhaw ako.", "🥤"], ["Excited", "Sabik", "Sabik ako.", "🤩"]
    ]
  },
  {
    id: "home-1", level: 1, icon: "🏠", topic: "home words", title: "Items around the house",
    prompt: "What is inside the house?", phrase: "Ano ang nasa loob ng bahay?",
    words: [
      ["House", "Bahay", "Ito ang bahay.", "🏠"], ["Table", "Mesa", "Ito ang mesa.", "", "assets/table.png"],
      ["Chair", "Upuan", "Ito ang upuan.", "🪑"], ["Door", "Pinto", "Ito ang pinto.", "🚪"],
      ["Window", "Bintana", "Ito ang bintana.", "🪟"], ["Bed", "Kama", "Ito ang kama.", "🛏️"],
      ["Lamp", "Lampara", "Ito ang lampara.", "💡"], ["Spoon", "Kutsara", "Ito ang kutsara.", "🥄"],
      ["Plate", "Plato", "Ito ang plato.", "🍽️"], ["Cup", "Tasa", "Ito ang tasa.", "☕"]
    ]
  },
  {
    id: "places-1", level: 2, icon: "🗺️", topic: "places", title: "Places we visit",
    prompt: "Where are we going?", phrase: "Saan tayo pupunta?",
    words: [
      ["School", "Paaralan", "Pupunta ako sa paaralan.", "🏫"], ["Park", "Parke", "Pupunta ako sa parke.", "🌳"],
      ["Market", "Palengke", "Pupunta ako sa palengke.", "🧺"], ["Hospital", "Ospital", "Pupunta ako sa ospital.", "🏥"],
      ["Church", "Simbahan", "Pupunta ako sa simbahan.", "⛪"], ["Store", "Tindahan", "Pupunta ako sa tindahan.", "🏪"],
      ["Library", "Aklatan", "Pupunta ako sa aklatan.", "📚"], ["Beach", "Tabing-dagat", "Pupunta ako sa tabing-dagat.", "🏖️"],
      ["Playground", "Palaruan", "Pupunta ako sa palaruan.", "🛝"], ["Farm", "Bukid", "Pupunta ako sa bukid.", "🌾"]
    ]
  },
  {
    id: "professions-1", level: 2, icon: "👩‍🏫", topic: "professions", title: "People and professions",
    prompt: "What is their job?", phrase: "Ano ang kanilang trabaho?",
    words: [
      ["Teacher", "Guro", "Siya ay isang guro.", "👩‍🏫"], ["Doctor", "Doktor", "Siya ay isang doktor.", "🧑‍⚕️"],
      ["Nurse", "Nars", "Siya ay isang nars.", "👩‍⚕️"], ["Police officer", "Pulis", "Siya ay isang pulis.", "👮"],
      ["Firefighter", "Bumbero", "Siya ay isang bumbero.", "🧑‍🚒"], ["Farmer", "Magsasaka", "Siya ay isang magsasaka.", "🧑‍🌾"],
      ["Cook", "Tagapagluto", "Siya ay isang tagapagluto.", "🧑‍🍳"], ["Driver", "Drayber", "Siya ay isang drayber.", "🚌"],
      ["Carpenter", "Karpintero", "Siya ay isang karpintero.", "🔨"], ["Dentist", "Dentista", "Siya ay isang dentista.", "🦷"]
    ]
  },
  {
    id: "family-1", level: 3, icon: "👨‍👩‍👧‍👦", topic: "family members", title: "Family members", reverseQuiz: true,
    prompt: "Who is in your family?", phrase: "Sino ang nasa pamilya mo?",
    words: [
      ["Family", "Pamilya", "Ito ang pamilya ko.", "👨‍👩‍👧‍👦"], ["Mother", "Nanay", "Siya ang nanay ko.", "👩"],
      ["Father", "Tatay", "Siya ang tatay ko.", "👨"], ["Older sister", "Ate", "Siya ang ate ko.", "👧"],
      ["Older brother", "Kuya", "Siya ang kuya ko.", "👦"], ["Grandmother", "Lola", "Siya ang lola ko.", "👵"],
      ["Grandfather", "Lolo", "Siya ang lolo ko.", "👴"], ["Child", "Anak", "Siya ang anak ko.", "🧒"],
      ["Aunt", "Tita", "Siya ang tita ko.", "👩‍🦱"], ["Uncle", "Tito", "Siya ang tito ko.", "👨‍🦱"]
    ]
  },
  {
    id: "food-1", level: 3, icon: "🍲", topic: "food and drinks", title: "Food and drinks", reverseQuiz: true,
    prompt: "What would you like to eat?", phrase: "Ano ang gusto mong kainin?",
    words: [
      ["Rice", "Kanin", "Gusto ko ng kanin.", "🍚"], ["Bread", "Tinapay", "Gusto ko ng tinapay.", "🍞"],
      ["Fish", "Isda", "Gusto ko ng isda.", "🐟"], ["Chicken", "Manok", "Gusto ko ng manok.", "🍗"],
      ["Egg", "Itlog", "Gusto ko ng itlog.", "🥚"], ["Fruit", "Prutas", "Gusto ko ng prutas.", "🍎"],
      ["Vegetable", "Gulay", "Gusto ko ng gulay.", "🥬"], ["Water", "Tubig", "Gusto ko ng tubig.", "💧"],
      ["Milk", "Gatas", "Gusto ko ng gatas.", "🥛"], ["Juice", "Katas", "Gusto ko ng katas.", "🧃"]
    ]
  }
  , {
    id: "phrases-1", level: 4, icon: "💬", topic: "useful phrases", title: "Naming things and saying what you want", phraseLesson: true,
    prompt: "What would you like?", phrase: "Ano ang gusto mo?",
    words: [
      ["This is the house.", "Ito ang bahay.", "Ito ang bahay.", "🏠"],
      ["This is the table.", "Ito ang mesa.", "Ito ang mesa.", "", "assets/table.png"],
      ["This is the chair.", "Ito ang upuan.", "Ito ang upuan.", "🪑"],
      ["This is the spoon.", "Ito ang kutsara.", "Ito ang kutsara.", "🥄"],
      ["This is the plate.", "Ito ang plato.", "Ito ang plato.", "🍽️"],
      ["I want rice.", "Gusto ko ng kanin.", "Gusto ko ng kanin.", "🍚"],
      ["I want bread.", "Gusto ko ng tinapay.", "Gusto ko ng tinapay.", "🍞"],
      ["I want water.", "Gusto ko ng tubig.", "Gusto ko ng tubig.", "💧"],
      ["I want milk.", "Gusto ko ng gatas.", "Gusto ko ng gatas.", "🥛"],
      ["I want fruit.", "Gusto ko ng prutas.", "Gusto ko ng prutas.", "🍎"]
    ],
    patterns: "Ito ang… = This is the… · Gusto ko ng… = I want…"
  },
  {
    id: "phrases-2", level: 4, icon: "🧭", topic: "asking and going", title: "Finding things and going places", phraseLesson: true,
    prompt: "Where is the table?", phrase: "Nasaan ang mesa?",
    words: [
      ["Where is the house?", "Nasaan ang bahay?", "Nasaan ang bahay?", "🏠"],
      ["Where is the table?", "Nasaan ang mesa?", "Nasaan ang mesa?", "", "assets/table.png"],
      ["Where is the chair?", "Nasaan ang upuan?", "Nasaan ang upuan?", "🪑"],
      ["Where is the spoon?", "Nasaan ang kutsara?", "Nasaan ang kutsara?", "🥄"],
      ["Where is the plate?", "Nasaan ang plato?", "Nasaan ang plato?", "🍽️"],
      ["I will go to school.", "Pupunta ako sa paaralan.", "Pupunta ako sa paaralan.", "🏫"],
      ["I will go to the park.", "Pupunta ako sa parke.", "Pupunta ako sa parke.", "🌳"],
      ["I will go to the market.", "Pupunta ako sa palengke.", "Pupunta ako sa palengke.", "🧺"],
      ["I will go to the store.", "Pupunta ako sa tindahan.", "Pupunta ako sa tindahan.", "🏪"],
      ["I will go to the beach.", "Pupunta ako sa tabing-dagat.", "Pupunta ako sa tabing-dagat.", "🏖️"]
    ],
    patterns: "Nasaan ang…? = Where is the…? · Pupunta ako sa… = I will go to…"
  }
].map(lesson => ({...lesson, words: lesson.words.map(([english, filipino, phrase, emoji, image]) => ({english, filipino, phrase, emoji, image, phraseLesson: !!lesson.phraseLesson}))}));

const checkpoints = [
  {id: "checkpoint-1", title: "Level 1 Checkpoint", icon: "🏅", lessonCount: 2, detail: "All 20 words from Lessons 1–2"},
  {id: "checkpoint-2", title: "Level 2 Checkpoint", icon: "🏆", lessonCount: 4, detail: "All 40 words from Lessons 1–4"},
  {id: "checkpoint-3", title: "Level 3 Checkpoint", icon: "🌟", lessonCount: 6, detail: "All 60 words from Lessons 1–6", mixedDirections: true},
  {id: "checkpoint-4", title: "Level 4 Checkpoint", icon: "💬", lessonCount: 8, detail: "All 60 words and 20 phrases from Lessons 1–8", mixedDirections: true}
];

const storageKey = "learn-filipino:course-progress-v2";
const reviewMode = new URLSearchParams(window.location.search).get("review") === "1" || window.location.hash === "#review";
let progress = loadProgress();
let currentLessonIndex = Math.min(progress.currentLesson || 0, lessons.length - 1);
let questions = [], questionIndex = 0, score = 0, mistakes = [];
let activeQuiz = {type: "lesson", index: currentLessonIndex};
let answerTimer;

const wordGrid = document.querySelector("#wordGrid");
const courseGrid = document.querySelector("#courseGrid");
const checkpointGrid = document.querySelector("#checkpointGrid");
const progressText = document.querySelector("#progressText");
const quizSection = document.querySelector("#quiz");
const quizContent = document.querySelector("#quizContent");
const results = document.querySelector("#results");
const answerGrid = document.querySelector("#answerGrid");
const feedback = document.querySelector("#feedback");

function blankLessonProgress() { return {learned: [], bestScore: 0, completed: false}; }
function blankCheckpointProgress() { return {bestScore: 0, completed: false}; }

function loadProgress() {
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(storageKey) || "{}"); } catch (_) { saved = {}; }
  const data = {currentLesson: saved.currentLesson || 0, lessons: saved.lessons || {}, checkpoints: saved.checkpoints || {}};
  lessons.forEach(lesson => { if (!data.lessons[lesson.id]) data.lessons[lesson.id] = blankLessonProgress(); });
  checkpoints.forEach(checkpoint => { if (!data.checkpoints[checkpoint.id]) data.checkpoints[checkpoint.id] = blankCheckpointProgress(); });

  // Keep progress from the original one-lesson version.
  try {
    const old = JSON.parse(localStorage.getItem("learn-filipino:emotions-1") || "{}");
    if (old.learned?.length && !data.lessons["emotions-1"].learned.length) data.lessons["emotions-1"].learned = old.learned;
    if (old.bestScore > data.lessons["emotions-1"].bestScore) data.lessons["emotions-1"].bestScore = old.bestScore;
    if (old.bestScore >= 8) data.lessons["emotions-1"].completed = true;
  } catch (_) { /* Ignore damaged old progress. */ }
  return data;
}

function saveProgress() {
  if (reviewMode) return;
  progress.currentLesson = currentLessonIndex;
  localStorage.setItem(storageKey, JSON.stringify(progress));
}

function lessonProgress(index = currentLessonIndex) { return progress.lessons[lessons[index].id]; }
function isUnlocked(index) {
  if (reviewMode) return true;
  if (index === 0) return true;
  if (!progress.lessons[lessons[index - 1].id].completed) return false;
  const checkpointBeforeLevel = checkpoints.find(checkpoint => checkpoint.lessonCount === index);
  return !checkpointBeforeLevel || progress.checkpoints[checkpointBeforeLevel.id].completed;
}
function checkpointWords(checkpoint) { return lessons.slice(0, checkpoint.lessonCount).flatMap(lesson => lesson.words); }
function isCheckpointUnlocked(checkpoint) { return reviewMode || lessons.slice(0, checkpoint.lessonCount).every(lesson => progress.lessons[lesson.id].completed); }

function speak(text, slow = false) {
  if (!("speechSynthesis" in window)) { alert("Audio is not supported in this browser yet."); return; }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "fil-PH";
  utterance.rate = slow ? .65 : .88;
  const voice = window.speechSynthesis.getVoices().find(item => /^(fil|tl)(-|_)/i.test(item.lang));
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}

function updateHeaderProgress() {
  const completed = lessons.filter((_, index) => lessonProgress(index).completed).length;
  progressText.textContent = `${completed} of ${lessons.length} lessons`;
}

function renderCourse() {
  courseGrid.innerHTML = "";
  lessons.forEach((lesson, index) => {
    const saved = lessonProgress(index);
    const unlocked = isUnlocked(index);
    const card = document.createElement("button");
    card.type = "button";
    card.disabled = !unlocked;
    card.className = `course-card${index === currentLessonIndex ? " active" : ""}${saved.completed ? " complete" : ""}`;
    const requiredCheckpoint = checkpoints.find(checkpoint => checkpoint.lessonCount === index);
    const needsCheckpoint = requiredCheckpoint && lessonProgress(index - 1).completed && !progress.checkpoints[requiredCheckpoint.id].completed;
    const status = !unlocked ? needsCheckpoint ? `🔒 Pass the ${requiredCheckpoint.title}` : "🔒 Pass the previous quiz" : saved.completed ? `Completed · Best ${saved.bestScore}/10` : saved.bestScore ? `Best score ${saved.bestScore}/10` : "Ready to learn";
    card.innerHTML = `<span class="course-icon" aria-hidden="true">${lesson.icon}</span><span class="course-number">Level ${lesson.level} · Lesson ${index + 1}</span><span class="course-name">${lesson.title}</span><span class="course-status">${status}</span>`;
    card.addEventListener("click", () => selectLesson(index));
    courseGrid.appendChild(card);
  });
}

function renderCheckpoints() {
  checkpointGrid.innerHTML = "";
  checkpoints.forEach((checkpoint, index) => {
    const saved = progress.checkpoints[checkpoint.id];
    const unlocked = isCheckpointUnlocked(checkpoint);
    const total = checkpointWords(checkpoint).length;
    const card = document.createElement("button");
    card.type = "button"; card.disabled = !unlocked;
    card.className = `checkpoint-card${saved.completed ? " complete" : ""}`;
    const status = !unlocked ? "🔒 Complete the lessons above" : saved.completed ? `Completed · Best ${saved.bestScore}/${total}` : saved.bestScore ? `Best score ${saved.bestScore}/${total}` : "Ready for review";
    card.innerHTML = `<span class="checkpoint-icon" aria-hidden="true">${checkpoint.icon}</span><span class="checkpoint-copy"><span class="checkpoint-name">${checkpoint.title}</span><span class="checkpoint-detail">${checkpoint.detail}<br>${status}</span></span>`;
    card.addEventListener("click", () => startCheckpoint(index));
    checkpointGrid.appendChild(card);
  });
}

function renderLesson() {
  const lesson = lessons[currentLessonIndex];
  const saved = lessonProgress();
  document.querySelector("#heroEyebrow").textContent = `Level ${lesson.level} · Lesson ${currentLessonIndex + 1}`;
  document.querySelector("#heroTopic").textContent = `${lesson.topic}.`;
  document.querySelector(".hero-emoji").textContent = lesson.icon;
  document.querySelector("#heroPrompt").textContent = lesson.prompt;
  document.querySelector("#heroPhrase").textContent = lesson.phrase;
  document.querySelector("#lessonTitle").textContent = lesson.title;
  document.querySelector("#lessonLabel").textContent = `${lesson.phraseLesson ? "Ten useful phrases" : "Ten new words"} · Best quiz ${saved.bestScore}/10`;
  document.querySelector("#patternNote").textContent = lesson.patterns || "";
  document.querySelector("#patternNote").classList.toggle("hidden", !lesson.patterns);
  wordGrid.innerHTML = "";
  lesson.words.forEach((word, index) => {
    const card = document.createElement("article");
    card.className = `word-card${saved.learned.includes(index) ? " learned" : ""}`;
    card.tabIndex = 0;
    card.setAttribute("aria-label", `${word.english}: ${word.filipino}. Mark as practiced.`);
    const visual = word.image ? `<img class="word-image" src="${word.image}" alt="">` : `<span class="word-emoji" aria-hidden="true">${word.emoji}</span>`;
    card.innerHTML = `${visual}<span class="word-english">${word.english}</span><span class="word-filipino" lang="fil">${word.filipino}</span><button class="sound-button" type="button" aria-label="Hear ${word.filipino}"><span aria-hidden="true">🔊</span> Hear it</button>`;
    const mark = () => {
      if (!saved.learned.includes(index)) saved.learned.push(index);
      card.classList.add("learned"); saveProgress();
    };
    card.addEventListener("click", event => { if (!event.target.closest(".sound-button")) mark(); });
    card.addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); mark(); } });
    card.querySelector(".sound-button").addEventListener("click", () => { mark(); speak(word.phrase); });
    wordGrid.appendChild(card);
  });
  updateHeaderProgress();
  renderCourse();
  renderCheckpoints();
}

function selectLesson(index) {
  if (!isUnlocked(index)) return;
  window.clearTimeout(answerTimer);
  currentLessonIndex = index; saveProgress();
  quizSection.classList.add("hidden");
  renderLesson();
  document.querySelector("#lesson").scrollIntoView({behavior: "smooth", block: "start"});
}

function shuffle(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
function phraseTokens(word) { return word.filipino.replace(/[.?]$/u, "").split(" "); }
function makeQuestions(words, directionMode = "forward") {
  const ordered = shuffle(words);
  let phraseIndex = 0;
  return ordered.map((word, index) => {
    if (word.phraseLesson) {
      const type = phraseIndex++ % 2 ? "build" : "missing";
      const tokens = phraseTokens(word);
      const missingIndex = tokens.length - 1;
      const distractors = [...new Set(words.filter(candidate => candidate.phraseLesson && candidate !== word)
        .map(candidate => phraseTokens(candidate).at(-1)))].filter(token => token !== tokens[missingIndex]);
      return {word, type, tokens, missingIndex,
        options: type === "missing" ? shuffle([tokens[missingIndex], ...shuffle(distractors).slice(0, 3)]) : shuffle(tokens.map((token, id) => ({token, id})))};
    }
    const vocabulary = words.filter(candidate => !candidate.phraseLesson);
    return {word, type: "choice",
      direction: directionMode === "mixed" ? (index % 2 ? "reverse" : "forward") : directionMode,
      options: shuffle([word, ...shuffle(vocabulary.filter(candidate => candidate !== word)).slice(0, 3)])};
  });
}

function showQuestion() {
  const current = questions[questionIndex];
  document.querySelector("#questionNumber").textContent = `Question ${questionIndex + 1} of ${questions.length}`;
  document.querySelector("#scoreText").textContent = `Score: ${score}`;
  document.querySelector("#quizProgressBar").style.width = `${((questionIndex + 1) / questions.length) * 100}%`;
  const quizVisual = document.querySelector("#quizEmoji");
  quizVisual.innerHTML = current.word.image ? `<img src="${current.word.image}" alt="">` : current.word.emoji;
  const reverse = current.direction === "reverse";
  document.querySelector("#quizLabel").textContent = activeQuiz.type === "checkpoint" ? `${checkpoints[activeQuiz.index].title} · Cumulative review` : "English ↔ Filipino challenge";
  document.querySelector("#quizTitle").textContent = reverse ? `What does “${current.word.filipino}” mean?` : `Which word means “${current.word.english}”?`;
  feedback.textContent = ""; feedback.className = "feedback"; answerGrid.innerHTML = "";
  if (current.type === "missing" || current.type === "build") {
    renderPhraseQuestion(current);
    return;
  }
  current.options.forEach(option => {
    const button = document.createElement("button");
    button.className = "answer-button"; button.type = "button"; button.lang = reverse ? "en" : "fil"; button.textContent = reverse ? option.english : option.filipino;
    button.addEventListener("click", () => checkAnswer(button, option, current));
    answerGrid.appendChild(button);
  });
}

function finishAnswer(question, correct, message) {
  if (correct) score += 1;
  else mistakes.push(question.word);
  feedback.textContent = message;
  feedback.classList.add(correct ? "good" : "try");
  speak(question.word.phrase, !correct);
  document.querySelector("#scoreText").textContent = `Score: ${score}`;
  answerTimer = window.setTimeout(() => { questionIndex += 1; questionIndex < questions.length ? showQuestion() : showResults(); }, 2400);
}

function renderPhraseQuestion(question) {
  document.querySelector("#quizLabel").textContent = question.type === "missing" ? "Complete the Filipino phrase" : "Build the Filipino sentence";
  document.querySelector("#quizTitle").textContent = question.word.english;
  const sentence = document.createElement("p");
  sentence.className = "sentence-preview";
  sentence.lang = "fil";
  answerGrid.appendChild(sentence);
  if (question.type === "missing") {
    sentence.textContent = question.tokens.map((token, index) => index === question.missingIndex ? "____" : token).join(" ") + question.word.filipino.slice(-1);
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.type = "button"; button.className = "answer-button"; button.lang = "fil"; button.textContent = option;
      button.addEventListener("click", () => {
        answerGrid.querySelectorAll("button").forEach(item => { item.disabled = true; });
        const correct = option === question.tokens[question.missingIndex];
        button.classList.add(correct ? "correct" : "wrong");
        sentence.textContent = question.word.filipino;
        finishAnswer(question, correct, `${correct ? "Tama!" : "Try this:"} ${question.word.filipino}`);
      });
      answerGrid.appendChild(button);
    });
    return;
  }
  const selected = [];
  const bank = document.createElement("div");
  bank.className = "token-bank";
  answerGrid.appendChild(bank);
  const update = () => {
    sentence.textContent = selected.length ? selected.map(item => item.token).join(" ") : "Tap the words in order.";
    submit.disabled = selected.length !== question.tokens.length;
  };
  question.options.forEach(item => {
    const button = document.createElement("button");
    button.type = "button"; button.className = "answer-button"; button.lang = "fil"; button.textContent = item.token;
    button.addEventListener("click", () => { selected.push({...item, button}); button.disabled = true; update(); });
    bank.appendChild(button);
  });
  const undo = document.createElement("button");
  undo.type = "button"; undo.className = "secondary-button"; undo.textContent = "Undo last word";
  undo.addEventListener("click", () => { const item = selected.pop(); if (item) item.button.disabled = false; update(); });
  const submit = document.createElement("button");
  submit.type = "button"; submit.className = "primary-button"; submit.textContent = "Check sentence"; submit.disabled = true;
  submit.addEventListener("click", () => {
    const correct = selected.map(item => item.token).join(" ") === question.tokens.join(" ");
    answerGrid.querySelectorAll("button").forEach(item => { item.disabled = true; });
    sentence.textContent = question.word.filipino;
    finishAnswer(question, correct, `${correct ? "Tama!" : "Try this:"} ${question.word.filipino}`);
  });
  answerGrid.append(undo, submit);
  update();
}

function checkAnswer(button, selected, question) {
  const correct = question.word;
  const correctLabel = question.direction === "reverse" ? correct.english : correct.filipino;
  const buttons = [...answerGrid.querySelectorAll("button")];
  buttons.forEach(item => { item.disabled = true; });
  if (selected === correct) {
    button.classList.add("correct");
  } else {
    button.classList.add("wrong"); buttons.find(item => item.textContent === correctLabel)?.classList.add("correct");
  }
  finishAnswer(question, selected === correct, `${selected === correct ? "Tama!" : "Almost!"} ${correct.filipino} means ${correct.english}.`);
}

function showResults() {
  quizContent.classList.add("hidden"); results.classList.remove("hidden");
  const isCheckpoint = activeQuiz.type === "checkpoint";
  const total = questions.length;
  const passingScore = Math.ceil(total * .8);
  const passed = score >= passingScore;
  let completedName, nextText = "";
  if (isCheckpoint) {
    const checkpoint = checkpoints[activeQuiz.index];
    const saved = progress.checkpoints[checkpoint.id];
    saved.bestScore = Math.max(saved.bestScore, score);
    if (passed) saved.completed = true;
    completedName = checkpoint.title;
    if (passed && activeQuiz.index < checkpoints.length - 1) nextText = ` Level ${activeQuiz.index + 2} is now unlocked!`;
  } else {
    const lesson = lessons[activeQuiz.index];
    const saved = lessonProgress(activeQuiz.index);
    saved.bestScore = Math.max(saved.bestScore, score);
    if (passed) { saved.completed = true; saved.learned = lesson.words.map((_, index) => index); }
    completedName = lesson.title;
    if (passed) {
      const unlockedCheckpoint = checkpoints.find(checkpoint => checkpoint.lessonCount === currentLessonIndex + 1);
      if (unlockedCheckpoint) nextText = ` The ${unlockedCheckpoint.title} is now unlocked!`;
      else if (currentLessonIndex < lessons.length - 1) nextText = ` Lesson ${currentLessonIndex + 2} is now unlocked!`;
    }
  }
  document.querySelector("#resultBadge").textContent = passed ? "🌟" : "🌱";
  document.querySelector("#resultTitle").textContent = passed ? "Ang galing!" : "You’re growing!";
  document.querySelector("#resultMessage").textContent = passed ? `You scored ${score} out of ${total} and completed ${completedName}.${nextText}` : `You scored ${score} out of ${total}. Review ${mistakes.length} missed answer${mistakes.length === 1 ? "" : "s"} and try again. You need ${passingScore} correct to pass.`;
  saveProgress(); renderLesson();
}

function beginQuiz(words, label, directionMode = "forward") {
  window.clearTimeout(answerTimer);
  questions = makeQuestions(words, directionMode); questionIndex = 0; score = 0; mistakes = [];
  document.querySelector("#quizLabel").textContent = label;
  quizContent.classList.remove("hidden"); results.classList.add("hidden"); quizSection.classList.remove("hidden");
  showQuestion(); quizSection.scrollIntoView({behavior: "smooth", block: "start"});
}

function startQuiz() {
  activeQuiz = {type: "lesson", index: currentLessonIndex};
  const lesson = lessons[currentLessonIndex];
  beginQuiz(lesson.words, lesson.reverseQuiz ? "English ↔ Filipino challenge" : "Choose the Filipino word", lesson.reverseQuiz ? "mixed" : "forward");
}

function startCheckpoint(index) {
  const checkpoint = checkpoints[index];
  if (!isCheckpointUnlocked(checkpoint)) return;
  activeQuiz = {type: "checkpoint", index};
  beginQuiz(checkpointWords(checkpoint), `${checkpoint.title} · Every learned word`, checkpoint.mixedDirections ? "mixed" : "forward");
}

function retryActiveQuiz() {
  activeQuiz.type === "checkpoint" ? startCheckpoint(activeQuiz.index) : startQuiz();
}

document.querySelector("#heroSound").addEventListener("click", () => speak(lessons[currentLessonIndex].phrase));
document.querySelector("#startQuiz").addEventListener("click", startQuiz);
document.querySelector("#retryQuiz").addEventListener("click", retryActiveQuiz);
document.querySelector("#reviewWords").addEventListener("click", () => document.querySelector("#lesson").scrollIntoView({behavior: "smooth"}));
if (reviewMode) {
  document.body.classList.add("review-mode");
  document.querySelector("#reviewBanner").classList.remove("hidden");
}
renderLesson();
