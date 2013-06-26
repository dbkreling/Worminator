#pragma strict

function OnGUI () {

if( GUI.Button(Rect(10,10,300,50),"Press to Play Again!" )){

	Application.LoadLevel(1);	

	}
}