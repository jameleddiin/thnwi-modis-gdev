gdjs.title_32screenCode = {};
gdjs.title_32screenCode.localVariables = [];
gdjs.title_32screenCode.GDPlayButtonObjects1= [];
gdjs.title_32screenCode.GDPlayButtonObjects2= [];
gdjs.title_32screenCode.GDplayerObjects1= [];
gdjs.title_32screenCode.GDplayerObjects2= [];
gdjs.title_32screenCode.GDgroundObjects1= [];
gdjs.title_32screenCode.GDgroundObjects2= [];
gdjs.title_32screenCode.GDmodulObjects1= [];
gdjs.title_32screenCode.GDmodulObjects2= [];
gdjs.title_32screenCode.GDcyber_9595ratObjects1= [];
gdjs.title_32screenCode.GDcyber_9595ratObjects2= [];
gdjs.title_32screenCode.GD_95252kObjects1= [];
gdjs.title_32screenCode.GD_95252kObjects2= [];
gdjs.title_32screenCode.GDheartObjects1= [];
gdjs.title_32screenCode.GDheartObjects2= [];
gdjs.title_32screenCode.GDKeyboardObjects1= [];
gdjs.title_32screenCode.GDKeyboardObjects2= [];
gdjs.title_32screenCode.GDthrowable_9595keyboardObjects1= [];
gdjs.title_32screenCode.GDthrowable_9595keyboardObjects2= [];
gdjs.title_32screenCode.GDinactive_9595heartObjects1= [];
gdjs.title_32screenCode.GDinactive_9595heartObjects2= [];
gdjs.title_32screenCode.GDtitleObjects1= [];
gdjs.title_32screenCode.GDtitleObjects2= [];
gdjs.title_32screenCode.GDMouseCursorObjects1= [];
gdjs.title_32screenCode.GDMouseCursorObjects2= [];
gdjs.title_32screenCode.GDwallObjects1= [];
gdjs.title_32screenCode.GDwallObjects2= [];
gdjs.title_32screenCode.GDgrasObjects1= [];
gdjs.title_32screenCode.GDgrasObjects2= [];
gdjs.title_32screenCode.GDgras_9595rowObjects1= [];
gdjs.title_32screenCode.GDgras_9595rowObjects2= [];
gdjs.title_32screenCode.GDwormObjects1= [];
gdjs.title_32screenCode.GDwormObjects2= [];


gdjs.title_32screenCode.mapOfGDgdjs_9546title_959532screenCode_9546GDMouseCursorObjects1Objects = Hashtable.newFrom({"MouseCursor": gdjs.title_32screenCode.GDMouseCursorObjects1});
gdjs.title_32screenCode.mapOfGDgdjs_9546title_959532screenCode_9546GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.title_32screenCode.GDPlayButtonObjects1});
gdjs.title_32screenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MouseCursor"), gdjs.title_32screenCode.GDMouseCursorObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.title_32screenCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11968748);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.title_32screenCode.mapOfGDgdjs_9546title_959532screenCode_9546GDMouseCursorObjects1Objects, gdjs.title_32screenCode.mapOfGDgdjs_9546title_959532screenCode_9546GDPlayButtonObjects1Objects, false, runtimeScene, false);
isConditionTrue_0 = isConditionTrue_1;
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "prototype_run", true);
}}

}


};

