

document.addEventListener('mousemove',({target}) => {
    if (target.classList.contains('hoverItem')) {
        console.log('olas')
        let contanerHover  = document.getElementById("contanerHover");
        contanerHover.classList.remove('hidden')
    }
    if (target.classList != 'hoverItem') {
        let contanerHover  = document.getElementById("contanerHover");
        contanerHover.classList.add("hidden")
    }
    if (target.classList.contains('hoverItem2')) {
        console.log('olas')
        let contanerHover  = document.getElementById("contanerHover2");
        contanerHover.classList.remove('hidden')
    }

    if (target.classList != 'hoverItem2') {
        let contanerHover  = document.getElementById("contanerHover2");
        contanerHover.classList.add("hidden")
    }
})
document.addEventListener('click', ({ target }) => {if(target.classList.contains("menu")){ 
    console.log('sa')
    let container = document.getElementById("cont");
    container.classList.remove('hidden') 
    let backgraund= document.getElementById('bacgraund')  
    backgraund.classList.remove('hidden')
}else if(target.classList.contains("container__close")){
    let container = document.getElementById("cont");
    container.classList.add('hidden') 
    let backgraund= document.getElementById('bacgraund')  
    backgraund.classList.add('hidden')
}else if(target.classList.contains('hoverLi')){
    let contanerHoverItem= document.getElementById('contanerHoverItem')  
    contanerHoverItem.classList.remove('hidden') 
  
}else if(target.classList.contains('hoverLi2')){
    let contanerHoverItem2= document.getElementById('contanerHoverItem2')  
    contanerHoverItem2.classList.remove('hidden') 

}else if(target.classList.contains !='hoverLi2'||'hoverLi'){
    let contanerHoverItem2= document.getElementById('contanerHoverItem2')  
    let contanerHoverItem= document.getElementById('contanerHoverItem')  
    contanerHoverItem2.classList.add('hidden')
    contanerHoverItem.classList.add('hidden')
}})
