function modTick()
{
var px = getPlayerX();
var py = getPlayerY();
var pz = getPlayerZ();
ModPE.showTipMessage("\n\n\n" + "X: " + parseInt(px) + "Y: " + parseInt(py) + "Z: " + parseInt(pz));
}
function newLevel()
{
clientMessage("§aCoordinates §1by §e§lAllMCPE.");
}
