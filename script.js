function sumA() {
    let a1 = parseInt(document.getElementById("a1").value);
    let b2 = parseInt(document.getElementById("a2").value);
    let c3 = parseInt(document.getElementById("a3").value);
    let d4 = parseInt(document.getElementById("a4").value);
    let e5 = parseInt(document.getElementById("a5").value);
    let f6 = parseInt(document.getElementById("a6").value);
    let g7 = parseInt(document.getElementById("a7").value);
    let h8 = parseInt(document.getElementById("a8").value);
    let i9 = parseInt(document.getElementById("a9").value);
    let j10 = parseInt(document.getElementById("a10").value);
    let k11 = parseInt(document.getElementById("a11").value);
    let l12 = parseInt(document.getElementById("a12").value);
   
    
    document.getElementById("result-a").innerHTML = a1 + b2 + c3 + d4 + e5 + f6 + g7 + h8 + i9 + j10 + k11 + l12;
    console.log(sumA());

    
};


function sumB() {
    let a = parseInt(document.getElementById("b1").value);
    let b = parseInt(document.getElementById("b2").value);
    let c = parseInt(document.getElementById("b3").value);
    let d = parseInt(document.getElementById("b4").value);
    let e = parseInt(document.getElementById("b5").value);
    let f = parseInt(document.getElementById("b6").value);
    let g = parseInt(document.getElementById("b7").value);
    let h = parseInt(document.getElementById("b8").value);
    let i = parseInt(document.getElementById("b9").value);
    let j = parseInt(document.getElementById("b10").value);
    let k = parseInt(document.getElementById("b11").value);
    let l = parseInt(document.getElementById("b12").value);

    document.getElementById("result-b").innerHTML = a + b + c + d + e + f + g + h + i + j + k + l;
    console.log(sumB());
};


