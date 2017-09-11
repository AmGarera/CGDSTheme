jQuery(document).ready(function ($) {
    $('.navbar .dropdown').hover(function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
    }, function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(105);
    });

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').focus()
    })
});