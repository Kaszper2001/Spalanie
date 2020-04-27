
let liczenie = {


 km: document.querySelector(".km"),
 paliwo: document.querySelector(".paliwo"),
 obliczspalanie: document.querySelector(".obliczspalanie"),
 spalanie: document.querySelector(".spalanie"),
 spalone: document.querySelector(".spalone"),
 spalanie2: document.querySelector(".spalanie2"),
 oblicz: document.querySelector(".oblicz"),
 cena: document.querySelector(".cena"),
 wynik: document.querySelector(".wynik"),
 speed: document.querySelector(".speed"),


init: function(){


    this.obliczspalanie.addEventListener("click", function(){

        if (this.km.value == "" || this.paliwo.value == ""){
            this.spalanie.innerText = "brak danych";
            this.spalone.innerText = "brak danych";
        }
        else if (isNaN(this.km.value) || isNaN(this.paliwo.value)){
            this.spalanie.innerText = "złe dane";
            this.spalone.innerText = "złe dane";
        }
        else {
            this.spalanie.innerText = (this.paliwo.value/this.km.value) * 100;
            this.spalanie.innerText = Math.round (this.spalanie.innerText * 10) / 10;
            this.spalone.innerText = this.paliwo.value //* (this.km.value * 0.01);
            //this.spalone.innerText = Math.round (this.spalone.innerText * 10) / 10;
        }
       
        this.spalanie2.innerText = this.spalanie.innerText

        this.speed.innerText = this.km.value
    }.bind(this))

    
    this.oblicz.addEventListener("click", function(){

        this.wynik.innerText = this.spalone.innerText * this.cena.value

        if (this.cena.value == ""){
            this.wynik.innerText = "brak danych";
           
        }
        else if (isNaN(this.cena.value)){
            this.wynik.innerText = "złe dane";
            
        }

    }.bind(this))
}
}

liczenie.init();
