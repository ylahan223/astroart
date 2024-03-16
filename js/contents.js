window.addEventListener('load',()=>{
    // scroll()    
    // slide()



})
function scroll(){
    const contents=document.querySelectorAll('.contents')

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
        }else if(e.wheelDelta>-120 && isWheel==false){
            isWheel=true
            clickIndex--
            scrollSlide(clickIndex)
        }
    }








}
function slide(){
    const contentsSlide = document.querySelector('.project_list')
    const project = document.querySelector('.project')


    gsap.set(contentsSlide,{width:"250%"})

    let endX=contentsSlide.offsetWidth-document.documentElement.clientWidth
    // 가로스크롤이 끝나는 좌표구함 ( 가로스크롤 전체가로 크기 - 윈도우 스크롤 제외 안쪽크기  )
    // 윈도우 reset 만들기

    gsap.set(contentsSlide,{backgroundColor : 'red'})
        
    gsap.to(contentsSlide, {x:-endX, duration:3, ease:'none', scrollTrigger:{
        trigger:project,
        markers:true,
        start:'0% 0%',
        end:`${endX} 0%`, 
        scrub:1,
        pin:true, // 부모요소 스크롤 고정 
    }})
}