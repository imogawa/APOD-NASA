
    const pedido = function (dia) {

        $.ajax ({
            url: `https://api.nasa.gov/planetary/apod?api_key=1IinEyUNRFjzzD9hmiT4xuRZXJmIifgy9gRyVk5Z&date=${dia}`,
            type: 'GET',
            success: function(date) {
                $('#titulo').text(`${date.title}`);
                $('#explicacao').text(`${date.explanation}`);
                
                if (date.media_type == 'image') {
                 $('#img').attr('src', `${date.url}`).show();
                 $('#video').attr('src', `${date.url}`).hide();
    
                }
                else if (date.media_type == 'video') {
                $('#img').attr('src', `${date.url}`).hide();
                $('#video').attr('src', `${date.url}`).show();
                }
            },
            error: function () {
                alert('Data inválida!')
            }
        })
    }

    $('#form').submit(function (event) {
        event.preventDefault()
        let dia = $('#data').val()
        pedido(dia)
    })