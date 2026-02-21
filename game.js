const chat = document.getElementById("chat");
const choices = document.getElementById("choices");

let currentScene = STORY.start;

function loadScene(sceneId){
  currentScene = sceneId;
  const scene = STORY.scenes[sceneId];
  chat.innerHTML = "";
  choices.innerHTML = "";

  scene.messages.forEach(m=>{
    const div = document.createElement("div");
    div.className = "msg " + (m.from === "you" ? "you":"them");
    div.textContent = m.text;
    chat.appendChild(div);
  });

  scene.choices.forEach(c=>{
    const btn = document.createElement("button");
    btn.textContent = c.text;
    btn.onclick = ()=>{
      addPlayerMessage(c.text);
      loadScene(c.next);
    };
    choices.appendChild(btn);
  });
}

function addPlayerMessage(text){
  const div = document.createElement("div");
  div.className = "msg you";
  div.textContent = text;
  chat.appendChild(div);
}

loadScene(currentScene);
