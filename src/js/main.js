let point;
$(document).ready(function () {

})
$('#click-me').on('click', function (event) {
  event.preventDefault();

  let text2 = $('#name').val();
  $('.list').append('<li > <span class="my-change">' + text2 + '</span><button type="button" ' +
    'class="btn btn-primary my-btn edit">edit</button>' +
    '<button type="button" class="btn btn-primary my-btn delete" >delete</button></li>');


  $('#name').val('');
  // console.log($('#name').val());

  $('.delete').on('click', function (event) {
    $(event.target.parentElement).remove()
  });

  $('.edit').on('click', function (event) {
    event.preventDefault();
    let edit = event.target.parentElement.children[0].innerHTML;
    point = event.target.parentElement.children[0];
    // console.log(edit);

    $('#change').css('display', 'block');
    $('.edit-form').val(edit);

  });
  $('.change-btn1').on('click', function (event) {
    event.preventDefault();
    let editForm = $('.edit-form').val();
    $(point).html(editForm)
    $('#change').css('display', 'none');
  })
});






