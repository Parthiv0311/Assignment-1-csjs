//student ID text content upon page load
document.getElementById('studentId').textContent = 'Student ID: 200543216';

// arrays for story creation
const nouns1 = ["The turkey", "Mom", "Dad", "The dog", "My Teacher", "The Elephant", "The Cat"]; // Array of first nouns
const verbs = ["sat on", "ate", "danced", "with", "saw", "doesn't like", "kissed"];// Array of verbs
const adjectives = ["a funny ", "a scary", "a goofy", "a slimy", "a barking", "a fat"]; // Array of adjectives
const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];// Array of second nouns
const settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"] // Array of settings

// Variables to store chosen words
let choosenNoun1 = '';
let choosenVerb = '';
let choosenAdjective = '';
let choosenNoun2 = '';
let choosenSetting = '';

// Function to get random element from array
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)]; // Return random item
}

// Function for noun1 button click event
function noun1OnClick() {
    choosenNoun1 = getRandomElement(nouns1);
    document.getElementById('choosenNoun1').textContent = choosenNoun1;
}
// Function for verb button click event
function verbOnClick() {
    choosenVerb = getRandomElement(verbs);
    document.getElementById('choosenVerb').textContent = choosenVerb;
}
// Function for adjective button click event
function adjectiveOnClick() {
    choosenAdjective = getRandomElement(adjectives);
    document.getElementById('choosenAdjective').textContent = choosenAdjective;
}

// Function for noun2 button click event
function noun2OnClick() {
    choosenNoun2 = getRandomElement(nouns2);
    document.getElementById('choosenNoun2').textContent = choosenNoun2;
}

// Function for setting button click event
function settingOnClick() {
    choosenSetting = getRandomElement(settings);
    document.getElementById('choosenSetting').textContent = choosenSetting;
}

// Function to concatenate and display story choosed via user
function playbackOnClick() {
    const story = `${choosenNoun1} ${choosenVerb} ${choosenAdjective} ${choosenNoun2} ${choosenSetting}`;
    document.getElementById('story').textContent = story;
}

// Function to generate and display random story
function randomOnClick() {
    noun1OnClick(); // Random noun1
    verbOnClick(); // Random verb
    adjectiveOnClick(); // Random adjective
    noun2OnClick(); // Random noun2
    settingOnClick(); // Random setting
    playbackOnClick(); // Display random story
}

// Function to reset all chosen words and displayed story
function resetOnClick() {
    // Reset chosen words
    choosenNoun1 = '';
    choosenVerb = '';
    choosenAdjective = '';
    choosenNoun2 = '';
    choosenSetting = '';
    //To clear displayed words and story
    document.getElementById('choosenNoun1').textContent = '';
    document.getElementById('choosenVerb').textContent = '';
    document.getElementById('choosenAdjective').textContent = '';
    document.getElementById('choosenNoun2').textContent = '';
    document.getElementById('choosenSetting').textContent = '';
    document.getElementById('story').textContent = '';
}
