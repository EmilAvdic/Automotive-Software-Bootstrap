var questions = [ 
    {
        prompt: "Which programming language is NOT commonly used in Automotive Software?\n(a) C++\n\
        (b) C#\n(c) Python\n (d) Rust",
        answer: "d"
    },
    {
        prompt: "What is Multimodal mobility?\n(a) It connects previous domains such as public transportation\n\
        (b) It does not exist\n(c) It is used for multimedia\n (d) It connects previous domains",
        answer: "d"   
    },
    {
        prompt: "What is required for Autonomous driving?\n(a) Highly interactive services with multisensor fusion\n\
        (b) Low interactive services with multisensor fusion\n(c) Highly interactive services with single sensor fusion\n\
        (d) Low interactive services with single sensor fusion",
        answer: "a"
    },
    {
        prompt: "What transforms cars into distributed IT - systems?\n(a) Connectivity and infotainment\n\
        (b) Connectivity and autonomous driving\n(c) autonomous driving and infotainment\n (d) Connectivity, autonomous driving and infotainment",
        answer: "a"
    },
    {
        prompt: "Fill in the missing word, Energy efficiency is evolving the classic powertrain toward _____ hybrid and electric engines.\n\
        (a) high - voltage\n (b) high - distance\n(c) low - voltage\n (d) average - voltage",
        answer: "a"
    },
    {
        prompt: "Electronics and software are the basis for _____ in the vehicle.\n\
        (a) upgrades\n (b) new functions\n(c) new layouts\n (d) multimedia",
        answer: "b"
    },
    {
        prompt: "How many control units are nowadays in vehicles?\n\
        (a) about 200\n (b) less than 90\n(c) more than 100\n (d) more than 90",
        answer: "c"
    },
    {
        prompt: "What makes the systems more complex?\n\
        (a) custom Equipment variants\n (b) custom functions\n(c) new algorithms\n (d) new sensors",
        answer: "a"
    },
    {
        prompt: "Which answer does not fit for Vehicle electronics?\n\
        (a) Powertrain & Chasis\n (b) Comfort such as light or a central locking system\n(c) Infrastructure such as security or routing\n\
        (d) Multimedia such as radio or navigation",
        answer: "d"
    },
    {
        prompt: "Which of these is not a new requirement for the software architecture?\n\
        (a) flexibility\n (b) energy efficiency\n(c) robustness\n\
        (d) evolution",
        answer: "d"
    }
]

const Quiz = () =>{
    var score = 0;
    for(var i = 0; i < questions.length; i++)
    {
        var response = window.prompt(questions[i].prompt);
        
        if(response == questions[i].answer)
        {
            score++;
            alert("Correct!");
        }
    
        else{
            alert("Wrong");
        }
    
    }
    
    alert("you got " + score + "/" + questions.length);
    document.getElementById("score").innerHTML = "Score: Out of 10 Questions you got "+score +" right!";
}


function startGame() {
    GetList();
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    questionIndex = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetSate();
    showQuestion(questionsWithAnswers[questionIndex]);
}