$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false,
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Insira um endereço de e-mail válido',
            mensagem: 'Não deixe de nos enviar uma mensagem'
        },
        submitHandler: function(form) {
            console.log(form.mensagem.value)
        }
    });
})