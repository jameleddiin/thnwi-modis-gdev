gdjs.end_95screenCode = {};
gdjs.end_95screenCode.localVariables = [];
gdjs.end_95screenCode.GDendObjects1= [];
gdjs.end_95screenCode.GDendObjects2= [];
gdjs.end_95screenCode.GDNewSpriteObjects1= [];
gdjs.end_95screenCode.GDNewSpriteObjects2= [];
gdjs.end_95screenCode.GDCloseButtonObjects1= [];
gdjs.end_95screenCode.GDCloseButtonObjects2= [];
gdjs.end_95screenCode.GDcongratsObjects1= [];
gdjs.end_95screenCode.GDcongratsObjects2= [];
gdjs.end_95screenCode.GDplayerObjects1= [];
gdjs.end_95screenCode.GDplayerObjects2= [];
gdjs.end_95screenCode.GDgroundObjects1= [];
gdjs.end_95screenCode.GDgroundObjects2= [];
gdjs.end_95screenCode.GDmodulObjects1= [];
gdjs.end_95screenCode.GDmodulObjects2= [];
gdjs.end_95screenCode.GDcyber_9595ratObjects1= [];
gdjs.end_95screenCode.GDcyber_9595ratObjects2= [];
gdjs.end_95screenCode.GD_95252kObjects1= [];
gdjs.end_95screenCode.GD_95252kObjects2= [];
gdjs.end_95screenCode.GDheartObjects1= [];
gdjs.end_95screenCode.GDheartObjects2= [];
gdjs.end_95screenCode.GDKeyboardObjects1= [];
gdjs.end_95screenCode.GDKeyboardObjects2= [];
gdjs.end_95screenCode.GDthrowable_9595keyboardObjects1= [];
gdjs.end_95screenCode.GDthrowable_9595keyboardObjects2= [];
gdjs.end_95screenCode.GDinactive_9595heartObjects1= [];
gdjs.end_95screenCode.GDinactive_9595heartObjects2= [];
gdjs.end_95screenCode.GDtitleObjects1= [];
gdjs.end_95screenCode.GDtitleObjects2= [];
gdjs.end_95screenCode.GDMouseCursorObjects1= [];
gdjs.end_95screenCode.GDMouseCursorObjects2= [];
gdjs.end_95screenCode.GDwallObjects1= [];
gdjs.end_95screenCode.GDwallObjects2= [];
gdjs.end_95screenCode.GDgrasObjects1= [];
gdjs.end_95screenCode.GDgrasObjects2= [];
gdjs.end_95screenCode.GDgras_9595rowObjects1= [];
gdjs.end_95screenCode.GDgras_9595rowObjects2= [];
gdjs.end_95screenCode.GDwormObjects1= [];
gdjs.end_95screenCode.GDwormObjects2= [];


gdjs.end_95screenCode.mapOfGDgdjs_9546end_959595screenCode_9546GDMouseCursorObjects1Objects = Hashtable.newFrom({"MouseCursor": gdjs.end_95screenCode.GDMouseCursorObjects1});
gdjs.end_95screenCode.mapOfGDgdjs_9546end_959595screenCode_9546GDCloseButtonObjects1Objects = Hashtable.newFrom({"CloseButton": gdjs.end_95screenCode.GDCloseButtonObjects1});
gdjs.end_95screenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CloseButton"), gdjs.end_95screenCode.GDCloseButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("MouseCursor"), gdjs.end_95screenCode.GDMouseCursorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11480988);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.end_95screenCode.mapOfGDgdjs_9546end_959595screenCode_9546GDMouseCursorObjects1Objects, gdjs.end_95screenCode.mapOfGDgdjs_9546end_959595screenCode_9546GDCloseButtonObjects1Objects, false, runtimeScene, false);
isConditionTrue_0 = isConditionTrue_1;
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.end_95screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.end_95screenCode.GDendObjects1.length = 0;
gdjs.end_95screenCode.GDendObjects2.length = 0;
gdjs.end_95screenCode.GDNewSpriteObjects1.length = 0;
gdjs.end_95screenCode.GDNewSpriteObjects2.length = 0;
gdjs.end_95screenCode.GDCloseButtonObjects1.length = 0;
gdjs.end_95screenCode.GDCloseButtonObjects2.length = 0;
gdjs.end_95screenCode.GDcongratsObjects1.length = 0;
gdjs.end_95screenCode.GDcongratsObjects2.length = 0;
gdjs.end_95screenCode.GDplayerObjects1.length = 0;
gdjs.end_95screenCode.GDplayerObjects2.length = 0;
gdjs.end_95screenCode.GDgroundObjects1.length = 0;
gdjs.end_95screenCode.GDgroundObjects2.length = 0;
gdjs.end_95screenCode.GDmodulObjects1.length = 0;
gdjs.end_95screenCode.GDmodulObjects2.length = 0;
gdjs.end_95screenCode.GDcyber_9595ratObjects1.length = 0;
gdjs.end_95screenCode.GDcyber_9595ratObjects2.length = 0;
gdjs.end_95screenCode.GD_95252kObjects1.length = 0;
gdjs.end_95screenCode.GD_95252kObjects2.length = 0;
gdjs.end_95screenCode.GDheartObjects1.length = 0;
gdjs.end_95screenCode.GDheartObjects2.length = 0;
gdjs.end_95screenCode.GDKeyboardObjects1.length = 0;
gdjs.end_95screenCode.GDKeyboardObjects2.length = 0;
gdjs.end_95screenCode.GDthrowable_9595keyboardObjects1.length = 0;
gdjs.end_95screenCode.GDthrowable_9595keyboardObjects2.length = 0;
gdjs.end_95screenCode.GDinactive_9595heartObjects1.length = 0;
gdjs.end_95screenCode.GDinactive_9595heartObjects2.length = 0;
gdjs.end_95screenCode.GDtitleObjects1.length = 0;
gdjs.end_95screenCode.GDtitleObjects2.length = 0;
gdjs.end_95screenCode.GDMouseCursorObjects1.length = 0;
gdjs.end_95screenCode.GDMouseCursorObjects2.length = 0;
gdjs.end_95screenCode.GDwallObjects1.length = 0;
gdjs.end_95screenCode.GDwallObjects2.length = 0;
gdjs.end_95screenCode.GDgrasObjects1.length = 0;
gdjs.end_95screenCode.GDgrasObjects2.length = 0;
gdjs.end_95screenCode.GDgras_9595rowObjects1.length = 0;
gdjs.end_95screenCode.GDgras_9595rowObjects2.length = 0;
gdjs.end_95screenCode.GDwormObjects1.length = 0;
gdjs.end_95screenCode.GDwormObjects2.length = 0;

