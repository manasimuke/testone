function addItem() {
    var text = $("#input").val();
    $("#todo").append('<li><input type="checkbox" class="strike" />' +text+ ' <button class="delete btn btn-warning"><i class="fa fa-trash-o"> </i> Delete </button> </li>');
    $("#input").val('');
}

function deleteItem() {
    $(this).parent().remove();
}

function strikeOut() {
    if ($(this).parent().css('textDecoration') == 'line-through') {
        $(this).parent().css('textDecoration','none');
    }
    else {
        $(this).parent().css('textDecoration','line-through');
    }
}

$(function() {
    $("#add").on('click',addItem);
    $(document).on('click','.delete',deleteItem);
    $(document).on('click', '.strike', strikeOut);
});


        
function viewList1() {
    document.getElementById("list1").style.display="block";
}


