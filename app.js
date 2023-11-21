let username = document.getElementById('username')
let password = document.getElementById('password')
let button = document.getElementById('button')
let text_1 = document.getElementById('text-1')
let text_2 = document.getElementById('text-2')
console.log('admin => Email' )
console.log('12341234 => Password')

button.addEventListener('click', () => {
    if(  username.value === 'admin' && password.value === '12341234'){
        password.style.color = 'green'
        password.style.border = '1px solid green'
        username.style.color = 'green'
        username.style.border = '1px solid green'
    }else if(username.value !== 'admin' && password.value !== '12341234'){
        password.style.color = 'red'
        password.style.border = '1px solid red'
        username.style.color = 'red'
        username.style.border = '1px solid red'
    }else if(username.value !== 'admin'){
        username.style.color = 'red'
        username.style.border = '1px solid red'
    }else if( password.value.length == 1){
        username.style.color = 'green'
        username.style.border = '1px solid green'
        password.style.border = '1px solid red'
        password.style.color = 'red'
    }else if( password.value.length == 2){
        username.style.color = 'green'
        username.style.border = '1px solid green'
        password.style.border = '1px solid red'
        password.style.color = 'red'
    }else if( password.value.length == 3){
        username.style.color = 'green'
        username.style.border = '1px solid green'
        password.style.border = '1px solid red'
        password.style.color = 'red'
    }else if( password.value.length == 4){
        username.style.color = 'green'
        username.style.border = '1px solid green'
        password.style.border = '1px solid red'
        password.style.color = 'red'
    }else if( password.value.length == 5){
        username.style.color = 'green'
        username.style.border = '1px solid green'
        password.style.border = '1px solid yellow'
        password.style.color = 'yellow'
    }else if( password.value.length == 6){
        username.style.color = 'green'
        username.style.border = '1px solid green'
        password.style.border = '1px solid yellow'
        password.style.color = 'yellow'
    }else if( password.value.length == 7){
        username.style.color = 'green'
        username.style.border = '1px solid green'
         password.style.border = '1px solid yellow'
         password.style.color = 'yellow'
    }else if( password.value !== '12341234'){
        username.style.color = 'green'
        username.style.border = '1px solid green'
        password.style.border = '1px solid red'
        password.style.color = 'red'
    }

})

username.addEventListener('click', () => {
    text_1.style.display = 'block'
})
password.addEventListener('click', () => {
    text_2.style.display = 'block'
})
