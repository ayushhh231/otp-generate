function generate(){
    // FOUR DIGIT OTP 
    
    // var e = Math.ceil(Math.random()*10000);
    // e = e < 1000 ? '0'+e : e;
    // e = e < 100 ? '00'+e : e;
    // e = e < 10 ? '000'+e : e;
    // document.getElementsByTagName("h2")[0].innerText = e;


    // FOR 6 DIGIT OTP
        var e = Math.ceil(Math.random()*1000000);
        e = e < 100000 ? '0'+e : e;
        e = e < 10000 ? '00'+e : e;
        e = e < 1000 ? '000'+e : e;
        e = e < 100 ? '0000'+e : e;
        e = e < 10 ? '00000'+e : e;
        
    document.getElementsByTagName("h2")[0].innerText = e;

    }
    