
function generate(){
    var hit_dice = [6, 8, 10, 12];

    var num = document.getElementById("num_mob").value;
    var lev = document.getElementById("level").value;

    var i =0;
    
    for (i=0; i<num; i++){	
	var str = Math.floor((Math.random() * 10) + 11);
	var con = Math.floor((Math.random() * 10) + 11);
	var dex = Math.floor((Math.random() * 10) + 11);
	var hp = 0;
	var str_val = stat_val(str);
	var con_val = stat_val(con);
	var dex_val = stat_val(dex);
	var hd = hit_dice[Math.floor((Math.random() * 4))];
	
	var j =0;
	
	for (j=0; j<lev; j++){
	    hp += Math.floor((Math.random() * hd) + 1) + con_val;
	}

	var armor = generate_armor();
	armor[1] = Math.min(armor[1], dex_val);

	var weapons = generate_weapons();

	var ac = 10 + armor[0] + armor[1] + weapons[3];
	
	var str = "HP: " + hp + "\nHitDice: " + hd + "\nAC: "+ ac + ", "+ armor[2] + 
	    "\nStr: " + str+ "/"+ str_val +"\nCon: " + con+ "/" + con_val  + "\nDex: " + dex+ "/" + dex_val +
	    "\n"+weapons[0] + ": 1d" + weapons[1];
	if (weapons[0] === "Dual Wield"){
	    str += "/ 1d" + weapons[2];
	}
	
	document.getElementById("txta").value+=str + "\n\n";
    }
}

//Format for array: [type, main hand, off hand, armor bonus]
function generate_weapons(){
    var rand = Math.floor((Math.random() * 4));
    if (rand == 0){
	return ["Dual Wield", 6, 4, 0];
    }
    else if (rand == 1){
	return ["Two Hand", 10, 0, 0];
    }
    else if (rand == 2){
	return ["One Hand/Shield", 6, 0, 2];
    }
    else{
	return ["Ranged", 6, 0, 0]
    }

}

//Format for array: [armor bonus, max dex]
function generate_armor(){
    var rand = Math.floor((Math.random() * 3));
    if (rand == 0){
	return [6, 0, "Heavy (6/0)"];
    }
    else if (rand == 1){
	return [4, 3, "Medium (4,3)"];
    }
    else{
	return [3, 5, "Light (3,5)"];
    }
}

function stat_val(stat){
    var val;
    return Math.floor((stat-10)/2)
}

function clean()
{
    document.getElementById("txta").value= "";
}