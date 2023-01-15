window.addEventListener('DOMContentLoaded', function () {

    let friends = ['Aakarshan', 'Michelle', 'Audrey', 'Brittany', 'Daniel'];

    let button = document.createElement('button');
    button.className = ('button');
    button.textContent = 'Sing!';
    document.body.appendChild(button);

    button.addEventListener('click', function () {

        for (let i = 0; i < friends.length; i++) {

            let friend = document.createElement('div');
            friend.className = ('friend');

            let friendHeader = document.createElement('h3');
            friendHeader.textContent = friends[i];
            friend.appendChild(friendHeader);
            document.body.appendChild(friend);

            for (let j = 0; j < 99; j++) {

                if (j == 98) {

                    let lastLine = document.createElement('p');

                    lastLine.textContent = '1 line of code in the file, 1 line of code; ' + friends[i] +
                        ' strikes one out, clears it all out, no more lines of code in the file';
                    friend.appendChild(lastLine);

                }

                else if (j == 97) {

                    let penultimateLine = document.createElement('p');

                    penultimateLine.textContent = (99 - j) + ' lines of code in the file, ' + (99 - j) + ' lines of code; '
                        + friends[i] + ' strikes one out, clears it all out, ' + (98 - j) +
                        ' line of code in the file';

                    friend.appendChild(penultimateLine);

                }

                else {

                    let line = document.createElement('p');

                    line.textContent = (99 - j) + ' lines of code in the file, ' + (99 - j) + ' lines of code; '
                        + friends[i] + ' strikes one out, clears it all out, ' + (98 - j) +
                        ' lines of code in the file';

                    friend.appendChild(line);

                };
            };
        };
    })
})