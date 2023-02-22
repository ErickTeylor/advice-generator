const adviceContent = document.querySelector('.advice-content')
const idContent = document.querySelector('.id-content')
const getAdviceButton = document.querySelector('.get-advice')

async function getAdvice() {
    const url = 'https://api.adviceslip.com/advice'
    const response = await fetch(url)
    const advice = await response.json()
    const idTextContent = advice.slip.id
    const adviceTextContent = `"${advice.slip.advice}"`
    idContent.innerHTML = idTextContent
    adviceContent.innerHTML = adviceTextContent
}
getAdviceButton.addEventListener('click', getAdvice)
getAdvice()