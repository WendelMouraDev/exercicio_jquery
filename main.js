$(document).ready(function () {
    $("#newTarefa").submit(function (event) {
        event.preventDefault();

        var tarefa = $("#inputTarefa").val();

        var novaLinha = $("<ul>");
        var novaTarefa = $("<li>").text(tarefa);

        novaLinha.append(novaTarefa);

        $(".lista").append(novaLinha);
        $("#inputTarefa").val("");
    });
});

//-------------efeito riscado-------------//

$(document).ready(function () {
    $(".lista").click(function() {
    
    $("li").css("text-decoration", "line-through");    
    alert("Tarefa Completa!"); 
    });
});         

