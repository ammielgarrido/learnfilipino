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
      ["House", "Bahay", "Ito ang bahay.", "🏠"], ["Table", "Mesa", "Ito ang mesa.", "🪑"],
      ["Chair", "Upuan", "Ito ang upuan.", "🪑"], ["Door", "Pinto", "Ito ang pinto.", "🚪"],
      ["Window", "Bintana", "Ito ang bintana.", "🪟"], ["Bed", "Kama", "Ito ang kama.", "🛏️"],
      ["Lamp", "Ilaw", "Ito ang ilaw.", "💡"], ["Spoon", "Kutsara", "Ito ang kutsara.", "🥄"],
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
  }
].map(lesson => ({...lesson, words: lesson.words.map(([english, filipino, phrase, emoji]) => ({english, filipino, phrase, emoji}))}));

const storageKey = "learn-filipino:course-progress-v2";
let progress = loadProgress();
let currentLessonIndex = Math.min(progress.currentLesson || 0, lessons.length - 1);
let questions = [], questionIndex = 0, score = 0, mistakes = [];

const wordGrid = document.querySelector("#wordGrid");
const courseGrid = document.querySelector("#courseGrid");
const progressText = document.querySelector("#progressText");
const quizSection = document.querySelector("#quiz");
const quizContent = document.querySelector("#quizContent");
const results = document.querySelector("#results");
const answerGrid = document.querySelector("#answerGrid");
const feedback = document.querySelector("#feedback");

function blankLessonProgress() { return {learned: [], bestScore: 0, completed: false}; }

function loadProgress() {
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(storageKey) || "{}"); } catch (_) { saved = {}; }
  const data = {currentLesson: saved.currentLesson || 0, lessons: saved.lessons || {}};
  lessons.forEach(lesson => { if (!data.lessons[lesson.id]) data.lessons[lesson.id] = blankLessonProgress(); });

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
  progress.currentLesson = currentLessonIndex;
  localStorage.setItem(storageKey, JSON.stringify(progress));
}

