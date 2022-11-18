// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. // wrap all code in a call to jQuery as in using the $()??***



$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    let currentHour = dayjs().format('h');
    console.log('this is the current hour:')
    console.log(currentHour);
    console.log(typeof currentHour); // OHH IT'S A STRINGG, NOT NUMBER

    let timeBlockArray = [
        $('#hour-9'), 
        $('#hour-10'),
        $('#hour-11'), 
        $('#hour-12'), 
        $('#hour-1'), 
        $('#hour-2'), 
        $('#hour-3'), 
        $('#hour-4'),
        $('#hour-5'),
        $('#hour-6'),
        $('#hour-7')
    ]
    
    let sixPMNumber = parseInt(timeBlockArray[9].children().eq(0).text());
    let fivePMNumber = parseInt(timeBlockArray[8].children().eq(0).text());
    let sevenPMNumber = parseInt(timeBlockArray[10].children().eq(0).text());
    console.log('this is the time number of time block 6PM:')
    console.log(sixPMNumber);
    console.log('is it 6 PM right now?')
    console.log(sixPMNumber == currentHour); // should return true
    console.log(fivePMNumber < currentHour); // should return true
    console.log(sevenPMNumber > currentHour); // should return true

    for (let i = 0; i < timeBlockArray.length; i++) {
        let timeText = timeBlockArray[i].children().eq(0).text();
        let timeNumber = parseInt(timeText);
        console.log('logging each time block number:');
        console.log(timeNumber);

        let coloredBlock = timeBlockArray[i].children().eq(1)

        if (timeNumber == currentHour) {
            coloredBlock.addClass('present');
        }

        // if (timeNumber < currentHour) {
        //     coloredBlock.addClass('past'); // problematic.. bc what if it's 1 PM, then computer would treat 12PM as future
        // }

        // if (timeNumber > currentHour) {
        //     coloredBlock.addClass('future'); // problematic too
        // }
    }

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //

    // TODO: Add code to display the current date in the header of the page.
    let currentDay = dayjs().format('dddd, MMMM D, YYYY');
    $('#currentDay').text(currentDay);
  });