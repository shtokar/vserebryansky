
/*document.addEventListener("DOMContentLoaded", function (event) {
    const modal = document.querySelector('.modal');//обращение к модальному окну
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');//кнопка для вызова модального окна
    const closeBtn = document.querySelector('.modal__close');//кнопка закрытия модального окна
    const switchModal = () => {//функция вкл выкл модального окна
        modal.classList.toggle('modal--visible');
    }

    modalBtn.forEach(element => {//скрипт переборки массива объектов
        element.addEventListener('click', switchModal);//слушатель события
            modal.classList.toggle('modal--visible');//вкл выкл модального окна
    })
    closeBtn.addEventListener('click', switchModal);//функция вкл модального окна при нажать кнопки
    modal.addEventListener('click', (event) => {
        if (event.target === modal)  {
            switchModal();
        }
    
  

  
    })
});
/************************************************************************************************************ */

/*function ESCclose(evt){
    var modal_close = document.getElementsById('modal_close');
        if (evt.keyCode == 27){
        modal_close.style.box-suppress = 'hide';



    }
}

/****************************************************************************************** *********************
document.addEventListener('keypress', function (e) {
    if(e.keyCode === 27) document.getElementById('modal_id').hidden = 1;
  })
$('#modal_id').modal({ backdrop: 'static', keyboard: false });

/********************************JQuery-code********************************************************* */
/*(document).ready(function () {//
    var modal = $('.modal'),//
        modalBtn = $('[data-toggle=modal]'),//
        closeBtn = $('.modal_close');//

    modalBtn.on('click', function () {//
        modal.toggleClass('modal--visible');//
    });
    closeBtn.on('click', function () {//
        modal.toggleClass('modal--visible');//
    });
    $(document).on('click', function (e) {//
        if (modal.is(e.target))
            modal.toggleClass('modal--visible');
    });
/*+*/
/******************************************************************************** 
$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');

    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    $(document).on('click', function (e) {
        if (modal.is(e.target))
            modal.toggleClass('modal--visible');
    });
****************************************************************************** 
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 20 + bullets.width() + 20)
    bullets.css('left', prev.width() + 20)
    
});*/
/*************
function backToTop() {
    let button = $('.back-to-top');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 50) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000);
    })
}

backToTop();
/*******************************меняет местами блоки********************************/ 
$(function() {
  var first = $(".none1");
  var second = $(".none2");
  $(window).resize(function() {
      var i = $(".first, .second").index(first);
      if ($(window).width() <= "800" && !i) {
          var a = $("first");
          a.insertAfter(first);
          first.insertAfter(second);
          second.insertAfter(a);
          a.remove()
      } else if ($(window).width() > "800" && i) {
          var a = $("second");
          a.insertAfter(first);
          first.insertAfter(second);
          second.insertAfter(a);
          a.remove()
      }
  }).resize()
});


/***********************************Функция при нажатии клавиши ************************************ */
$( document ).ready(function(){
    $( "body" ).click(function(){ // задаем функцию при нажатиии на элемент button
      $( "modal" ).keydown(); // вызываем событие keydown на элементе <div>
    });
    $( "modal" ).keydown(function(){ // задаем функцию при нажатиии любой клавиши клавиатуры на элементе
      $( "modal--visible" ).css( "opacity", "0" ); // 
      $( "modal--visible" ).css( "visibility", "hidden" ); // 

    });
  });
/**************************Функция при нажатии клавиши выдает в консоли код клавиши************** */
$( document ).ready(function(){
    $( "body" ).keypress(function( event ){ // задаем функцию при нажатиии любой, кроме специальной клавиши клавиатуры на элементе
      console.log( event.which ); // выводим код символа нажатой клавиши
    });
  });

/***********************************cool scrypt***************************************** */
$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');

    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    $(document).on('click', function (e) {
        if (modal.is(e.target))
            modal.toggleClass('modal--visible');
    });

    /********************************************************************* */
    var mySwiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width()+ 10 + bullets.width() + 10);
  bullets.css('left', prev.width() + 10);
  
  
    /*****************************************************************/
    function backToTop() {
        let button = $('.back-to-top');
    
        $(window).on('scroll', () => {
            if ($(this).scrollTop() >= 50) {
                button.fadeIn();
            } else {
                button.fadeOut();
            }
        }),
    
        button.on('click', (e) => {
            e.preventDefault();
            $('html').animate({scrollTop: 0}, 1000);
        });
    }
    
    backToTop();
    new WOW().init();

});


  
  /*************************************************************************************/
  $('.modal__form').validate({
    errorClass: 'invalid',
    rules: {
      modalName: {
        required: true,
        minlength: 2
      },
      modalPhone: {
        required: true,
        minlength: 13
      },
      modalCheckbox: 'required',
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      modalName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 букв"
      },
      modalPhone: "Телефон обязателен",
      modalCheckbox: 'Требуется Ваше согласие',
      modalEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате name@domain.ru"
      },
    },/*
   submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: 'sendEmail.php',
        data: $(form).serialize(),
        success: function (response) {

          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalSuccess.toggleClass('modal-success--visible');
        }
      });
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
      }

      error.insertAfter($(element));
    }*/
  });

  // Control form
  $('.control__form').validate({
    errorClass: 'invalid',
    rules: {
      controlName: {
        required: true,
        minlength: 2
      },
      controlPhone: {
        required: true,
        minlength: 13
      },
      controlCheckbox: 'required',
    },
    messages: {
      controlName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 символов"
      },
      controlCheckbox: 'Требуется Ваше согласие',

      controlPhone: "Телефон обязателен"
    },/*
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: 'sendEmail.php',
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalSuccess.toggleClass('modal-success--visible');
        }
      });
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
      }

      error.insertAfter($(element));
    }*/
  });
  // Footer form
  $('.footer__form').validate({
    errorClass: 'invalid',
    rules: {
      footerName: {
        required: true,
        minlength: 2
      },
      footerPhone: {
        required: true,
        minlength: 13
      },
      footerCheckbox: 'required',
      footerQuestion: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      footerName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 символов"
      },
      footerQuestion: {
        required: "Задайте Ваш вопрос",
        minlength: "Вопрос должен содержать минимум 10 символов"
      },
      footerPhone: "Телефон обязателен",
      footerCheckbox: 'Требуется Ваше согласие'
    },/*
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: 'sendEmail.php',
        data: $(form).serialize(),
        success: function (response) {


          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalSuccess.toggleClass('modal-success--visible');
        }
      });
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
      }

      error.insertAfter($(element));
    }*/
  });
  // Phone mask
  $('[type=tel]').mask('+7(000) 000 00 00', {
    placeholder: /*Ваш номер телефона:*/"+7 (___) __ __ ___"
  });
/*
  let footer = $('.footer');
  let footerTop = footer.offset().top;
  $(window).bind('scroll', function() {
    let windowTop = $(this).scrollTop();
    if (windowTop > footerTop) {
      $('.map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Acff5477968c4f3e81b2f478b3b018b2a51eba70bbfc3045781c2b9301889aae2&amp;width=100%25&amp;height=465&amp;lang=ru_RU&amp;scroll=false"></script>');
      $(window).unbind('scroll');
    }
  })
});
*/
