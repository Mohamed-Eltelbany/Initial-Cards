var panels = document.querySelectorAll('.panel')
panels.forEach((panel)=>{
    panel.addEventListener('click' , () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel=> {
        panel.classList.remove('active')
    })
}


console.log(panels[0])
    for(let i=0 ; i< panels.length ; i++ ){
        panels[i].addEventListener('click' , ()=> {
            removeActiveClasses()
            panels[i].classList.add('active')
        })
       
    }

function removeActiveClasses(){
    for(let i=0 ; i<panels.length ; i++ ){     
         panels[i].classList.remove('active')
    }
}