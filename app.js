let friends = ['Aakarshan', 'Michelle', 'Audrey', 'Brittany', 'Daniel'];

loop1:
    for (let i = 0; i < friends.length; i++) {
        loop2:
            for (let j = 0; j < 99; j++) {
                if (j == 98) {
                    console.log('1 line of code in the file, 1 line of code; ' + friends[i] + 
                    ' strikes one out, clears it all out, no more lines of code in the file')
                }
                else if (j == 97) {
                    console.log((99-j) + ' lines of code in the file, ' + (99-j) + ' lines of code; ' 
                    + friends[i] + ' strikes one out, clears it all out, ' + (98-j) + 
                    ' line of code in the file')
                }
                else {
                    console.log((99-j) + ' lines of code in the file, ' + (99-j) + ' lines of code; ' 
                    + friends[i] + ' strikes one out, clears it all out, ' + (98-j) + 
                    ' lines of code in the file')
                }
            };

};