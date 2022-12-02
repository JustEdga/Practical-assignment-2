console.clear()

// -- 1 --

const compare = ((a, b) => a <= b);

console.log('---- 1 ----');
console.log('2 <= 1', compare(2, 1));
console.log('1 <= 2', compare(1, 2));
console.log('1 <= 1', compare(1, 1));

// -- 2 --

let value = '';
for (let i = 1; i <= 10; ++i) {
    value += i + ', '
}
console.log('---- 2 ----');
console.log('Nuo 1-10:', value);

// -- 3 --

let value2 = '';
for (let i = 0; i <= 10; ++i) {
    value2 += i++ + ', '
}
console.log('---- 3 ----');
console.log('Skaiciai:', value2);

// -- 4 --

let rand = '';
for (let i = 0; i < 5; ++i) {
    rand += Math.floor(Math.random() * (10 - 1 + 1) + 1) + ', '
}
console.log('---- 4----');
console.log('Random numbers: ', rand);

// -- 5 --



// -- 6 --

let mLength = Math.floor(Math.random() * (30 - 20 + 1) + 20);
let m = [];
for (let i = 0; i < mLength; ++i) {
    m.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
}

console.log('---- 6 ----');
console.log('Masyvo ilgis', mLength);
console.log('Masyvas:', m);

// -- 7 --

let char = 'ABCD';
let abc = [];
let A = 0;
let B = 0;
let C = 0;
let D = 0;
for (let i = 0; i < 100; ++i) {
    abc.push(char.charAt(Math.random() * char.length))
    abc[i] === 'A' ? A++ : abc[i] === "B" ? B++ : abc[i] === "C" ? C++ : abc[i] === "D" ? D++ : null;
}

console.log('---- 7 ----');

console.log('A:', A, 'B:', B, 'C:', C, 'D:', D);
console.log(abc);

// -- 8 --

function lygineSuma(a, b) {
    if (typeof (a, b) === 'number') {
        if ((a + b) % 2 === 0) {
            const suma = a + b;
            return `Suma: ${suma}`;
        } else {
            return 'Suma nelygine';
        }
    } else if (Array.isArray(a, b) === true) {
        const mSuma = a.length + b.length;
        if (mSuma % 2 === 0) {
            return `Masyvu ilgiu suma: ${mSuma}`;
        } else {
            return 'Masyvu suma nelygine!'
        }
    } else {
        return 'Abu kintamieji turi buti skaicius arba masyvas'
    }
}


console.log('---- 8 ----');
console.log(lygineSuma(1, 1));
console.log(lygineSuma(1, 2));
console.log(lygineSuma([1], [1]));
console.log(lygineSuma([1], [1, 2]));


// -- 9 --

let Pirminis = true;

function pirminisSkaicius(a) {
    if (typeof (a) != 'number') {
        return 'Kintamasis turi buti skaicius'
    }
    if (a === 1) {
        return 'Nera pirminis';
    } else if (a > 1) {
        for (let i = 2; i < (a); ++i) {
            if (a % i == 0) {
                Pirminis = false;
                break;
            }
        }
        if (Pirminis) {
            return `${a} yra pirminis!`;
        } else {
            return `${a} nera pirminis!`;
        }
    } else {
        return `${a} nera pirminis!`;
    }
}

console.log('---- 9 ----');

console.log('PirminisSkaicius:', pirminisSkaicius(11));
console.log('PirminisSkaicius:', pirminisSkaicius(1));
console.log('PirminisSkaicius:', pirminisSkaicius(2));
console.log('PirminisSkaicius:', pirminisSkaicius('2'));
console.log('PirminisSkaicius:', pirminisSkaicius(null));
console.log('PirminisSkaicius:', pirminisSkaicius(undefined));
console.log('PirminisSkaicius:', pirminisSkaicius([1]));


// -- 10 -- 

function telefonoNumeris(a) {
    if (Array.isArray(a) === true) {

    } else {
        console.log('---- 10 ----');
        return 'Kintamasis nera masyvas!'
    }
}