function lessonProgress(index = currentLessonIndex) { return progress.lessons[lessons[index].id]; }
function isUnlocked(index) { return index === 0 || progress.lessons[lessons[index - 1].id].completed; }

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
    const status = !unlocked ? "🔒 Pass the previous quiz" : saved.completed ? `Completed · Best ${saved.bestScore}/10` : saved.bestScore ? `Best score ${saved.bestScore}/10` : "Ready to learn";
    card.innerHTML = `<span class="course-icon" aria-hidden="true">${lesson.icon}</span><span class="course-number">Level ${lesson.level} · Lesson ${index + 1}</span><span class="course-name">${lesson.title}</span><span class="course-status">${status}</span>`;
    card.addEventListener("click", () => selectLesson(index));
    courseGrid.appendChild(card);
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
  document.querySelector("#lessonLabel").textContent = `Ten new words · Best quiz ${saved.bestScore}/10`;
  wordGrid.innerHTML = "";
  lesson.words.forEach((word, index) => {
    const card = document.createElement("article");
    card.className = `word-card${saved.learned.includes(index) ? " learned" : ""}`;
    card.tabIndex = 0;
    card.setAttribute("aria-label", `${word.english}: ${word.filipino}. Mark as practiced.`);
    card.innerHTML = `<span class="word-emoji" aria-hidden="true">${word.emoji}</span><span class="word-english">${word.english}</span><span class="word-filipino" lang="fil">${word.filipino}</span><button class="sound-button" type="button" aria-label="Hear ${word.filipino}"><span aria-hidden="true">🔊</span> Hear it</button>`;
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
}

function selectLesson(index) {
  if (!isUnlocked(index)) return;
  currentLessonIndex = index; saveProgress();
  quizSection.classList.add("hidden");
  renderLesson();
  document.querySelector("#lesson").scrollIntoView({behavior: "smooth", block: "start"});
}

function shuffle(items) { return [...items].sort(() => Math.random() - .5); }
function makeQuestions() {
  const words = lessons[currentLessonIndex].words;
  return shuffle(words.map(word => ({word, options: shuffle([word, ...shuffle(words.filter(candidate => candidate !== word)).slice(0, 3)])})));
}

function showQuestion() {
  const current = questions[questionIndex];
  document.querySelector("#questionNumber").textContent = `Question ${questionIndex + 1} of ${questions.length}`;
  document.querySelector("#scoreText").textContent = `Score: ${score}`;
  document.querySelector("#quizProgressBar").style.width = `${((questionIndex + 1) / questions.length) * 100}%`;
  document.querySelector("#quizEmoji").textContent = current.word.emoji;
  document.querySelector("#quizTitle").textContent = `Which word means “${current.word.english}”?`;
  feedback.textContent = ""; feedback.className = "feedback"; answerGrid.innerHTML = "";
  current.options.forEach(option => {
    const button = document.createElement("button");
    button.className = "answer-button"; button.type = "button"; button.lang = "fil"; button.textContent = option.filipino;
    button.addEventListener("click", () => checkAnswer(button, option, current.word));
    answerGrid.appendChild(button);
  });
}

function checkAnswer(button, selected, correct) {
  const buttons = [...answerGrid.querySelectorAll("button")];
  buttons.forEach(item => { item.disabled = true; });
  if (selected === correct) {
    score += 1; button.classList.add("correct"); feedback.textContent = `Tama! ${correct.filipino} means ${correct.english}.`; feedback.classList.add("good"); speak(correct.phrase);
  } else {
    button.classList.add("wrong"); buttons.find(item => item.textContent === correct.filipino)?.classList.add("correct"); feedback.textContent = `Almost! The answer is ${correct.filipino}.`; feedback.classList.add("try"); mistakes.push(correct); speak(correct.phrase, true);
  }
  document.querySelector("#scoreText").textContent = `Score: ${score}`;
  window.setTimeout(() => { questionIndex += 1; questionIndex < questions.length ? showQuestion() : showResults(); }, 1600);
}

function showResults() {
  quizContent.classList.add("hidden"); results.classList.remove("hidden");
  const lesson = lessons[currentLessonIndex];
  const saved = lessonProgress();
  const passed = score >= 8;
  saved.bestScore = Math.max(saved.bestScore, score);
  if (passed) { saved.completed = true; saved.learned = lesson.words.map((_, index) => index); }
  document.querySelector("#resultBadge").textContent = passed ? "🌟" : "🌱";
  document.querySelector("#resultTitle").textContent = passed ? "Ang galing!" : "You’re growing!";
  const nextText = passed && currentLessonIndex < lessons.length - 1 ? ` Lesson ${currentLessonIndex + 2} is now unlocked!` : "";
  document.querySelector("#resultMessage").textContent = passed ? `You scored ${score} out of 10 and completed ${lesson.title}.${nextText}` : `You scored ${score} out of 10. Review ${mistakes.length} word${mistakes.length === 1 ? "" : "s"} and try again.`;
  saveProgress(); renderLesson();
}

function startQuiz() {
  questions = makeQuestions(); questionIndex = 0; score = 0; mistakes = [];
  quizContent.classList.remove("hidden"); results.classList.add("hidden"); quizSection.classList.remove("hidden");
  showQuestion(); quizSection.scrollIntoView({behavior: "smooth", block: "start"});
}

document.querySelector("#heroSound").addEventListener("click", () => speak(lessons[currentLessonIndex].phrase));
document.querySelector("#startQuiz").addEventListener("click", startQuiz);
document.querySelector("#retryQuiz").addEventListener("click", startQuiz);
document.querySelector("#reviewWords").addEventListener("click", () => document.querySelector("#lesson").scrollIntoView({behavior: "smooth"}));
renderLesson();
