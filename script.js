$('.preview-btn').click(function(e){
    addLay($(this).html());
})

let CURRENT_LAYOUT;

init()

function init() {
    console.log('skibidi')
    $('.preview-screen').click(function(e) {
        e.stopPropagation();
        $(this).attr('id', 'selected')
        $('.layout').not(this).attr('id', '')
    })
    $('.preview-screen').append($('<div class="layout"></div>').click(function(e) {
        e.stopPropagation();
        $(this).attr('id', 'selected')
        $('.layout').not(this).attr('id', '')
    }))
}

function addLay(type) {
    type = type.substring(0, type.indexOf('L')).toLowerCase()

    if (type == 'grid') {

    } else if (type == '') {

    }
}