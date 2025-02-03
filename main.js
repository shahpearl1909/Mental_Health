// Toggle the navigation menu when the hamburger button is clicked
const hamburgerButton = document.querySelector('.hamburger-menu');
const navbarLinks = document.querySelector('.navbar-links');

// Event listener to toggle the 'active' class
hamburgerButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});


// Mood Tracker Logic
let moodHistory = [];

function updateMoodDisplay() {
    const moodValue = document.getElementById('moodInput').value;
    document.getElementById('moodDisplay').textContent = moodValue;
}

function logMood() {
    const moodValue = document.getElementById('moodInput').value;
    let moodMessage = document.getElementById('moodMessage');
    
    if (moodValue < 1 || moodValue > 10) {
        moodMessage.textContent = "Please select a valid mood between 1 and 10.";
        moodMessage.style.color = "red";
        return;
    }

    let message = "";
    switch (moodValue) {
        case '1':
        case '2':
            message = "You're feeling low, reach out for support.";
            break;
        case '3':
        case '4':
            message = "You're doing okay, take some time for yourself.";
            break;
        case '5':
        case '6':
            message = "You're feeling balanced. Keep going!";
            break;
        case '7':
        case '8':
            message = "You're feeling great! Keep the positive energy going!";
            break;
        case '9':
        case '10':
            message = "You're at your best today! Keep it up!";
            break;
    }
    moodMessage.textContent = message;
    moodHistory.push({ date: new Date().toLocaleDateString(), mood: moodValue });

    // Update the mood history
    updateMoodHistory();
}

function updateMoodHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = ""; // Clear current list

    moodHistory.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = `${entry.date}: Mood ${entry.mood}`;
        historyList.appendChild(listItem);
    });
}

function toggleMoodHistory() {
    const moodHistoryDiv = document.getElementById('moodHistory');
    if (moodHistoryDiv.style.display === "none") {
        moodHistoryDiv.style.display = "block";
    } else {
        moodHistoryDiv.style.display = "none";
    }
}

// Survey Logic
function submitSurvey() {
    let score = 0;

    for (let i = 1; i <= 10; i++) {
        let response = parseInt(document.getElementById(`q${i}`).value);
        if (response >= 0 && response <= 4) {
            score += response;
        } else {
            alert("Please enter a valid response (0 to 4) for all questions.");
            return;
        }
    }

    let resultMessage = "";
    let resultColor = "";

    if (score <= 10) {
        resultMessage = "Low Stress: You're managing stress well.";
        resultColor = "green";
    } else if (score <= 20) {
        resultMessage = "Moderate Stress: You might want to try stress-relief activities.";
        resultColor = "orange";
    } else if (score <= 30) {
        resultMessage = "High Stress: You're feeling overwhelmed, consider seeking help.";
        resultColor = "red";
    } else {
        resultMessage = "Severe Stress: You may need to take urgent action to reduce stress.";
        resultColor = "darkred";
    }

    document.getElementById('surveyResults').textContent = resultMessage;
    document.getElementById('surveyResults').style.color = resultColor;
}
