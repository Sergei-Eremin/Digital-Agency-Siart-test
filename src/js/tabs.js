document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.tab-section').addEventListener('click', function(event){
        if(event.target.className === 'tab-btn'){
            event.preventDefault();
            document.querySelectorAll('.tab-btn').forEach(elem => elem.classList.remove('active'))
            document.querySelectorAll('.tab-body').forEach(elem => elem.classList.remove('active'))

            event.target.classList.add('active')
            document.getElementById(event.target.getAttribute('href').replace('#',"")).classList.add('active')
        }
    })
})