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

// CHUYEN SLIDE
var couter=1;
setInterval(function(){
    document.getElementById('radio'+couter).checked=true;
    couter++;
    if(couter>8){
        couter=1;
    }
},3000);

//CountDown Flash Sale
const days =document.getElementById('days')
const hours= document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
// console.log(days)
const currentYear = new Date().getFullYear();
const newTime = new Date(`January 1 ${currentYear+2} 00:00:00`)

function updateCountdowntime(){
    const currentTime = new Date();
    const diff= newTime - currentTime;

    const d=Math.floor(diff/1000/60/60/24);
    const h =Math.floor(diff/1000/60/60%24);
    const m = Math.floor(diff/1000/60)%60;
    const s = Math.floor(diff/1000)%60;
    days.innerHTML=d;
    hours.innerHTML=h<10 ? '0'+h :h;
    minutes.innerHTML=m<10?'0'+m :m;
    seconds.innerHTML=s<10 ? '0'+s:s;

}
setInterval(updateCountdowntime,1000)