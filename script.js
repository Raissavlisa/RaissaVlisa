$(document).ready(function() {
    // Escolha aleatória de uma imagem de fundo
    const backgrounds = ['background1.jpg', 'background2.jpg', 'background3.jpg'];
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    $('.background-image').css('background-image', `url('backgrounds/${randomBackground}')`);

    // Efeito hover para os botões de redes sociais
    $('.btn-social').hover(
        function() {
            $(this).css('transform', 'translateY(-5px)');
            $(this).css('box-shadow', '0 8px 16px rgba(0, 0, 0, 0.2)');
        }, function() {
            $(this).css('transform', 'translateY(0)');
            $(this).css('box-shadow', '0 4px 8px rgba(0, 0, 0, 0.1)');
        }
    );
});
