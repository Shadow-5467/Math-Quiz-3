player1 = localStorage.getItem("Player1");
player2 = localStorage.getItem("Player2");

player1score = 0;
player2score = 0;

document.getElementById("player1_name").innerHTML = player1 + " : "; 
document.getElementById("player2_name").innerHTML = player2 + " : ";

document.getElementById("player1_score").innerHTML = player1score ;  
document.getElementById("player2_score").innerHTML = player2score ;  

document.getElementById("player_question").innerHTML = "questionturn - " + player1 ;
document.getElementById("player_question").innerHTML = "questionturn - " + player2 ;  