gdjs.end_95screenCode.eventsList0(runtimeScene);
gdjs.end_95screenCode.GDendObjects1.length = 0;
gdjs.end_95screenCode.GDendObjects2.length = 0;
gdjs.end_95screenCode.GDNewSpriteObjects1.length = 0;
gdjs.end_95screenCode.GDNewSpriteObjects2.length = 0;
gdjs.end_95screenCode.GDCloseButtonObjects1.length = 0;
gdjs.end_95screenCode.GDCloseButtonObjects2.length = 0;
gdjs.end_95screenCode.GDcongratsObjects1.length = 0;
gdjs.end_95screenCode.GDcongratsObjects2.length = 0;
gdjs.end_95screenCode.GDplayerObjects1.length = 0;
gdjs.end_95screenCode.GDplayerObjects2.length = 0;
gdjs.end_95screenCode.GDgroundObjects1.length = 0;
gdjs.end_95screenCode.GDgroundObjects2.length = 0;
gdjs.end_95screenCode.GDmodulObjects1.length = 0;
gdjs.end_95screenCode.GDmodulObjects2.length = 0;
gdjs.end_95screenCode.GDcyber_9595ratObjects1.length = 0;
gdjs.end_95screenCode.GDcyber_9595ratObjects2.length = 0;
gdjs.end_95screenCode.GD_95252kObjects1.length = 0;
gdjs.end_95screenCode.GD_95252kObjects2.length = 0;
gdjs.end_95screenCode.GDheartObjects1.length = 0;
gdjs.end_95screenCode.GDheartObjects2.length = 0;
gdjs.end_95screenCode.GDKeyboardObjects1.length = 0;
gdjs.end_95screenCode.GDKeyboardObjects2.length = 0;
gdjs.end_95screenCode.GDthrowable_9595keyboardObjects1.length = 0;
gdjs.end_95screenCode.GDthrowable_9595keyboardObjects2.length = 0;
gdjs.end_95screenCode.GDinactive_9595heartObjects1.length = 0;
gdjs.end_95screenCode.GDinactive_9595heartObjects2.length = 0;
gdjs.end_95screenCode.GDtitleObjects1.length = 0;
gdjs.end_95screenCode.GDtitleObjects2.length = 0;
gdjs.end_95screenCode.GDMouseCursorObjects1.length = 0;
gdjs.end_95screenCode.GDMouseCursorObjects2.length = 0;
gdjs.end_95screenCode.GDwallObjects1.length = 0;
gdjs.end_95screenCode.GDwallObjects2.length = 0;
gdjs.end_95screenCode.GDgrasObjects1.length = 0;
gdjs.end_95screenCode.GDgrasObjects2.length = 0;
gdjs.end_95screenCode.GDgras_9595rowObjects1.length = 0;
gdjs.end_95screenCode.GDgras_9595rowObjects2.length = 0;
gdjs.end_95screenCode.GDwormObjects1.length = 0;
gdjs.end_95screenCode.GDwormObjects2.length = 0;


return;

}

gdjs['end_95screenCode'] = gdjs.end_95screenCode;
