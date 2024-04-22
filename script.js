$('.preview-btn').click(function(){
    $(this).css('background-color', 'yellow')
    $('.preview-btn').not(this).css('background-color', 'white')
})

$