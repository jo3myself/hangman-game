 var words = ["ONE", "TWO", "THREE", "FOUR", "FIVE"];
var winner=0;
var to_guess = "";
var display_word = "";
var used_letters = "";
var wrong_guesses = 9;

document.onkeyup = function(event) {
var userGuess = event.key;
var userGuesses= userGuess.toUpperCase();
selectLetter(userGuesses);
}

function selectLetter(l)
{
if (used_letters.indexOf(l) != -1)
{
return;
}
used_letters += l;
document.getElementById("usedLetters").innerHTML = used_letters; 
if (to_guess.indexOf(l) != -1)
{

pos = 0;
temp_mask = display_word;
 
while (to_guess.indexOf(l, pos) != -1)
{
pos = to_guess.indexOf(l, pos);     
end = pos + 1;
start_text = temp_mask.substring(0, pos);
end_text = temp_mask.substring(end, temp_mask.length);
 
temp_mask = start_text + l + end_text;
pos = end;
}
 
display_word = temp_mask;
document.getElementById("displayWord").innerHTML = display_word;
if (display_word.indexOf("-") == -1)
{

alert("Well done, you have won!");
winner++;
document.getElementById("winn").innerHTML = winner;

reset();
}
}
else
{

wrong_guesses--;
document.getElementById("wrong").innerHTML = wrong_guesses; 
 
if (wrong_guesses == 0)
{
alert("Sorry, you have lost!");
reset();
}
}
}
 
function reset()
{
selectWord();
document.getElementById("usedLetters").innerHTML = ""; 
used_letters = "";
wrong_guesses=9;
document.getElementById("wrong").innerHTML = wrong_guesses;
}
 
function selectWord()
{
to_guess = words[Math.floor(Math.random() * words.length)];

masked_word = createMask(to_guess);
document.getElementById("displayWord").innerHTML = masked_word;
display_word = masked_word;
	
	if (to_guess== words[0]) {
		document.pic.src="assets/images/one.jpg";
		document.audio.src="assets/images/aaa.mp3";
	} else if (to_guess== words[1]) {
		document.pic.src="assets/images/two.jpg";
	} else if (to_guess== words[2]) {
		document.pic.src="assets/images/three.jpg";
	} else if (to_guess== words[3]) {
		document.pic.src="assets/images/four.jpg";
	} else if (to_guess== words[4]) {
		document.pic.src="assets/images/five.jpg";
	}

}
 
function createMask(m)
{
mask = "";
word_lenght = m.length;
 
for (i = 0; i < word_lenght; i ++)
{
mask += "-";
}
return mask;
}