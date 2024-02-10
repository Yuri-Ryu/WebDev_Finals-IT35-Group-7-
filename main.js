function toggleCheckboxes(yesSelected) {
    var additionalOptions = document.getElementById('additionalOptions');
    var hiddenCheckboxes = additionalOptions.querySelectorAll('input[type="checkbox"]');
    var hiddenText = additionalOptions.querySelectorAll('input[type="text"]');

    if (yesSelected) {
        additionalOptions.classList.remove('hidden');
    } else {
        additionalOptions.classList.add('hidden');
        
        // Reset the checkboxes in the hidden options
        hiddenCheckboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });

        hiddenText.forEach(function (text) {
            text.value = '';
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var yesRadioButton = document.getElementById('yes');
    var noRadioButton = document.getElementById('no');


    yesRadioButton.addEventListener('change', function () {
        toggleCheckboxes(true);
        
    });

    noRadioButton.addEventListener('change', function () {
        toggleCheckboxes(false);
    });
});

function validateForm() {
    let x = document.forms["dataform"] ["Last Name"]
    if (x == "") {
        alert ("Last Name is required")
        return false
    }
}

function validateForm() {
    let x = document.forms["dataform"] ["First Name"]
    if (x == "") {
        alert ("First Name is required")
        return false
    }
}