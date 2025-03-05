import { loadLobbyScene } from "./lobby.js";

function loadLoadingScene(container) {
  container.innerHTML = `
    <div id="loading-screen">
      <div class="loading">
        <div class="logo"></div>
        <div class="progress_bar">
          <div class="progress"></div>
        </div>
      </div>
    </div>`;

  const progressBar = document.querySelector(".progress");
  let progress = 0;

  function updateProgress() {
    if (progress < 100) {
      progress += 2;
      progressBar.style.width = progress + "%";
      setTimeout(updateProgress, 60);
    } else {
      loadLobbyScene(container);
    }
  }

  updateProgress();
}

export { loadLoadingScene };
