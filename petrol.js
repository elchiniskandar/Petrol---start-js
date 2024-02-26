let benzin=1 , salyarka=0.90 ,dizel=0.80;
const yenisetr= "\r\n";

const benzinqiymet = 
"1. Benzin - 1 MANAT"+ yenisetr 
+ "2. Salyarka - 0.90"+ yenisetr 
+ "3. Dizel - 0.80 ";

let secilen = Number(prompt("Asagidakiklardan birini secin. \r\n" + benzinqiymet));
if(secilen != ""){
    let litr = Number(prompt("Nece litr ?"));
        if(litr==""){
            console.log("Siz miqdariqeyd etmediz");3
        }
        if(secilen===1){
            odenis1= (litr*benzin);
            odenilecek=Number(prompt("Sizin odemeli olduqunuz mebleg " + odenis1 +" Azn"));
            //Benzin odenusi
            if(odenilecek !=""){
                if(odenilecek == odenis1 || odenilecek > odenis1){
                    yazdir = "Cek  N-1 "+yenisetr
                    + "Yanacaqin Novu Benzin " + yenisetr
                    + "Miqdar " + litr + " Litr " + yenisetr
                    + "Odenis " + odenis1 + " Azn " + yenisetr
                    + "Musderiya qaytarilacaq mebleg " + (odenilecek-odenis1)+" Azn " + yenisetr
                    + "Yaxsi yol !!!!!";
                    console.log(yazdir);
                }else{
                    console.log("Sizin emeliyyat ugursuz oldu."+yenisetr+"Odemek istediyiniz mebleg azdir"+ yenisetr 
                    + (odenis1-odenilecek) +" Azn eksiyiniz var.");
                }
            }else{
                console.log("Deyerli Musderimiz  mebleg girmediniz ....");
            }
        }else if(secilen ===2){
            odenis2= (litr*salyarka);
            odenilecek=Number(prompt("Sizin odemeli olduqunuz mebleg " +odenis2 +" Azn"));
                //Salyarka odenusi
                if(odenilecek !=""){
                    if(odenilecek == odenis2 || odenilecek > odenis2){
                        yazdir = "Cek  N-1 "+yenisetr
                        + "Yanacaqin Novu Saylarka " + yenisetr
                        + "Miqdar " + litr + " Litr " + yenisetr
                        + "Odenis " + odenis2 + " Azn " + yenisetr
                        + "Musderiya qaytarilacaq mebleg " + (odenilecek-odenis2)+" Azn " + yenisetr
                        + "Yaxsi yol !!!!!";
                        console.log(yazdir);
                    }else{
                        console.log("Sizin emeliyyat ugursuz oldu."+yenisetr+"Odemek istediyiniz mebleg azdir" + yenisetr 
                        + (odenis2-odenilecek) +" Azn eksiyiniz var.");1
                    }
                }else{
                    console.log("Deyerli Musderimiz  mebleg girmediniz ....");
                }
        }else if(secilen===3){
            odenis3= (litr*salyarka);
            odenilecek=Number(prompt("Sizin odemeli olduqunuz mebleg " + odenis3 +" Azn"));
                //Dizel odenusi
                if(odenilecek !=""){
                    if(odenilecek == odenis3 || odenilecek > odenis3){
                        yazdir = "Cek  N-1 "+yenisetr
                        + "Yanacaqin Novu Dizel " + yenisetr
                        + "Miqdar " + litr + " Litr " + yenisetr
                        + "Odenis " + odenis3 + " Azn " + yenisetr
                        + "Musderiya qaytarilacaq mebleg " + (odenilecek-odenis3)+" Azn " + yenisetr
                        + "Yaxsi yol !!!!!";
                        console.log(yazdir);
                    }else{
                        console.log("Sizin emeliyyat ugursuz oldu."+yenisetr+"Odemek istediyiniz mebleg azdir. " + yenisetr 
                        + (odenis3-odenilecek) +" Azn eksiyiniz var.");
                    }
                }else{
                    console.log("Deyerli Musderimiz  mebleg girmediniz ....");
                }
        }else{
            console.log("Siz hec birini secmediz bir daha tesekkurler.");
        }
}else{
    console.log("Siz hec bir yanacaqi secmediz");
}
