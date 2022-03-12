const image_input = document.querySelector("#image_input");
var uploaded_image = '';
var choice = '';
var selected=0;
var arr,temp,flag;
var switcha,switchb;
function switch2(i){
    if(selected==0){
        selected=i;
        document.querySelector(".piece2_"+selected).style.opacity=0.5;
    }
    else{
        if(i==selected){
            document.querySelector(".piece2_"+selected).style.opacity=1;
            selected=0;
        }
        else{
        flag=0;
        document.querySelector(".piece2_"+selected).style.opacity=1;
        //replace selected and i within the array
        for (var x = 0; x < arr.length; x++){
            if(arr[x]==selected) switcha=x;
            if(arr[x]==i) switchb=x;
        }
        temp=arr[switcha];
        arr[switcha]=arr[switchb];
        arr[switchb]=temp;
        //
        var fill="<div class=\"puzzle piece2_"+arr[0]+"\" onclick=\"switch2("+arr[0]+")\"></div>\n<div class=\"puzzle piece2_"+arr[1]+"\" onclick=\"switch2("+arr[1]+")\"></div>";
        document.getElementById("game").innerHTML=fill;
        const puzzles=document.querySelectorAll(".puzzle");
            puzzles.forEach(Element => {
                Element.style.backgroundImage='url('+uploaded_image+')';
        });
        console.log(arr);
        for (var x = 0; x < arr.length; x++){
            if(arr[x]!=x+1) flag=1;
        }
        if(flag==0){
            alert("Congrats you have won the game.");
            location.reload(true);
        }
        selected=0;
        }
    }
}

function switch3(i){
    if(selected==0){
        selected=i;
        document.querySelector(".piece3_"+selected).style.opacity=0.5;
    }
    else{
        if(i==selected){
            document.querySelector(".piece3_"+selected).style.opacity=1;
            selected=0;
        }
        else{
        flag=0;
        document.querySelector(".piece3_"+selected).style.opacity=1;
        //replace selected and i within the array
        for (var x = 0; x < arr.length; x++){
            if(arr[x]==selected) switcha=x;
            if(arr[x]==i) switchb=x;
        }
        temp=arr[switcha];
        arr[switcha]=arr[switchb];
        arr[switchb]=temp;
        //
        var fill="<div class=\"puzzle piece3_"+arr[0]+"\" onclick=\"switch3("+arr[0]+")\"></div>\n<div class=\"puzzle piece3_"+arr[1]+"\" onclick=\"switch3("+arr[1]+")\"></div><div class=\"puzzle piece3_"+arr[2]+"\" onclick=\"switch3("+arr[2]+")\"></div>";
        document.getElementById("game").innerHTML=fill;
        const puzzles=document.querySelectorAll(".puzzle");
            puzzles.forEach(Element => {
                Element.style.backgroundImage='url('+uploaded_image+')';
        });
        for (var x = 0; x < arr.length; x++){
            if(arr[x]!=x+1) flag=1;
        }
        if(flag==0){
            alert("Congrats you have won the game.");
            location.reload(true);
        }
        selected=0;
        }
    }
}

function switch10(i){
    if(selected==0){
        selected=i;
        document.querySelector(".piece10_"+selected).style.opacity=0.5;
    }
    else{
        flag=0;
        if(i==selected){
            document.querySelector(".piece10_"+selected).style.opacity=1;
            selected=0;
        }
        else{
        document.querySelector(".piece10_"+selected).style.opacity=1;
        //replace selected and i within the array
        for (var x = 0; x < arr.length; x++){
            if(arr[x]==selected) switcha=x;
            if(arr[x]==i) switchb=x;
        }
        temp=arr[switcha];
        arr[switcha]=arr[switchb];
        arr[switchb]=temp;
        //
        var fill="<div class=\"top\"><div class=\"puzzle piece10_"+arr[0]+"\" onclick=\"switch10("+arr[0]+")\"></div>\n<div class=\"puzzle piece10_"+arr[1]+"\" onclick=\"switch10("+arr[1]+")\"></div>\n<div class=\"puzzle piece10_"+arr[2]+"\" onclick=\"switch10("+arr[2]+")\"></div>\n<div class=\"puzzle piece10_"+arr[3]+"\" onclick=\"switch10("+arr[3]+")\"></div>\n<div class=\"puzzle piece10_"+arr[4]+"\" onclick=\"switch10("+arr[4]+")\"></div></div><div class=\"bottom\">\n<div class=\"puzzle piece10_"+arr[5]+"\" onclick=\"switch10("+arr[5]+")\"></div>\n<div class=\"puzzle piece10_"+arr[6]+"\" onclick=\"switch10("+arr[6]+")\"></div>\n<div class=\"puzzle piece10_"+arr[7]+"\" onclick=\"switch10("+arr[7]+")\"></div>\n<div class=\"puzzle piece10_"+arr[8]+"\" onclick=\"switch10("+arr[8]+")\"></div>\n<div class=\"puzzle piece10_"+arr[9]+"\" onclick=\"switch10("+arr[9]+")\"></div></div>";
        document.getElementById("game").innerHTML=fill;
        const puzzles=document.querySelectorAll(".puzzle");
        puzzles.forEach(Element => {
            Element.style.backgroundImage='url('+uploaded_image+')';
        });
        for (var x = 0; x < arr.length; x++){
            if(arr[x]!=x+1) flag=1;
        }
        if(flag==0){
            alert("Congrats you have won the game.");
            location.reload(true);
        }
        selected=0;
        }
    }
}

