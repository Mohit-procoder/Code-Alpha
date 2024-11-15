let f = 3
document.querySelector('.card').addEventListener('click', () => {

    document.querySelector('.containermain').innerHTML += ` <div class="goals">
            <div class="check"></div>
            <input placeholder="Add your Goal" type="text" name="" id="">
        </div>`
    if (localStorage.jjd == undefined) localStorage.jjd = '1'
    else localStorage.jjd++
    window.location.reload()
})
if (localStorage.jjd != undefined) f = +(localStorage.jjd) + 3
if (localStorage.jjd != undefined) {
    let sdsd = +(localStorage.jjd)
    for (; sdsd > 0; sdsd--) {
        const dds = document.querySelector('.goals').cloneNode()
        const ggg = document.createElement('div')
        ggg.classList.add('check')
        dds.append(ggg)
        const ggg2 = document.createElement('input')
        ggg2.type = 'text'
        ggg2.placeholder = 'Add your Goal'
        dds.append(ggg2)
        document.querySelector('.containermain').append(dds)
    }
}

const allinput = document.querySelectorAll('.check')

const allinput2 = document.querySelectorAll('input')

const errormassege = document.querySelector('.error-massege')

const progvalue = document.querySelector('.progvalue')


const message = [
    'well begun is half done',
    'great!  keep going',
    'Whoo! You just completed all the goals , time for chill 😎'
]
allinput.forEach((c) => {
    c.addEventListener('click', (e) => {
        const allInputSet = [...allinput2].every((inp) => {
            return inp.value
        })
        if (allInputSet) {
            if (c.classList.contains('checkedd')) localStorage.i--
            else {
                if (localStorage.i == undefined) localStorage.i = '1'
                else localStorage.i++
            }
            c.classList.toggle('checkedd')
            errormassege.style.opacity = '0'
            if (localStorage.i > 0 && localStorage.i < 2) document.querySelector('.raise').innerText = message[localStorage.i - 1]
            else {
                if (+(localStorage.i) == +(localStorage.jjd) + 3) document.querySelector('.raise').innerText = "Whoo! You just completed all the goals , time for chill 😎"
                else document.querySelector('.raise').innerText = "Great! Keep going . Don't stop until Goal is acheived"
            }
            if (c.classList.contains('checkedd')) {
                c.nextElementSibling.style.color = 'green'
                c.nextElementSibling.style.textDecoration = 'line-through';
            }
            else {
                c.nextElementSibling.style.textDecoration = 'none';
                c.nextElementSibling.style.color = 'black'
            }
            progvalue.style.width = `${(+(localStorage.i)) * (100 / f)}%`

            progvalue.innerText = `${localStorage.i}/${f}completed`
            progvalue.style.textAlign = 'center'
            let xx = 1
            allinput.forEach((c) => {
                if (c.classList.contains('checkedd')) {
                    localStorage.setItem(`z${xx}`, '1')
                }
                else {
                    localStorage.setItem(`z${xx}`, '0')
                }
                xx++;
            })
        }
        else {
            errormassege.style.opacity = '1'
        }
    })
})
let xx = 1
let vv = 0
allinput.forEach((c) => {
    if (localStorage.getItem(`z${xx}`) == '1') {
        c.nextElementSibling.style.color = 'green'
        c.nextElementSibling.style.textDecoration = 'line-through';
        c.classList.toggle('checkedd')
        vv++;
    }

    else {
        c.nextElementSibling.style.textDecoration = 'none';
        c.nextElementSibling.style.color = 'black'
    }
    xx++
})
progvalue.style.width = `${(vv) * (100 / f)}%`
progvalue.innerText = `${vv}/${f}completed`
progvalue.style.textAlign = 'center'
if (localStorage.i > 0 && localStorage.i < 2) document.querySelector('.raise').innerText = message[localStorage.i - 1]
else {
    if (+(localStorage.i) == +(localStorage.jjd) + 3) document.querySelector('.raise').innerText = "Whoo! You just completed all the goals , time for chill 😎"
    else document.querySelector('.raise').innerText = "Great! Keep going . Don't stop until Goal is acheived"
}
for (let ccd = 0; ccd < f; ccd++) {
    allinput2[ccd].addEventListener('input', (e) => {
        if(localStorage.getItem(`z${ccd + 1}`)=='1'){
            allinput2[ccd].value = localStorage.getItem(`inp${ccd}`)
            allinput2[ccd].title = 'checked or completed task can not be edited , plese uncheack it to edit it'
            return
        }
        localStorage.setItem(`inp${ccd}`, e.target.value)
    })
    allinput2[ccd].value = localStorage.getItem(`inp${ccd}`)
}
if(+(localStorage.i) == (f)&&confirm("Whoo! , you completed all your today's goal , Press OK to reset Goals")){
    localStorage.clear()
    location.reload()
                }