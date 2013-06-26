var isQuitButton = false;
var isMenuButton = false;
var isEasyButton = false;
var isNormalButton = false;
var isHardButton = false;
static var MEMTIME: float;
//var isPlayButton = false;

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
	if( isMenuButton )
	{
		//carega menu
		Application.LoadLevel(1);
	}else if( isQuitButton )
	{
		//quit the game
		Application.Quit();
	}else
	{
		//load level
		TurretCollision.turretNumbers = 9;
		HealthControl.LIVES = 3;
		HealthControl.HITS = 0;
		if(isEasyButton)
		{
			TimerControl.TEMPO = 180;	
			MEMTIME = 180;
		}else if(isNormalButton)
		{
			TimerControl.TEMPO = 120;	
			MEMTIME = 120;
		}else if(isHardButton)
		{
			TimerControl.TEMPO = 45;	
			MEMTIME = 45;
		}else{
			TimerControl.TEMPO = MEMTIME;
		}
		
		Application.LoadLevel(2);
	}
	
	
}