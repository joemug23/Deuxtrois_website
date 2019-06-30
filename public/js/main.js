$(document).ready(function(){
    // Initializing the controller
    var controller = new ScrollMagic.Controller();

    // build a scene
    var servicesScene = new ScrollMagic.Scene({
        triggerElement: '#services'
    })
    .setClassToggle('#services', 'rollIn')
    .addTo(controller);

    var a_proposScene = new ScrollMagic.Scene({
        triggerElement: '#about_articles'
    })
    .setClassToggle('#about_articles', 'bounceInLeft')
    .addTo(controller);

    var contactScene = new ScrollMagic.Scene({
        triggerElement: '#contact'
    })
    .setClassToggle('#contact', 'bounceInRight')
    .addTo(controller);

    var temoignagesScene = new ScrollMagic.Scene({
        triggerElement: '#temoignages'
    })
    .setClassToggle('#temoignages', 'fadeInLeftBig')
    .addTo(controller);
});