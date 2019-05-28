const $body = document.getElementById("body")
const $spinner = document.getElementById("spinner")
const $img = document.getElementById("img")


function blockBody(){
    $body.style.overflowY="hidden"
}

function unlockBody(){
    $body.style.overflowY="scroll"
}
function deleteSpinner(){
    $spinner.style.display='none'
}
function deleteImg(){
    $img.style.display='none'
}
console.log($body.scrollTop)
blockBody()
setTimeout(() => {
    unlockBody()
    deleteSpinner()
    deleteImg()
}, 7000);