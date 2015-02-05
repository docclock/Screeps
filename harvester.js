module.exports = function (creep) {

	if(creep.energy < creep.energyCapacity) {
	   
	    if( creep.memory.source==undefined){
          findbestsource(creep);
	    }
        else if( creep.memory.source!=undefined){
            
            var sources = creep.room.find(Game.SOURCES);
            var target= sources[0];
            for(var i=0;i< sources.length; i++){
                if(sources[i].id==creep.memory.source){
                    target=sources[i];
                    break;
                }
            }
            {
              creep.moveTo(target);
	          creep.harvest(target);
            }
        }
	}
    else if(creep.energy>creep.energyCapacity/2)
    {
	    creep.dropEnergy();
    }
    if(creep.getActiveBodyparts(Game.WORK) == 0 ||
        creep.getActiveBodyparts(Game.MOVE) == 0 ||
        creep.getActiveBodyparts(Game.CARRY) == 0){
        creep.suicide();
    }
}

findbestsource = function(creep){
    
   var nearest = creep.pos.findClosest(Game.SOURCES);
   var done=false;
   var alreadytaken=false;
   var sources = creep.room.find(Game.SOURCES);
    
   for(var i=0;i< Game.creeps.length; i++){
       
       var ccr = Game.creeps[i];
         if(ccr.memory.source==nearest.id && 
            creep.id!=ccr.memory.source){
             
               alreadytaken=true;
          }
   }
   if(nearest && !alreadytaken){
	        creep.memory.source=nearest.id;
	        done=true;
   }
   
    if(!done){
        
    var taken=false;
    
    for(var y=0;y< sources.length; y++)
    {
        var target= sources[y];
    
         for(var i=0;i< Game.creeps.length; i++){
            if(Game.creeps[i].memory.source==target.id && 
            creep.id!=Game.creeps[i].memory.source){
                taken=true;
                break;
            }
        }
        if(target && !taken){
	        creep.memory.source=target.id;
       }
    }
    }
}
