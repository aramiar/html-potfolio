window.onresize = resize;

window.addEventListener("load", function() {Conv("inVAa",0);});
window.addEventListener("load", function() {Conv("inIAa",0);});

//           <------------------------ Ph-N ----------------------->   <------------------------ Ph-Ph ---------------------->   <------------------------ 3-Ph ----------------------->
//             <------A------>   <------B------>   <------C------>       <------AB----->   <------BC----->   <------CA----->
//              PreFa   Fault     PreFa   Fault     PreFa   Fault         PreFa   Fault     PreFa   Fault     PreFa   Fault         PreFa   Fault     PreFa   Fault     PreFa   Fault
var VFx  = [ [ [69.28 , 69.28] , [69.28 , 69.28] , [69.28 , 69.28] ] , [ [69.28 , 120.0] , [69.28 , 120.0] , [69.28 , 120.0] ] , [ [69.28 , 69.28] , [120.0 , 120.0] , [69.28 , 69.28] ] ];
var IFx  = [ [ [0.000 , 0.000] , [0.000 , 0.000] , [0.000 , 0.000] ] , [ [0.000 , 0.000] , [0.000 , 0.000] , [0.000 , 0.000] ] , [ [0.000 , 0.000] , [0.000 , 0.000] , [0.000 , 0.000] ] ];
var AFx  = [ [ [0.000 , 0.000] , [0.000 , 0.000] , [0.000 , 0.000] ] , [ [0.000 , 0.000] , [0.000 , 0.000] , [0.000 , 0.000] ] , [ [0.000 , 0.000] , [0.000 , 0.000] , [0.000 , 0.000] ] ];

//            <---Arbitrary--->            <---Arbitrary--->            <---Arbitrary--->            <---Arbitrary--->            <---Arbitrary--->            <---Arbitrary---> 
//              PreFa   Fault                PreFa   Fault                PreFa   Fault                PreFa   Fault                PreFa   Fault                PreFa   Fault     
var VAm_arb = [ 69.28 , 69.28 ], VAa_arb = [ 0.000 , 0.000 ], VBm_arb = [ 69.28 , 69.28 ], VBa_arb = [ 240.0 , 240.0 ], VCm_arb = [ 69.28 , 69.28 ], VCa_arb = [ 120.0 , 120.0 ], 
    IAm_arb = [ 0.000 , 0.000 ], IAa_arb = [ 0.000 , 0.000 ], IBm_arb = [ 0.000 , 0.000 ], IBa_arb = [ 240.0 , 240.0 ], ICm_arb = [ 0.000 , 0.000 ], ICa_arb = [ 120.0 , 120.0 ];

