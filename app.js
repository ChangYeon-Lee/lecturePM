window.onload = function(){
    let current = 0;
    let isSlide = false;
    
    function slide(target, dir){
        if(isSlide) return;

        // console.log(target, dir);

        isSlide = true;

        $(".slide-image")
        .eq(target)
        .css({"left": `${dir * 100}%`})
        .animate({"left":0}, 800);

        $(".slide-image")
        .eq(current)
        .animate({"left":`${-100 * dir}%`}, 800, function(){
            isSlide = false;            
        });
        current = target;
        $(".pin").removeClass("active");
        $(".pin").eq(current).css("left",0);
        //핀에대한 작업은 여기서 나중에
    }

    $(".slide-image").css({"left":"100%"});
    $(".slide-image").eq(current).css("left", 0);

    $(".pin").on("click", function(){
        if(isSlide)return;
        let idx = $(this).index();
        slide(idx, idx - current < 0 ? -1 : 1);

        $(".pin").removeClass("active");
        $(".pin").eq(idx).addClass("active");
    });
    $(".slide-btn").on("click", function(){
        let dir = $(this).data("dir") * 1; //숫자로 강제 형변환
        slide(current + dir, dir);
    });

    setInterval(function (){
        slide(current +1, 1);
    }, 5000);
};


















// $(document).ready(function(){

// });

// $(function(){
    

// });
