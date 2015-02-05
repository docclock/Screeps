module.exports = function (creep) {
     
 //	if(creep.energy == 0) {
	 //   creep.moveTo(Game.spawns.Spawn1);
	//	Game.spawns.Spawn1.transferEnergy(creep);
   // }
    	
    for(var i in Game.creeps) {
    
	  var target = Game.creeps[i];
    
      if(target.my && target.hits < target.hitsMax && target!= creep &&
      target.memory.role=='guarding') {
        creep.moveTo(target);
        creep.heal(target);
      }
    }
    
    if(creep.getActiveBodyparts(Game.HEAL) == 0 ||
        creep.getActiveBodyparts(Game.MOVE) == 0 ){
        creep.suicide();
    }
}
