// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"DKTools","status":true,"description":"v.7.0.0 Library for RPG Maker. Made with ♥ by DKPlugins","parameters":{"Functions":"---------------------------------","Check Updates":"{\"Enabled\":\"false\",\"Show New Plugins\":\"false\"}","Debugging Console":"{\"Enabled\":\"false\",\"Open On Error\":\"false\"}","FPS Meter":"{\"Enabled\":\"false\",\"Mode\":\"FPS\",\"Theme\":\"transparent\",\"History\":\"20\"}","Screen Resolution":"{\"Enabled\":\"true\",\"Width\":\"1104\",\"Height\":\"624\"}","Quick Start":"{\"Enabled\":\"true\",\"Scene Name\":\"Scene_Map\",\"Skip Saves\":\"true\"}","Quick Load":"{\"Enabled\":\"false\",\"Key Code\":\"117\",\"Savefile ID\":\"0\"}","Preload Manager":"{\"Enabled\":\"false\",\"Debugging\":\"false\",\"Images\":\"[]\"}","Screenshots":"{\"Enabled\":\"false\",\"Key Code\":\"44\",\"Path\":\"screenshots/\",\"Filename\":\"%year_%month_%day_%hours_%minutes_%seconds.png\",\"Type\":\"png\",\"Quality\":\"0.9\"}","Errors Log":"{\"Enabled\":\"None\",\"Filename\":\"errors_log.txt\",\"File Size\":\"10\"}","Tile Size":"{\"Enabled\":\"false\",\"Size\":\"48\"}","Grid":"{\"Enabled\":\"false\",\"Key Code\":\"118\",\"Grid Color\":\"white\",\"Grid Width\":\"1\",\"Ruler Color\":\"\",\"Ruler Width\":\"3\"}","Image Cache Limit":"{\"Enabled\":\"false\",\"Limit\":\"10000000\"}","Cursor Graphic":"{\"Enabled\":\"false\",\"Graphic\": \"\"}"}},
{"name":"SpeedManager","status":true,"description":"v1.1 Allows you to manage default movement speeds.","parameters":{"Move Speed":"4.5","Dash Speed":"0.5","Boat Speed":"4","Ship Speed":"5","Airship Speed":"6","Agility Based":"false","Distance Per Frame":"Math.pow(2, this.realMoveSpeed()) / 256;"}},
{"name":"JitterFix","status":true,"description":"Fixes Event Jitter / Display Rounding Error.","parameters":{"Tile Size":"48"}},
{"name":"SAN_AnalogMove","status":true,"description":"アナログムーブ 3.1.0\r\nパーティキャラクターの移動をドット移動に変更します。","parameters":{}},
{"name":"Galv_ImageCache","status":true,"description":"(v.1.1) Pre-cache images that cause issues when loading during gameplay","parameters":{"Folder 1":"animations|","Folder 2":"battlebacks1|","Folder 3":"battlebacks2|","Folder 4":"characters|$harpyFly","Folder 5":"enemies|","Folder 6":"faces|","Folder 7":"parallaxes|","Folder 8":"pictures|","Folder 9":"sv_actors|","Folder 10":"sv_enemies|","Folder 11":"system|","Folder 12":"tilesets|","Folder 13":"titles1|","Folder 14":"titles2|","Folder 15":"","Folder 16":"","Folder 17":"","Folder 18":"","Folder 19":"","Folder 20":"","Folder 21":"","Folder 22":"","Folder 23":"","Folder 24":"","Folder 25":""}},
{"name":"YEP_CoreEngine","status":true,"description":"v1.31 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"1108","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Parameters---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Map Optimization---":"","Refresh Update HP":"true","Refresh Update MP":"true","Refresh Update TP":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"255","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_MessageCore","status":true,"description":"v1.19 Adds more features to the Message Window to customized\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"false","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Name CH":"SimHei, Heiti TC, sans-serif","Font Name KR":"Dotum, AppleGothic, sans-serif","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]","Name Box Auto Close":"false"}},
{"name":"YEP_SelfSwVar","status":true,"description":"v1.04 Self Switches and Self Variables functionality\nwithout the need for plugin commands or script calls.","parameters":{}},
{"name":"YEP_MoveRouteCore","status":true,"description":"v1.03 Expand the number of movement options for the move\nroute events using this plugin.","parameters":{}},
{"name":"NearEventSensor","status":true,"description":"周辺イベント感知プラグイン","parameters":{"デフォルトフラッシュ":"true","デフォルトフキダシ":"0","空イベントは無効":"true","感知距離":"5","フラッシュカラー":"{\"Red\":\"255\",\"Green\":\"255\",\"Blue\":\"255\",\"Alpha\":\"150\"}","フラッシュ時間":"60","フキダシ間隔":"15","フキダシ完了までウェイト":"true","向きを考慮":"false"}},
{"name":"MrTS_PopUp","status":true,"description":"Creates pop ups on item pick ups or custom ones as needed.","parameters":{"Pop Speed":"0.75","Pop Delay":"15","Pop Fade Out":"120","Pop Font Type":"GameFont","Pop Font Size":"28","Gold Icon":"17","Quantity Sign":"x"}},
{"name":"MultiTimers","status":true,"description":"Allows more than one timer running at once, with custom commands","parameters":{}},
{"name":"SRD_SuperToolsEngine","status":true,"description":"The heart of all maker-style plugins; it adds a playtesting editor that can be opened with F12.","parameters":{"Connect Editor":"true","Auto Open Window":"false","Auto Move Window":"true","Menu Editor Exempt List":"[\"Window_BattleLog\",\"Window_MapName\"]"}},
{"name":"SRD_HUDMaker","status":true,"description":"Allows developers to create their own map-based HUD through an in-game GUI window!","parameters":{"Active Updating":"false","Show During Events":"transparent","Map Global Condition":"","Battle Global Condition":"","Disable Delete Key":"true"}},
{"name":"SRD_CameraCore","status":true,"description":"Allows developers to preform various camera motions including focusing and zooming.","parameters":{"Default Zoom":"1","Zoom Pictures?":"true","Margin Formula":"(Graphics.width / scale) - Graphics.width","Fix Black Lines":"false"}},
{"name":"SRD_SmoothCamera","status":true,"description":"Gives the camera of your game smoother motion during gameplay and specific camera motions.","parameters":{"Delay Power":"5","Cut Off Value":"0.02"}},
{"name":"YEP_StopMapMovement","status":true,"description":"v1.02 A utility plugin to stop events from automatically\nmoving by themselves all across your map.","parameters":{"Stop During Events":"true","Stop During Message":"true"}},
{"name":"YEP_GridFreeDoodads","status":true,"description":"v1.09 Place Grid-Free Doodads into your game using an\nin-game editor. Static and animated doodads can be used!","parameters":{"---General---":"","Doodads Folder":"img/doodads/","Doodads Smoothing":"false","Alphabetical Settings":"false","---Grid Snap---":"","Default Grid Snap":"false","Grid Snap Width":"48","Grid Snap Height":"48"}},
{"name":"YEP_RegionRestrictions","status":true,"description":"v1.04 Use regions to block out Events and/or the player from\nbeing able to venture into those spots.","parameters":{"Player Restrict":"1","Event Restrict":"30","All Restrict":"0","Player Allow":"0","Event Allow":"0","All Allow":"0"}},
{"name":"YEP_EventRegionTrigger","status":true,"description":"v1.01 Allows events to trigger by being in specific regions\ninstead of needing to exactly next to or on top of them.","parameters":{}}
];
