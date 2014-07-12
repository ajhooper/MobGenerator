
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
	
	var ac = 10 + dex_val + 3;
	
	var str = "HP: " + hp + "\nHitDice: " + hd + "\nAC: "+ ac  + "\nStr: " + str+ "/"+ str_val + "\nCon: " + con+ "/" + con_val  + "\nDex: " + dex+ "/" + dex_val;
	
	
	document.getElementById("txta").value+=str + "\n\n";
    }
}

function stat_val(stat){
    var val;
    switch(stat){
    case 10:
    case 11:
	val = 0;
	break;
    case 12:
    case 13:
	val = 1;
	break;
    case 14:
    case 15:
	val = 2;
	break;
    case 16:
    case 17:
	val = 3;
	break;
    case 18:
    case 19:
	val = 4;
	break;
    case 20:
	val = 5;
	break;
    default:
	val = 0;
	break;
    }
    return val;
}

function clean()
{
    document.getElementById("txta").value= "";
}