var score = 0;

var ans1 = prompt("Q1: Pakistan ka capital kya hai?");
if (ans1.toLowerCase() == "islamabad") {
    score = score + 1;
}

var ans2 = prompt("Q2: 2 + 2 * 2 kitna hota hai?");
if (ans2 == "6") {
    score = score + 1;
}

var ans3 = prompt("Q3: Cricket team me kitne players hote hain?");
if (ans3 == "11") {
    score = score + 1;
}

if (score == 3) {
    alert("Total Score: " + score + " - Grade A (Pass)");
}
else if (score == 2) {
    alert("Total Score: " + score + " - Grade B (Pass)");
}
else if (score == 1) {
    alert("Total Score: " + score + " - Grade C (Pass)");
}
else {
    alert("Total Score: " + score + " - Fail ho gaye");
}
