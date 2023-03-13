let previousTitle = document.title

window.addEventListener('blur', () => {
previousTitle = document.title
document.title = 'Hey! Come back'
}) 

window.addEventListener('focus', () => {
document.title = previousTitle
})
