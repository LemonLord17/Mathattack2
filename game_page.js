Player_1_name = localStorage.getItem("Player1_Name_input");
Player_2_name = localStorage.getItem("Player2_Name_input");

Player1_score = 0;
Player2_score = 0;

document.getElementById("Player_1_name").innerHTML=Player_1_name+ " : ";
document.getElementById("player_1_score").innerHTML=Player1_score;

document.getElementById("Player_2_name").innerHTML=Player_2_name+ " : ";
document.getElementById("player_2_score").innerHTML=Player2_score;

document.getElementById("Player_Question").innerHTML="Question Turn- "+ Player_1_name;
document.getElementById("Player_Answer").innerHTML="Answer Turn- "+ Player_2_name;


function send(){

 number_1 =  document.getElementById("number1").value;
 number_2 =  document.getElementById("number2").value;

localStorage.setItem("number1",number_1)
localStorage.setItem("number2",number_2)

actual_answer = parseInt(number_1) * parseInt(number_2);

    Question_word="<h4 id='word_display'>" + number_1 + "X" + number_2 + "</h4>";
    input_box="<br>Answer: <input id='input_check_box' type='text'>";
    check_button=" <br> <button class='btn btn-info' onclick='check()'> Check </button>";
    row=Question_word + input_box + check_button;

question_turn = "player_2"
answer_turn = "player_1"

document.getElementById("output").innerHTML=row
}


function check(){

    get_answer = document.getElementById("input_check_box").value;
    console.log(get_answer)
    console.log(actual_answer)
    if(get_answer == actual_answer){
        if(answer_turn == "player_1"){
        Player1_score=Player1_score+1;
     document.getElementById("player_1_score").innerHTML=Player1_score;
     console.log("hi")

        }
    
    else{
        Player2_score=Player2_score+1;
        document.getElementById("player_2_score").innerHTML=Player2_score  ; 
    }
    }
     if(question_turn == "player_1"){
         console.log(Player_2_name)
    question_turn="player_2";
    document.getElementById("Player_Question").innerHTML="Question Turn- "+ Player_2_name;
    
        
     }
     else{
    
        question_turn="player_1";
        document.getElementById("Player_Question").innerHTML="Question Turn- "+ Player_1_name;
        
     }
     if(answer_turn == "player_1"){
        answer_turn="player_2";
        document.getElementById("Player_Answer").innerHTML="Answer Turn- "+ Player_2_name
        
            
         }
         else{
        
            answer_turn="player_1";
            document.getElementById("Player_Answer").innerHTML="Answer Turn- "+ Player_1_name
            
         }
    
    document.getElementById("output").innerHTML=""
    }