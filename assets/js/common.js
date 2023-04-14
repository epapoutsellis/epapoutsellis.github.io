$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
        $(this).parent().parent().find(".bibtex.hidden.open").toggleClass('open');
        $(this).parent().parent().find(".teaser.hidden.open").toggleClass('open');        
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
        $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
        $(this).parent().parent().find(".teaser.hidden.open").toggleClass('open');            
    });
    $('a.teaser').click(function() {
        $(this).parent().parent().find(".teaser.hidden").toggleClass('open'); 
        $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
        $(this).parent().parent().find(".bibtex.hidden.open").toggleClass('open');                     
    });    
    $('a').removeClass('waves-effect waves-light');
});