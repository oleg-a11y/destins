import { loadLobbyScene } from "./lobby.js";

function loadLoadingScene(container) {
  container.innerHTML = `
        <div id="loading-screen">
            <h1>Загрузка...</h1>
            <div class="loader"></div>
        </div>
    `;

  setTimeout(() => {
    loadLobbyScene(container);
  }, 3000);
}

export { loadLoadingScene };
