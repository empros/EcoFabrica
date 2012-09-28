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
	width = 50;
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
	
	width = 160;height = 160;
	posX = halfScreenWidth - width/2;posY = halfScreenHeight - height/2;
	if(GUI.Button(Rect(posX,posY+160,width,height),'New Game')){
		Application.LoadLevel('Dashboard');
	}
	
	width = 80;height = 50;
	posX = halfScreenWidth - width/2;posY = halfScreenHeight - height/2;
	if(GUI.Button(Rect(60,posY+40,width,height),'Volume')){
	
	}
	
	width = 40;height = 40;
	posX = halfScreenWidth - width/2;posY = halfScreenHeight - height/2;
	if(GUI.Button(Rect(50,posY+110,40,40),'pt')){
	
	}
	
	width = 40;height = 40;
	posX = halfScreenWidth - width/2;posY = halfScreenHeight - height/2;
	if(GUI.Button(Rect(100,posY+110,40,40),'en')){
	
	}
	
	width = 50;height = 50;
	posX = halfScreenWidth - width/2;posY = halfScreenHeight - height/2;
	if(GUI.Button(Rect(70,posY+200,width,height),'Options')){
	
	}
	
	width = 50;height = 50;
	posX = halfScreenWidth - width/2;posY = halfScreenHeight - height/2;
	if(GUI.Button(Rect(50,posY+260,width,height),'Exit')){
		Application.Quit();
	}
}