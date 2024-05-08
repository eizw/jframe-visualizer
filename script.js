$('.preview-btn').click(function(e){
    addLay($(this).html());
})

let currentBox = null;

init()

function init() {
    console.log('skibidi')
    $('.preview-screen').click(selectBox)
    $('.preview-screen').append($('<div class="layout"></div>').click(selectBox))
}

function selectBox(e) {
    e.stopPropagation();
    $(this).attr('id', 'selected')
    $('.layout').not(this).attr('id', '')
}

function addLay(type) {
    type = type.substring(0, type.indexOf('L')).toLowerCase()
    types = [
        'border','box','flow','grid'
    ]

    if (type == 'border') {

    } else if (type == 'box') {

    } else if (type == 'flow') {
        
    } else if (type == 'grid') {

    }
}