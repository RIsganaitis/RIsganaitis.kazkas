window.addEventListener("load", function(){
    const canvas = document.querySelector("#myCanvas");
    const ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //Pilnaviduris
    ctx.fillRect(100, 100, 200, 200);
    //Tuščiaviduris
    ctx.strokeRect(350, 100, 200, 200);
    //(tasko pradzia, pradza, tasko pabaiga, pabaiga)

    //taskas linijai
    ctx.beginPath();
    ctx.lineTo(550, 250);
    ctx.lineTo(500, 350);
    ctx.closePath();
    ctx.stroke();

    //paint.js
    let painting = false;

    function startPainting(){
        painting = true;
        draw(e)
    }

    function endPainting(){
        painting = false;
    }
    function draw(e){
        // e.preventdefault();
        if(!painting) return;
        ctx.lineWidth = 5;
        ctx.lineCap = "round";

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", endPainting);
    canvas.addEventListener("mousemove", draw);
});



// 

// window.addEventListener("load", function(){
//     const canvas = document.querySelector("#myCanvas");
//     const ctx = canvas.getContext("2d");
 
//     canvas.height = window.innerHeight;
//     canvas.width = window.innerWidth;
 
//     // //pilnaviduris stačiakampis
//     // ctx.fillRect(100, 100, 200, 200);
 
//     // //tuščiaviduris
//     // ctx.strokeStyle = "blue";
//     // ctx.strokeRect(150, 150, 300, 350);
    
//     //pradžios taškas linijai
//     // ctx.beginPath();
//     // ctx.lineTo(200, 200);
//     // ctx.lineTo(300, 250);
//     // ctx.closePath();
//     // ctx.stroke();
 
//     //paint.js
//     let painting = false;
 
//     function startPainting(){
//         painting = true;
//         draw();
//     }
 
//     function endPainting(){
//         painting = false;
//         ctx.beginPath();
//     }
 
//     function draw(e){
//         if(!painting) return;
 
//         ctx.lineWidth = 5;
//         ctx.lineCap = "round";
 
//         ctx.lineTo(e.clientX, e.clientY);
//         ctx.stroke();
//         ctx.beginPath();
//         ctx.moveTo(e.clientX, e.clientY);
//     }
 
//     canvas.addEventListener("mousedown", startPainting);
//     canvas.addEventListener("mouseup", endPainting);
//     canvas.addEventListener("mousemove", draw);
 
// });
 
// // window.addEventListener("load", ()=>{
 
// // });