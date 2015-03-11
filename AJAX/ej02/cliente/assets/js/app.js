$(function() {

    var $provincias = $("#provincias");
    var $municipios = $("#municipios");



    $.getJSON("../servidor/cargaProvinciasJSON.php", {}, function(data) {

        var items = [];
        items.push("<option value='" + null + "'>" + 'Seleccione provincia' + "</option>");
        $.each(data, function(id, val) {
            //items.push(new Option(data[id],val));
            items.push("<option value='" + id + "'>" + val + "</option>");
        });

        $provincias.append(items.join(""));
    });


    $provincias.on('click', function(data) {


        var provincia = $provincias.val();

        $.ajax("../servidor/cargaMunicipiosJSON.php", {

            method: 'POST',
            data: {
                provincia: provincia
            },
            dataType: 'json',
            success: function(municipios) {


                var items = [];
                items.push("<option value='" + null + "'>" + 'Selecciona municipio' + "</option>");
                $.each(municipios, function(id, val) {
                    //items.push(new Option(data[id],val));
                    items.push("<option value='" + id + "'>" + val + "</option>");
                });
                $municipios.children().remove();
                $municipios.append(items.join(""));

            }

        });


    });

});
