import {formData} from './forms';

const form = document.querySelector('form')!;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = formData(form)

    console.log(data);
});

const person: any = {}
const message: string = 'Hello World';
console.log(message, 'from TypeScript');
console.log(person.speak());