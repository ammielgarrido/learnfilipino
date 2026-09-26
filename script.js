const lesson={id:"emotions-1",words:[
  {english:"Happy",filipino:"Masaya",phrase:"Masaya ako.",emoji:"😊"},
  {english:"Sad",filipino:"Malungkot",phrase:"Malungkot ako.",emoji:"😢"},
  {english:"Angry",filipino:"Galit",phrase:"Galit ako.",emoji:"😠"},
  {english:"Scared",filipino:"Takot",phrase:"Takot ako.",emoji:"😨"},
  {english:"Tired",filipino:"Pagod",phrase:"Pagod ako.",emoji:"😴"},
  {english:"Surprised",filipino:"Nagulat",phrase:"Nagulat ako.",emoji:"😲"},
  {english:"Shy",filipino:"Nahihiya",phrase:"Nahihiya ako.",emoji:"😳"},
  {english:"Hungry",filipino:"Gutom",phrase:"Gutom ako.",emoji:"🍽️"},
  {english:"Thirsty",filipino:"Uhaw",phrase:"Uhaw ako.",emoji:"🥤"},
  {english:"Excited",filipino:"Sabik",phrase:"Sabik ako.",emoji:"🤩"}
]};

const storageKey=`learn-filipino:${lesson.id}`;
const stored=JSON.parse(localStorage.getItem(storageKey)||"{}");
const learned=new Set(stored.learned||[]);
let bestScore=stored.bestScore||0;
let questions=[],questionIndex=0,score=0,mistakes=[];
const wordGrid=document.querySelector("#wordGrid");
const progressText=document.querySelector("#progressText");
const quizSection=document.querySelector("#quiz");
const quizContent=document.querySelector("#quizContent");
const results=document.querySelector("#results");
const answerGrid=document.querySelector("#answerGrid");
const feedback=document.querySelector("#feedback");

function saveProgress(){bestScore=Math.max(bestScore,score);localStorage.setItem(storageKey,JSON.stringify({learned:[...learned],bestScore}))}
function updateProgress(){progressText.textContent=`${learned.size} of ${lesson.words.length} learned`}

function speak(text,slow=false){
  if (!("speechSynthesis" in window)){alert("Audio is not supported in this browser yet.");return}
  window.speechSynthesis.cancel();
  const utterance=new SpeechSynthesisUtterance(text);
  utterance.lang="fil-PH"; utterance.rate=slow?.65:.88;
  const voice=window.speechSynthesis.getVoices().find(item=>/^(fil|tl)(-|_)/i.test(item.lang));
  if(voice)utterance.voice=voice;
  window.speechSynthesis.speak(utterance);
}

function renderWords(){
  wordGrid.innerHTML="";
  lesson.words.forEach((word,index)=>{
    const card=document.createElement("article");
    card.className=`word-card${learned.has(index)?" learned":""}`;
    card.tabIndex=0;
    card.setAttribute("aria-label",`${word.english}: ${word.filipino}. Mark as practiced.`);
    card.innerHTML=`<span class="word-emoji" aria-hidden="true">${word.emoji}</span><span class="word-english">${word.english}</span><span class="word-filipino" lang="fil">${word.filipino}</span><button class="sound-button" type="button" aria-label="Hear ${word.filipino}"><span aria-hidden="true">🔊</span> Hear it</button>`;
    const mark=()=>{learned.add(index);card.classList.add("learned");saveProgress();updateProgress()};
    card.addEventListener("click",event=>{if(!event.target.closest(".sound-button"))mark()});
    card.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();mark()}});
    card.querySelector(".sound-button").addEventListener("click",()=>{mark();speak(word.phrase)});
    wordGrid.appendChild(card);
  });
}

function shuffle(items){return[...items].sort(()=>Math.random()-.5)}
function makeQuestions(){return shuffle(lesson.words.map(word=>({word,options:shuffle([word,...shuffle(lesson.words.filter(candidate=>candidate!==word)).slice(0,3)])})))}

function showQuestion(){
  const current=questions[questionIndex];
  document.querySelector("#questionNumber").textContent=`Question ${questionIndex+1} of ${questions.length}`;
  document.querySelector("#scoreText").textContent=`Score: ${score}`;
  document.querySelector("#quizProgressBar").style.width=`${((questionIndex+1)/questions.length)*100}%`;
  document.querySelector("#quizEmoji").textContent=current.word.emoji;
  document.querySelector("#quizTitle").textContent=`Which word means “${current.word.english}”?`;
  feedback.textContent="";feedback.className="feedback";answerGrid.innerHTML="";
  current.options.forEach(option=>{
    const button=document.createElement("button");
    button.className="answer-button";button.type="button";button.lang="fil";button.textContent=option.filipino;
    button.addEventListener("click",()=>checkAnswer(button,option,current.word));
    answerGrid.appendChild(button);
  });
}

function checkAnswer(button,selected,correct){
  const buttons=[...answerGrid.querySelectorAll("button")];buttons.forEach(item=>{item.disabled=true});
  if(selected===correct){score+=1;button.classList.add("correct");feedback.textContent=`Tama! ${correct.filipino} means ${correct.english}.`;feedback.classList.add("good");speak(correct.phrase)}
  else{button.classList.add("wrong");buttons.find(item=>item.textContent===correct.filipino)?.classList.add("correct");feedback.textContent=`Almost! The answer is ${correct.filipino}.`;feedback.classList.add("try");mistakes.push(correct);speak(correct.phrase,true)}
  document.querySelector("#scoreText").textContent=`Score: ${score}`;
  window.setTimeout(()=>{questionIndex+=1;if(questionIndex<questions.length)showQuestion();else showResults()},1600);
}

function showResults(){
  quizContent.classList.add("hidden");results.classList.remove("hidden");
  const passed=score>=8;
  document.querySelector("#resultBadge").textContent=passed?"🌟":"🌱";
  document.querySelector("#resultTitle").textContent=passed?"Ang galing!":"You’re growing!";
  document.querySelector("#resultMessage").textContent=passed?`You scored ${score} out of 10 and completed the emotions lesson.`:`You scored ${score} out of 10. Review ${mistakes.length} word${mistakes.length===1?"":"s"} and try again.`;
  if(passed)lesson.words.forEach((_,index)=>learned.add(index));saveProgress();updateProgress();
}

function startQuiz(){questions=makeQuestions();questionIndex=0;score=0;mistakes=[];quizContent.classList.remove("hidden");results.classList.add("hidden");quizSection.classList.remove("hidden");showQuestion();quizSection.scrollIntoView({behavior:"smooth",block:"start"})}

document.querySelectorAll("[data-speak]").forEach(button=>button.addEventListener("click",()=>speak(button.dataset.speak)));
document.querySelector("#startQuiz").addEventListener("click",startQuiz);
document.querySelector("#retryQuiz").addEventListener("click",startQuiz);
document.querySelector("#reviewWords").addEventListener("click",()=>document.querySelector("#lesson").scrollIntoView({behavior:"smooth"}));
renderWords();updateProgress();
