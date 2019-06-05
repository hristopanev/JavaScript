function tabletFilter(array, commandInput) {
    let headerRow = array[0];
    let command = commandInput.split(' ');

    switch (command[0]) {
        case 'hide':
            let indexHide = headerRow.indexOf(command[1]);
            for (let i = 0; i < array.length; i++) {
                array[i].splice(indexHide, 1, '');
                console.log(array[i].filter(Boolean).join(' | '));
            }
            break;

        case 'filter':
            let indexFilter = headerRow.indexOf(command[1]);
            let commandFilter = headerRow[indexFilter];
            let wantedElement = command[2];
            console.log(headerRow.join(' | '));

            for (let i = 1; i < array.length; i++) {
                if (array[i].includes(wantedElement)){
                    console.log(array[i].join(' | '));
                }
            }
            break;
        case 'sort':


            let indexSort = headerRow.indexOf(command[1]);
            let sortElement = headerRow[indexSort];
            console.log(headerRow.join(' | '));

            array.splice(1).sort((a,b) => a[indexSort].localeCompare(b[indexSort])).forEach((element) =>{
                console.log(element.join(' | '));
            });
            break;
    }

}

tabletFilter([['name', 'age', 'grade'],
        ['Peter', '25', '5.00'],
        ['George', '34', '6.00'],
        ['Marry', '28', '5.49']],
    'sort name'

);