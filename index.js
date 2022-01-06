var i = 0;
var correctCount = 0;
var countDown = 59;
var countMin =  1;
var minutes = document.querySelector('.minutes')
var seconds = document.querySelector('.sec')
setInterval(function() {
    minutes.innerHTML = countMin
    seconds.innerHTML = countDown
    countDown--;
    if (countDown == -1) {
        countMin = countMin > 0 ? countMin - 1 : 0;
        minutes.id --;
        countDown = 59
    }
    if (countDown < 10) {
        seconds.innerHTML = 0 + seconds.innerHTML
    }
    if (countMin < 10) {
        minutes.innerHTML = 0 + minutes.innerHTML
    }
    if (minutes.id <= -1) {
        countDown = 0;
        scores();
    }
}, 1000) 

var option = document.getElementsByClassName('options')
for (var t = 0; t < option.length; t++) {
    option[t].addEventListener('click', function() {
        this.querySelector('input[type=radio]').checked = true;
        this.querySelector('input[type=radio]').checked = true;
        if (document.querySelector(".options.next")) {
            document.querySelector(".options.next").classList.remove("next")
        }
        document.querySelector('#next-btn').addEventListener('click', function() {
            document.querySelector(".options.next").classList.remove("next")
        })
        this.classList.add('next')
    })
}
generate(0)
function generate(index) {
    document.getElementById('question').innerHTML = jsonDATA[index].ques;
    document.getElementById('optt1').innerHTML = jsonDATA[index].opt1;
    document.getElementById('optt2').innerHTML = jsonDATA[index].opt2;
    document.getElementById('optt3').innerHTML = jsonDATA[index].opt3;
    document.getElementById('optt4').innerHTML = jsonDATA[index].opt4;
    if (40 < jsonDATA[i].ques.length) {
        document.getElementById('question').style.fontSize = "14px"
    }
}

function checkAnswer() {
    if (document.querySelector("input[type=radio]:checked").checked) {
        if (document.getElementById('opt1').checked && jsonDATA[i].opt1 == jsonDATA[i].answer) {
            correctCount++;
        }
        if (document.getElementById('opt2').checked && jsonDATA[i].opt2 == jsonDATA[i].answer) {
            correctCount++;
        }
        if (document.getElementById('opt3').checked && jsonDATA[i].opt3 == jsonDATA[i].answer) {
            correctCount++;
        }
        if (document.getElementById('opt4').checked && jsonDATA[i].opt4 == jsonDATA[i].answer) {
            correctCount++;
        }
        i++;
        if (document.querySelector("input[type=radio]:checked").checked) {
            document.getElementById('question-no').innerHTML ++;
        }
        document.querySelector('input[type=radio]:checked').checked = false
        if (jsonDATA.length - 1 < i) {
            scores();
        }
        generate(i);
    }
}
function scores() {
    document.getElementById('result').style.display = "flex";
    document.getElementById('cpanel').style.display = "none";
    document.getElementById('score').innerHTML = correctCount;
    if (correctCount < 3) {
        document.getElementById('score').style.color = "red"
    } else {
        document.getElementById('score').style.color = "green"
    }
}

function startOver() {
    setTimeout(function() {
        location.reload()
    }, 500)
}