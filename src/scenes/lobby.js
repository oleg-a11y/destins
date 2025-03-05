function loadLobbyScene(container) {
  container.innerHTML = `
        <div id="lobby-screen">
            <h1>Выбор персонажа</h1>
            <button id="start-game">Начать игру</button>
        </div>
    `;

  document.getElementById("start-game").addEventListener("click", () => {
    alert("Заглушка: начало игры!");
  });
}

export { loadLobbyScene };
