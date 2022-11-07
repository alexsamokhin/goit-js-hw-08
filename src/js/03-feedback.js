import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form')
const email = document.querySelector('[type="email"]')
const textarea = document.querySelector('[name="message"]')
const submitBtn = document.querySelector('[type="submit"]')

let localStorageData
try {
    localStorageData = JSON.parse(localStorage.getItem("feedback-form-state"))
    if(!localStorageData){
        email.value = ''
        textarea.value = ''
    } else {
        email.value = localStorageData.email
        textarea.value = localStorageData.textarea
    }
} catch (error) {
    console.log('Error')
}

form.addEventListener('input', throttle(onFormInput, 500))
submitBtn.addEventListener('click', onSubmit)

let formObj = {...localStorageData}

function onFormInput(){
    formObj.email = email.value
    formObj.textarea = textarea.value
    localStorage.setItem("feedback-form-state", JSON.stringify(formObj))
}

function onSubmit(evt){
    evt.preventDefault()
    console.log(formObj)
    formObj = {}
    localStorage.clear()
    form.reset()
}