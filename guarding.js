
 module.exports = function (creep) {
     
   //	if(creep.energy == 0) {
	 //   creep.moveTo(Game.spawns.Spawn1);
	//	Game.spawns.Spawn1.transferEnergy(creep);
  //  }
   // else{
    
      var targets = creep.pos.findInRange(Game.HOSTILE_CREEPS, 3);
      if(targets.length > 0) {
         creep.rangedAttack(targets[0]);
         creep.rangedAttack(targets[0]);
      }
   // }
}
