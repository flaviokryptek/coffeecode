function primaryFunc(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var date = new Date()
    var hour = date.getHours()
    msg.innerHTML = `<p>Now is ${hour} hours.</p>`

    if(hour >= 0 && hour < 12){
        //Good morning
        msg.innerHTML += '<p>Good Morning</p>'
        img.src = 'img/daysky.png'
        document.body.style.background = '#3f74da'
    }else if(hour >= 12 && hour <= 18){
        //Good afternoon
        msg.innerHTML += '<p>Good Afternoon</p>'
        img.src = 'img/afternoon.png'
        document.body.style.background = '#e07725'
    }else{
        //Good night
        msg.innerHTML += '<p>Good Night</p>'
        img.src = 'img/rockynight.png'
        document.body.style.background = '#12161f'
    }

}