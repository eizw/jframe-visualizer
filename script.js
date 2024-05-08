let $currentBox = null;

init()

function init() {
    console.log('skibidi')

    $('.preview-btn').click(function(e) {
        addLay($(this).html());
    })
    $('.edit-btn').click(editLay)
    $('.del-btn').click(delLay)

    $('.preview-btn').prop('disabled', true)
    disableEdit()
    
    $('.preview-screen').click(selectBox)
    $('.preview-screen').append($('<div class="layout"></div>').click(selectBox))
}



function selectBox(e) {
    e.stopPropagation();
    $(this).attr('id', 'selected')
    if (!$currentBox) {
        $('.preview-btn').prop('disabled', false)

    }
    if (!$(this).hasClass('preview-screen')) {
        enableEdit()
    } else {
        disableEdit()
    }

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

function editLay(e) {
    
}

function delLay(e) {
    if (confirm(`Delete layout?`)) {
        $currentBox.remove();
        $('.preview-btn').prop('disabled', true)
        disableEdit();
        $currentBox = null
    }
}

function disableEdit() {
    $('.edit-btn').prop('disabled', true)
    $('.del-btn').prop('disabled', true)
}
function enableEdit() {
    $('.edit-btn').prop('disabled', false)
    $('.del-btn').prop('disabled', false)
}