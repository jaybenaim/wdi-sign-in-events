document.addEventListener('DOMContentLoaded', () => { 

    $('.signin').click(() => { 
        // $('.modal').css('display', 'block') 
        $('.modal').show() 
    })
    $('.close').click(() => { 
        // $('.modal').css('display', 'none')
        $('.modal').hide() 
    }) 
})