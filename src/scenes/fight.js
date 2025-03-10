function loadFightScene(container) {
  container.innerHTML = `
          <div class="background">
              <div class="character" id="character"></div>
              <div class="character_two" id="character_two"></div>
              <div class="hud">
                <div class="hud-left">
                  <div class="profile"></div>
                  <div class="healthbar"></div>
                </div>
                <div class="hud-center">
                  <div class="timer" id="timer">60</div>
                </div>
                <div class="hud-right">
                  <div class="healthbar_two"></div>
                  <div class="profile_two"></div>
                </div>
              </div>
          </div>`;

  const character = document.getElementById("character"); // получаем элемент персонажа

  let isJumping = false;
  let direction = "right";

  window.addEventListener("keydown", function (event) {
    let currentPositionX = parseInt(
      window.getComputedStyle(character).right,
      10
    );
    let currentPositionY = parseInt(
      window.getComputedStyle(character).bottom,
      10
    );

    if (event.key === "ArrowLeft") {
      currentPositionX += 10;
      if (direction !== "left") {
        character.style.transform = "scaleX(-1)";
        direction = "left";
      }
    } else if (event.key === "ArrowRight") {
      currentPositionX -= 10;
      if (direction !== "right") {
        character.style.transform = "scaleX(1)";
        direction = "right";
      }
    } else if (event.key === "ArrowUp" && !isJumping) {
      isJumping = true;
      currentPositionY += 100;
      character.style.bottom = currentPositionY + "px";

      setTimeout(function () {
        currentPositionY -= 100;
        character.style.bottom = currentPositionY + "px";

        setTimeout(function () {
          isJumping = false;
        }, 150);
      }, 150);
    }

    character.style.right = currentPositionX + "px";
  });

  function startTimer(duration) {
    let timerElement = document.getElementById("timer");
    let timeLeft = duration;

    let timerInterval = setInterval(() => {
      timeLeft--;
      timerElement.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert("Время вышло! Бой окончен.");
      }
    }, 1000);
  }

  startTimer(60);
}

export { loadFightScene };
