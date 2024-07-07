// Initialize variables to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// Variable to hold setInterval() function
let interval;

// Function to increment the stopwatch timer
function stopwatch() {
    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    // Display updated time values
    document.getElementById('timer').innerHTML =
        (hours < 10 ? '0' + hours : hours) + ' : ' +
        (minutes < 10 ? '0' + minutes : minutes) + ' : ' +
        (seconds < 10 ? '0' + seconds : seconds);
}

// Function to start the stopwatch
function startStopwatch() {
    interval = setInterval(stopwatch, 1000); // Run the stopwatch function every second (1000 ms)
    document.getElementById('start').disabled = true; // Disable the start button once started
}

// Function to stop the stopwatch
function stopStopwatch() {
    clearInterval(interval); // Clear the interval to stop the stopwatch
    document.getElementById('start').disabled = false; // Enable the start button
}

// Function to reset the stopwatch
function resetStopwatch() {
    clearInterval(interval); // Clear the interval to stop the stopwatch
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerHTML = '00 : 00 : 00'; // Reset the display
    document.getElementById('start').disabled = false; // Enable the start button
}
