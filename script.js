$('.preview-btn').click(function(e){
    addLay($(this).html());
})
$('.preview-btn').prop('disabled', true)

let $currentBox = null;

init()

function init() {
    console.log('skibidi')
    $('.preview-screen').click(selectBox)
    $('.preview-screen').append($('<div class="layout"></div>').click(selectBox))
}

function selectBox(e) {
    e.stopPropagation();
    $(this).attr('id', 'selected')
    if (!$currentBox) $('.preview-btn').prop('disabled', false)
    $('.layout').not(this).attr('id', '')
    $currentBox = $(this)
}

function addLay(type) {
    type = type.substring(0, type.indexOf('L')).toLowerCase()
    types = [
        'border','box','flow','grid'
    ]

    if (type=='grid') {

    } else {
        if (confirm(`Add a ${type}?`)) {
            $currentBox.append($(`<div class="layout ${type}-lay"></div>`).click(selectBox))
        }
    }
}