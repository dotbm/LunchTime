var iconLess = $('.order__less');
iconLess.on('click', sendIconLess);

function sendIconLess() {
    var dishId = $(this).parent().find('.order__input').val();
    var order = $(this).parent();

    jQuery.ajax({
        data: {
            dishId: dishId
        },
        method: 'post',
        url: '/dishCountLess'
    }).done(function (response) {
        $('.order').each(function () {
            if ($(this).find('.order__input').eq(0).val() == response.removedDish._id) {
                $(this).find('.order__value').eq(0).text(+$(this).find('.order__value').eq(0).text() - 1);
            }
        });

        if (response.needDelete) {
          
            order.off('click', sendIconLess);
            order.remove();
        }
        updateSum();
    });
    return false;
}