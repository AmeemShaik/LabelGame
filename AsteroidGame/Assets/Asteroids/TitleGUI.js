//var cubeRenderer:Renderer;
var buttonWidth:int = 200;
var buttonHeight:int = 50;
var spacing:int = 100;
var titleMenu : boolean = true;
var popupDifficulty : boolean = false;
var enterName : boolean = false;
var difficulty;
public var ammo;
public var playerName = "";

function OnGUI() {
	if(titleMenu){
		GUILayout.BeginArea(Rect(Screen.width/2 - buttonWidth/2, Screen.height/2 - 200, buttonWidth, 400));
			if(GUILayout.Button("Start Game", GUILayout.Height(buttonHeight))){
				enterName = true;
				titleMenu = false;
			}
			GUILayout.Space(spacing);
			if(GUILayout.Button("Tutorial", GUILayout.Height(buttonHeight))){
				Application.LoadLevel("Tutorial");
			}
			GUILayout.Space(spacing);
			if(GUILayout.Button("Exit", GUILayout.Height(buttonHeight))){
				Application.Quit();
			}
		GUILayout.EndArea();
	}
	
	if(popupDifficulty){
		var spacing = 50;
		GUILayout.BeginArea(Rect(Screen.width/2 - buttonWidth/2, Screen.height/2 - 200, buttonWidth, 400));
		if(GUILayout.Button("Easy", GUILayout.Height(buttonHeight))){
			difficulty = 1;
			ammo = 4;
			PlayerPrefs.SetInt("difficulty", difficulty);
			PlayerPrefs.SetInt("ammo", ammo);
			Application.LoadLevel("mainLevel");
		}
		GUILayout.Space(spacing);
		if(GUILayout.Button("Medium", GUILayout.Height(buttonHeight))){
			difficulty = 2;
			ammo = 3;
			PlayerPrefs.SetInt("difficulty", difficulty);
			PlayerPrefs.SetInt("ammo", ammo);
			Application.LoadLevel("mainLevel");
		}
		GUILayout.Space(spacing);
		if(GUILayout.Button("Hard", GUILayout.Height(buttonHeight))){
			ammo = 2;
			difficulty = 3;
			PlayerPrefs.SetInt("difficulty", difficulty);
			PlayerPrefs.SetInt("ammo", ammo);
			Application.LoadLevel("mainLevel");
		}
		GUILayout.Space(spacing);
		if(GUILayout.Button("Go Back", GUILayout.Height(buttonHeight))){
			popupDifficulty = false;
			titleMenu = true;
		}
		GUILayout.EndArea();
	}
	
	if(enterName){
		GUILayout.BeginArea(new Rect(Screen.width/2-buttonWidth/2, Screen.height/2-buttonHeight/2, buttonWidth, buttonHeight*5));
			GUILayout.BeginVertical();
				GUILayout.Label("Enter your name, Space Cadet.");
				playerName = GUILayout.TextArea(playerName, 20);
				if(GUILayout.Button("Go", GUILayout.Height(buttonHeight))){
					PlayerPrefs.SetString("playerName", playerName);
					popupDifficulty = true;
					enterName = false;
				}
			GUILayout.EndVertical();
		GUILayout.EndArea();
	}
}