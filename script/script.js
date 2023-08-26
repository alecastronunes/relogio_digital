function updateClock() {
    const hourElement = document.querySelector(".hours")
    const minuteElement = document.querySelector(".minutes")
    const secondElement = document.querySelector(".seconds")

    //Pegando a data atual
    const now = new Date()

    //Pegando a hora atual
    const hours = now.getHours().toString().padStart(2, "0")

    //Pegando o minuto atual
    const minutes = now.getMinutes().toString().padStart(2, "0")

    //Pegando o segundo atual
    const seconds = now.getSeconds().toString().padStart(2, "2")


    hourElement.innerHTML = hours
    minuteElement.innerHTML = minutes
    secondElement.innerHTML = seconds

}   

setInterval(updateClock, 100)
