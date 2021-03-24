// $(":input").css("background-color", "blue");

var todo_list = [
    'portare il cane auy fhgcjyrdg furiyj hgdiythj gdc spasso',
    'apparecchiare',
    'cucinare',
    'fare auguri a Filippo'
];

// aggiumgiamo elementi alla lista da codice
for (var y = 0; y < todo_list.length; y++) {
    // 1. copio il div template
    var template = $('.template li').clone();
    // 2. aggiungo i dati nel div
    template.prepend(todo_list[y]);
    // 3. aggiungo il div al flusso dell'HTML 
    $('.todolist').append(template);
}

// aggiumgiamo elementi alla lista da input utente

$('#add').keydown(function (evento){
    
    if (evento.which == 13 ) {
        var testo = $(this).val();
        
        if(testo != "" ) {
            // copio il div, ci aggiungo i dati dentro e poi lo metto a video
            var template = $('.template ul li').clone();
            template.prepend(testo);
            $('.todolist').append(template);
            // 4. azzero l'input
            $(this).val("");
        }
    }
});


// cancella gli elementi della lista al click
$(document).on('click', '.todolist_delete', function() {
    $(this).parent().remove();
});
// function cancella() {
//     $(this).parent().remove();
// }


