var isQuitButton = false;

function OnMouseEnter()
{
	//Change the color of the text
	renderer.material.color = Color.green;
}

function OnMouseExit()
{
	//Change the color of the text
	renderer.material.color = Color.white;
} 

function OnMouseUp()
{
	// Are we dealing with a quit button?
	if( isQuitButton )
	{
		//quit the game
		Application.Quit();
	}
	else
	{
		//load level
		HealthControl.LIVES = 3;
		Application.LoadLevel(1);
	}
}

// Este comentario eh para testar o gitHub