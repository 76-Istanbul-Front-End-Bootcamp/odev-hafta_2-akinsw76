/*
  Odev 1:
  Asagidaki fonksiyonu "Hello, John ciktisi verecek sekilde duzenleyiniz."
 */

var person = {
  name: "John",
  message: function () {    
    console.log("Hello, " + person.name)
  }
}

var messageFunc = person.message
messageFunc();


/*  
  Odev 2:
  Asagidaki fonksiyonu sirasiyla 
  20
  40
  60
  sonuclarini yazdiracak sekilde duzenleyiniz.
*/
var numbers = {
  numbers: [[10,20,30], 2],
  multiply: function(){
    this.numbers[0].map((number, numberIndex) => {
        const result = number * this.numbers[1];
        console.log(result)
    })
  }
};

numbers.multiply();


/* 
  Odev 3:
  Asagidaki isValidName fonksiyonunda bir isim validasyonu yaziniz.
  Ipucu: Verilen arguman gecerli bir isim ise true degilse false donmeli
  Ornek : isValidName("John") true donmeli
  Ornek : isValidName(" J ohn") false donmeli
*/
function isValidName(name){
    if(typeof name ==='string') {
        var trimmedName = name.trim().split(" ");
        if(trimmedName.length > 1 || trimmedName[0] == ("")){
            console.log("false");
        }else {
            console.log("true");
        }
    }else {
        console.log("false");
    }
  };
  isValidName("John");

/*
  Odev 4:
  Asagidaki katilimSaati fonksionu 2 arguman almaktadir.
  dersSayisi: ogrencinin katildigi ders sayisi
  dersSaati: her bir dersin dakika cinsinden suresi
  katilimSaati fonkisyonu kac derse gerilidigi ve her bir dersin kac dakika surdugu bilgisini alip sonuc olarak toplamda kac dakika derse girildigini donmelidir.
  - iki arguman de number veya string olarak verilebilir.
  - Sayi olmayan ya da sayiya cevrilemeyen argumanlar var ise hata donulmelidir.
  Ornek: katilimSaati(3, 30) 90 sonucunu vermelidir.
  Ornek: katilimSaati("3", 20) 60 sonucunu vermelidir.
  Ornek: katilimSaati("5", "30") 150 sonucunu vermelidir.
*/
function katilimSaati(dersSayisi, dersSuresi){
    
    if(typeof dersSayisi !=='number' && typeof dersSuresi !=='number' && typeof dersSayisi !== 'string' && typeof dersSuresi !== 'string') return false;
    if(isNaN(dersSayisi) || isNaN(dersSuresi)) return false;
    
    if(typeof dersSuresi === 'string' || typeof dersSuresi === 'string') {
        let sonuc = Number(dersSuresi) * Number(dersSayisi);
        return sonuc;
    }else {
        let sonuc = dersSuresi * dersSayisi;
        return sonuc;
    }
}
console.log(katilimSaati(3, 30)); //90
console.log(katilimSaati("3", 20)) //60
console.log(katilimSaati("5","30")) //150



