(function(Window){
    var App = {
        // Atributos
        estudiantes: [],
        htmlElements: {
            clickBtn: document.querySelector('.js-click-btn'),
        },

        // Inicializaciones
        init: function(){
            console.log('Inicializando...');
            App.initHandlers();
        },

        initHandlers: function(){
            App.initClickBtn();
        },

        initClickBtn: function(){
            App.htmlElements.clickBtn.addEventListener('click', App.handleClickBtn);
        },

        // Eventos
        handleClickBtn: function(e){
            console.log('Erick');
        }
    };
    Window.App = App;
})(window);