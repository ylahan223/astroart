window.addEventListener('load',()=>{
    const visualLi = document.querySelectorAll('.visual_list>li')
    const visualInner = document.querySelector('.visual_wrap')
    const visualLeftBtn = document.querySelector('.visual_left_btn')
    const visualRightBtn = document.querySelector('.visual_right_btn')
    const visualText= document.querySelectorAll('.visual')
    const redbar=document.querySelector('.visual_redbar')
    const visualNum=document.querySelector('.visual_num')

    
    let visualWidth=visualInner.offsetWidth;
    let visualLength = visualLi.length;
    let timer=null;
    let isSlide=false;

    let currentIndex = 0;
    let nextIndex = currentIndex + 1;


    

    window.addEventListener('resize',visualReset)
    visualRightBtn.addEventListener('click',slideVisualNext)
    visualLeftBtn.addEventListener('click',slideVisualPrev)
    visualRightBtn.addEventListener('mouseenter',stopAutoPlay)
    visualRightBtn.addEventListener('mouseleave',autoPlay)
    visualLeftBtn.addEventListener('mouseenter',stopAutoPlay)
    visualLeftBtn.addEventListener('mouseleave',autoPlay)
    
    visualReset()
    autoPlay()

    gsap.set(redbar,{width:'0%'})
    gsap.to(redbar,{width:'100%',duration:4, ease:'power1.out'})
    gsap.set(visualLi,{left:visualWidth})
    gsap.set(visualLi[0],{left:0})

    function visualReset(){
        visualWidth=visualInner.offsetWidth;
        gsap.set(visualLi,{width:visualWidth})
        gsap.set(visualLi,{left:visualWidth, opacity:0})
        gsap.set(visualLi[currentIndex],{left:0,opacity:1})
    }
    function slideVisualNext(){
        if(isSlide==false){
            isSlide=true;
            nextIndex=currentIndex+1;
            if(nextIndex>=visualLength){
                nextIndex=0;
            }
            gsap.set(redbar,{width:'0%'})
            gsap.to(redbar,{width:'100%',duration:4,ease:'power1.out'})
            gsap.to(visualLi[currentIndex],{left:-visualWidth,duration:0.7,ease:'power1.out'})
            gsap.set(visualLi[nextIndex],{left:visualWidth,opacity:0})
            gsap.set(visualText[nextIndex],{y:50,opacity:0})
            gsap.to(visualLi[nextIndex],{left:0,opacity:1,duration:0.5,ease:'power1.out',onComplete:()=>{
                gsap.to(visualText[nextIndex],{y:0,opacity:1})
                isSlide=false;
            }})
            currentIndex=nextIndex;
            visualNum.innerHTML=`0${currentIndex+1}`
        }
    }
    function slideVisualPrev(){
        if(isSlide==false){
            isSlide=true;
            nextIndex=currentIndex-1;
            if(nextIndex<0){
                nextIndex=visualLength-1;
            }
            gsap.set(redbar,{width:'0%'})
            gsap.to(redbar,{width:'100%',ease:'power1.out'})    
            gsap.to(visualLi[currentIndex],{left:visualWidth,duration:0.7,ease:'power1.out'})
            gsap.set(visualLi[nextIndex],{left:-visualWidth,opacity:0})
            gsap.set(visualText[nextIndex],{y:50,opacity:0})
            gsap.to(visualLi[nextIndex],{left:0,opacity:1,duration:0.5,ease:'power1.out',onComplete:()=>{
                gsap.to(visualText[nextIndex],{y:0,opacity:1})
                isSlide=false;
            }})
            currentIndex=nextIndex;
            visualNum.innerHTML=`0${currentIndex+1}`
        }
    }
    function autoPlay(){
        timer=setInterval(slideVisualNext,4000)
    }
    function stopAutoPlay(){
        clearInterval(timer)
    }





})