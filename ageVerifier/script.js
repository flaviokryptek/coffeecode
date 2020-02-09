function verify(){
    var date = new Date()
    var currentYear = date.getFullYear()
    var searchYear = document.getElementById('searchYear')
    var result = document.getElementById('result')

    if (searchYear.value.length == 0 || Number(searchYear.value) > currentYear){
        window.alert('[ERROR] Verify the form fields and try again!')
    }else{
        var searchSex = document.getElementsByName('radioSex')
        var age = currentYear - Number(searchYear.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(searchSex[0].checked){
            gender = 'man'
            if(age >= 0 && age < 10){
                //Child
                img.setAttribute('src', 'img/babyMan.png')
            }else if(age < 21){
                //Young
                img.setAttribute('src', 'img/youngMan.png')
            }else if(idade < 50){
                //Adult
                img.setAttribute('src', 'img/adultMan.png')
            }else{
                //Old
                img.setAttribute('src', 'img/oldMan.png')
            }
        }else if(searchSex[1].checked){
            gender = 'woman'
            if(age >= 0 && age < 10){
                //Child
                img.setAttribute('src', 'img/babyWoman.png')
            }else if(age < 21){
                //Young
                img.setAttribute('src', 'img/youngWoman.png')
            }else if(idade < 50){
                //Adult
                img.setAttribute('src', 'img/adultWoman.png')
            }else{
                //Old
                img.setAttribute('src', 'img/oldWoman.png')
            }
        }
        result.innerHTML=`Detected ${gender} whith ${age} anos.`
    }
}