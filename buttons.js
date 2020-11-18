//  Írj egy függvény kifejezést arrow function segítségével. 
// A függvény neve handleClick legyen 
// A függvény a meghívása után mindegyik gombhoz hozzáad egy eseményfigyelőt, 
// amely kattintásra kiírja a gomb szövegét a konzolra. 
// A függvényen belül ciklust használj, 
// tehát ne manuálisan egyesével add a gombokhoz az eseményfigyelőt!

'use strict';

const handleClick = () => {
    const buttons = document.getElementsByClassName('button');
    for (let i = 0; i < buttons.length; i += 1) {
        buttons[i].addEventListener('click', () => console.log(buttons[i].innerHTML));
    }
};

handleClick();