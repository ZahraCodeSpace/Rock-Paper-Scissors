const choices = document.querySelectorAll(".choice");
const playerImage = document.getElementById("playerImage");
const computerImage = document.getElementById("computerImage");
const playerScoreElement = document.getElementById("playerScore");
const computerScoreElement = document.getElementById("computerScore");
const result = document.getElementById("result");

let playerScore = 0;
let computerScore = 0;

choices.forEach((choice) => {

    choice.addEventListener("click", () => {

       // حذف افکت قبلی
choices.forEach((item) => {
    item.classList.remove("shadow-2xl","shadow-blue-500/60","scale-105"
    );
});

// افکت کارت انتخاب‌شده
choice.classList.add("shadow-2xl","shadow-blue-500/60","scale-105"
);

        // عکس بازیکن
        const image = choice.querySelector("img");

        playerImage.src = image.src;
        playerImage.classList.remove("hidden");
        playerImage.classList.add("-scale-x-100");

        // انتخاب بازیکن
        const playerChoice = choice.dataset.choice;

        // انتخاب تصادفی کامپیوتر
        const randomIndex = Math.floor(Math.random() * choices.length);

        const computerChoice = choices[randomIndex];

        const computerChoiceImage = computerChoice.querySelector("img");

        const computerChoiceName = computerChoice.dataset.choice;

        result.textContent = "...";

        setTimeout(() => {

            // نمایش انتخاب کامپیوتر
            computerImage.src = computerChoiceImage.src;
            computerImage.classList.remove("hidden");

            // مساوی
            if (playerChoice === computerChoiceName) {

                result.textContent = "🤝 Draw!";

            }

            // برد بازیکن
            else if (

                (playerChoice === "rock" && computerChoiceName === "scissors") ||

                (playerChoice === "paper" && computerChoiceName === "rock") ||

                (playerChoice === "scissors" && computerChoiceName === "paper")

            ) {

                playerScore++;

                playerScoreElement.textContent = playerScore;

                result.textContent = " Player Wins!";

            }

            // برد کامپیوتر
            else {

                computerScore++;

                computerScoreElement.textContent = computerScore;

                result.textContent = " Computer Wins!";

            }

            // پایان بازی
            if (playerScore === 5) {

                setTimeout(() => {

                    alert("🎉 Player Won The Game!");

                    resetGame();

                }, 300);

            }

            if (computerScore === 5) {

                setTimeout(() => {

                    alert("💻 Computer Won The Game!");

                    resetGame();

                }, 300);

            }

        }, 500);

    });

});

function resetGame() {

    playerScore = 0;
    computerScore = 0;

    playerScoreElement.textContent = 0;
    computerScoreElement.textContent = 0;

    result.textContent = "Choose your move";

    playerImage.classList.add("hidden");
    computerImage.classList.add("hidden");

}