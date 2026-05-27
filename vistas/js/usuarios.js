$('#nuevoDocumento').change(function() {

    let nuevoDocumento = $(this).val();
    console.log(nuevoDocumento);
    let datos = new FormData();
    datos.append("nuevoDocumento", nuevoDocumento);


    $.ajax({
        url: "ajax/usuarios.ajax.php",
        method: "POST",
        data: datos,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function(respuesta) {
            console.log(respuesta);
            if (respuesta) {
                $("#nuevoDocumento").val("");
                Swal.fire({
                    icon: 'error',
                    title: '!El número de documento ya existe en el sistema¡',
                    text: 'Por favor ingrese un número de documento diferente'
                });
            }
        },
    });//fin del ajax 
            
}); // fin de cambio del documento 