document.addEventListener('DOMContentLoaded', () => { 

    $('.signin').click(() => { 
        $('.modal').css('display', 'block') 
    })
    $('.close').click(() => { 
        $('.modal').css('display', 'none')
    }) 
})