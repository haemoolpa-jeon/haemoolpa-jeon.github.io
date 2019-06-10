//Filter for Gallery

$('#filterAll').click(function (e) {
    $('.galleryStep1').show();
    $('.galleryStep2').show();
    $('.galleryStep3').show();
    $('.galleryStep4').show();
    $('.galleryOthers').show();
    $('#filterAll').addClass('active');
});

$('#filterStep1').click(function (e) {
    $('.galleryStep1').show();
    $('.galleryStep2').hide();
    $('.galleryStep3').hide();
    $('.galleryStep4').hide();
    $('.galleryOthers').hide();
    $('#filterStep1').addClass('active');
});

$('#filterStep2').click(function (e) {
    $('.galleryStep1').hide();
    $('.galleryStep2').show();
    $('.galleryStep3').hide();
    $('.galleryStep4').hide();
    $('.galleryOthers').hide();
    $('#filterStep2').addClass('active');
});

$('#filterStep3').click(function (e) {
    $('.galleryStep1').hide();
    $('.galleryStep2').hide();
    $('.galleryStep3').show();
    $('.galleryStep4').hide();
    $('.galleryOthers').hide();
    $('#filterStep3').addClass('active');
});

$('#filterStep4').click(function (e) {
    $('.galleryStep1').hide();
    $('.galleryStep2').hide();
    $('.galleryStep3').hide();
    $('.galleryStep4').show();
    $('.galleryOthers').hide();
    $('#filterStep3').addClass('active');
});

$('#filterOthers').click(function (e) {
    $('.galleryStep1').hide();
    $('.galleryStep2').hide();
    $('.galleryStep3').hide();
    $('.galleryStep4').hide();
    $('.galleryOthers').show();
    $('#filterStep3').addClass('active');
});