#pragma strict

<<<<<<< HEAD
static var TEMPO: float; // set duration time in seconds in the Inspector
private var displaySeconds : int;
private var displayMinutes : int;
//var timer : float = 12;

function Update(){

  //timer = TEMPO;
  TEMPO -= Time.deltaTime;
  if (TEMPO > 0){
    displaySeconds = TEMPO % 60;
    displayMinutes = TEMPO / 60;
    guiText.text = String.Format ("{0:00}:{1:00}", displayMinutes, displaySeconds);
    guiText.material.color = Color.white;
  } else {
    guiText.text = "TIME OVER";
      Application.LoadLevel(3);
=======
var timer: float = 300; // set duration time in seconds in the Inspector
private var displaySeconds : int;
private var displayMinutes : int;

function Update(){
  timer -= Time.deltaTime;
  if (timer > 0){
    //guiText.text = timer.ToString("F0");
    displaySeconds = timer % 60;
    displayMinutes = timer / 60;
    guiText.text = String.Format ("{0:00}:{1:00}", displayMinutes, displaySeconds);
    guiText.material.color = Color.black;
  } else {
    guiText.text = "TIME OVER";
    //if (Input.GetKeyDown("x")){ // reload the same level
      //Application.LoadLevel(Application.loadedLevel);
      Application.LoadLevel(2);
    //}
>>>>>>> 83e4d96c1e6898ddd1b7cef1081e1a52570b2746
  }
}