let container=document.querySelector('.container')
let question_answer=document.querySelector('.question-answer')
let add=document.querySelector('.add')
let save=document.querySelector('.save')
let question=document.querySelector('.question')
let answer=document.querySelector('.answer')
let lists=document.querySelector('.qlists')
let clear=document.querySelector('#clear')



message=()=>{
    alert('Please Enter Yoour question and Answer')
}
build=()=>{
    if(question.value == ''|| answer.value == ''){
        message()
    }
    else
    {
    let div=document.createElement('div')
    let show_hide=document.createElement('p')
    let btndiv=document.createElement('div')
    let edit=document.createElement('button')
    let dellet=document.createElement('button')
    let qp=document.createElement('p')
    let ap=document.createElement('p')

    div.id='div'
    show_hide.id='show-hide'
    show_hide.className='showhide';
    btndiv.id='bttn-div'
    edit.id='edit'
    dellet.id='delet'
    qp.id='qp'
    ap.id='ap'

    edit.innerHTML='EDIT'
    dellet.innerHTML='DELET'
    qp.innerHTML=question.value
    ap.innerHTML=answer.value
    show_hide.innerHTML='Show/Hide Answer'

    btndiv.append(edit,dellet)
    div.append(qp,show_hide,ap,btndiv)
    lists.append(div)

    togle=()=>{
     if(ap.style.display === 'none'){
        ap.style.display = 'block'
     }
     else{
        ap.style.display= 'none'
     }
    }

    show_hide.addEventListener('click',togle)

    dellet.addEventListener('click',e=>{
        remov(e)
    })
    edit.addEventListener('click',e=>{
        editt(e)
    })
}
}
add.addEventListener('click',()=>{
    question_answer.style.display='block'

})
save.addEventListener('click',build)

remov=(e)=>{
    e.target.parentNode.parentNode.remove()
}

editt=(e)=>{
    e.target.parentNode.parentNode.style.display='none'
    question.value=e.target.parentNode.parentNode.querySelector('#qp').innerHTML
    console.log(e.target.parentNode.parentNode.querySelector('#qp').innerHTML)

}
clear.addEventListener('click',()=>{
    question_answer.style.display='none'
})