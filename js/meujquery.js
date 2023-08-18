$(document).ready(function() {   

    // coloração da sidebar
    $("#interno li, #impress").on('click', function (){
      $(".sidebar ul li.active").removeClass('active');            
      $(this).addClass('active');      
    });

    // chamar sidebar
    $('.open-btn').on('click', function() {
      $('.sidebar').addClass('active');      
    });
    $('.close-btn').on('click', function() {
      $('.sidebar').removeClass('active');      
    });

    // chamar páginas

    $('#impress').on('click', () => {      
      $.get('paginas/capa.html', data => {
          $('#principal').html(data)
      })      
            
      $('#cabecalho').html('Impress') 
    })

    $('#quem_sou').on('click', () => {      
      $.get('paginas/quem_sou.html', data => {
          $('#principal').html(data)
      })

      $('#cabecalho').html('Quem Sou')       
    })

    $('#projetos').on('click', () => {      
      $.get('paginas/projetos.html', data => {
          $('#principal').html(data)
      })

      $('#cabecalho').html('Projetos')       
    })

    $('#tecnologias').on('click', () => {      
      $.get('paginas/tecnologias.html', data => {
          $('#principal').html(data)
      })

      $('#cabecalho').html('Tecnologias')       
    })

    // Música autoplay
      $('body').on('click', () => {
        if (estado == 0 ) {        
        playAudio();
        $('.sidebar').addClass('active');
        estado = 2;
        }
      })
})