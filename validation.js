function calculateMarriageDate() {
    // Fetch input values
    const yourName = document.getElementById('yourName').value;
    const partnerName = document.getElementById('partnerName').value;
    const yourDOB = document.getElementById('yourDOB').value;
    const relationshipTime = document.getElementById('relationshipTime').value;

    if (yourName === "" || partnerName === "" || yourDOB === "" || relationshipTime === "") {
        alert("Please enter all details.");
        return; // Exit the function early if any input is missing
    }

    // Check if the user's name or partner's name is "Shubham" or "Amar"
    if (yourName.toLowerCase() === "shubham" || yourName.toLowerCase() === "shubham verma" || partnerName.toLowerCase() === "shubham" || partnerName.toLowerCase() === "shubham verma" || yourName.toLowerCase() === "amar" || yourName.toLowerCase() === "amar verma" || partnerName.toLowerCase() === "amar" || partnerName.toLowerCase() === "amar verma") {
        // If the names match "Shubham" or "Amar", show different results
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `Sorry, ${yourName} and ${partnerName}, No Data <br> If you are interested in my owner Amar verma so you can directly contact.  .`;
    } else {
        // Continue with the original logic for other names

        // Check if the user's year of birth is less than 1999
        const yourYearOfBirth = parseInt(yourDOB.split("-")[0]); // Assuming yourDOB is in YYYY-MM-DD format

        if (yourYearOfBirth < 1999) {
            // If the year of birth is less than 1999, show different results
            const resultElement = document.getElementById('result');
            resultElement.innerHTML = `Congratulations, ${yourName} and ${partnerName}! Your are Already marriaged with  ${partnerName} .`;
        } else {
            // If the year of birth is 1999 or later, continue with the original random date calculation
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const randomMonth = months[Math.floor(Math.random() * months.length)];
            const randomDay = Math.floor(Math.random() * 30) + 1;
            const randomYear = Math.floor(Math.random() * 10) + 2027;

            // Display the result
            const resultElement = document.getElementById('result');
            resultElement.innerHTML = `Congratulations, ${yourName} and ${partnerName}! Your marriage date is ${randomMonth} ${randomDay}, ${randomYear} ,If you are Unmarriged please invite me as Your Groom.`;
        }
    }
}