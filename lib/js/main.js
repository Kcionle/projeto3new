$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false // Remove os botões "Next" e "Previous"
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true, // Adicionada vírgula após "true"
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
                        
            cep: {
                required: true
            },

            endereco: {
                required: true
            },

        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);

        
    });

});

$(document).ready(function() {
  $('#form-cadastro').submit(function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Validar os campos do formulário
    var nome = $('#nome').val();
    var cpf = $('#cpf').val();
    var telefone = $('#telefone').val();
    var email = $('#email').val();
    var endereco = $('#endereco').val();
    var cep = $('#cep').val();

    // Verificar se todos os campos estão preenchidos
    if (nome === '' || cpf === '' || telefone === '' || email === '' || endereco === '' || cep === '') {
      alert('Por favor, preencha todos os campos do formulário.');
      return; // Impede a exibição da mensagem de sucesso se algum campo estiver vazio
    }
    alert('Formulário enviado com sucesso!');
  });
});

