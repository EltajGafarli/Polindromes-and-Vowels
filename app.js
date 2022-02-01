const btn = document.getElementById("chk");
const pol = document.getElementById("pol");
const vow = document.getElementById("vow");
pol.addEventListener('click', function(e) {
    let inp = document.getElementById("word");
    inp.removeAttribute("readonly");
    btn.addEventListener('click', function() {
        let word = document.getElementById("word").value;
        let text = document.getElementById('resp');
        let bool = polindrome(word);
        let set = new Set(word);
        const first = [...set][0];
        if (first == ' ') {
            text.innerHTML = "The word must consist of letters and numbers";
        } else if (bool == true) {
            if (word.length < 18) {
                text.innerHTML = `${word.toUpperCase()} is Polindrome`;
            } else {
                text.innerHTML = "This word is Polindrome";
            }
        } else if (bool == false) {
            if (word.length < 18) {
                text.innerHTML = `${word.toUpperCase()} is Not Polindrome`;
            } else {
                text.innerHTML = "This word is Not Polindrome";
            }
        }
    });
    e.preventDefault();
});
vow.addEventListener('click', function(e) {
    let inp = document.getElementById("word");
    inp.removeAttribute("readonly");
    btn.addEventListener('click', function() {
        let word = document.getElementById("word").value;
        let text = document.getElementById('resp');
        let count = vowels(word);
        let set = new Set(word);
        const first = [...set][0];
        if (first == ' ') {
            text.innerHTML = "The word must consist of letters and numbers";
        } else {
            if (word.length < 18) {
                if (count == 1) {
                    text.innerHTML = `${word.toUpperCase()} has ${count} vowel.`;
                } else if (count == 0) {
                    text.innerHTML = `Ooops! We couldn't find any vowel in ${word.toUpperCase()}.`;
                } else {
                    text.innerHTML = `${word.toUpperCase()} have ${count} vowels`;
                }
            } else {
                if (count == 1) {
                    text.innerHTML = `This word has ${count} vo`;
                } else if (count == 0) {
                    text.innerHTML = "Oops! We couldn't find any vowel in this word.";
                } else {
                    text.innerHTML = `This word have ${count} vowels.`;
                }
            }
        }
    });
    e.preventDefault();
});

function vowels(word) {
    var count = 0;
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (letter.match(/([a,e,i,u,o])/)) {
            count++;
        }
    }
    return count;
}

function polindrome(word) {
    let n = word.length;
    for (let i = 0; i < n; i++) {
        if (word[i] != word[n - i - 1]) {
            return false;
        }
    }
    return true;
};