var carName = ['BMW', 'Ferrari', 'Honda', 'Mercedes', 'Nissan', 'Nissan', 'Fiat', 'Mitsubishi', 'Tesla'];

document.write('<h1>List of Car Name</h1>');

for(var i = 0; i < carName.length; i++){
    document.write(i + ' ' + carName[i] + '<br>');
}

document.write('<h1>Select Your Date Of Birth</h1>');


    

// function showDateOfBirth(){
    var select = document.getElementById('day');

    for(var i = 1; i <= 31; i++){
        var option = document.createElement('option');
        var optionText = document.createTextNode(i);

        option.appendChild(optionText);
        select.appendChild(option);

        document.write(option);
    }
// }

