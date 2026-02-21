const typing = document.getElementById("typing");

function showTyping(ms){
  typing.classList.remove("hidden");
  return new Promise(r=>setTimeout(()=>{
    typing.classList.add("hidden");
    r();
  }, ms));
}const chat = document.getElementById("chat");
const choices = document.getElementById("choices");

let currentScene = STORY.start;

function addMessage(text, sender){
  const div = document.createElement("div");
  div.className = "msg " + sender;
  div.textContent = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function loadScene(sceneId){
  currentScene = sceneId;
  const scene = STORY.scenes[sceneId];

  scene.messages.forEach(m=>{
    setTimeout(()=>{
      addMessage(m.text, m.from === "you" ? "you" : "them");
    }, 300);
  });

  choices.innerHTML = "";

  scene.choices.forEach(c=>{
    const btn = document.createElement("button");
    btn.textContent = c.text;

    btn.onclick = ()=>{
      addMessage(c.text, "you");
      choices.innerHTML = "";
      setTimeout(()=>{
        loadScene(c.next);
      }, 500);
    };

    choices.appendChild(btn);
  });
}

loadScene(currentScene);
