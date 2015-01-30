module.exports = function (creep) {

	if(creep.energy < creep.energyCapacity) {

	    var target2=null;
	    target2 = creep.pos.findNearest(Game.DROPPED_ENERGY);
	    
	    if(target2){
	        creep.moveTo(target2);
	        creep.pickup(target2);
        }
        else{
             var target = creep.pos.findNearest(Game.SOURCES);
            creep.moveTo(target);
	        creep.harvest(target);
        }
	}
    else
    {
	 	creep.moveTo(Game.spawns.Spawn1);
	    creep.transferEnergy(Game.spawns.Spawn1)
    }
}
