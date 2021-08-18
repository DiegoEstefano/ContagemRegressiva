var contDown;

const clickON = () => {

    clickON.innerHTML = '';

    // tempo, em segundos que queremos.
    let seconds = document.getElementById("minutes")

    let sec = seconds.value

    const countDiv = document.getElementById("timer")

    // verifica se existe algum valor digitado
    if (seconds.value <= 0) {

        alert("Digite algum valor maior que zero!")

    } else {

        const secpass = () => {

            var min = Math.floor(sec / 60);

            var segundosRestantes = sec % 60;

            // Coloca o 0 antes dos segundos EX: 3:03
            if (segundosRestantes < 10) {
                segundosRestantes = "0" + segundosRestantes;
            }

            if (min < 10) {
                min = "0" + min
            }

            //Vai gerar o formato de 02:59
            countDiv.innerHTML = `${min}:${segundosRestantes}`

            //Condição final
            if (sec > 0) {
                sec -= 1;
            } else {
                //informa que acabou e reativa o botão e dar a cor verde
                countDiv.innerHTML = "Acabou!"
                startButton.style.pointerEvents = "auto"
                startButton.style.background = "rgb(130, 245, 155)"
            }

        };
        startButton.style.background = "grey"
        startButton.style.pointerEvents = "none"

        contDown = setInterval(() => secpass(), 1000)
    }
}

const stopClick = () => {
    clearInterval(contDown)
    startButton.style.background = "rgb(130, 245, 155)"
    startButton.style.pointerEvents = "auto"
}
const ResetClick = () => {
    let elemento = document.getElementById('timer')
    elemento.innerHTML = '00:00'

}