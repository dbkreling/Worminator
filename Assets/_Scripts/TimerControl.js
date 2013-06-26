#pragma strict

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
  }
}