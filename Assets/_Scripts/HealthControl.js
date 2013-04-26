#pragma strict

var health1 : Texture2D; //one life left
var health2 : Texture2D; //two lives left
var health3 : Texture2D; //three lives left

var BodyPart1 : Transform;
var BodyPart2 : Transform;

static var LIVES = 3; //global variable - static - every other script can see it.
static var HITS = 0;

function Update () 
{
	print("Lives: " + LIVES + " Hits: " + HITS); //
	
	switch(LIVES) //mix of `if/else` statements
	{
		case 3:
			guiTexture.texture=health3;
		break;
		
		case 2:
			guiTexture.texture=health2;
		break;
		
		case 1:
			guiTexture.texture=health1;
			
		break;
		
		case 0:
			//add game over script
			Application.LoadLevel(0);
		break;
	}
	
	switch(HITS) //mix of `if/else` statements
	{
		case 1:
			//disable bodypart 2, the last one
			BodyPart2.renderer.enabled = false; // just making it invisible, but it's still there
		break;
		
		case 2:
			BodyPart1.renderer.enabled = false;
			BodyPart2.renderer.enabled = false;
		break;
		
		case 3:
			LIVES -= 1;
			HITS = 0;
			MoveAround.dead = true;
			BodyPart1.renderer.enabled = true;
			BodyPart2.renderer.enabled = true;
		break;
		
		case 0:
			//add game over script
			
		break;
	}
	
}