document.addEventListener('DOMContentLoaded', function(){
    let form = document.querySelector('.calc')
    form.addEventListener('submit', function(e){
        e.preventDefault()  //чтобы форма не перезагружала страницу
    })

    let calc_result = document.querySelector('.calc__result') //окно вывода

    let btn_num = document.querySelectorAll('[id="btn-add"]') //кнопки ввода

    let btn_reset = document.querySelector('.btn__reset') //кнопка CE

    let btn_calc = document.querySelector('[id="btn-calc"]')  //кнопка =

    let btn_negative = document.querySelector('[id="btn-negative"]') //кнопка +/-

    for(i=0; i < btn_num.length; i++){
        btn_num[i].addEventListener('click', function(e){
            e.preventDefault()
            calc_result.value += this.innerHTML;
        })
    }

    btn_reset.addEventListener('click', function(e){
        e.preventDefault()
        calc_result.value = '';
    })

    btn_calc.addEventListener('click', function(e){
        e.preventDefault()
        calc_result.value = eval(calc_result.value);

    })

    btn_negative.addEventListener('click', function(e){
        e.preventDefault()
        calc_result.value = -calc_result.value;
    })

})


// Решить проблему с точкой (потому что можно нажать точку до ввода цифр, и чтобы была одна точка в поле )
// убрать возможность дополнять число цифрами, когда мы нажимаем =

//убрать костыли с querySelector([id=]) 