window.addEventListener('load',()=>{
    scroll()    
    
})
function scroll(){
    const contents=document.querySelectorAll('.contents')
    const mouseimg=document.querySelector('.scroll-down-wrap')

    let clickIndex=0;
    let windowHeight=window.innerHeight;
    let scrollHeight=0;
    let isWheel=false

    gsap.set(contents,{height:windowHeight})


    window.addEventListener('mousewheel',wheelWindow)

    function scrollSlide(index){
      scrollHeight=windowHeight*index;
      gsap.to('body,html',{
          scrollTop:scrollHeight,duration:0.5, ease:'power1.out',onComplete:()=>{
              isWheel=false;
          }
      })
    }
    function wheelWindow(e){
      if(e.wheelDelta<=-120 && isWheel==false){
          isWheel=true
                clickIndex++
                scrollSlide(clickIndex)
                // gsap.set(mouseimg, {display:'block'})
            
        }
        if(e.wheelDelta>-120 && isWheel==false){
            isWheel=true
                clickIndex--
                scrollSlide(clickIndex)

        }
        if(clickIndex==3){
            gsap.set(mouseimg, {display:'none'})
        }else{
            gsap.set(mouseimg, {display:'block'})
        }
    }



}
// function slide(){
//     const project = document.querySelector('.project')
//     const projectInner = document.querySelector('.project_inner')
//     const contentsSlide = document.querySelector('.project_list')
//     const contentsSlideLi = document.querySelectorAll('.project_list>li')

//     let endX=contentsSlide.offsetWidth-document.documentElement.clientWidth/100*65
        
//     gsap.to(contentsSlide, {x:-endX, duration:3, ease:'none', scrollTrigger:{
//         trigger:project,
//         // markers:true,
//         start:'0% 0%',
//         end:`${endX} 0%`, 
//         scrub:1,
//         pin:true, // 부모요소 스크롤 고정 
//     }})
// }

