var harvester = require('harvester');
var guarding = require('guarding');
var building = require('building');
var healing = require('healing');

var minguards=6;
var minharvesters=6;
var minbuilders=0;
var minhealers=1;

var numspawns=0;

var actualguards=0;
var actualharvesters=0;
var actualbuilders=0;
var actualhealers=0;


for(var i in Game.creeps) {
    
	var creep = Game.creeps[i];

	if(creep.memory.role == 'harvester') {
	    actualharvesters++;
		harvester(creep);
	}
	if(creep.memory.role == 'builder') {

    	actualbuilders++;
        building(creep);
	}
	
	if(creep.memory.role == 'guard') {
	   actualguards++;
       guarding(creep);
    }
	
	if(creep.memory.role == 'healer') {
	   actualhealers++;
       healing(creep);
    }
}


//if(Game.spawns.Spawn1.energy>2000){
    if(actualguards<minguards){
       Game.spawns.Spawn1.createCreep( [Game.RANGED_ATTACK,Game.RANGED_ATTACK,  Game.TOUGH,  Game.TOUGH, Game.TOUGH], undefined, {role: 'guard'});
    }
    
    if(actualharvesters<minharvesters){ 
        Game.spawns.Spawn1.createCreep([Game.WORK,Game.WORK, Game.CARRY,  Game.MOVE,Game.MOVE], undefined, {role: 'harvester'});
    }
    
    if(actualbuilders<minbuilders){
        Game.spawns.Spawn1.createCreep( [Game.WORK, Game.WORK, Game.WORK, Game.CARRY, Game.MOVE], undefined, {role: 'builder'});
    }
    
    if(actualhealers<minhealers && actualguards>0){
        Game.spawns.Spawn1.createCreep( [Game.HEAL, Game.CARRY, Game.MOVE], undefined, {role: 'healer'});
    }
    
  
//}
	
