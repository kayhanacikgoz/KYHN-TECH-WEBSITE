$(document).ready(function(){

    $("button[name='popular']").click(function() {
        console.log('mert tıkladı');
    
    });
        

    console.log('js deyım');
    let $btns = $('.project-area .button-group button');
    console.log($btns);
    $btns.click(function(e){

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector= $(e.target).attr('data-filter');
        console.log(selector);
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;

    });

    $('.project-area .button-group #btn1').trigger('click');

});





   

    