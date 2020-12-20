//=============================================================================\\
//                                  Today.JS                                    \\
//                              made by nullcheats                               \\
//================================================================================\\

/*
This will simply give us the "Date" "Month" "Year";
We then split this by the "/" to be able to get individual parts
*/
let today = new Date().toLocaleDateString().split("/");
const date = today[0];
const month = today[1];
const year = today[2];

/*
As the month returns a numberic value such as 12 being decemeber
We make an array containing all possible months and cross check it
For example if month = 4 then it will get the 4th value 'May'
*/
const Return_Month = () => {
    var month_text = new Array(12);
    month_text[0] = "January";
    month_text[1] = "February";
    month_text[2] = "March";
    month_text[3] = "April";
    month_text[4] = "May";
    month_text[5] = "June";
    month_text[6] = "June";
    month_text[7] = "July";
    month_text[8] = "August";
    month_text[9] = "September";
    month_text[10] = "October";
    month_text[11] = "November";
    month_text[12] = "December";
    return month_text[month];
}

/*
This is a simple function that returns the day from the "get.day"
just like the month we use the number it gives us to cross check the array
*/
const return_Weekday = () => {
    let day_info = new Date().getDay();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    return weekday[day_info];
}

/*
This will simply take the date and add the suffix for the date
For example instead of Novemember 3 it will now add "Rd" as a suffix
*/
const AppendDate = () => {
    switch (date) {
        case 1:
            return date + "st";
            break;
        case 2:
            return date + "nd";
            break;
        case 3:
            return date + "rd";
            break;
        case 21:
            return date + "st";
            break;
        case 22:
            return date + "nd";
            break;
        case 23:
            return date + "3rd";
            break;
        case 31:
            return date + "st";
            break;
        default:
            return date + "th";
            break;
    }
}

/*
This function is called via the Onload events
This is where the values will be displayed to the user
*/
let LoadInfo = () => {
    document.getElementById('Date_header').innerHTML = Return_Month();
    document.getElementById('day').innerHTML = AppendDate();
    document.getElementById('day_text').innerHTML = return_Weekday();
}
