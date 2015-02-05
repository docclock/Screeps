var harvester = require('harvester');
var guarding = require('guarding');
var healing = require('healing');
var carrying = require('carrier');

if(Memory.guards==undefined){
    
    Memory.guards=1;
    Memory.harvesters=1;
    Memory.carriers=1;
    Memory.healers=1;
}

var numspawns=0;

var actualguards=0;
var actualharvesters=0;
var actualcarriers=0;
var actualhealers=0;


for(var i in Game.creeps) {
    
	var creep = Game.creeps[i];

	if(creep.memory.role == 'harvester') {
	    actualharvesters++;
		harvester(creep);
	}
	
	if(creep.memory.role == 'guard') {
	   actualguards++;
       guarding(creep);
    }

	if(creep.memory.role == 'carrier') {
	   actualcarriers++;
       carrying(creep);
    }
    
	if(creep.memory.role == 'healer') {
	   actualhealers++;
       healing(creep);
    }
}

if((actualcarriers>=Memory.carriers) &&
        ( actualharvesters>=Memory.harvesters ) &&
        ( actualguards>=Memory.guards) ){
        
    Memory.carriers= actualcarriers+1;
    Memory.guards=Memory.carriers;
    Memory.harvesters=Memory.carriers;
    if(actualguards>4){
        Memory.healers=1;
    }
}
  

if(Game.spawns.Spawn1.energy>500){
    
    if(actualharvesters< Memory.harvesters ){ 
        Game.spawns.Spawn1.createCreep([Game.WORK,Game.WORK,Game.WORK,Game.CARRY, Game.MOVE],
        undefined, {role: 'harvester'});
    } 
    if(actualcarriers< Memory.carriers && (actualharvesters>0 || actualcarriers<1)){
        Game.spawns.Spawn1.createCreep( [Game.CARRY, Game.CARRY, Game.MOVE,Game.MOVE,Game.MOVE], undefined, {role: 'carrier'});
    }
    if(actualguards< Memory.guards  &&  
    (actualcarriers>0 && actualcarriers>Memory.carriers/2) && 
    (actualharvesters>0 && actualharvesters > Memory.harvesters/2) ){
       Game.spawns.Spawn1.createCreep( [Game.ATTACK, Game.ATTACK,  Game.MOVE, Game.MOVE,Game.TOUGH,Game.ATTACK,
       Game.TOUGH,Game.TOUGH,Game.TOUGH], 
       undefined, {role: 'guard'});
    }
}

  console.log( Memory.guards);
  console.log( Memory.harvesters);
  console.log( Memory.carriers);
  console.log( Memory.healers);
  console.log('###############');
	
