javascript: function E() {
    f0 = document.forms['addPassengerForm'] || document.forms['jpBook'] || document.forms['jpform'];




    k = document.querySelector("div.updatesDiv > div.updatesDiv.ng-star-inserted > a > span");
    sCount = document.querySelectorAll("input[formcontrolname*='passengerName']").length;
    mCount = 1;
    while (mCount > sCount) {
        k.click();
        mCount--;
    }
    var a, b, c, d;
    a = document.querySelectorAll("input[placeholder*='Name']"), b = document.querySelectorAll("input[placeholder*='Age']"), c = document.querySelectorAll("select[formcontrolname*='passengerGender']"), d = document.querySelectorAll("select[formcontrolname*='passengerBerthChoice']"), d1 = document.querySelectorAll("select[formcontrolname*='passengerFoodChoice']");
    a[0] && (a[0].value = 'Shivam Pandey', a[0].dispatchEvent(new Event('input')));
    b[0] && (b[0].value = '22', b[0].dispatchEvent(new Event('input')));
    c[0] && (c[0].value = 'M', c[0].dispatchEvent(new Event('change')));
    d[0] && (d[0].value = 'UB', d[0].dispatchEvent(new Event('change')));
    mobileNumber = document.getElementById("mobileNumber"), mobileNumber && (mobileNumber.value = "8604949532", mobileNumber.dispatchEvent(new Event("change")));
    autoUpgradation = document.getElementById("autoUpgradation"), autoUpgradation && (autoUpgradation.checked = true, autoUpgradation.removeAttribute("disabled"));
    reservationChoice = document.querySelectorAll("[name='reservationChoice']");
    if (reservationChoice)
        for (i = 0; i < reservationChoice.length; i++) {
            if (D(reservationChoice[i].value, '99')) {
                reservationChoice[i].checked = true;
            }
        }

    function D(n, t) {
        for (c = t.split('|'), d = !1, q = 0; q < c.length; q++) c[q] == n && (d = !0);
        return d
    }

}




E();

/*
for travel insuarrance
@contributed by shivam_pandey
*/

document.querySelectorAll("label[for='travelInsuranceOptedNo']")[0].click();

/*

for upi click
@contributed by shivam_pandey

*/
document.getElementById('2').click();
document.querySelectorAll("button[type='submit']")[1].click();


// For Review Check @contributed by shivam_pandey

document.getElementById('credit_117').click();
document.getElementsByClassName('btn_continue ng-star-inserted')[0].click();






// For paytm @contributed by shivam_pandey

document.getElementById('upi').value='8604949532@paytm';
document.querySelectorAll("button")[2].click();



// From

document.querySelectorAll("input[placeholder='From*']")[0].value="GHAZIPUR CITY - GCT";
document.querySelectorAll("input[placeholder='From*']")[0].dispatchEvent(new Event('keydown'));
document.querySelectorAll("input[placeholder='From*']")[0].dispatchEvent(new Event('input'));



// To
document.querySelectorAll("input[placeholder='To*']")[0].value="JALANDHAR CANT - JRC";
document.querySelectorAll("input[placeholder='To*']")[0].dispatchEvent(new Event('keydown'));
document.querySelectorAll("input[placeholder='To*']")[0].dispatchEvent(new Event('input'));



// date

document.querySelectorAll("input[placeholder='Journey Date(dd-mm-yyyy)*']")[0].value="03-04-2020";
document.querySelectorAll("input[placeholder='Journey Date(dd-mm-yyyy)*']")[0].dispatchEvent(new Event('keydown'));
document.querySelectorAll("input[placeholder='Journey Date(dd-mm-yyyy)*']")[0].dispatchEvent(new Event('input'));





// Find Train

document.querySelectorAll("button[type='submit']")[1].click();






