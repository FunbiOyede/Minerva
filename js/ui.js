
// For navigation
$('.nav-toggle').on('click', function(){
    $('.main-navigation').toggleClass('open-nav')
})

$('.Close').on('click',function(){
    $('.main-navigation').removeClass('open-nav');
})

// For animation
$('.nav-toggle').hover(function(){
    $(this).toggleClass('animated jello');
})

$('.times').hover(function(){
    $(this).toggleClass('animated jello');
})

$('li').hover(function(){
    $(this).toggleClass('animated jello');
})

$('.fine').hover(function(){
    $(this).toggleClass('animated pulse');
})
$('#searchForm').on('submit',(e)=>{

})