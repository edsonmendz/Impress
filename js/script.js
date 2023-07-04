$(document).ready(function() {
    $.get('paginas/impress.html', data => {
      $('#principal').html(data)
    })

    // coloração da sidebar
    $(".sidebar ul li").on('click', function (){
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
      $.get('paginas/impress.html', data => {
          $('#principal').html(data)
      })
    })

    $('#quem_sou').on('click', () => {      
      $.get('paginas/quem_sou.html', data => {
          $('#principal').html(data)
      })
    })
})