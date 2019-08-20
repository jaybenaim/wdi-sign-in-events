document.addEventListener('DOMContentLoaded', () => { 
    let modal = $('.modal')
    let m = document.querySelector('.modal')

    $('.signin').click(() => { 
        modal.show() 
    })
    $('.close').click(() => { 
        modal.hide() 
    }) 
    $('.submit').click(() => { 
        $('input').attr('class', 'error')
    })
    $('#user').mouseenter(function() { 
        $(this).removeAttr('class', 'error')
    })
    
    modal.click(function(e) { 
        if (e.target === m) {
            modal.hide() 
        }

    })
})
//  const modal = document.querySelector('.modal');
//    modal.addEventListener('click', function (e) {
//        if (e.target === modal) {
//            modal.style.display = 'none'
//        }
//    })
