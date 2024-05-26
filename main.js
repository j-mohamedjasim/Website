

function calc(){
    var smon = parseFloat(document.getElementById("smon").value);
    var stue = parseFloat(document.getElementById("stue").value);
    var swed = parseFloat(document.getElementById("swed").value);
    var sthu = parseFloat(document.getElementById("sthu").value);
    var sfri = parseFloat(document.getElementById("sfri").value);

    var zmon = parseFloat(document.getElementById("zmon").value);
    var ztue = parseFloat(document.getElementById("ztue").value);
    var zwed = parseFloat(document.getElementById("zwed").value);
    var zthu = parseFloat(document.getElementById("zthu").value);
    var zfri = parseFloat(document.getElementById("zfri").value);
    
    var monday = smon+zmon;
    var tuesday = stue+ztue;
    var wednesday = swed+zwed;
    var thursday = sthu+zthu;
    var friday = sfri+zfri;

    document.getElementById("cal1").innerHTML = "On Monday the truck drove "+ monday + " miles";
    document.getElementById("cal2").innerHTML = "On Tuesday the truck drove "+ tuesday + " miles";
    document.getElementById("cal3").innerHTML = "On Wednesday the truck drove "+ wednesday + " miles";
    document.getElementById("cal4").innerHTML = "On Thursday the truck drove "+ thursday + " miles";
    document.getElementById("cal5").innerHTML = "On Friday the truck drove "+ friday + " miles";
}