function add(){
    var player1=  document.getElementById("Player1_Name_input").value;
    var player2=  document.getElementById("Player2_Name_input").value;
    
    localStorage.setItem("Player1_Name_input",player1);
    localStorage.setItem("Player2_Name_input",player2);
    
window.location="game.html"    
}