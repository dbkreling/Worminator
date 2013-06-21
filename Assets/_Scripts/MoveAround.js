#pragma strict
//FOR MOVING
var speed : float = 3.0; 		
var rotateSpeed : float = 3.0;

//FOR SHOOTING
var bulletPrefab:Transform; 	//turns bulletPrefab into x,y,z so it can be used in the world

//FOR DYING
static var dead = false;		

//for getting hit
var tumbleSpeed = 800; 			//spinning speed
var decreaseTime = 0.3;		//changes the amount of rate of the rotating speed (spinning)
var decayTime = 2;			//changes the spinning speed (??)
static var gotHit = false;
//will make a backup of all these above variables in an array, for keeping the speed set up:
private var backup = [tumbleSpeed, decreaseTime, decayTime];


function LateUpdate() //is being checked after the Update function
{
	if(dead) //if we are dead, the object - worm - will be moved to the point 0,4,0
	{
		transform.position = Vector3(0,4,0);
		gameObject.Find("Main Camera").transform.position = Vector3(0,4,-10);
		dead = false;
		
	}
	
	if(gotHit)
	{
		if(tumbleSpeed < 1) //triggered when we stop tumbling around
		{
			//we're not hit anymore... reset and get back in the game
			tumbleSpeed = backup[0];
			decreaseTime = backup[1];
			decayTime = backup[2];
			gotHit=false;
			
		}
		else //if we're still spinning around...
		{
			//we're hit! Spin our character around
			
			transform.Rotate(0,tumbleSpeed * Time.deltaTime,0, Space.World);
			tumbleSpeed = tumbleSpeed - decreaseTime; //repetition -with rendering - of this script makes character stop rotating
			decreaseTime += decayTime;
		}
	}
}



//function OnControllerColliderHit(hit:ControllerColliderHit) //gonna do something when it hits something - defined in the if below
function OnTriggerEnter( hit : Collider)
{
	if(hit.gameObject.tag == "fallout") //if hit the object-tag fallout, set dead to true
	{
		dead = true;
		//subtract life here
		HealthControl.LIVES -= 1;
	}
	
	//if the variable hit is a "gameObject.tag" called enemyProjectile
	if(hit.gameObject.tag == "enemyProjectile") 
	{
		gotHit = true;
		HealthControl.HITS += 1;
		Destroy(hit.gameObject);
	}
}




function Update () {

	var controller : CharacterController = GetComponent(CharacterController);
	
	//rotate around y axis
	transform.Rotate(0, Input.GetAxis("Horizontal") * rotateSpeed,0);
	
	//move forward / backward
	var forward = transform.TransformDirection(Vector3.forward);
	var curSpeed = speed * Input.GetAxis("Vertical");
	
	controller.SimpleMove(forward * curSpeed);
	
	//Shooting!
	if(Input.GetButtonDown("Jump")) //by default, Jump is spacebar
	{
		var bullet = Instantiate(bulletPrefab,
								transform.Find("spawnPoint").transform.position, 
								Quaternion.identity); //Intantiate needs 3 variables (1,2,3), 1-prefab(game object), 2-x,y,z(position), 3-angles(rotation)
		bullet.tag = "wormProjectile"; 
				
		// GameObject.Find will search in the list of game objects for the object passed as argument, and sill find the position of the object.
		bullet.rigidbody.AddForce(transform.forward * 2000);
	}

}




@script RequireComponent(CharacterController);

//http://www.youtube.com/watch?v=wfpZ7_aFoko&feature=relmfu