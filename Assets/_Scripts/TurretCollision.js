
var explosion : Transform;
static var turretNumbers : int = 9;
var style : GUIStyle;
//var cannon : GUIText;


function OnTriggerEnter( hit : Collider)
{
	if(hit.gameObject.tag == "wormProjectile") //if hit the object-tag "wormProjectile", set dead to true
	{
		Destroy(hit.gameObject); // refers to the projectile
		Instantiate(explosion, gameObject.transform.position, Quaternion.identity); // 3 parameters: object, position and rotation 
		Destroy(gameObject); // refers to the game object that it is attached to
		turretNumbers -= 1;
	}
	
	if( turretNumbers == 0 )
	{
		// If I killed all the turrets in the level, go to the next level
		Application.LoadLevel(4);
	
	}
} 
	
function OnGUI(){
	//GUI.Label(Rect(10,10,200,50),"Score: " + playerScore);
	GUI.Label(Rect(90,85,20,50),"= " + turretNumbers);
	//cannon.text = "= " + turretNumbers;
}	
