#pragma strict

var posX :float;
var posY :float;

var height :float;
var width :float;

var screenHeight :float;
var screenWidth :float;

var halfScreenHeight :float;
var halfScreenWidth :float;

function Start () {
	width = 100;
	height = 50;
	
	screenHeight = Screen.height;
	screenWidth = Screen.width;

	halfScreenHeight = screenHeight/2;
	halfScreenWidth = screenWidth/2;
}

function Update () {

}

function OnGUI(){
	
	posX = halfScreenWidth - width/2;
	posY = halfScreenHeight - height/2;
	
	if(GUI.Button(Rect(50,posY+260,width,height),'Back')){
		Application.LoadLevel('MenuPrincipal');
	}
}