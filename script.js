window.sr = ScrollReveal();
sr.reveal('.content');
var v1=true
let handleMargin=()=>{
    if(v1===true){
        // CODE FOR EXPAND MARGIN
        // console.log("INSIDE TRUE")
        document.querySelectorAll('.top-text').forEach(item => {
            item.style.setProperty('margin-top','325px')
        });


        v1=false
    }
    else{
        // CODE FOR REMOVE MARGIN
        // console.log("INSIDE FALSE")
        setTimeout(()=>{
        document.querySelectorAll('.top-text').forEach(item => {
            item.style.setProperty('margin-top','0')
        });
    },150)
        v1=true
    }
}
