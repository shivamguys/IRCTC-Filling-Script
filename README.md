# IRCTC-Filling-Script


![(https://j.gifs.com/gZPMr3.gif)]

Add multiple bookmarks to ease your flow with specific clicks

# To Add multiple passenger list just add new array element
  # To click add passenger
    

  # change travelling_passenger as per your need
    travelling_passenger = 2;
    while (travelling_passenger > 1) {
        document.getElementsByClassName('prenext')[1].click()
        // This will create new array values for more passenger example a[1] will exist now
        travelling_passenger--;
    }
    var a, b, c, d;
    a = document.querySelectorAll("input[placeholder*='Name']"), b = document.querySelectorAll("input[placeholder*='Age']"), c = document.querySelectorAll("select[formcontrolname*='passengerGender']"), d = document.querySelectorAll("select[formcontrolname*='passengerBerthChoice']"), d1 = document.querySelectorAll("select[formcontrolname*='passengerFoodChoice']");
    a[0] && (a[0].value = 'Shivam Pandey', a[0].dispatchEvent(new Event('input')));
    b[0] && (b[0].value = '22', b[0].dispatchEvent(new Event('input')));
    c[0] && (c[0].value = 'M', c[0].dispatchEvent(new Event('change')));
  # Eligible values
  # LB (Lower Birth)
  # MB (Middle Birth)
  # UB (Upper Birth)
  # SL (Side Lower)
  # SU (Side Upper)
    d[0] && (d[0].value = 'UB', d[0].dispatchEvent(new Event('change')));


    a[1] && (a[1].value = 'Rahul Pandey', a[1].dispatchEvent(new Event('input')));
    b[1] && (b[1].value = '22', b[1].dispatchEvent(new Event('input')));
    c[1] && (c[1].value = 'M', c[1].dispatchEvent(new Event('change')));
    d[1] && (d[1].value = 'SL', d[1].dispatchEvent(new Event('change')));
    


        
# Example to make payment through upi add this as bookmark value
    javascript:
     document.getElementById('2').click();document.querySelectorAll("button[type='submit']")[1].click();


# For Review Check @contributed by shivam_pandey

    document.getElementById('credit_117').click();
    document.getElementsByClassName('btn_continue ng-star-inserted')[0].click();



    
  
# For final paytm booking @contributed by shivam_pandey
    
    javascript:
    document.getElementById('upi').value='8604949532@paytm';
    document.querySelectorAll("button")[2].click();




# From

    document.querySelectorAll("input[placeholder='From*']")[0].value="GHAZIPUR CITY - GCT";
    document.querySelectorAll("input[placeholder='From*']")[0].dispatchEvent(new Event('keydown'));
    document.querySelectorAll("input[placeholder='From*']")[0].dispatchEvent(new Event('input'));



# To
    document.querySelectorAll("input[placeholder='To*']")[0].value="JALANDHAR CANT - JRC";
    document.querySelectorAll("input[placeholder='To*']")[0].dispatchEvent(new Event('keydown'));
    document.querySelectorAll("input[placeholder='To*']")[0].dispatchEvent(new Event('input'));



# date

    document.querySelectorAll("input[placeholder='Journey Date(dd-mm-yyyy)*']")[0].value="03-04-2020";
    document.querySelectorAll("input[placeholder='Journey Date(dd-mm-yyyy)*']")[0].dispatchEvent(new Event('keydown'));
    document.querySelectorAll("input[placeholder='Journey Date(dd-mm-yyyy)*']")[0].dispatchEvent(new Event('input'));





# Find Train

    document.querySelectorAll("button[type='submit']")[1].click();





   