gdjs.title_32screenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.title_32screenCode.GDPlayButtonObjects1.length = 0;
gdjs.title_32screenCode.GDPlayButtonObjects2.length = 0;
gdjs.title_32screenCode.GDplayerObjects1.length = 0;
gdjs.title_32screenCode.GDplayerObjects2.length = 0;
gdjs.title_32screenCode.GDgroundObjects1.length = 0;
gdjs.title_32screenCode.GDgroundObjects2.length = 0;
gdjs.title_32screenCode.GDmodulObjects1.length = 0;
gdjs.title_32screenCode.GDmodulObjects2.length = 0;
gdjs.title_32screenCode.GDcyber_9595ratObjects1.length = 0;
gdjs.title_32screenCode.GDcyber_9595ratObjects2.length = 0;
gdjs.title_32screenCode.GD_95252kObjects1.length = 0;
gdjs.title_32screenCode.GD_95252kObjects2.length = 0;
gdjs.title_32screenCode.GDheartObjects1.length = 0;
gdjs.title_32screenCode.GDheartObjects2.length = 0;
gdjs.title_32screenCode.GDKeyboardObjects1.length = 0;
gdjs.title_32screenCode.GDKeyboardObjects2.length = 0;
gdjs.title_32screenCode.GDthrowable_9595keyboardObjects1.length = 0;
gdjs.title_32screenCode.GDthrowable_9595keyboardObjects2.length = 0;
gdjs.title_32screenCode.GDinactive_9595heartObjects1.length = 0;
gdjs.title_32screenCode.GDinactive_9595heartObjects2.length = 0;
gdjs.title_32screenCode.GDtitleObjects1.length = 0;
gdjs.title_32screenCode.GDtitleObjects2.length = 0;
gdjs.title_32screenCode.GDMouseCursorObjects1.length = 0;
gdjs.title_32screenCode.GDMouseCursorObjects2.length = 0;
gdjs.title_32screenCode.GDwallObjects1.length = 0;
gdjs.title_32screenCode.GDwallObjects2.length = 0;
gdjs.title_32screenCode.GDgrasObjects1.length = 0;
gdjs.title_32screenCode.GDgrasObjects2.length = 0;
gdjs.title_32screenCode.GDgras_9595rowObjects1.length = 0;
gdjs.title_32screenCode.GDgras_9595rowObjects2.length = 0;
gdjs.title_32screenCode.GDwormObjects1.length = 0;
gdjs.title_32screenCode.GDwormObjects2.length = 0;

gdjs.title_32screenCode.eventsList0(runtimeScene);
gdjs.title_32screenCode.GDPlayButtonObjects1.length = 0;
gdjs.title_32screenCode.GDPlayButtonObjects2.length = 0;
gdjs.title_32screenCode.GDplayerObjects1.length = 0;
gdjs.title_32screenCode.GDplayerObjects2.length = 0;
gdjs.title_32screenCode.GDgroundObjects1.length = 0;
gdjs.title_32screenCode.GDgroundObjects2.length = 0;
gdjs.title_32screenCode.GDmodulObjects1.length = 0;
gdjs.title_32screenCode.GDmodulObjects2.length = 0;
gdjs.title_32screenCode.GDcyber_9595ratObjects1.length = 0;
gdjs.title_32screenCode.GDcyber_9595ratObjects2.length = 0;
gdjs.title_32screenCode.GD_95252kObjects1.length = 0;
gdjs.title_32screenCode.GD_95252kObjects2.length = 0;
gdjs.title_32screenCode.GDheartObjects1.length = 0;
gdjs.title_32screenCode.GDheartObjects2.length = 0;
gdjs.title_32screenCode.GDKeyboardObjects1.length = 0;
gdjs.title_32screenCode.GDKeyboardObjects2.length = 0;
gdjs.title_32screenCode.GDthrowable_9595keyboardObjects1.length = 0;
gdjs.title_32screenCode.GDthrowable_9595keyboardObjects2.length = 0;
gdjs.title_32screenCode.GDinactive_9595heartObjects1.length = 0;
gdjs.title_32screenCode.GDinactive_9595heartObjects2.length = 0;
gdjs.title_32screenCode.GDtitleObjects1.length = 0;
gdjs.title_32screenCode.GDtitleObjects2.length = 0;
gdjs.title_32screenCode.GDMouseCursorObjects1.length = 0;
gdjs.title_32screenCode.GDMouseCursorObjects2.length = 0;
gdjs.title_32screenCode.GDwallObjects1.length = 0;
gdjs.title_32screenCode.GDwallObjects2.length = 0;
gdjs.title_32screenCode.GDgrasObjects1.length = 0;
gdjs.title_32screenCode.GDgrasObjects2.length = 0;
gdjs.title_32screenCode.GDgras_9595rowObjects1.length = 0;
gdjs.title_32screenCode.GDgras_9595rowObjects2.length = 0;
gdjs.title_32screenCode.GDwormObjects1.length = 0;
gdjs.title_32screenCode.GDwormObjects2.length = 0;


return;

}

gdjs['title_32screenCode'] = gdjs.title_32screenCode;
