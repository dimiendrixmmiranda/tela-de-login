const toggle = document.querySelector('#loginSign')
const boxContent = document.querySelector('#boxContent')
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        boxContent.style.transform = 'rotateY(180deg)'
    } else {
        boxContent.style.transform = 'rotateY(0deg)'
    }
})