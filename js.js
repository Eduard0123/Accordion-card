// **** desplegables ****

const arrayQuestion = [...document.querySelectorAll('.paragraph-question')]
const arraysInput = [...document.querySelectorAll('.input-checked')]
const arraysSpan = [...document.querySelectorAll('.span')]
const arraysResponse = [...document.querySelectorAll('.paragraph-response')]
const arraysItem = [...document.querySelectorAll('.item')]

for (const key in arrayQuestion) {

    arrayQuestion[key].addEventListener('click', () => {
        arraysInput[key].click()
        changeColorQuestion()
    })

    arraysSpan[key].addEventListener('click', () => {
        arraysInput[key].click()
        changeColorQuestion()
    })

}

for (const key in arraysInput) {
    arraysInput[key].addEventListener('click', () => {

        if (arraysInput[key].checked == true) {

            const filterInputs = arraysInput.filter(input => input != arraysInput[key])

            for (const input in filterInputs) {
                filterInputs[input].checked = false
            }

            //** solo se activará cuando el menu no tenga scroll
            menu.classList.add('item-border-bottom')

        }else{
            menu.classList.remove('item-border-bottom')
        }
    })
}

for (const key in arraysResponse) {
    arraysResponse[key].addEventListener('click', () => {
        arraysInput[key].click()
        changeColorQuestion()
    })
}
// **** desplegables FIN ****




// **** Creando separador y funcionalidad del separador dependiendo de la longitud del response ****
const fragment = document.createDocumentFragment()

for (const key in arraysItem) {

    const hr = document.createElement('hr')
    console.log(arraysResponse[key].textContent.length);
    if (arraysResponse[key].textContent.length > 113) {
        hr.classList.toggle('margin-top-hr')
    }

    if (arraysResponse[key].textContent.length < 74) {
        hr.classList.add('margin-top-hr-inferior')
    }

    fragment.appendChild(hr)
    arraysItem[key].appendChild(fragment)
}

// **** Separador y funcionalidad del separador dependiendo de la longitud del response FIN ****


const changeColorQuestion = () => {
    for (const key in arraysInput) {
        if (arraysInput[key].checked == true) {
            arraysInput[key].previousElementSibling.classList.add('change-color-question')
        } else {
            arraysInput[key].previousElementSibling.classList.remove('change-color-question')
        }
    }
}

// **** Efecto Hover para los desplegables ****
const changeColorQuestionSpan = () => {
    for (const key in arraysSpan) {
        arraysSpan[key].addEventListener('mouseenter', () => {
            arrayQuestion[key].classList.add('hover-paragraph')
        })
        arraysSpan[key].addEventListener('mouseleave', () => {
            arrayQuestion[key].classList.remove('hover-paragraph')
        })
    }

    for (const key in arrayQuestion) {
        arrayQuestion[key].addEventListener('mouseenter', () => {
            arrayQuestion[key].classList.add('hover-paragraph')
        })
        arrayQuestion[key].addEventListener('mouseleave', () => {
            arrayQuestion[key].classList.remove('hover-paragraph')
        })
    }
}

changeColorQuestionSpan()
// **** Efecto Hover para los desplegables FIN ****