function Conv(source,valNum) {
	valNum = parseFloat(valNum);
	var VAm = document.getElementById("inVAm"); var VBm = document.getElementById("inVBm"); var VCm = document.getElementById("inVCm");
    var VAa = document.getElementById("inVAa"); var VBa = document.getElementById("inVBa"); var VCa = document.getElementById("inVCa");
	var IAm = document.getElementById("inIAm"); var IBm = document.getElementById("inIBm"); var ICm = document.getElementById("inICm");
	var IAa = document.getElementById("inIAa"); var IBa = document.getElementById("inIBa"); var ICa = document.getElementById("inICa");
	var I50P = document.getElementById("inDPT");var I50N = document.getElementById("inDNT");
	if (source == "inVAm") {
        if (valNum > 120) {valNum = 120;}
        if (valNum < 0) {valNum = 0;}
        if (F8cr == parseFloat("3 Arbit")) {VAm_arb [F10cr] = valNum;}
        VAm.value = valNum.toFixed(2);
        document.getElementById("inVAm").innerHTML = valNum.toFixed(2);                    
        document.getElementById("inVPa").innerHTML = fPa(valNum,VAa.value,VBm.value,VBa.value,VCm.value,VCa.value).toFixed(2);
        document.getElementById("inVNa").innerHTML = fNa(valNum,VAa.value,VBm.value,VBa.value,VCm.value,VCa.value).toFixed(2);
        document.getElementById("inVZa").innerHTML = fZa(valNum,VAa.value,VBm.value,VBa.value,VCm.value,VCa.value).toFixed(2);
    }
	if (source == "inVAa") {
        valNum = (valNum + 360) % 360;        
        if (F8cr == parseFloat("3 Arbit")) {VAa_arb [F10cr] = valNum;}
        VAa.value = valNum.toFixed(2);
        document.getElementById("inVAa").innerHTML = valNum.toFixed(2);
        document.getElementById("inVPa").innerHTML = fPa(VAm.value,valNum,VBm.value,VBa.value,VCm.value,VCa.value).toFixed(2);
        document.getElementById("inVNa").innerHTML = fNa(VAm.value,valNum,VBm.value,VBa.value,VCm.value,VCa.value).toFixed(2);
        document.getElementById("inVZa").innerHTML = fZa(VAm.value,valNum,VBm.value,VBa.value,VCm.value,VCa.value).toFixed(2);
    }
	if (source == "inVBm") {
        if (valNum > 120) {valNum = 120;}
        if (valNum < 0) {valNum = 0;}
        if (F8cr == parseFloat("3 Arbit")) {VBm_arb [F10cr] = valNum;}
        VBm.value = valNum.toFixed(2);
        document.getElementById("inVBm").innerHTML = valNum.toFixed(2);
        document.getElementById("inVPa").innerHTML = fPa(VAm.value,VAa.value,valNum,VBa.value,VCm.value,VCa.value).toFixed(2);
        document.getElementById("inVNa").innerHTML = fNa(VAm.value,VAa.value,valNum,VBa.value,VCm.value,VCa.value).toFixed(2);
        document.getElementById("inVZa").innerHTML = fZa(VAm.value,VAa.value,valNum,VBa.value,VCm.value,VCa.value).toFixed(2);
    }
	if (source == "inVBa") {
        valNum = (valNum + 360) % 360;      
        if (F8cr == parseFloat("3 Arbit")) {VBa_arb [F10cr] = valNum;}
        VBa.value = valNum.toFixed(2);
        document.getElementById("inVBa").innerHTML = valNum.toFixed(2); 
        document.getElementById("inVPa").innerHTML = fPa(VAm.value,VAa.value,VBm.value,valNum,VCm.value,VCa.value).toFixed(2);
        document.getElementById("inVNa").innerHTML = fNa(VAm.value,VAa.value,VBm.value,valNum,VCm.value,VCa.value).toFixed(2);
        document.getElementById("inVZa").innerHTML = fZa(VAm.value,VAa.value,VBm.value,valNum,VCm.value,VCa.value).toFixed(2);
    }
    if (source == "inVCm") {
        if (valNum > 120) {valNum = 120;}
        if (valNum < 0) {valNum = 0;}
        if (F8cr == parseFloat("3 Arbit")) {VCm_arb [F10cr] = valNum;}
        VCm.value = valNum.toFixed(2);
        document.getElementById("inVCm").innerHTML = valNum.toFixed(2);
        document.getElementById("inVPa").innerHTML = fPa(VAm.value,VAa.value,VBm.value,VBa.value,valNum,VCa.value).toFixed(2);
        document.getElementById("inVNa").innerHTML = fNa(VAm.value,VAa.value,VBm.value,VBa.value,valNum,VCa.value).toFixed(2);
        document.getElementById("inVZa").innerHTML = fZa(VAm.value,VAa.value,VBm.value,VBa.value,valNum,VCa.value).toFixed(2);
    }
    if (source == "inVCa") {
        valNum = (valNum + 360) % 360; 
        if (F8cr == parseFloat("3 Arbit")) {VCa_arb [F10cr] = valNum;}
        VCa.value = valNum.toFixed(2);
        document.getElementById("inVCa").innerHTML = valNum.toFixed(2);
        document.getElementById("inVPa").innerHTML = fPa(VAm.value,VAa.value,VBm.value,VBa.value,VCm.value,valNum).toFixed(2);
        document.getElementById("inVNa").innerHTML = fNa(VAm.value,VAa.value,VBm.value,VBa.value,VCm.value,valNum).toFixed(2);
        document.getElementById("inVZa").innerHTML = fZa(VAm.value,VAa.value,VBm.value,VBa.value,VCm.value,valNum).toFixed(2);
    }
	if (source == "inIAm") {
        if (valNum > 30) {valNum = 30;}
        if (valNum < 0) {valNum = 0;}
        if (F8cr == parseFloat("3 Arbit")) {IAm_arb [F10cr] = valNum;}
        IAm.value = valNum.toFixed(3);
        document.getElementById("inIAm").innerHTML = valNum.toFixed(3);
        document.getElementById("inIPa").innerHTML = fPa(valNum,IAa.value,IBm.value,IBa.value,ICm.value,ICa.value).toFixed(2);
        document.getElementById("inINa").innerHTML = fNa(valNum,IAa.value,IBm.value,IBa.value,ICm.value,ICa.value).toFixed(2);
        document.getElementById("inIZa").innerHTML = fZa(valNum,IAa.value,IBm.value,IBa.value,ICm.value,ICa.value).toFixed(2);
    }
	if (source == "inIAa") {
        valNum = (valNum + 360) % 360; 
        IAa.value = valNum.toFixed(2);
        if (F8cr == parseFloat("3 Arbit")) {IAa_arb [F10cr] = valNum;}
        document.getElementById("inIAa").innerHTML = valNum.toFixed(2);
        document.getElementById("inIPa").innerHTML = fPa(IAm.value,valNum,IBm.value,IBa.value,ICm.value,ICa.value).toFixed(2);
        document.getElementById("inINa").innerHTML = fNa(IAm.value,valNum,IBm.value,IBa.value,ICm.value,ICa.value).toFixed(2);
        document.getElementById("inIZa").innerHTML = fZa(IAm.value,valNum,IBm.value,IBa.value,ICm.value,ICa.value).toFixed(2);
    }
	if (source == "inIBm") {
        if (valNum > 30) {valNum = 30;}
        if (valNum < 0) {valNum = 0;}
        if (F8cr == parseFloat("3 Arbit")) {IBm_arb [F10cr] = valNum;}
        IBm.value = valNum.toFixed(3);
        document.getElementById("inIBm").innerHTML = valNum.toFixed(3);
        document.getElementById("inIPa").innerHTML = fPa(IAm.value,IAa.value,valNum,IBa.value,ICm.value,ICa.value).toFixed(2);
        document.getElementById("inINa").innerHTML = fNa(IAm.value,IAa.value,valNum,IBa.value,ICm.value,ICa.value).toFixed(2);
        document.getElementById("inIZa").innerHTML = fZa(IAm.value,IAa.value,valNum,IBa.value,ICm.value,ICa.value).toFixed(2);
    }
	if (source == "inIBa") {
        valNum = (valNum + 360) % 360; 
        if (F8cr == parseFloat("3 Arbit")) {IBa_arb [F10cr] = valNum;}
        IBa.value = valNum.toFixed(2);
        document.getElementById("inIBa").innerHTML = valNum.toFixed(2);
        document.getElementById("inIPa").innerHTML = fPa(IAm.value,IAa.value,IBm.value,valNum,ICm.value,ICa.value).toFixed(2);
        document.getElementById("inINa").innerHTML = fNa(IAm.value,IAa.value,IBm.value,valNum,ICm.value,ICa.value).toFixed(2);
        document.getElementById("inIZa").innerHTML = fZa(IAm.value,IAa.value,IBm.value,valNum,ICm.value,ICa.value).toFixed(2);
    }
	if (source == "inICm") {
        if (valNum > 30) {valNum = 30;}
        if (valNum < 0) {valNum = 0;}
        if (F8cr == parseFloat("3 Arbit")) {ICm_arb [F10cr] = valNum;}
        ICm.value = valNum.toFixed(3);
        document.getElementById("inICm").innerHTML = valNum.toFixed(3);
        document.getElementById("inIPa").innerHTML = fPa(IAm.value,IAa.value,IBm.value,IBa.value,valNum,ICa.value).toFixed(2);
        document.getElementById("inINa").innerHTML = fNa(IAm.value,IAa.value,IBm.value,IBa.value,valNum,ICa.value).toFixed(2);
        document.getElementById("inIZa").innerHTML = fZa(IAm.value,IAa.value,IBm.value,IBa.value,valNum,ICa.value).toFixed(2);
    }
	if (source == "inICa") {
        valNum = (valNum + 360) % 360; 
        if (F8cr == parseFloat("3 Arbit")) {ICa_arb [F10cr] = valNum;}
        ICa.value = valNum.toFixed(2);
        document.getElementById("inICa").innerHTML = valNum.toFixed(2);
        document.getElementById("inIPa").innerHTML = fPa(IAm.value,IAa.value,IBm.value,IBa.value,ICm.value,valNum).toFixed(2);
        document.getElementById("inINa").innerHTML = fNa(IAm.value,IAa.value,IBm.value,IBa.value,ICm.value,valNum).toFixed(2);
        document.getElementById("inIZa").innerHTML = fZa(IAm.value,IAa.value,IBm.value,IBa.value,ICm.value,valNum).toFixed(2);
    }
    if (source == "inDPT") {
        if (valNum > 30) {valNum = 30;}
        if (valNum < 0) {valNum = 0;}
        I50P.value = valNum.toFixed(1);
    }
    if (source == "inDNT") {
        if (valNum > 30) {valNum = 30;}
        if (valNum < 0) {valNum = 0;}
        I50N.value = valNum.toFixed(1);
    }
    GPh(); 
    if (document.getElementById("F11").style.backgroundColor == "red" || document.getElementById("F12").style.backgroundColor == "red") {
        GPP(); GPN(); GNN(); GNZ();
    }
}
function resize() {GPh(); GPP(); GPN(); GNN(); GNZ()}
function fPm(fPm11,fPm22,fPm33,fPm44,fPm55,fPm66) {
	var f1=parseFloat(fPm11), f2=parseFloat(fPm22), f3=parseFloat(fPm33), f4=parseFloat(fPm44), f5=parseFloat(fPm55), f6=parseFloat(fPm66);
	return (Math.sqrt(Math.pow((f1*Math.cos(f2*Math.PI/180) + f3*Math.cos((f4+120)*Math.PI/180) + f5*Math.cos((f6+240)*Math.PI/180)),2)+
                      Math.pow((f1*Math.sin(f2*Math.PI/180) + f3*Math.sin((f4+120)*Math.PI/180) + f5*Math.sin((f6+240)*Math.PI/180)),2)))/3;
}
function fNm(fNm11,fNm22,fNm33,fNm44,fNm55,fNm66) {
	var f1=parseFloat(fNm11), f2=parseFloat(fNm22), f3=parseFloat(fNm33), f4=parseFloat(fNm44), f5=parseFloat(fNm55), f6=parseFloat(fNm66);
	return (Math.sqrt(Math.pow((f1*Math.cos(f2*Math.PI/180) + f3*Math.cos((f4+240)*Math.PI/180) + f5*Math.cos((f6+120)*Math.PI/180)),2)+
                      Math.pow((f1*Math.sin(f2*Math.PI/180) + f3*Math.sin((f4+240)*Math.PI/180) + f5*Math.sin((f6+120)*Math.PI/180)),2)))/3;
}
function fZm(fZm11,fZm22,fZm33,fZm44,fZm55,fZm66) {
	var f1=parseFloat(fZm11), f2=parseFloat(fZm22), f3=parseFloat(fZm33), f4=parseFloat(fZm44), f5=parseFloat(fZm55), f6=parseFloat(fZm66);
	return (Math.sqrt(Math.pow((f1*Math.cos(f2*Math.PI/180) + f3*Math.cos(f4*Math.PI/180) + f5*Math.cos(f6*Math.PI/180)),2)+
                      Math.pow((f1*Math.sin(f2*Math.PI/180) + f3*Math.sin(f4*Math.PI/180) + f5*Math.sin(f6*Math.PI/180)),2)))/3;
}
function fPa(fPa11,fPa22,fPa33,fPa44,fPa55,fPa66) {
	var f1=parseFloat(fPa11), f2=parseFloat(fPa22), f3=parseFloat(fPa33), f4=parseFloat(fPa44), f5=parseFloat(fPa55), f6=parseFloat(fPa66);
    var result = 180/Math.PI*Math.atan2((f1*Math.sin(f2*Math.PI/180) + f3*Math.sin((f4+120)*Math.PI/180) + f5*Math.sin((f6+240)*Math.PI/180)), 
                                       (f1*Math.cos(f2*Math.PI/180) + f3*Math.cos((f4+120)*Math.PI/180) + f5*Math.cos((f6+240)*Math.PI/180)));
	if (fPm(f1,f2,f3,f4,f5,f6).toFixed(10)==0 || result.toFixed(10) == 0) {return 0;} else {return result}
}
function fNa(fNa11,fNa22,fNa33,fNa44,fNa55,fNa66) {
	var f1=parseFloat(fNa11), f2=parseFloat(fNa22), f3=parseFloat(fNa33), f4=parseFloat(fNa44), f5=parseFloat(fNa55), f6=parseFloat(fNa66);
    var result = 180/Math.PI*Math.atan2((f1*Math.sin(f2*Math.PI/180) + f3*Math.sin((f4+240)*Math.PI/180) + f5*Math.sin((f6+120)*Math.PI/180)), 
                                       (f1*Math.cos(f2*Math.PI/180) + f3*Math.cos((f4+240)*Math.PI/180) + f5*Math.cos((f6+120)*Math.PI/180)));
	if (fNm(f1,f2,f3,f4,f5,f6).toFixed(10)==0 || result.toFixed(10) == 0) {return 0;} else {return result}
}
function fZa(fZa11,fZa22,fZa33,fZa44,fZa55,fZa66) {
	var f1=parseFloat(fZa11), f2=parseFloat(fZa22), f3=parseFloat(fZa33), f4=parseFloat(fZa44), f5=parseFloat(fZa55), f6=parseFloat(fZa66);
    var result = 180/Math.PI*Math.atan2((f1*Math.sin(f2*Math.PI/180) + f3*Math.sin(f4*Math.PI/180) + f5*Math.sin(f6*Math.PI/180)),
                                       (f1*Math.cos(f2*Math.PI/180) + f3*Math.cos(f4*Math.PI/180) + f5*Math.cos(f6*Math.PI/180)));
	if (fZm(f1,f2,f3,f4,f5,f6).toFixed(10) < 0.01 || result.toFixed(10) == 0) {return 0;} else {return result}
}
function GPh() {
	var canvas = document.getElementById("PhCanvas"),
        ctx = canvas.getContext("2d");
	var W = document.getElementById("ParentPhCanvas").offsetWidth;
	var H = document.getElementById("ParentPhCanvas").offsetHeight;
	canvas.width = 360;
	canvas.height = 360;
	var Ox = 0.5*canvas.width;
	var Oy = 0.5*canvas.height;
	var scX = 1*W/canvas.width;
	var scY = 1*H/canvas.width;
	var GVAm = document.getElementById("inVAm").value, GVAa = document.getElementById("inVAa").value;
	var GVBm = document.getElementById("inVBm").value, GVBa = document.getElementById("inVBa").value;
	var GVCm = document.getElementById("inVCm").value, GVCa = document.getElementById("inVCa").value;
	var GIAm = document.getElementById("inIAm").value, GIAa = document.getElementById("inIAa").value;
	var GIBm = document.getElementById("inIBm").value, GIBa = document.getElementById("inIBa").value;
	var GICm = document.getElementById("inICm").value, GICa = document.getElementById("inICa").value;
	var VAx = 1.2*GVAm*Math.cos(GVAa*Math.PI/180), VAy = 1.2*GVAm*Math.sin(GVAa*Math.PI/180);
    var VBx = 1.2*GVBm*Math.cos(GVBa*Math.PI/180), VBy = 1.2*GVBm*Math.sin(GVBa*Math.PI/180);
    var VCx = 1.2*GVCm*Math.cos(GVCa*Math.PI/180), VCy = 1.2*GVCm*Math.sin(GVCa*Math.PI/180);
	var IAx = 4.8*GIAm*Math.cos(GIAa*Math.PI/180), IAy = 4.8*GIAm*Math.sin(GIAa*Math.PI/180);
    var IBx = 4.8*GIBm*Math.cos(GIBa*Math.PI/180), IBy = 4.8*GIBm*Math.sin(GIBa*Math.PI/180);
    var ICx = 4.8*GICm*Math.cos(GICa*Math.PI/180), ICy = 4.8*GICm*Math.sin(GICa*Math.PI/180);
	ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 2*Ox, 2*Oy);
	ctx.font="18px Arial";ctx.textBaseline="middle";ctx.textAlign="center";
	
	ctx.strokeStyle = "grey"; ctx.lineWidth = 1; ctx.fillStyle = "black";
	ctx.beginPath(); ctx.moveTo(0.2*Ox, Oy); ctx.lineTo(1.9*Ox, Oy); ctx.stroke();	
	ctx.fillText("180",0.1*Ox, Oy); ctx.fillText("0",1.95*Ox, Oy);
	ctx.beginPath(); ctx.moveTo(Ox, 0.1*Oy); ctx.lineTo(Ox, 1.9*Oy); ctx.stroke();
	ctx.fillText("90",Ox, 0.06*Oy); ctx.fillText("270",Ox, 1.97*Oy);
	
    ctx.beginPath();ctx.strokeStyle = "red"; ctx.lineWidth = 1;  ctx.moveTo(Ox, Oy); ctx.lineTo(Ox+VAx, Oy-VAy); 
    ctx.lineTo(Ox+VAx-5*(Math.sin((60-GVAa)*Math.PI/180)), Oy-VAy+5*(Math.cos((60-GVAa)*Math.PI/180)));
    ctx.arcTo(Ox+VAx, Oy-VAy,Ox+VAx+5*(Math.sin((-60-GVAa)*Math.PI/180)), Oy-VAy-5*(Math.cos((-60-GVAa)*Math.PI/180)),8);
    ctx.lineTo(Ox+VAx, Oy-VAy); ctx.fillStyle = "red"; ctx.fill(); ctx.stroke();
    ctx.fillText("Va",Ox+VAx+Math.cos(GVAa*Math.PI/180)*11, Oy-VAy-Math.sin(GVAa*Math.PI/180)*11);
	
	ctx.beginPath();ctx.strokeStyle = "black"; ctx.moveTo(Ox, Oy); ctx.lineTo(Ox+VBx, Oy-VBy); 
    ctx.lineTo(Ox+VBx-5*(Math.sin((60-GVBa)*Math.PI/180)), Oy-VBy+5*(Math.cos((60-GVBa)*Math.PI/180)));
    ctx.arcTo(Ox+VBx, Oy-VBy,Ox+VBx+5*(Math.sin((-60-GVBa)*Math.PI/180)), Oy-VBy-5*(Math.cos((-60-GVBa)*Math.PI/180)),8);
    ctx.lineTo(Ox+VBx, Oy-VBy); ctx.fillStyle = "black"; ctx.fill(); ctx.stroke();
	ctx.fillText("Vb",Ox+VBx+Math.cos(GVBa*Math.PI/180)*11, Oy-VBy-Math.sin(GVBa*Math.PI/180)*11);
	
	ctx.beginPath(); ctx.strokeStyle = "blue"; ctx.moveTo(Ox, Oy); ctx.lineTo(Ox+VCx, Oy-VCy); 
    ctx.lineTo(Ox+VCx-5*(Math.sin((60-GVCa)*Math.PI/180)), Oy-VCy+5*(Math.cos((60-GVCa)*Math.PI/180)));
    ctx.arcTo(Ox+VCx, Oy-VCy,Ox+VCx+5*(Math.sin((-60-GVCa)*Math.PI/180)), Oy-VCy-5*(Math.cos((-60-GVCa)*Math.PI/180)),8);
    ctx.lineTo(Ox+VCx, Oy-VCy); ctx.fillStyle = "blue"; ctx.fill(); ctx.stroke();
	ctx.fillText("Vc",Ox+VCx+Math.cos(GVCa*Math.PI/180)*11, Oy-VCy-Math.sin(GVCa*Math.PI/180)*11);
	
    if (F8cr == parseFloat("2 Th-Ph") && F9cr == parseFloat("1 Vpp")) {
        ctx.beginPath(); ctx.moveTo(Ox+VAx, Oy-VAy); ctx.lineTo(Ox+VBx, Oy-VBy); ctx.strokeStyle = "red"; ctx.stroke();
        ctx.beginPath(); ctx.moveTo(Ox+VBx, Oy-VBy); ctx.lineTo(Ox+VCx, Oy-VCy); ctx.strokeStyle = "black"; ctx.stroke();
        ctx.beginPath(); ctx.moveTo(Ox+VCx, Oy-VCy); ctx.lineTo(Ox+VAx, Oy-VAy); ctx.strokeStyle = "blue"; ctx.stroke();
    }
    if (F8cr == parseFloat("1 Ph-Ph") && F9cr == parseFloat("0 A-B") && F10cr == parseFloat("1 Fault")) {
        ctx.beginPath(); ctx.moveTo(Ox+VAx, Oy-VAy); ctx.lineTo(Ox+VBx, Oy-VBy); ctx.strokeStyle = "red"; ctx.stroke();
    }
    if (F8cr == parseFloat("1 Ph-Ph") && F9cr == parseFloat("1 B-C") && F10cr == parseFloat("1 Fault")) {
        ctx.beginPath(); ctx.moveTo(Ox+VBx, Oy-VBy); ctx.lineTo(Ox+VCx, Oy-VCy); ctx.strokeStyle = "black"; ctx.stroke();
    }
    if (F8cr == parseFloat("1 Ph-Ph") && F9cr == parseFloat("2 C-A") && F10cr == parseFloat("1 Fault")) {
        ctx.beginPath(); ctx.moveTo(Ox+VCx, Oy-VCy); ctx.lineTo(Ox+VAx, Oy-VAy); ctx.strokeStyle = "blue"; ctx.stroke();
    }
            
	ctx.beginPath(); ctx.strokeStyle = "red"; ctx.moveTo(Ox, Oy); ctx.lineTo(Ox+IAx, Oy-IAy); 
    ctx.lineTo(Ox+IAx-5*(Math.sin((60-GIAa)*Math.PI/180)), Oy-IAy+5*(Math.cos((60-GIAa)*Math.PI/180)));
    ctx.arcTo(Ox+IAx, Oy-IAy,Ox+IAx+5*(Math.sin((-60-GIAa)*Math.PI/180)), Oy-IAy-5*(Math.cos((-60-GIAa)*Math.PI/180)),8);
    ctx.lineTo(Ox+IAx, Oy-IAy); ctx.fillStyle = "red"; ctx.fill(); ctx.stroke();
	ctx.fillText("Ia",Ox+IAx+Math.cos(GIAa*Math.PI/180)*11, Oy-IAy-Math.sin(GIAa*Math.PI/180)*11);
    
    ctx.beginPath(); ctx.strokeStyle = "black"; ctx.moveTo(Ox, Oy); ctx.lineTo(Ox+IBx, Oy-IBy); 
    ctx.lineTo(Ox+IBx-5*(Math.sin((60-GIBa)*Math.PI/180)), Oy-IBy+5*(Math.cos((60-GIBa)*Math.PI/180)));
    ctx.arcTo(Ox+IBx, Oy-IBy,Ox+IBx+5*(Math.sin((-60-GIBa)*Math.PI/180)), Oy-IBy-5*(Math.cos((-60-GIBa)*Math.PI/180)),8);
    ctx.lineTo(Ox+IBx, Oy-IBy); ctx.fillStyle = "black"; ctx.fill(); ctx.stroke();
	ctx.fillText("Ib",Ox+IBx+Math.cos(GIBa*Math.PI/180)*11, Oy-IBy-Math.sin(GIBa*Math.PI/180)*11);
	
	ctx.beginPath(); ctx.strokeStyle = "blue"; ctx.moveTo(Ox, Oy); ctx.lineTo(Ox+ICx, Oy-ICy); 
    ctx.lineTo(Ox+ICx-5*(Math.sin((60-GICa)*Math.PI/180)), Oy-ICy+5*(Math.cos((60-GICa)*Math.PI/180)));
    ctx.arcTo(Ox+ICx, Oy-ICy,Ox+ICx+5*(Math.sin((-60-GICa)*Math.PI/180)), Oy-ICy-5*(Math.cos((-60-GICa)*Math.PI/180)),8);
    ctx.lineTo(Ox+ICx, Oy-ICy); ctx.fillStyle = "blue"; ctx.fill(); ctx.stroke();
	ctx.fillText("Ic",Ox+ICx+Math.cos(GICa*Math.PI/180)*11, Oy-ICy-Math.sin(GICa*Math.PI/180)*11);
	document.getElementById("PhCanvas").style.transform = "scale(" + scX + " , " + scY + ")";
	document.getElementById("PhCanvas").style.transformOrigin = "0 0";
}
function GPP() {
    var canvas = document.getElementById("P67P"),
        ctx = canvas.getContext("2d");
	var W = document.getElementById("Parent_P67P").offsetWidth;
	var H = document.getElementById("Parent_P67P").offsetHeight;
	canvas.width = 400;
	canvas.height = 400;
	var Ox = 0.5*canvas.width;
	var Oy = 0.5*canvas.height;
	var scX = 1*W/canvas.width;
	var scY = 1*H/canvas.width;
    
	var GVPa = document.getElementById("inVPa").value;
	var GIf = Math.max(document.getElementById("inIAm").value,document.getElementById("inIBm").value,document.getElementById("inICm").value);
	var GIPa = document.getElementById("inIPa").value;
	var GDPT = document.getElementById("inDPT").value;
    var GDPD = document.getElementById("inDPD").value;
	var GPZa = document.getElementById("inPZa").value;
    var GPPT = ((GVPa-GPZa-GIPa)%360+360)%360;
	var V1x = 0.84*Ox*Math.cos(GVPa*Math.PI/180);
    var V1y = 0.84*Ox*Math.sin(GVPa*Math.PI/180);
    var Isx = 112*Math.sign(GDPT)*Math.cos((GVPa-GPZa)*Math.PI/180);
    var Isy = 112*Math.sign(GDPT)*Math.sin((GVPa-GPZa)*Math.PI/180);    
	var Ifx = 112*GIf/GDPT*Math.cos(GIPa*Math.PI/180);
    var Ify = 112*GIf/GDPT*Math.sin(GIPa*Math.PI/180);
    if (GDPT == 0) {
        Ifx = 5.6*GIf*Math.cos(GIPa*Math.PI/180);
        Ify = 5.6*GIf*Math.sin(GIPa*Math.PI/180);
    }
    if (GDPT != 0 && GIf/GDPT > 1.6) {
        Ifx = 112*1.6*Math.cos(GIPa*Math.PI/180);
        Ify = 112*1.6*Math.sin(GIPa*Math.PI/180);
    }
    ctx.fillStyle = "white"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	ctx.strokeStyle = "grey"; ctx.setLineDash([2, 8]);
	ctx.beginPath(); ctx.arc(Ox, Oy, (Ox-32)/3, 0, 2*Math.PI); ctx.stroke();
	ctx.beginPath(); ctx.arc(Ox, Oy, (Ox-32)/1.5, 0, 2*Math.PI); ctx.stroke();
	ctx.beginPath(); ctx.arc(Ox, Oy, (Ox-32), 0, 2*Math.PI); ctx.stroke();	
	ctx.beginPath(); ctx.moveTo(32, Oy); ctx.lineTo(2*Ox-32, Oy); ctx.stroke();	
	ctx.beginPath(); ctx.moveTo(Ox, 32); ctx.lineTo(Ox, 2*Oy-32); ctx.stroke();	
	ctx.beginPath(); ctx.moveTo(Ox-80*Math.sqrt(3), Oy-80); ctx.lineTo(Ox+85*Math.sqrt(3), Oy+85); ctx.stroke();	
	ctx.beginPath(); ctx.moveTo(Ox-80*Math.sqrt(3), Oy+80); ctx.lineTo(Ox+85*Math.sqrt(3), Oy-85); ctx.stroke();
	ctx.beginPath(); ctx.moveTo(Ox-80, Oy-80*Math.sqrt(3)); ctx.lineTo(Ox+85, Oy+85*Math.sqrt(3)); ctx.stroke();
	ctx.beginPath(); ctx.moveTo(Ox+80, Oy-80*Math.sqrt(3)); ctx.lineTo(Ox-85, Oy+85*Math.sqrt(3)); ctx.stroke();
	ctx.setLineDash([]);
	
    ctx.beginPath(); ctx.moveTo(Ox, Oy); ctx.lineTo(Ox+V1x, Oy-V1y); ctx.strokeStyle = "red"; ctx.lineWidth = 1; 
    ctx.lineTo(Ox+V1x-5*(Math.sin((60-GVPa)*Math.PI/180)), Oy-V1y+5*(Math.cos((60-GVPa)*Math.PI/180)));
    ctx.arcTo(Ox+V1x, Oy-V1y,Ox+V1x+5*(Math.sin((-60-GVPa)*Math.PI/180)), Oy-V1y-5*(Math.cos((-60-GVPa)*Math.PI/180)),8);
    ctx.lineTo(Ox+V1x, Oy-V1y); ctx.fillStyle = "red"; ctx.fill(); ctx.stroke();
    ctx.font="15px Arial";ctx.textBaseline="middle";ctx.textAlign="center";
	ctx.fillText("V1",Ox+V1x+Math.cos(GVPa*Math.PI/180)*11, Oy-V1y-Math.sin(GVPa*Math.PI/180)*11);
    
	ctx.beginPath(); ctx.moveTo(Ox, Oy); ctx.lineTo(Ox+Isx, Oy-Isy); ctx.strokeStyle = "blue"; ctx.lineWidth = 2; 
    ctx.lineTo(Ox+Isx-5*(Math.sin((60-(GVPa-GPZa))*Math.PI/180)), Oy-Isy+5*(Math.cos((60-(GVPa-GPZa))*Math.PI/180)));
    ctx.arcTo(Ox+Isx, Oy-Isy,Ox+Isx+5*(Math.sin((-60-(GVPa-GPZa))*Math.PI/180)), Oy-Isy-5*(Math.cos((-60-(GVPa-GPZa))*Math.PI/180)),8);
    ctx.lineTo(Ox+Isx, Oy-Isy); ctx.fillStyle = "blue"; ctx.fill(); ctx.stroke();
    ctx.textBaseline="middle";ctx.textAlign="center";
	ctx.fillText("Iset",Ox+Isx+Math.cos((GVPa-GPZa)*Math.PI/180)*11, Oy-Isy-Math.sin((GVPa-GPZa)*Math.PI/180)*11);
	
	ctx.beginPath(); ctx.moveTo(Ox, Oy); ctx.lineTo(Ox+Ifx, Oy-Ify); ctx.strokeStyle = "black"; ctx.lineWidth = 2; ctx.stroke();
    ctx.lineTo(Ox+Ifx-5*(Math.sin((60-GIPa)*Math.PI/180)), Oy-Ify+5*(Math.cos((60-GIPa)*Math.PI/180)));
    ctx.arcTo(Ox+Ifx, Oy-Ify,Ox+Ifx+5*(Math.sin((-60-GIPa)*Math.PI/180)), Oy-Ify-5*(Math.cos((-60-GIPa)*Math.PI/180)),8);
    ctx.lineTo(Ox+Ifx, Oy-Ify); ctx.fillStyle = "black"; ctx.fill(); 
    ctx.textBaseline="middle";ctx.textAlign="center";
	ctx.fillText("If",Ox+Ifx+Math.cos(GIPa*Math.PI/180)*11, Oy-Ify-Math.sin(GIPa*Math.PI/180)*11);
	
	ctx.strokeStyle = "green"; ctx.lineWidth = 1; ctx.fillStyle = "green";
	ctx.beginPath(); ctx.moveTo(Ox+(Ox-32)*Math.cos((GVPa-GPZa)*Math.PI/180), Oy-(Ox-32)*Math.sin((GVPa-GPZa)*Math.PI/180));
	ctx.lineTo(Ox-(Ox-32)*Math.cos((GVPa-GPZa)*Math.PI/180), Oy+(Ox-32)*Math.sin((GVPa-GPZa)*Math.PI/180)); ctx.stroke();
	ctx.textBaseline="middle";ctx.textAlign="center";
	ctx.fillText("MTL",Ox+(Ox-32)*Math.cos((GVPa-GPZa)*Math.PI/180)+Math.cos((GVPa-GPZa)*Math.PI/180)*11, Oy-(Ox-32)*Math.sin((GVPa-GPZa)*Math.PI/180)-Math.sin((GVPa-GPZa)*Math.PI/180)*11);
	
	ctx.strokeStyle = "green"; ctx.lineWidth = 1; ctx.fillStyle = "green";
	ctx.beginPath(); ctx.moveTo(Ox+(Ox-32)*Math.sin((GVPa-GPZa)*Math.PI/180), Oy+(Ox-32)*Math.cos((GVPa-GPZa)*Math.PI/180));
	ctx.lineTo(Ox-(Ox-32)*Math.sin((GVPa-GPZa)*Math.PI/180), Oy-(Ox-32)*Math.cos((GVPa-GPZa)*Math.PI/180)); ctx.stroke();
	ctx.textBaseline="middle";ctx.textAlign="center";
	ctx.fillText("ZTL",Ox+(Ox-32)*Math.sin((GVPa-GPZa)*Math.PI/180)+Math.cos((GVPa-GPZa)*Math.PI/180)*11, Oy+(Ox-32)*Math.cos((GVPa-GPZa)*Math.PI/180)-Math.sin((GVPa-GPZa)*Math.PI/180)*11);
	
	ctx.fillStyle = "red"; ctx.beginPath();ctx.globalAlpha = .2;
	if (GDPD == "Forward"){
		ctx.arc(Ox, Oy, (Ox-32), (GPZa/180-GVPa/180-0.5)*Math.PI, (GPZa/180-GVPa/180+0.5)*Math.PI);
		ctx.lineTo(Ox+112*Math.sign(GDPT)*Math.cos((GPZa/180-GVPa/180+0.5)*Math.PI),Oy+112*Math.sign(GDPT)*Math.sin((GPZa/180-GVPa/180+0.5)*Math.PI));
		ctx.arc(Ox, Oy, 112*Math.sign(GDPT), (GPZa/180-GVPa/180+0.5)*Math.PI, (GPZa/180-GVPa/180-0.5)*Math.PI, true);ctx.closePath();ctx.fill();
	}
	if (GDPD == "Reverse"){
		ctx.arc(Ox, Oy, (Ox-32), (GPZa/180-GVPa/180-0.5)*Math.PI, (GPZa/180-GVPa/180+0.5)*Math.PI,true);
		ctx.lineTo(Ox+112*Math.sign(GDPT)*Math.cos((GPZa/180-GVPa/180+0.5)*Math.PI),Oy+112*Math.sign(GDPT)*Math.sin((GPZa/180-GVPa/180+0.5)*Math.PI));
		ctx.arc(Ox, Oy, 112*Math.sign(GDPT), (GPZa/180-GVPa/180+0.5)*Math.PI, (GPZa/180-GVPa/180-0.5)*Math.PI);ctx.closePath();ctx.fill();
	}
	if (GDPD == "None"){
		ctx.strokeStyle = "red";
		ctx.arc(Ox, Oy, (Ox-32), 0, 2*Math.PI);
		ctx.lineTo(112*Math.sign(GDPT),Oy);
		ctx.arc(Ox, Oy, 112*Math.sign(GDPT),2*Math.PI, 0,true);
		ctx.closePath();ctx.fill();
	}
	ctx.globalAlpha = 1;
    
    if (GIf>=GDPT && (GPPT <= 270) && (GPPT >= 90) && (GDPD == "Reverse" || GDPD == "None")) {
        document.getElementById('67PPT').style.color = "red";
        document.getElementById('67PPT').className = "blink_text";
    } else if (GIf>=GDPT && ((GPPT >= 270) || (GPPT <= 90)) && (GDPD == "Forward" || GDPD == "None")) {
        document.getElementById('67PPT').style.color = "red";
        document.getElementById('67PPT').className = "blink_text";
    }else{
        document.getElementById('67PPT').style.color = "black";
        document.getElementById('67PPT').className = "text";
    }
    
    if (document.getElementById('67PPT').style.color == "red" || document.getElementById('67PNT').style.color == "red") {
        document.getElementById('Out1').style.color = "white";
        document.getElementById('Out1').style.backgroundColor = "red";
    }else{
        document.getElementById('Out1').style.color = "grey";
        document.getElementById('Out1').style.backgroundColor = "white";
    }
    
	document.getElementById("P67P").style.transform = "scale(" + scX + " , " + scY + ")";
	document.getElementById("P67P").style.transformOrigin = "0 0";
}
function GPN() {
	var canvas = document.getElementById("N67P"),
        ctx = canvas.getContext("2d");
	var W = document.getElementById("Parent_P67P").offsetWidth;
	var H = document.getElementById("Parent_P67P").offsetHeight;
	canvas.width = 400;
	canvas.height = 400;
	var Ox = 0.5*canvas.width;
	var Oy = 0.5*canvas.height;
	var scX = 1*W/canvas.width;
	var scY = 1*H/canvas.width;
    
	var GVNa = document.getElementById("inVNa").value - 180;
	var GIf = Math.max(document.getElementById("inIAm").value,document.getElementById("inIBm").value,document.getElementById("inICm").value);
	var GINa = document.getElementById("inINa").value;
	var GDPT = document.getElementById("inDPT").value;
    var GDPD = document.getElementById("inDPD").value;
	var GPZa = document.getElementById("inPZa").value;
    var GPNT = ((GVNa-GPZa-GINa)%360+360)%360;
    
	var V2x = 0.84*Ox*Math.cos(GVNa*Math.PI/180);
    var V2y = 0.84*Ox*Math.sin(GVNa*Math.PI/180);    
    var Isx = 112*Math.sign(GDPT)*Math.cos((GVNa-GPZa)*Math.PI/180);
    var Isy = 112*Math.sign(GDPT)*Math.sin((GVNa-GPZa)*Math.PI/180);    
	var Ifx = 112*GIf/GDPT*Math.cos(GINa*Math.PI/180);
    var Ify = 112*GIf/GDPT*Math.sin(GINa*Math.PI/180);
    if (GDPT == 0) {
        Ifx = 5.6*GIf*Math.cos(GINa*Math.PI/180);
        Ify = 5.6*GIf*Math.sin(GINa*Math.PI/180);
    }
    if (GDPT != 0 && GIf/GDPT > 1.6) {
        Ifx = 112*1.6*Math.cos(GINa*Math.PI/180);
        Ify = 112*1.6*Math.sin(GINa*Math.PI/180);
    }    
    ctx.fillStyle = "white"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = "grey"; ctx.setLineDash([2, 8]);
	ctx.beginPath(); ctx.arc(Ox, Oy, (Ox-32)/3, 0, 2*Math.PI); ctx.stroke();
	ctx.beginPath(); ctx.arc(Ox, Oy, (Ox-32)/1.5, 0, 2*Math.PI); ctx.stroke();
	ctx.beginPath(); ctx.arc(Ox, Oy, (Ox-32), 0, 2*Math.PI); ctx.stroke();	
	ctx.beginPath(); ctx.moveTo(32, Oy); ctx.lineTo(2*Ox-32, Oy); ctx.stroke();	
	ctx.beginPath(); ctx.moveTo(Ox, 32); ctx.lineTo(Ox, 2*Oy-32); ctx.stroke();	
	ctx.beginPath(); ctx.moveTo(Ox-80*Math.sqrt(3), Oy-80); ctx.lineTo(Ox+85*Math.sqrt(3), Oy+85); ctx.stroke();	
	ctx.beginPath(); ctx.moveTo(Ox-80*Math.sqrt(3), Oy+80); ctx.lineTo(Ox+85*Math.sqrt(3), Oy-85); ctx.stroke();
	ctx.beginPath(); ctx.moveTo(Ox-80, Oy-80*Math.sqrt(3)); ctx.lineTo(Ox+85, Oy+85*Math.sqrt(3)); ctx.stroke();
	ctx.beginPath(); ctx.moveTo(Ox+80, Oy-80*Math.sqrt(3)); ctx.lineTo(Ox-85, Oy+85*Math.sqrt(3)); ctx.stroke();
	ctx.setLineDash([]);
        
    ctx.beginPath(); ctx.moveTo(Ox, Oy); ctx.lineTo(Ox+V2x, Oy-V2y); ctx.strokeStyle = "red"; ctx.lineWidth = 1; 
    ctx.lineTo(Ox+V2x-5*(Math.sin((60-GVNa)*Math.PI/180)), Oy-V2y+5*(Math.cos((60-GVNa)*Math.PI/180)));
    ctx.arcTo(Ox+V2x, Oy-V2y,Ox+V2x+5*(Math.sin((-60-GVNa)*Math.PI/180)), Oy-V2y-5*(Math.cos((-60-GVNa)*Math.PI/180)),8);
    ctx.lineTo(Ox+V2x, Oy-V2y); ctx.fillStyle = "red"; ctx.fill(); ctx.stroke();
    ctx.font="15px Arial";ctx.textBaseline="middle";ctx.textAlign="center";
	ctx.fillText("-V2",Ox+V2x+Math.cos(GVNa*Math.PI/180)*15, Oy-V2y-Math.sin(GVNa*Math.PI/180)*15);
        
    ctx.beginPath(); ctx.moveTo(Ox, Oy); ctx.lineTo(Ox+Isx, Oy-Isy); ctx.strokeStyle = "blue"; ctx.lineWidth = 2; 
    ctx.lineTo(Ox+Isx-5*(Math.sin((60-(GVNa-GPZa))*Math.PI/180)), Oy-Isy+5*(Math.cos((60-(GVNa-GPZa))*Math.PI/180)));
    ctx.arcTo(Ox+Isx, Oy-Isy,Ox+Isx+5*(Math.sin((-60-(GVNa-GPZa))*Math.PI/180)), Oy-Isy-5*(Math.cos((-60-(GVNa-GPZa))*Math.PI/180)),8);
    ctx.lineTo(Ox+Isx, Oy-Isy); ctx.fillStyle = "blue"; ctx.fill(); ctx.stroke();
    ctx.textBaseline="middle";ctx.textAlign="center";
	ctx.fillText("Iset",Ox+Isx+Math.cos((GVNa-GPZa)*Math.PI/180)*11, Oy-Isy-Math.sin((GVNa-GPZa)*Math.PI/180)*11);
    
	ctx.beginPath(); ctx.moveTo(Ox, Oy); ctx.lineTo(Ox+Ifx, Oy-Ify); ctx.strokeStyle = "black"; ctx.lineWidth = 2; ctx.stroke();
    ctx.lineTo(Ox+Ifx-5*(Math.sin((60-GINa)*Math.PI/180)), Oy-Ify+5*(Math.cos((60-GINa)*Math.PI/180)));
    ctx.arcTo(Ox+Ifx, Oy-Ify,Ox+Ifx+5*(Math.sin((-60-GINa)*Math.PI/180)), Oy-Ify-5*(Math.cos((-60-GINa)*Math.PI/180)),8);
    ctx.lineTo(Ox+Ifx, Oy-Ify); ctx.fillStyle = "black"; ctx.fill(); 
    ctx.textBaseline="middle";ctx.textAlign="center";
	ctx.fillText("If",Ox+Ifx+Math.cos(GINa*Math.PI/180)*11, Oy-Ify-Math.sin(GINa*Math.PI/180)*11);
    
    ctx.strokeStyle = "green"; ctx.lineWidth = 1; ctx.fillStyle = "green";
	ctx.beginPath(); ctx.moveTo(Ox+(Ox-32)*Math.cos((GVNa-GPZa)*Math.PI/180), Oy-(Ox-32)*Math.sin((GVNa-GPZa)*Math.PI/180));
	ctx.lineTo(Ox-(Ox-32)*Math.cos((GVNa-GPZa)*Math.PI/180), Oy+(Ox-32)*Math.sin((GVNa-GPZa)*Math.PI/180)); ctx.stroke();
	ctx.textBaseline="middle";ctx.textAlign="center";
	ctx.fillText("MTL",Ox+(Ox-32)*Math.cos((GVNa-GPZa)*Math.PI/180)+Math.cos((GVNa-GPZa)*Math.PI/180)*11, Oy-(Ox-32)*Math.sin((GVNa-GPZa)*Math.PI/180)-Math.sin((GVNa-GPZa)*Math.PI/180)*11);
	
	ctx.strokeStyle = "green"; ctx.lineWidth = 1; ctx.fillStyle = "green";
	ctx.beginPath(); ctx.moveTo(Ox+(Ox-32)*Math.sin((GVNa-GPZa)*Math.PI/180), Oy+(Ox-32)*Math.cos((GVNa-GPZa)*Math.PI/180));
	ctx.lineTo(Ox-(Ox-32)*Math.sin((GVNa-GPZa)*Math.PI/180), Oy-(Ox-32)*Math.cos((GVNa-GPZa)*Math.PI/180)); ctx.stroke();
	ctx.textBaseline="middle";ctx.textAlign="center";
	ctx.fillText("ZTL",Ox+(Ox-32)*Math.sin((GVNa-GPZa)*Math.PI/180)+Math.cos((GVNa-GPZa)*Math.PI/180)*11, Oy+(Ox-32)*Math.cos((GVNa-GPZa)*Math.PI/180)-Math.sin((GVNa-GPZa)*Math.PI/180)*11);
    
    ctx.fillStyle = "red"; ctx.beginPath();ctx.globalAlpha = .2;
	if (GDPD == "Forward"){
		ctx.arc(Ox, Oy, (Ox-32), (GPZa/180-GVNa/180-0.5)*Math.PI, (GPZa/180-GVNa/180+0.5)*Math.PI);
		ctx.lineTo(Ox+112*Math.sign(GDPT)*Math.cos((GPZa/180-GVNa/180+0.5)*Math.PI),Oy+112*Math.sign(GDPT)*Math.sin((GPZa/180-GVNa/180+0.5)*Math.PI));
		ctx.arc(Ox, Oy, 112*Math.sign(GDPT), (GPZa/180-GVNa/180+0.5)*Math.PI, (GPZa/180-GVNa/180-0.5)*Math.PI, true);ctx.closePath();ctx.fill();
	}

	if (GDPD == "Reverse"){
		ctx.arc(Ox, Oy, (Ox-32), (GPZa/180-GVNa/180-0.5)*Math.PI, (GPZa/180-GVNa/180+0.5)*Math.PI,true);
		ctx.lineTo(Ox+112*Math.sign(GDPT)*Math.cos((GPZa/180-GVNa/180+0.5)*Math.PI),Oy+112*Math.sign(GDPT)*Math.sin((GPZa/180-GVNa/180+0.5)*Math.PI));
		ctx.arc(Ox, Oy, 112*Math.sign(GDPT), (GPZa/180-GVNa/180+0.5)*Math.PI, (GPZa/180-GVNa/180-0.5)*Math.PI);ctx.closePath();ctx.fill();
	}
    
	if (GDPD == "None"){
		ctx.strokeStyle = "red";
		ctx.arc(Ox, Oy, (Ox-32), 0, 2*Math.PI);
		ctx.lineTo(Ox+112*Math.sign(GDPT),Oy);
		ctx.arc(Ox, Oy, 112*Math.sign(GDPT), 2*Math.PI, 0,true);
		ctx.closePath();ctx.fill();
	}
	ctx.globalAlpha = 1;
        
    if (GIf>=GDPT && (GPNT <= 270) && (GPNT >= 90) && (GDPD == "Reverse" || GDPD == "None")) {
        document.getElementById('67PNT').style.color = "red";
        document.getElementById('67PNT').className = "blink_text";
    } else if (GIf>=GDPT && ((GPNT >= 270) || (GPNT <= 90)) && (GDPD == "Forward" || GDPD == "None")) {
        document.getElementById('67PNT').style.color = "red";
        document.getElementById('67PNT').className = "blink_text";
    }else{
        document.getElementById('67PNT').style.color = "black";
        document.getElementById('67PNT').className = "text";
    }    
    
	document.getElementById("N67P").style.transform = "scale(" + scX + " , " + scY + ")";
	document.getElementById("N67P").style.transformOrigin = "0 0";
    
    var VAm = document.getElementById("inVAm"); var VBm = document.getElementById("inVBm"); var VCm = document.getElementById("inVCm");
    var VAa = document.getElementById("inVAa"); var VBa = document.getElementById("inVBa"); var VCa = document.getElementById("inVCa");
    if (fNm(VAm.value,VAa.value,VBm.value,VBa.value,VCm.value,VCa.value)/fPm(VAm.value,VAa.value,VBm.value,VBa.value,VCm.value,VCa.value) < .05){
        ctx.fillStyle = "white"; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "red"; ctx.font="40px Arial";ctx.textBaseline="middle";ctx.textAlign="center";
        ctx.fillText("Small V2",200, 200);
        document.getElementById('67PNT').style.color = "black";
        document.getElementById('67PNT').className = "headers";
    }
    if (document.getElementById('67PPT').style.color == "red" || document.getElementById('67PNT').style.color == "red") {
        document.getElementById('Out1').style.color = "white";
        document.getElementById('Out1').style.backgroundColor = "red";
    }else{
        document.getElementById('Out1').style.color = "grey";
        document.getElementById('Out1').style.backgroundColor = "white";
    }
}
function GNN() {                
    var canvas = document.getElementById("N67N"),
        ctx = canvas.getContext("2d");
	var W = document.getElementById("Parent_N67N").offsetWidth;
	var H = document.getElementById("Parent_N67N").offsetHeight;
	canvas.width = 400;
	canvas.height = 400;
	var Ox = 0.5*canvas.width;
	var Oy = 0.5*canvas.height;
	var scX = 1*W/canvas.width;
	var scY = 1*H/canvas.width;
    
	var GVNa = document.getElementById("inVNa").value - 180;
	var GIfx = document.getElementById("inIAm").value*Math.cos(document.getElementById("inIAa").value*Math.PI/180)
             + document.getElementById("inIBm").value*Math.cos(document.getElementById("inIBa").value*Math.PI/180)
             + document.getElementById("inICm").value*Math.cos(document.getElementById("inICa").value*Math.PI/180);
    var GIfy = document.getElementById("inIAm").value*Math.sin(document.getElementById("inIAa").value*Math.PI/180)
             + document.getElementById("inIBm").value*Math.sin(document.getElementById("inIBa").value*Math.PI/180)
             + document.getElementById("inICm").value*Math.sin(document.getElementById("inICa").value*Math.PI/180);
    var GIf = Math.sqrt(GIfx*GIfx+GIfy*GIfy);
	var GINa = document.getElementById("inINa").value;
	var GDNT = document.getElementById("inDNT").value;
    var GDND = document.getElementById("inDND").value;
	var GPZa = document.getElementById("inPZa").value;
    var GNNT = ((GVNa-GPZa-GINa)%360+360)%360;
    
	var V2x = 0.84*Ox*Math.cos(GVNa*Math.PI/180);
    var V2y = 0.84*Ox*Math.sin(GVNa*Math.PI/180);
    var Isx = 112*Math.sign(GDNT)*Math.cos((GVNa-GPZa)*Math.PI/180);
    var Isy = 112*Math.sign(GDNT)*Math.sin((GVNa-GPZa)*Math.PI/180);    
	var Ifx = 112*GIf/GDNT*Math.cos(GINa*Math.PI/180);
    var Ify = 112*GIf/GDNT*Math.sin(GINa*Math.PI/180);
    if (GDNT == 0) {
        Ifx = 5.6*GIf*Math.cos(GINa*Math.PI/180);
        Ify = 5.6*GIf*Math.sin(GINa*Math.PI/180);
    }
    if (GDNT != 0 && GIf/GDNT > 1.6) {
        Ifx = 112*1.6*Math.cos(GINa*Math.PI/180);
        Ify = 112*1.6*Math.sin(GINa*Math.PI/180);
    }    
    ctx.fillStyle = "white"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = "grey"; ctx.setLineDash([2, 8]);
	ctx.beginPath(); ctx.arc(Ox, Oy, (Ox-32)/3, 0, 2*Math.PI); ctx.stroke();
	ctx.beginPath(); ctx.arc(Ox, Oy, (Ox-32)/1.5, 0, 2*Math.PI); ctx.stroke();
	ctx.beginPath(); ctx.arc(Ox, Oy, (Ox-32), 0, 2*Math.PI); ctx.stroke();	
	ctx.beginPath(); ctx.moveTo(32, Oy); ctx.lineTo(2*Ox-32, Oy); ctx.stroke();	
	ctx.beginPath(); ctx.moveTo(Ox, 32); ctx.lineTo(Ox, 2*Oy-32); ctx.stroke();	
	ctx.beginPath(); ctx.moveTo(Ox-80*Math.sqrt(3), Oy-80); ctx.lineTo(Ox+85*Math.sqrt(3), Oy+85); ctx.stroke();	
	ctx.beginPath(); ctx.moveTo(Ox-80*Math.sqrt(3), Oy+80); ctx.lineTo(Ox+85*Math.sqrt(3), Oy-85); ctx.stroke();
	ctx.beginPath(); ctx.moveTo(Ox-80, Oy-80*Math.sqrt(3)); ctx.lineTo(Ox+85, Oy+85*Math.sqrt(3)); ctx.stroke();
	ctx.beginPath(); ctx.moveTo(Ox+80, Oy-80*Math.sqrt(3)); ctx.lineTo(Ox-85, Oy+85*Math.sqrt(3)); ctx.stroke();
	ctx.setLineDash([]);
    
    ctx.beginPath(); ctx.moveTo(Ox, Oy); ctx.lineTo(Ox+V2x, Oy-V2y); ctx.strokeStyle = "red"; ctx.lineWidth = 1; 
    ctx.lineTo(Ox+V2x-5*(Math.sin((60-GVNa)*Math.PI/180)), Oy-V2y+5*(Math.cos((60-GVNa)*Math.PI/180)));
    ctx.arcTo(Ox+V2x, Oy-V2y,Ox+V2x+5*(Math.sin((-60-GVNa)*Math.PI/180)), Oy-V2y-5*(Math.cos((-60-GVNa)*Math.PI/180)),8);
    ctx.lineTo(Ox+V2x, Oy-V2y); ctx.fillStyle = "red"; ctx.fill(); ctx.stroke();
    ctx.font="15px Arial";ctx.textBaseline="middle";ctx.textAlign="center";
	ctx.fillText("-V2",Ox+V2x+Math.cos(GVNa*Math.PI/180)*15, Oy-V2y-Math.sin(GVNa*Math.PI/180)*15);
        
    ctx.beginPath(); ctx.moveTo(Ox, Oy); ctx.lineTo(Ox+Isx, Oy-Isy); ctx.strokeStyle = "blue"; ctx.lineWidth = 2; 
    ctx.lineTo(Ox+Isx-5*(Math.sin((60-(GVNa-GPZa))*Math.PI/180)), Oy-Isy+5*(Math.cos((60-(GVNa-GPZa))*Math.PI/180)));
    ctx.arcTo(Ox+Isx, Oy-Isy,Ox+Isx+5*(Math.sin((-60-(GVNa-GPZa))*Math.PI/180)), Oy-Isy-5*(Math.cos((-60-(GVNa-GPZa))*Math.PI/180)),8);
    ctx.lineTo(Ox+Isx, Oy-Isy); ctx.fillStyle = "blue"; ctx.fill(); ctx.stroke();
    ctx.textBaseline="middle";ctx.textAlign="center";
	ctx.fillText("Iset",Ox+Isx+Math.cos((GVNa-GPZa)*Math.PI/180)*11, Oy-Isy-Math.sin((GVNa-GPZa)*Math.PI/180)*11);

	ctx.beginPath(); ctx.moveTo(Ox, Oy); ctx.lineTo(Ox+Ifx, Oy-Ify); ctx.strokeStyle = "black"; ctx.lineWidth = 2; ctx.stroke();
    ctx.lineTo(Ox+Ifx-5*(Math.sin((60-GINa)*Math.PI/180)), Oy-Ify+5*(Math.cos((60-GINa)*Math.PI/180)));
    ctx.arcTo(Ox+Ifx, Oy-Ify,Ox+Ifx+5*(Math.sin((-60-GINa)*Math.PI/180)), Oy-Ify-5*(Math.cos((-60-GINa)*Math.PI/180)),8);
    ctx.lineTo(Ox+Ifx, Oy-Ify); ctx.fillStyle = "black"; ctx.fill(); ctx. stroke();
    ctx.textBaseline="middle";ctx.textAlign="center";
	ctx.fillText("If",Ox+Ifx+Math.cos(GINa*Math.PI/180)*11, Oy-Ify-Math.sin(GINa*Math.PI/180)*11);
    
    ctx.strokeStyle = "green"; ctx.lineWidth = 1; ctx.fillStyle = "green";
	ctx.beginPath(); ctx.moveTo(Ox+(Ox-32)*Math.cos((GVNa-GPZa)*Math.PI/180), Oy-(Ox-32)*Math.sin((GVNa-GPZa)*Math.PI/180));
	ctx.lineTo(Ox-(Ox-32)*Math.cos((GVNa-GPZa)*Math.PI/180), Oy+(Ox-32)*Math.sin((GVNa-GPZa)*Math.PI/180)); ctx.stroke();
	ctx.textBaseline="middle";ctx.textAlign="center";
	ctx.fillText("MTL",Ox+(Ox-32)*Math.cos((GVNa-GPZa)*Math.PI/180)+Math.cos((GVNa-GPZa)*Math.PI/180)*11, Oy-(Ox-32)*Math.sin((GVNa-GPZa)*Math.PI/180)-Math.sin((GVNa-GPZa)*Math.PI/180)*11);
	
    ctx.strokeStyle = "green"; ctx.lineWidth = 1; ctx.fillStyle = "green";
	ctx.beginPath(); ctx.moveTo(Ox+(Ox-32)*Math.sin((GVNa-GPZa)*Math.PI/180), Oy+(Ox-32)*Math.cos((GVNa-GPZa)*Math.PI/180));
	ctx.lineTo(Ox-(Ox-32)*Math.sin((GVNa-GPZa)*Math.PI/180), Oy-(Ox-32)*Math.cos((GVNa-GPZa)*Math.PI/180)); ctx.stroke();
	ctx.textBaseline="middle";ctx.textAlign="center";
	ctx.fillText("ZTL",Ox+(Ox-32)*Math.sin((GVNa-GPZa)*Math.PI/180)+Math.cos((GVNa-GPZa)*Math.PI/180)*11, Oy+(Ox-32)*Math.cos((GVNa-GPZa)*Math.PI/180)-Math.sin((GVNa-GPZa)*Math.PI/180)*11);
    
    ctx.fillStyle = "red"; ctx.beginPath();ctx.globalAlpha = .2;
	if (GDND == "Forward"){
		ctx.arc(Ox, Oy, (Ox-32), (GPZa/180-GVNa/180-0.5)*Math.PI, (GPZa/180-GVNa/180+0.5)*Math.PI);
		ctx.lineTo(Ox+112*Math.sign(GDNT)*Math.cos((GPZa/180-GVNa/180+0.5)*Math.PI),Oy+112*Math.sign(GDNT)*Math.sin((GPZa/180-GVNa/180+0.5)*Math.PI));
		ctx.arc(Ox, Oy, 112*Math.sign(GDNT), (GPZa/180-GVNa/180+0.5)*Math.PI, (GPZa/180-GVNa/180-0.5)*Math.PI, true);ctx.closePath();ctx.fill();
	}
	if (GDND == "Reverse"){
		ctx.arc(Ox, Oy, (Ox-32), (GPZa/180-GVNa/180-0.5)*Math.PI, (GPZa/180-GVNa/180+0.5)*Math.PI,true);
		ctx.lineTo(Ox+112*Math.sign(GDNT)*Math.cos((GPZa/180-GVNa/180+0.5)*Math.PI),Oy+112*Math.sign(GDNT)*Math.sin((GPZa/180-GVNa/180+0.5)*Math.PI));
		ctx.arc(Ox, Oy, 112*Math.sign(GDNT), (GPZa/180-GVNa/180+0.5)*Math.PI, (GPZa/180-GVNa/180-0.5)*Math.PI);ctx.closePath();ctx.fill();
	}
	if (GDND == "None"){
		ctx.strokeStyle = "red";
		ctx.arc(Ox, Oy, (Ox-32), 0, 2*Math.PI);
		ctx.lineTo(Ox+112*Math.sign(GDNT),Oy);
		ctx.arc(Ox, Oy, 112*Math.sign(GDNT),2*Math.PI, 0,true);
		ctx.closePath();ctx.fill();
	}
	ctx.globalAlpha = 1;
    
    if (GIf>=GDNT && (GNNT <= 270) && (GNNT >= 90) && (GDND == "Reverse" || GDND == "None")) {
        document.getElementById('67NNT').style.color = "red";
        document.getElementById('67NNT').className = "blink_text";
    } else if (GIf>=GDNT && ((GNNT >= 270) || (GNNT <= 90)) && (GDND == "Forward" || GDND == "None")) {
        document.getElementById('67NNT').style.color = "red";
        document.getElementById('67NNT').className = "blink_text";
    }else{
        document.getElementById('67NNT').style.color = "black";
        document.getElementById('67NNT').className = "text";
    }
        
    document.getElementById("N67N").style.transform = "scale(" + scX + " , " + scY + ")";
	document.getElementById("N67N").style.transformOrigin = "0 0";
    
    var VAm = document.getElementById("inVAm"); var VBm = document.getElementById("inVBm"); var VCm = document.getElementById("inVCm");
    var VAa = document.getElementById("inVAa"); var VBa = document.getElementById("inVBa"); var VCa = document.getElementById("inVCa");
    if (fNm(VAm.value,VAa.value,VBm.value,VBa.value,VCm.value,VCa.value)/fPm(VAm.value,VAa.value,VBm.value,VBa.value,VCm.value,VCa.value) < .05){
        ctx.fillStyle = "white"; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "red"; ctx.font="40px Arial";ctx.textBaseline="middle";ctx.textAlign="center";
        ctx.fillText("Small V2",200, 200);
        document.getElementById('67NNT').style.color = "black";
        document.getElementById('67NNT').className = "headers";
    }
    if (document.getElementById('67NNT').style.color == "red" || document.getElementById('67NZT').style.color == "red") {
        document.getElementById('Out2').style.color = "white";
        document.getElementById('Out2').style.backgroundColor = "red";
    }else{
        document.getElementById('Out2').style.color = "black";
        document.getElementById('Out2').style.backgroundColor = "white";
    }
}
function GNZ() {    
    var canvas = document.getElementById("Z67N"),
        ctx = canvas.getContext("2d");
	var W = document.getElementById("Parent_Z67N").offsetWidth;
	var H = document.getElementById("Parent_Z67N").offsetHeight;
	canvas.width = 400;
	canvas.height = 400;
	var Ox = 0.5*canvas.width;
	var Oy = 0.5*canvas.height;
	var scX = 1*W/canvas.width;
	var scY = 1*H/canvas.width;
    
	var GVZa = document.getElementById("inVZa").value - 180;
	var GIfx = document.getElementById("inIAm").value*Math.cos(document.getElementById("inIAa").value*Math.PI/180)
             + document.getElementById("inIBm").value*Math.cos(document.getElementById("inIBa").value*Math.PI/180)
             + document.getElementById("inICm").value*Math.cos(document.getElementById("inICa").value*Math.PI/180);
    var GIfy = document.getElementById("inIAm").value*Math.sin(document.getElementById("inIAa").value*Math.PI/180)
             + document.getElementById("inIBm").value*Math.sin(document.getElementById("inIBa").value*Math.PI/180)
             + document.getElementById("inICm").value*Math.sin(document.getElementById("inICa").value*Math.PI/180);
    var GIf = Math.sqrt(GIfx*GIfx+GIfy*GIfy);
	var GIZa = document.getElementById("inIZa").value;
	var GDNT = document.getElementById("inDNT").value;
    var GDND = document.getElementById("inDND").value;
	var GZZa = document.getElementById("inZZa").value;
    var GNZT = ((GVZa-GZZa-GIZa)%360+360)%360;
    
	var V2x = 0.84*Ox*Math.cos(GVZa*Math.PI/180);
    var V2y = 0.84*Ox*Math.sin(GVZa*Math.PI/180);
    var Isx = 112*Math.sign(GDNT)*Math.cos((GVZa-GZZa)*Math.PI/180);
    var Isy = 112*Math.sign(GDNT)*Math.sin((GVZa-GZZa)*Math.PI/180);    
	var Ifx = 112*GIf/GDNT*Math.cos(GIZa*Math.PI/180);
    var Ify = 112*GIf/GDNT*Math.sin(GIZa*Math.PI/180);
    if (GDNT == 0) {
        Ifx = 5.6*GIf*Math.cos(GIZa*Math.PI/180);
        Ify = 5.6*GIf*Math.sin(GIZa*Math.PI/180);
    }
    if (GDNT != 0 && GIf/GDNT > 1.6) {
        Ifx = 112*1.6*Math.cos(GIZa*Math.PI/180);
        Ify = 112*1.6*Math.sin(GIZa*Math.PI/180);
    }
    ctx.fillStyle = "white"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = "grey"; ctx.setLineDash([2, 8]);
	ctx.beginPath(); ctx.arc(Ox, Oy, (Ox-32)/3, 0, 2*Math.PI); ctx.stroke();
	ctx.beginPath(); ctx.arc(Ox, Oy, (Ox-32)/1.5, 0, 2*Math.PI); ctx.stroke();
	ctx.beginPath(); ctx.arc(Ox, Oy, (Ox-32), 0, 2*Math.PI); ctx.stroke();	
	ctx.beginPath(); ctx.moveTo(32, Oy); ctx.lineTo(2*Ox-32, Oy); ctx.stroke();	
	ctx.beginPath(); ctx.moveTo(Ox, 32); ctx.lineTo(Ox, 2*Oy-32); ctx.stroke();	
	ctx.beginPath(); ctx.moveTo(Ox-80*Math.sqrt(3), Oy-80); ctx.lineTo(Ox+85*Math.sqrt(3), Oy+85); ctx.stroke();	
	ctx.beginPath(); ctx.moveTo(Ox-80*Math.sqrt(3), Oy+80); ctx.lineTo(Ox+85*Math.sqrt(3), Oy-85); ctx.stroke();
	ctx.beginPath(); ctx.moveTo(Ox-80, Oy-80*Math.sqrt(3)); ctx.lineTo(Ox+85, Oy+85*Math.sqrt(3)); ctx.stroke();
	ctx.beginPath(); ctx.moveTo(Ox+80, Oy-80*Math.sqrt(3)); ctx.lineTo(Ox-85, Oy+85*Math.sqrt(3)); ctx.stroke();
	ctx.setLineDash([]);
    
    ctx.beginPath(); ctx.moveTo(Ox, Oy); ctx.lineTo(Ox+V2x, Oy-V2y); ctx.strokeStyle = "red"; ctx.lineWidth = 1; 
    ctx.lineTo(Ox+V2x-5*(Math.sin((60-GVZa)*Math.PI/180)), Oy-V2y+5*(Math.cos((60-GVZa)*Math.PI/180)));
    ctx.arcTo(Ox+V2x, Oy-V2y,Ox+V2x+5*(Math.sin((-60-GVZa)*Math.PI/180)), Oy-V2y-5*(Math.cos((-60-GVZa)*Math.PI/180)),8);
    ctx.lineTo(Ox+V2x, Oy-V2y); ctx.fillStyle = "red"; ctx.fill(); ctx.stroke();
    ctx.font="15px Arial";ctx.textBaseline="middle";ctx.textAlign="center";
	ctx.fillText("-V0",Ox+V2x+Math.cos(GVZa*Math.PI/180)*15, Oy-V2y-Math.sin(GVZa*Math.PI/180)*15);
    
	ctx.beginPath(); ctx.moveTo(Ox, Oy); ctx.lineTo(Ox+Isx, Oy-Isy); ctx.strokeStyle = "blue"; ctx.lineWidth = 2; 
    ctx.lineTo(Ox+Isx-5*(Math.sin((60-(GVZa-GZZa))*Math.PI/180)), Oy-Isy+5*(Math.cos((60-(GVZa-GZZa))*Math.PI/180)));
    ctx.arcTo(Ox+Isx, Oy-Isy,Ox+Isx+5*(Math.sin((-60-(GVZa-GZZa))*Math.PI/180)), Oy-Isy-5*(Math.cos((-60-(GVZa-GZZa))*Math.PI/180)),8);
    ctx.lineTo(Ox+Isx, Oy-Isy); ctx.fillStyle = "blue"; ctx.fill(); ctx.stroke();
    ctx.textBaseline="middle";ctx.textAlign="center";
	ctx.fillText("Iset",Ox+Isx+Math.cos((GVZa-GZZa)*Math.PI/180)*11, Oy-Isy-Math.sin((GVZa-GZZa)*Math.PI/180)*11);

	ctx.beginPath(); ctx.moveTo(Ox, Oy); ctx.lineTo(Ox+Ifx, Oy-Ify); ctx.strokeStyle = "black"; ctx.lineWidth = 2; 
    ctx.lineTo(Ox+Ifx-5*(Math.sin((60-GIZa)*Math.PI/180)), Oy-Ify+5*(Math.cos((60-GIZa)*Math.PI/180)));
    ctx.arcTo(Ox+Ifx, Oy-Ify,Ox+Ifx+5*(Math.sin((-60-GIZa)*Math.PI/180)), Oy-Ify-5*(Math.cos((-60-GIZa)*Math.PI/180)),8);
    ctx.lineTo(Ox+Ifx, Oy-Ify); ctx.fillStyle = "black"; ctx.fill(); ctx. stroke();
    ctx.textBaseline="middle";ctx.textAlign="center";
	ctx.fillText("If",Ox+Ifx+Math.cos(GIZa*Math.PI/180)*11, Oy-Ify-Math.sin(GIZa*Math.PI/180)*11);
    
    ctx.strokeStyle = "green"; ctx.lineWidth = 1; ctx.fillStyle = "green";
	ctx.beginPath(); ctx.moveTo(Ox+(Ox-32)*Math.cos((GVZa-GZZa)*Math.PI/180), Oy-(Ox-32)*Math.sin((GVZa-GZZa)*Math.PI/180));
	ctx.lineTo(Ox-(Ox-32)*Math.cos((GVZa-GZZa)*Math.PI/180), Oy+(Ox-32)*Math.sin((GVZa-GZZa)*Math.PI/180)); ctx.stroke();
	ctx.textBaseline="middle";ctx.textAlign="center";
	ctx.fillText("MTL",Ox+(Ox-32)*Math.cos((GVZa-GZZa)*Math.PI/180)+Math.cos((GVZa-GZZa)*Math.PI/180)*11, Oy-(Ox-32)*Math.sin((GVZa-GZZa)*Math.PI/180)-Math.sin((GVZa-GZZa)*Math.PI/180)*11);
	
	ctx.strokeStyle = "green"; ctx.lineWidth = 1; ctx.fillStyle = "green";
	ctx.beginPath(); ctx.moveTo(Ox+(Ox-32)*Math.sin((GVZa-GZZa)*Math.PI/180), Oy+(Ox-32)*Math.cos((GVZa-GZZa)*Math.PI/180));
	ctx.lineTo(Ox-(Ox-32)*Math.sin((GVZa-GZZa)*Math.PI/180), Oy-(Ox-32)*Math.cos((GVZa-GZZa)*Math.PI/180)); ctx.stroke();
	ctx.textBaseline="middle";ctx.textAlign="center";
	ctx.fillText("ZTL",Ox+(Ox-32)*Math.sin((GVZa-GZZa)*Math.PI/180)+Math.cos((GVZa-GZZa)*Math.PI/180)*11, Oy+(Ox-32)*Math.cos((GVZa-GZZa)*Math.PI/180)-Math.sin((GVZa-GZZa)*Math.PI/180)*11);
    
    ctx.fillStyle = "red"; ctx.beginPath();ctx.globalAlpha = .2;
	if (GDND == "Forward"){
		ctx.arc(Ox, Oy, (Ox-32), (GZZa/180-GVZa/180-0.5)*Math.PI, (GZZa/180-GVZa/180+0.5)*Math.PI);
		ctx.lineTo(Ox+112*Math.sign(GDNT)*Math.cos((GZZa/180-GVZa/180+0.5)*Math.PI) , Oy+112*Math.sign(GDNT)*Math.sin((GZZa/180-GVZa/180+0.5)*Math.PI));
		ctx.arc(Ox , Oy, 112*Math.sign(GDNT), (GZZa/180-GVZa/180+0.5)*Math.PI, (GZZa/180-GVZa/180-0.5)*Math.PI, true);ctx.closePath();ctx.fill();
	}
	if (GDND == "Reverse"){
		ctx.arc(Ox , Oy , (Ox-32) , (GZZa/180-GVZa/180-0.5)*Math.PI , (GZZa/180-GVZa/180+0.5)*Math.PI , true);
		ctx.lineTo(Ox+112*Math.sign(GDNT)*Math.cos((GZZa/180-GVZa/180+0.5)*Math.PI) , Oy+112*Math.sign(GDNT)*Math.sin((GZZa/180-GVZa/180+0.5)*Math.PI));
		ctx.arc(Ox , Oy , 112*Math.sign(GDNT) , (GZZa/180-GVZa/180+0.5)*Math.PI , (GZZa/180-GVZa/180-0.5)*Math.PI); ctx.closePath(); ctx.fill();
	}
	if (GDND == "None"){
		ctx.strokeStyle = "red";
		ctx.arc(Ox , Oy , (Ox-32), 0, 2*Math.PI);
		ctx.lineTo(Ox + 112*Math.sign(GDNT) , Oy);
		ctx.arc(Ox , Oy , 112*Math.sign(GDNT) , 2*Math.PI , 0 , true);
		ctx.closePath();ctx.fill();
	}
	ctx.globalAlpha = 1;
    
    if (GIf>=GDNT && (GNZT <= 270) && (GNZT >= 90) && (GDND == "Reverse" || GDND == "None")) {
        document.getElementById('67NZT').style.color = "red";
        document.getElementById('67NZT').className = "blink_text";
    } else if (GIf>=GDNT && ((GNZT >= 270) || (GNZT <= 90)) && (GDND == "Forward" || GDND == "None")) {
        document.getElementById('67NZT').style.color = "red";
        document.getElementById('67NZT').className = "blink_text";
    }else{
        document.getElementById('67NZT').style.color = "black";
        document.getElementById('67NZT').className = "text";
    }   
        
    document.getElementById("Z67N").style.transform = "scale(" + scX + " , " + scY + ")";
	document.getElementById("Z67N").style.transformOrigin = "0 0";
    
    var VAm = document.getElementById("inVAm"); var VBm = document.getElementById("inVBm"); var VCm = document.getElementById("inVCm");
    var VAa = document.getElementById("inVAa"); var VBa = document.getElementById("inVBa"); var VCa = document.getElementById("inVCa");
    if (fZm(VAm.value,VAa.value,VBm.value,VBa.value,VCm.value,VCa.value)/fPm(VAm.value,VAa.value,VBm.value,VBa.value,VCm.value,VCa.value) < .05){
        ctx.fillStyle = "white"; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "red"; ctx.font="40px Arial";ctx.textBaseline="middle";ctx.textAlign="center";
        ctx.fillText("Small V0",200, 200);
        document.getElementById('67NZT').style.color = "black";
        document.getElementById('67NZT').className = "headers";
    }
    
    if (document.getElementById('67NNT').style.color == "red" || document.getElementById('67NZT').style.color == "red") {
        document.getElementById('Out2').style.color = "white";
        document.getElementById('Out2').style.backgroundColor = "red";
    }else{
        document.getElementById('Out2').style.color = "grey";
        document.getElementById('Out2').style.backgroundColor = "white";
    }
}
function PrintVI(source,valNum) {
    valNum = parseFloat(valNum);
    if (F10cr == parseFloat("0 Prefault")){
        if (source == "inVF") {
            if (F8cr == parseFloat("2 Th-Ph") && F9cr == parseFloat("1 Vpp")){
                if (valNum > 207.84) {valNum = 207.84}
                if (valNum < 0) {valNum = 0}
                document.getElementById("inVF").value = valNum.toFixed(2); VFx[F8cr][F9cr][F10cr] = valNum;
                document.getElementById("inVAm").value = (valNum/Math.sqrt(3)).toFixed(2);
                document.getElementById("inVBm").value = (valNum/Math.sqrt(3)).toFixed(2);
                document.getElementById("inVCm").value = (valNum/Math.sqrt(3)).toFixed(2);
            }
            else {
                if (valNum > 120) {valNum = 120}
                if (valNum < 0) {valNum = 0}
                document.getElementById("inVF").value = valNum.toFixed(2); VFx[F8cr][F9cr][F10cr] = valNum;
                document.getElementById("inVAm").value = valNum.toFixed(2);  
                document.getElementById("inVBm").value = valNum.toFixed(2);
                document.getElementById("inVCm").value = valNum.toFixed(2);
            }
        }
        if (source == "inIF") {
            if (valNum > 30) {valNum = 30}
            if (valNum < 0) {valNum = 0}
            document.getElementById("inIF").value = valNum.toFixed(3); IFx[F8cr][F9cr][F10cr] = valNum;
            document.getElementById("inIAm").value = valNum.toFixed(3);
            document.getElementById("inIBm").value = valNum.toFixed(3);
            document.getElementById("inICm").value = valNum.toFixed(3);
        }
        if (source == "inAF") {
            valNum = (valNum + 360) % 360; 
            document.getElementById("inAF").value = valNum.toFixed(2); AFx[F8cr][F9cr][F10cr] = valNum;
            document.getElementById("inIAa").value = ((360 - valNum) % 360).toFixed(2);   
            document.getElementById("inIBa").value = ((600 - valNum) % 360).toFixed(2);
            document.getElementById("inICa").value = ((480 - valNum) % 360).toFixed(2);    
        }
    }
    if (F10cr == parseFloat("1 Fault")){
        if (source == "inVF") {
            if (F8cr == parseFloat("0 Ph-N")){
                if (valNum > 120) {valNum = 120}
                if (valNum < 0) {valNum = 0}
                document.getElementById("inVF").value = valNum.toFixed(2); VFx[F8cr][F9cr][F10cr] = valNum;
                if (F9cr == parseFloat("0 A-N")){
                    document.getElementById("inVAm").value = valNum.toFixed(2);
                    document.getElementById("inVBm").value = VFx[F8cr][F9cr][0].toFixed(2);
                    document.getElementById("inVCm").value = VFx[F8cr][F9cr][0].toFixed(2);
                }
                if (F9cr == parseFloat("1 B-N")){
                    document.getElementById("inVBm").value = valNum.toFixed(2);
                    document.getElementById("inVAm").value = VFx[F8cr][F9cr][0].toFixed(2);
                    document.getElementById("inVCm").value = VFx[F8cr][F9cr][0].toFixed(2);
                }
                if (F9cr == parseFloat("2 C-N")){
                    document.getElementById("inVCm").value = valNum.toFixed(2);
                    document.getElementById("inVAm").value = VFx[F8cr][F9cr][0].toFixed(2);  
                    document.getElementById("inVBm").value = VFx[F8cr][F9cr][0].toFixed(2);
                }
            }
            if (F8cr == parseFloat("1 Ph-Ph")){
                if (valNum > 207.84) {valNum = 207.84}
                if (valNum < 0) {valNum = 0}
                document.getElementById("inVF").value = valNum.toFixed(2); VFx[F8cr][F9cr][F10cr] = valNum;
                var VFcalc = Math.sqrt(Math.pow(VFx[F8cr][F9cr][0] / 2,2) + Math.pow(valNum/2,2)).toFixed(2);
                var AFcalc = Math.atan(valNum / VFx[F8cr][F9cr][0]) * 180/Math.PI - 60;
                if (F9cr == parseFloat("0 A-B")){
                    document.getElementById("inVAm").value = VFcalc;
                    document.getElementById("inVBm").value = VFcalc;
                    document.getElementById("inVCm").value = VFx[F8cr][F9cr][0].toFixed(2);
                    document.getElementById("inVAa").value = ((360 + AFcalc) % 360).toFixed(2);
                    document.getElementById("inVBa").value = ((600 - AFcalc) % 360).toFixed(2);
                    document.getElementById("inVCa").value = (120).toFixed(2);
                }
                if (F9cr == parseFloat("1 B-C")){ 
                    document.getElementById("inVBm").value = VFcalc;
                    document.getElementById("inVCm").value = VFcalc;
                    document.getElementById("inVAm").value = VFx[F8cr][F9cr][0].toFixed(2); 
                    document.getElementById("inVAa").value = (0).toFixed(2);
                    document.getElementById("inVBa").value = ((600 + AFcalc) % 360).toFixed(2);
                    document.getElementById("inVCa").value = ((480 - AFcalc) % 360).toFixed(2);
                }
                if (F9cr == parseFloat("2 C-A")){
                    document.getElementById("inVAm").value = VFcalc;
                    document.getElementById("inVCm").value = VFcalc;
                    document.getElementById("inVBm").value = VFx[F8cr][F9cr][0].toFixed(2);
                    document.getElementById("inVAa").value = ((360 - AFcalc) % 360).toFixed(2);
                    document.getElementById("inVBa").value = (240).toFixed(2);
                    document.getElementById("inVCa").value = ((480 + AFcalc) % 360).toFixed(2);
                }
            }           
            if (F8cr == parseFloat("2 Th-Ph")){
                document.getElementById("inVF").value = valNum.toFixed(2); VFx[F8cr][F9cr][F10cr] = valNum;    
                document.getElementById("inVAa").value = (0).toFixed(2);
                document.getElementById("inVBa").value = (240).toFixed(2);
                document.getElementById("inVCa").value = (120).toFixed(2);
                if (F9cr == parseFloat("0 Vpn")){
                    if (valNum > 120) {valNum = 120}
                    if (valNum < 0) {valNum = 0}                                                           
                    document.getElementById("inVAm").value = valNum.toFixed(2);
                    document.getElementById("inVBm").value = valNum.toFixed(2);
                    document.getElementById("inVCm").value = valNum.toFixed(2);
                }
                if (F9cr == parseFloat("1 Vpp")){
                    if (valNum > 207.84) {valNum = 207.84}
                    if (valNum < 0) {valNum = 0}
                    document.getElementById("inVAm").value = (valNum / Math.sqrt(3)).toFixed(2);
                    document.getElementById("inVBm").value = (valNum / Math.sqrt(3)).toFixed(2);
                    document.getElementById("inVCm").value = (valNum / Math.sqrt(3)).toFixed(2);
                }
            }
        }  
        if (source=="inIF") {
            if(valNum>30){valNum=30}
            if(valNum<0){valNum=0} 
            document.getElementById("inIF").value = valNum.toFixed(3); IFx[F8cr][F9cr][F10cr] = valNum;  
            if (F8cr == 0){
                if (F9cr == 0){
                    document.getElementById("inIAm").value = valNum.toFixed(3);
                    document.getElementById("inIBm").value = IFx[F8cr][F9cr][0].toFixed(3);
                    document.getElementById("inICm").value = IFx[F8cr][F9cr][0].toFixed(3);
                }
                if (F9cr == 1){
                    document.getElementById("inIBm").value = valNum.toFixed(3);
                    document.getElementById("inIAm").value = IFx[F8cr][F9cr][0].toFixed(3);
                    document.getElementById("inICm").value = IFx[F8cr][F9cr][0].toFixed(3);
                }
                if (F9cr == 2){
                    document.getElementById("inICm").value = valNum.toFixed(3);
                    document.getElementById("inIAm").value = IFx[F8cr][F9cr][0].toFixed(3);
                    document.getElementById("inIBm").value = IFx[F8cr][F9cr][0].toFixed(3);
                }
            }
            if (F8cr == 1){
                if (F9cr == 0){
                    document.getElementById("inIAm").value = valNum.toFixed(3);
                    document.getElementById("inIBm").value = valNum.toFixed(3); 
                    document.getElementById("inICm").value = IFx[F8cr][F9cr][0].toFixed(3);
                }
                if (F9cr == 1){
                    document.getElementById("inIBm").value = valNum.toFixed(3);  
                    document.getElementById("inICm").value = valNum.toFixed(3);
                    document.getElementById("inIAm").value = IFx[F8cr][F9cr][0].toFixed(3);
                }
                if (F9cr == 2){ 
                    document.getElementById("inICm").value = valNum.toFixed(3); 
                    document.getElementById("inIAm").value = valNum.toFixed(3);
                    document.getElementById("inIBm").value = IFx[F8cr][F9cr][0].toFixed(3);
                }
            }
            if (F8cr == 2){
                document.getElementById("inIAm").value = valNum.toFixed(3);
                document.getElementById("inIBm").value = valNum.toFixed(3);
                document.getElementById("inICm").value = valNum.toFixed(3);
            }
        }  
        if (source == "inAF") {
            valNum = (valNum + 360) % 360; 
            document.getElementById("inAF").value = valNum.toFixed(2); AFx[F8cr][F9cr][F10cr] = valNum;  
            if (F8cr == parseFloat("0 Ph-N")) {
                if (F9cr == parseFloat("0 A-N")) {
                    document.getElementById("inIAa").value = ((360 - valNum) % 360).toFixed(2);
                    document.getElementById("inIBa").value = ((600 - AFx[F8cr][F9cr][0]) % 360).toFixed(2); 
                    document.getElementById("inICa").value = ((480 - AFx[F8cr][F9cr][0]) % 360).toFixed(2);
                }
                if (F9cr == parseFloat("1 B-N")){
                    document.getElementById("inIBa").value = ((600 - valNum) % 360).toFixed(2);
                    document.getElementById("inIAa").value = ((360 - AFx[F8cr][F9cr][0]) % 360).toFixed(2);
                    document.getElementById("inICa").value = ((480 - AFx[F8cr][F9cr][0]) % 360).toFixed(2);
                }
                if (F9cr == parseFloat("2 C-N")){
                    document.getElementById("inICa").value = ((480 - valNum) % 360).toFixed(2);
                    document.getElementById("inIAa").value = ((360 - AFx[F8cr][F9cr][0]) % 360).toFixed(2);
                    document.getElementById("inIBa").value = ((600 - AFx[F8cr][F9cr][0]) % 360).toFixed(2);
                }
            } 
            if (F8cr == parseFloat("1 Ph-Ph")){
                if (F9cr == parseFloat("0 A-B")){
                    document.getElementById("inIAa").value = ((390 - valNum) % 360).toFixed(2);
                    document.getElementById("inIBa").value = ((570 - valNum) % 360).toFixed(2);
                    document.getElementById("inICa").value = ((480 - AFx[F8cr][F9cr][0]) % 360).toFixed(2);
                }
                if (F9cr == parseFloat("1 B-C")){
                    document.getElementById("inIBa").value = ((630 - valNum) % 360).toFixed(2);
                    document.getElementById("inICa").value = ((450 - valNum) % 360).toFixed(2);
                    document.getElementById("inIAa").value = ((360 - AFx[F8cr][F9cr][0]) % 360).toFixed(2);
                }
                if (F9cr == parseFloat("2 C-A")){
                    document.getElementById("inICa").value = ((510 - valNum) % 360).toFixed(2);
                    document.getElementById("inIAa").value = ((690 - valNum) % 360).toFixed(2);
                    document.getElementById("inIBa").value = ((600 - AFx[F8cr][F9cr][0]) % 360).toFixed(2);
                }
            }
            if (F8cr == parseFloat("2 Th-Ph")){
                document.getElementById("inIAa").value = ((360 - valNum) % 360).toFixed(2); 
                document.getElementById("inIBa").value = ((600 - valNum) % 360).toFixed(2);
                document.getElementById("inICa").value = ((480 - valNum) % 360).toFixed(2);
            }
        }
    }  
    Conv("inIAa" , document.getElementById("inIAa").value);        
    Conv("inVAa" , document.getElementById("inVAa").value);
    GPh();
}
var F8K = []; var F8cr = 3; F8K.push("1px black solid"); F8K.push("none"); F8K.push("none"); F8K.push("none"); F8K.push("1px black solid"); F8K.push("none"); F8K.push("none");  F8K.push("none"); 
var F9K = []; var F9cr = 0; F9K.push("1px black solid"); F9K.push("none"); F9K.push("none"); F9K.push("1px black solid"); F9K.push("none"); F9K.push("none"); 
var F10K = []; var F10cr = 0; F10K.push("1px black solid"); F10K.push("none"); F10K.push("1px black solid");F10K.push("none"); 
function F8() {
    F8cr += 1; if (F8cr > 3) {F8cr = 0;}
    document.getElementById("Fpn").style.border = F8K[F8cr];
    document.getElementById("Fpp").style.border = F8K[F8cr+3];
    document.getElementById("F3p").style.border = F8K[F8cr+2];
    document.getElementById("Far").style.border = F8K[F8cr+1];
    if (F8cr == parseFloat("0 Ph-N")) {
        document.getElementById("FP0").innerHTML = "Rotate <br> Fault";
        document.getElementById("FP1").innerHTML = "A";
        document.getElementById("FP2").innerHTML = "B";
        document.getElementById("FP3").innerHTML = "C";
        if (F10cr == parseFloat("0 Prefault")) {
            document.getElementById("FV").innerHTML = "Preflt Voltage";
            document.getElementById("FI").innerHTML = "Preflt Current";
            document.getElementById("FA").innerHTML = "Preflt Angle (I lags V)";}
        if (F10cr == parseFloat("1 Fault")) {
            document.getElementById("FV").innerHTML = "Fault Voltage";
            document.getElementById("FI").innerHTML = "Fault Current";
            document.getElementById("FA").innerHTML = "Fault Angle (I lags V)";}
        GrayOut();
    }
    if (F8cr == parseFloat("1 Ph-Ph")) {
        document.getElementById("FP1").innerHTML = "A-B";
        document.getElementById("FP2").innerHTML = "B-C <br>";
        document.getElementById("FP3").innerHTML = "C-A";
        if (F10cr == parseFloat("0 Prefault")) {document.getElementById("FV").innerHTML = "Preflt Voltage";}
        if (F10cr == parseFloat("1 Fault")) {document.getElementById("FV").innerHTML = "Fault &#934-&#934 Voltage";}
        GrayOut();
    }
    if (F8cr == parseFloat("2 Th-Ph")) {
        document.getElementById("FP0").innerHTML = "3&#934 <br> Voltages";
        document.getElementById("FP1").innerHTML = "&#934-N";
        document.getElementById("FP2").innerHTML = "&#934-&#934";
        document.getElementById("FP3").innerHTML = "";
        if (F10cr == parseFloat("0 Prefault")) {document.getElementById("FV").innerHTML = "Preflt Voltage";}
        if (F10cr == parseFloat("1 Fault")) {document.getElementById("FV").innerHTML = "Fault Voltage";}
        GrayOut();
    }
    if (F8cr == parseFloat("3 Arbit")) {
        document.getElementById("FP0").innerHTML = "Rotate <br> Fault";
        document.getElementById("FP1").innerHTML = "";
        document.getElementById("FP2").innerHTML = "";
        document.getElementById("FP3").innerHTML = "";
        EnableVI(); 
    }
    GPh();
    F9cr = 2; F9();
}
window.addEventListener("load", function () {document.getElementById("F8").addEventListener("click", F8, false);}, false);
function F9() {
    F9cr += 1; if (F9cr > 2) {F9cr = 0;}
    document.getElementById("FP1").style.border = F9K[F9cr];
    document.getElementById("FP2").style.border = F9K[F9cr+2];
    document.getElementById("FP3").style.border = F9K[F9cr+1];
    if (F8cr !== parseFloat("3 Arbit")) {
        document.getElementById("inVAa").value = (0).toFixed(2);
        document.getElementById("inVBa").value = (240).toFixed(2);
        document.getElementById("inVCa").value = (120).toFixed(2);
        PrintVI("inVF", VFx[F8cr][F9cr][F10cr]);
        PrintVI("inIF", IFx[F8cr][F9cr][F10cr]);
        PrintVI("inAF", AFx[F8cr][F9cr][F10cr]);
    }
    if (F8cr == parseFloat("1 Ph-Ph") && F10cr == parseFloat("1 Fault")) {PrintVI("inVF", VFx[F8cr][F9cr][F10cr]);}
    if (F8cr == parseFloat("2 Th-Ph")) {
        if (F9cr == parseFloat("1 Vpp")) {
            document.getElementById("FP1").style.border = "";
            document.getElementById("FP2").style.border = "1px black solid";
            document.getElementById("FP3").style.border = "";
            if (F10cr == parseFloat("0 Prefault")) {document.getElementById("FV").innerHTML = "Preflt &#934-&#934 Voltage";}
            if (F10cr == parseFloat("1 Fault")) {document.getElementById("FV").innerHTML = "Fault &#934-&#934 Voltage";}
            PrintVI("inVF", VFx[F8cr][F9cr][F10cr]);
        }
        else {
            document.getElementById("FP1").style.border = "1px black solid";
            document.getElementById("FP2").style.border = "";
            document.getElementById("FP3").style.border = "";            
            if (F10cr == parseFloat("0 Prefault")) {document.getElementById("FV").innerHTML = "Preflt Voltage";}
            if (F10cr == parseFloat("1 Fault")) {document.getElementById("FV").innerHTML = "Fault Voltage";}
            F9cr = 0;
            PrintVI("inVF", VFx[F8cr][F9cr][F10cr]);
        }
    }
    if (F8cr == parseFloat("3 Arbit")) {
        document.getElementById("FV").innerHTML = "------";
        document.getElementById("FI").innerHTML = "------";
        document.getElementById("FA").innerHTML = "------";
        document.getElementById("FP1").style.border = "none";
        document.getElementById("FP2").style.border = "none";
        document.getElementById("FP3").style.border = "none";                                                                                                 
        document.getElementById("inVF").value = ""; document.getElementById("inVF").disabled = true;
        document.getElementById("inIF").value = ""; document.getElementById("inIF").disabled = true;
        document.getElementById("inAF").value = ""; document.getElementById("inAF").disabled = true;
        GPh();
    }
}
window.addEventListener("load", function () {document.getElementById("F9").addEventListener("click", F9, false);}, false);
function F10() {
    F10cr += 1; if (F10cr > 1) {F10cr = 0;}
    document.getElementById("PFlt").style.border = F10K[F10cr];
    document.getElementById("Flt").style.border = F10K[F10cr+1];
    if (F8cr !== parseFloat("3 Arbitrary")) {
        if (F10cr == parseFloat("0 Prefault")) {
            document.getElementById("FV").innerHTML = "Preflt Voltage";
            document.getElementById("FI").innerHTML = "Preflt Current";
            document.getElementById("FA").innerHTML = "Preflt Angle (I lags V)";
            document.getElementById("inVAa").value = (0).toFixed(2);
            document.getElementById("inVBa").value = (240).toFixed(2);
            document.getElementById("inVCa").value = (120).toFixed(2);         
            if (F8cr == parseFloat("2 Th-Ph") && F9cr == parseFloat("1 Vpp")) {document.getElementById("FV").innerHTML = "Preflt &#934-&#934 Voltage";}
        }
        if (F10cr == parseFloat("1 Fault")) {
            document.getElementById("FV").innerHTML = "Fault Voltage";
            document.getElementById("FI").innerHTML = "Fault Current";            
            document.getElementById("FA").innerHTML = "Fault Angle (I lags V)";
            if ((F8cr == parseFloat("1 Ph-Ph")) || (F8cr == parseFloat("2 Th-Ph") && F9cr == parseFloat("1 Vpp"))) {document.getElementById("FV").innerHTML = "Fault &#934-&#934 Voltage";}
        }
        PrintVI("inVF", VFx[F8cr][F9cr][F10cr]);
        PrintVI("inIF", IFx[F8cr][F9cr][F10cr]);
        PrintVI("inAF", AFx[F8cr][F9cr][F10cr]);
    }
    if (F8cr == parseFloat("3 Arbitrary")) {
        document.getElementById("FV").innerHTML = "------";
        document.getElementById("FI").innerHTML = "------";
        document.getElementById("FA").innerHTML = "------";
        EnableVI();
        Conv("inIAa" , document.getElementById("inIAa").value);        
        Conv("inVAa" , document.getElementById("inVAa").value);
        GPh();
    }
}
window.addEventListener("load", function () {document.getElementById("F10").addEventListener("click", F10, false);}, false);
function F11() {
    if (document.getElementById("F11").style.backgroundColor !== "red") {
        document.getElementById("F11").style.backgroundColor = "red";
        document.getElementById("F12").style.backgroundColor = "pink";
        F10cr = 0; F10();
        GPP(); GPN(); GNN(); GNZ();
        }
    else {
        document.getElementById("F11").style.backgroundColor = "pink";
        var canvas = document.getElementById("P67P"), ctx = canvas.getContext("2d"); ctx.fillStyle = "white"; ctx.fillRect(0, 0, 400, 400);
        canvas = document.getElementById("N67P"), ctx = canvas.getContext("2d"); ctx.fillStyle = "white"; ctx.fillRect(0, 0, 400, 400);
        canvas = document.getElementById("N67N"), ctx = canvas.getContext("2d"); ctx.fillStyle = "white"; ctx.fillRect(0, 0, 400, 400);
        canvas = document.getElementById("Z67N"), ctx = canvas.getContext("2d"); ctx.fillStyle = "white"; ctx.fillRect(0, 0, 400, 400);
        document.getElementById('67PPT').style.color = "black"; document.getElementById('67PPT').className = "headers";
        document.getElementById('67PNT').style.color = "black"; document.getElementById('67PNT').className = "headers";
        document.getElementById('67NNT').style.color = "black"; document.getElementById('67NNT').className = "headers";
        document.getElementById('67NZT').style.color = "black"; document.getElementById('67NZT').className = "headers";
        document.getElementById('Out1').style.color = "grey"; document.getElementById('Out1').style.backgroundColor = "white";
        document.getElementById('Out2').style.color = "grey"; document.getElementById('Out2').style.backgroundColor = "white";
    }
}
window.addEventListener("load", function () {document.getElementById("F11").addEventListener("click", F11, false);}, false);
function F12() {
    if (document.getElementById("F12").style.backgroundColor !== "red") {
        document.getElementById("F12").style.backgroundColor = "red";
        document.getElementById("F11").style.backgroundColor = "pink";
        F10cr = 1; F10();
        GPP(); GPN(); GNN(); GNZ();
        }
    else {
        document.getElementById("F12").style.backgroundColor = "pink";
        var canvas = document.getElementById("P67P"), ctx = canvas.getContext("2d"); ctx.fillStyle = "white"; ctx.fillRect(0, 0, 400, 400);
        canvas = document.getElementById("N67P"), ctx = canvas.getContext("2d"); ctx.fillStyle = "white"; ctx.fillRect(0, 0, 400, 400);
        canvas = document.getElementById("N67N"), ctx = canvas.getContext("2d"); ctx.fillStyle = "white"; ctx.fillRect(0, 0, 400, 400);
        canvas = document.getElementById("Z67N"), ctx = canvas.getContext("2d"); ctx.fillStyle = "white"; ctx.fillRect(0, 0, 400, 400);
        document.getElementById('67PPT').style.color = "black"; document.getElementById('67PPT').className = "headers";
        document.getElementById('67PNT').style.color = "black"; document.getElementById('67PNT').className = "headers";
        document.getElementById('67NNT').style.color = "black"; document.getElementById('67NNT').className = "headers";
        document.getElementById('67NZT').style.color = "black"; document.getElementById('67NZT').className = "headers";
        document.getElementById('Out1').style.color = "grey"; document.getElementById('Out1').style.backgroundColor = "white";
        document.getElementById('Out2').style.color = "grey"; document.getElementById('Out2').style.backgroundColor = "white";
    }
}
window.addEventListener("load", function () {document.getElementById("F12").addEventListener("click", F12, false);}, false);
function F13() {
    document.getElementById("F11").style.backgroundColor = "pink";
    document.getElementById("F12").style.backgroundColor = "pink";
    var canvas = document.getElementById("P67P"), ctx = canvas.getContext("2d"); ctx.fillStyle = "white"; ctx.fillRect(0, 0, 400, 400);
    canvas = document.getElementById("N67P"), ctx = canvas.getContext("2d"); ctx.fillStyle = "white"; ctx.fillRect(0, 0, 400, 400);
    canvas = document.getElementById("N67N"), ctx = canvas.getContext("2d"); ctx.fillStyle = "white"; ctx.fillRect(0, 0, 400, 400);
    canvas = document.getElementById("Z67N"), ctx = canvas.getContext("2d"); ctx.fillStyle = "white"; ctx.fillRect(0, 0, 400, 400);
    document.getElementById('67PPT').style.color = "black"; document.getElementById('67PPT').className = "headers";
    document.getElementById('67PNT').style.color = "black"; document.getElementById('67PNT').className = "headers";
    document.getElementById('67NNT').style.color = "black"; document.getElementById('67NNT').className = "headers";
    document.getElementById('67NZT').style.color = "black"; document.getElementById('67NZT').className = "headers";
    document.getElementById('Out1').style.color = "grey"; document.getElementById('Out1').style.backgroundColor = "white";
    document.getElementById('Out2').style.color = "grey"; document.getElementById('Out2').style.backgroundColor = "white";
}
window.addEventListener("load", function () {document.getElementById("F13").addEventListener("click", F13, false);}, false);
function GrayOut(){
    var Number1x = document.getElementsByClassName("Number1"); for (var i = 0; i < Number1x.length; i++) {Number1x[i].style.color = 'darkgrey'; Number1x[i].disabled = true;}
    var InVI2x = document.getElementsByClassName("InVI2"); for (i = 0; i < InVI2x.length; i++) {InVI2x[i].style.color = 'blue';}
    var InVIx = document.getElementsByClassName("InVI"); for (i = 0; i < InVIx.length; i++) {InVIx[i].style.color = 'darkgrey';}
    var VIFx = document.getElementsByClassName("VIF"); for (i = 0; i < VIFx.length; i++) {VIFx[i].style.color = 'black';}    
    document.getElementById("inVF").disabled = false;
    document.getElementById("inIF").disabled = false;
    document.getElementById("inAF").disabled = false;    
}
function EnableVI() {
    var Number1x = document.getElementsByClassName("Number1"); for (var i = 0; i < Number1x.length; i++) {Number1x[i].style.color = 'blue'; Number1x[i].disabled = false;}
    var InVI2x = document.getElementsByClassName("InVI2"); for (i = 0; i < InVI2x.length; i++) {InVI2x[i].style.color = 'darkgrey';}
    var InVIx = document.getElementsByClassName("InVI"); for (i = 0; i < InVIx.length; i++) {InVIx[i].style.color = 'blue';}
    var VIFx = document.getElementsByClassName("VIF"); for (i = 0; i < VIFx.length; i++) {VIFx[i].style.color = 'darkgrey';}
    document.getElementById("inVAm").value = VAm_arb[F10cr].toFixed(2);
    document.getElementById("inVBm").value = VBm_arb[F10cr].toFixed(2);
    document.getElementById("inVCm").value = VCm_arb[F10cr].toFixed(2);
    document.getElementById("inVAa").value = VAa_arb[F10cr].toFixed(2);
    document.getElementById("inVBa").value = VBa_arb[F10cr].toFixed(2);
    document.getElementById("inVCa").value = VCa_arb[F10cr].toFixed(2);
    document.getElementById("inIAm").value = IAm_arb[F10cr].toFixed(3);
    document.getElementById("inIBm").value = IBm_arb[F10cr].toFixed(3);
    document.getElementById("inICm").value = ICm_arb[F10cr].toFixed(3);
    document.getElementById("inIAa").value = IAa_arb[F10cr].toFixed(2);
    document.getElementById("inIBa").value = IBa_arb[F10cr].toFixed(2);
    document.getElementById("inICa").value = ICa_arb[F10cr].toFixed(2);
}