$('.owl-carousel').owlCarousel({
    loop: true,//é o que faz com que possa passar para o lado infinitamente
    margin: 10,//espaço entre as miniaturas (imagens)
    nav: true,//botões de navegação <> ativados
    responsive: { //Se adapta ao tamanho da tela de acordo com os pixels
        0: {
            items: 1 //Uma única miniatura
        },
        600: {
            items: 3 //600 pixels 3 itens na tela
        },
        1000: {
            items: 5 //mais de mil pixels: 5 elementos na tela
        }
    }
})