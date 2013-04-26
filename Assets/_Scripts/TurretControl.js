#pragma strict

var LookAtTarget:Transform;
var damp = 8.0;
var bulletPrefab:Transform;
var savedTime=0;

function Update () 
{
	if(LookAtTarget)
	{	//define rotation below
		var rotate = Quaternion.LookRotation(LookAtTarget.position - transform.position); //makes it rotate with a lag from target
		
		//code below looks at our current location (1), the rotation that is needed (2) over the time specified (3)
		
		transform.rotation = Quaternion.Slerp(transform.rotation, rotate, Time.deltaTime * damp );
		
		var seconds : int = Time.time; 
		var oddeven = (seconds % 2);
		
		if(oddeven)
		{
			Shoot(seconds);
		}
	}
	//transform.LookAt(LookAtTarget);
	
}

function Shoot(seconds)
{

	if(seconds!=savedTime)
	{
		var bullet = Instantiate(bulletPrefab, transform.Find("spawnPoint2").transform.position, 
							Quaternion.identity);
		
		//adding a tag to the bullet, so the worm is hit by obj of this tag
		bullet.gameObject.tag = "enemyProjectile";	
		bullet.rigidbody.AddForce(transform.forward * 1000);
	
		savedTime=seconds;
	}
}

//check video at:
//http://www.youtube.com/watch?annotation_id=annotation_400677&feature=iv&src_vid=u8t3fdKhDxg&v=cyXV3dUU30w

