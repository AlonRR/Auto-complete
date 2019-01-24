const render= function(letter=``){
    let arr = tree.predictWord($(`input`).val() + letter)
    $(`div`).empty()
    if (arr) {
        for (let word of arr) {
            $(`body>div`).append(`<div>${word}</div>`)
        }
    }
}
$(document).keydown(function (e) {
    if(e.which==18||e.which==8){
        render()
    }
})
$(`input`).keypress(function (e) {
    let letter = String.fromCharCode(e.which)
    render(letter)    
})