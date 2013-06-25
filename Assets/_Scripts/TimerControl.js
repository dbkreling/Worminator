#pragma strict

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
  }
}