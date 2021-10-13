const signIn = document.querySelector('.sign-in')
const modalSignIn = document.querySelector('.modal-signin')
signIn.addEventListener('click', function(){
    if(modalSignIn){
        modalSignIn.classList.add('open')
    }
})

const backModal = document.querySelector('.modal__form-back--back')
backModal.addEventListener('click', function(){
    modalSignIn.classList.remove('open')
})

const signUp = document.querySelector('.sign-up')
const modalSignUp = document.querySelector('.modal-signup')
signUp.addEventListener('click', function(){
    if(modalSignUp){
        modalSignUp.classList.add('open')
    }
    // alert('hello')
})
const backModal2 = document.querySelector('.modal__form-back--back2')
backModal2.addEventListener('click', function(){
    modalSignUp.classList.remove('open')
})




class Setting {
    constructor(){
        this.settingObject={
            'background':'#ff0000',
            'version':Math.floor(Math.random()*1000),
        }
    }
    get(key){
        return this.settingObject[key];
    }
}

//tim kiem vaf lich su tim kiem
// const searchBox = document.querySelector('.header__search-searchbox')
// searchBox.addEventListener('click', function(){
//     alert('hello')
// })