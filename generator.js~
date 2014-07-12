
function generate(){
    var hit_dice[6, 8, 10, 12];
    var num = document.getElementById("num_mob").value;
    var lev = document.getElementById("level").value;
    
    var str = Math.floor((Math.random() * 10) + 11);
    var con = Math.floor((Math.random() * 10) + 11);
    var dex = Math.floor((Math.random() * 10) + 11);
    var hp = 0;
    var str_val = stat_val(str);
    var con_val = stat_val(con);
    var dex_val = stat_val(dex);
    var hd = hit_dice[Math.floor((Math.random() * 4))];
    
    var i =0;
    var j =0;
    
    while(j != num){

    }
	
    while(i != num){
        rand = Math.floor((Math.random() * lev) + 1);		
        document.getElementById("txta").value+=rand + "\n";
        i++;
    }
    document.getElementById("txta").value+="\n";
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