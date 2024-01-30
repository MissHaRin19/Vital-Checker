// Function to navigate to the next page
function nextPage(currentPage, nextPage) {
    window.location.href = nextPage;
}

// Welcome Page
function startApp() {
    nextPage('index.html', 'signin.html');
}

// Sign In/Sign Up Page
function goToHealthAreas() {
    nextPage('signin.html', 'third_page.html');
}

// Health Areas Page
function goToPhysicalHealth() {
    nextPage('third_page.html', 'fourth_page.html');
}

function goToMentalHealth() {
    nextPage('third_page.html', 'mental_health_page.html');
}

function goToNutritionLevel() {
    nextPage('third_page.html', 'nutrition_level_page.html');
}

// Physical Health Questionnaire Page
function submitPhysicalHealthForm() {
    nextPage('fourth_page.html', 'fifth_page.html');
}

// Results Page
function checkMentalHealth() {
    nextPage('fifth_page.html', 'mental_health_results.html');
}

function checkNutritionLevel() {
    nextPage('fifth_page.html', 'nutrition_level_results.html');
}