image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
//        document.querySelector("#display_image").style.backgroundImage = 'url('+uploaded_image+')';
        document.getElementById("pre-game").style.display="none";
        document.getElementById("game").style.display="flex";
//        document.querySelector("#display_image_game").style.backgroundImage = 'url('+uploaded_image+')';
        choice=document.getElementById("pieces").value;
        if(choice=="two"){
            arr=[2,1];
            var fill="<div class=\"puzzle piece2_"+arr[0]+"\" onclick=\"switch2("+arr[0]+")\"></div>\n<div class=\"puzzle piece2_"+arr[1]+"\" onclick=\"switch2("+arr[1]+")\"></div>";
            document.getElementById("game").innerHTML=fill;
            const puzzles=document.querySelectorAll(".puzzle");
            puzzles.forEach(Element => {
                Element.style.backgroundImage='url('+uploaded_image+')';
            });
            

        }
        else if(choice=="three"){
            arr=[1,2,3];
            arr = arr.sort(() => Math.random() - 0.5);
            flag=0;
            while(flag==0){
                flag=0;
                arr = arr.sort(() => Math.random() - 0.5);
                for (var x = 0; x < arr.length; x++){
                   if(arr[x]!=x+1) flag=1;
                }
            }

            var fill="<div class=\"puzzle piece3_"+arr[0]+"\" onclick=\"switch3("+arr[0]+")\"></div>\n<div class=\"puzzle piece3_"+arr[1]+"\" onclick=\"switch3("+arr[1]+")\"></div>\n<div class=\"puzzle piece3_"+arr[2]+"\" onclick=\"switch3("+arr[2]+")\"></div>";
            document.getElementById("game").innerHTML=fill;
            const puzzles=document.querySelectorAll(".puzzle");
            puzzles.forEach(Element => {
                Element.style.backgroundImage='url('+uploaded_image+')';
            });



        }
        else{
            arr=[1,2,3,4,5,6,7,8,9,10];
            arr = arr.sort(() => Math.random() - 0.5);
            flag=0;
            while(flag==0){
                flag=0;
                arr = arr.sort(() => Math.random() - 0.5);
                for (var x = 0; x < arr.length; x++){
                   if(arr[x]!=x+1) flag=1;
                }
            }
            document.getElementById("game").style.display="inline";
            var fill="<div class=\"top\"><div class=\"puzzle piece10_"+arr[0]+"\" onclick=\"switch10("+arr[0]+")\"></div>\n<div class=\"puzzle piece10_"+arr[1]+"\" onclick=\"switch10("+arr[1]+")\"></div>\n<div class=\"puzzle piece10_"+arr[2]+"\" onclick=\"switch10("+arr[2]+")\"></div>\n<div class=\"puzzle piece10_"+arr[3]+"\" onclick=\"switch10("+arr[3]+")\"></div>\n<div class=\"puzzle piece10_"+arr[4]+"\" onclick=\"switch10("+arr[4]+")\"></div></div><div class=\"bottom\">\n<div class=\"puzzle piece10_"+arr[5]+"\" onclick=\"switch10("+arr[5]+")\"></div>\n<div class=\"puzzle piece10_"+arr[6]+"\" onclick=\"switch10("+arr[6]+")\"></div>\n<div class=\"puzzle piece10_"+arr[7]+"\" onclick=\"switch10("+arr[7]+")\"></div>\n<div class=\"puzzle piece10_"+arr[8]+"\" onclick=\"switch10("+arr[8]+")\"></div>\n<div class=\"puzzle piece10_"+arr[9]+"\" onclick=\"switch10("+arr[9]+")\"></div></div>";
            document.getElementById("game").innerHTML=fill;
            const puzzles=document.querySelectorAll(".puzzle");
            puzzles.forEach(Element => {
                Element.style.backgroundImage='url('+uploaded_image+')';
            });



        }
    })
    reader.readAsDataURL(this.files[0]);    
})
