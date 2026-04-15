let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

function addOnePointHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function addTwoPointHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function addThreePointHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}
function addOnePointGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function addTwoPointGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function addThreePointGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function NewGame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent =guestScore
}

