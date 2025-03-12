function loadFightScene(container) {
  container.innerHTML = `
          <div class="background">
              <div class="player" id="player"></div>
              <div class="enemy" id="enemy"></div>
              <div class="hud">
                <div class="hud-left">
                  <div class="profile_player"></div>
                  <div class="health_bar_player"></div>
                </div>
                <div class="hud-center">
                  <div class="timer" id="timer">60</div>
                </div>
                <div class="hud-right">
                  <div class="health_bar_enemy"></div>
                  <div class="profile_enemy"></div>
                </div>
              </div>
          </div>`;

  const player = document.getElementById("player"); 

  let isJumping = false;
  let direction = "right";

  window.addEventListener("keydown", function (event) {
    let currentPositionX = parseInt(
      window.getComputedStyle(player).right,
      10
    );
    
    let currentPositionY = parseInt(
      window.getComputedStyle(player).bottom,
      10
    );

    if (event.key === "ArrowLeft") {
      currentPositionX += 10;
      
      if (direction !== "left") {
        player.style.transform = "scaleX(-1)";
        direction = "left";
      }
      
    } else if (event.key === "ArrowRight") {
      currentPositionX -= 10;
      
      if (direction !== "right") {
        player.style.transform = "scaleX(1)";
        direction = "right";
      }
      
    } else if (event.key === "ArrowUp" && !isJumping) {
      isJumping = true;
      currentPositionY += 100;
      player.style.bottom = currentPositionY + "px";

      setTimeout(function () {
        currentPositionY -= 100;
        player.style.bottom = currentPositionY + "px";

        setTimeout(function () {
          isJumping = false;
        }, 150);
      }, 150);
    }

    player.style.right = currentPositionX + "px";
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
