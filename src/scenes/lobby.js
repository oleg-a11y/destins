import { loadFightScene } from "./fight.js";

const slotCharacter = [
  { id: 1, content: "word" },
  { id: 2, content: "city" },
  { id: 3, content: "country" },
  { id: 4, content: "village" },
  { id: 5, content: "street" },
  { id: 6, content: "halk" },
  { id: 7, content: "spider" },
  { id: 8, content: "capitan" },
];

let selectedCharacter = null; 

function loadLobbyScene(container) {
  container.innerHTML = `
    <div class="lobby">
      <h1>Выберите персонажа</h1>
      <div class="lobby-screen"></div>
      <button id="start-game" disabled>Начать игру</button>
    </div>
  `;

  function generateSlot() {
    const lobbyScreen = document.querySelector(".lobby-screen");
    slotCharacter.forEach((item) => {
      lobbyScreen.innerHTML += `
        <div id="char-${item.id}" class="character-slot">
          ${item.content}
        </div>
      `;
    });

    const characterSlots = document.querySelectorAll(".character-slot");
    characterSlots.forEach((slot) => {
      slot.addEventListener("click", () => {
        characterSlots.forEach((c) => c.classList.remove("selected"));
        slot.classList.add("selected");

        selectedCharacter = slot.id; 
        document.getElementById("start-game").disabled = false; 
      });
    });
  }

  generateSlot();

  const startGame = document.getElementById("start-game");
  startGame.addEventListener("click", () => {
    if (selectedCharacter) {
      loadFightScene(container, selectedCharacter); 
    }
  });
}

export { loadLobbyScene };
