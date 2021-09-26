document.addEventListener('DOMContentLoaded', function(event){
    const selector = document.querySelectorAll('input[type=tel]')
    let inputMask = new Inputmask('+7 (999) 999-99-99')
    inputMask.mask(selector)

    const form = document.querySelector('#form')
    new window.JustValidate('#form', {
        rules:{
            name:{
                required: true,
                minLength: 2,
            },
            phone:{
                required: true,
            }
        },
        messages: {
          name: 'Заполните обязательное поле',
          phone: 'Заполните обязательное поле'
        },
        submitHandler(form){
            let formData = new FormData(form)

            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if(xhr.status === 200){
                        setTimeout(function(){
                            console.log("Отправлено");
                        
                        }, 2000)

                    }
                }
            }
            xhr.open('GET', 'https://favqs.com/api/qotd', true)
            xhr.send(formData)
        }
    });

    const pictureList = document.querySelector('.picture-list');
    document.querySelector('.uploadFile input[type=file]').addEventListener('change', function(event){
        let files = event.currentTarget.files;
        console.dir(event.currentTarget);
        if(files.length){
            pictureList.textContent = files[0].name
        }

        // console.log(files);
        // console.log(111);
    })
})