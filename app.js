var kml = []
var nmd = document.getElementById("nmb")
var  lod= document.getElementById("lod")
var  vap= document.getElementById("vap").addEventListener("click", lpl);
function lpl(){
    var specificTime = new Date();
    specificTime.setHours(10);
    specificTime.setMinutes(30);
    specificTime.setSeconds(0);
    var lop = new Date
    if(lop<=specificTime)
    {
       lod.innerText="you are on time , some time you have to take rest"
    
    }
    else{
       lod.innerText = "you are not on time my boy , ready for half salary"
    }

kml.push(nmd.value);

}

console.log(kml)