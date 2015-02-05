 module.exports = function (creep) {
     
     var target=null;
     var spawn = Game.spawns.Spawn1;
     var closestE = spawn.pos.findClosest(Game.HOSTILE_CREEPS);
  
     if(closestE){
        target = closestE;
     }
     else{
         var targets = creep.pos.findClosest(Game.HOSTILE_CREEPS);
         if(targets){
             target = targets[0];
         }
   }
    if(target){
         
        //if(!creep.pos.inRangeTo(target.pos,3)){
            
            creep.moveTo(target);
       // }
        creep.attack(target);
        creep.rangedAttack(target);
    }
    else if(!creep.pos.inRangeTo(spawn.pos,5) ){
        creep.moveTo(spawn); 
    }
   
    if( (creep.getActiveBodyparts(Game.ATTACK) == 0 & 
    creep.getActiveBodyparts(Game.RANGED_ATTACK)==0)
        || creep.getActiveBodyparts(Game.MOVE) == 0)
    {
       creep.suicide();
    }
}
