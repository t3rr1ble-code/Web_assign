class Person {
    constructor(id, name, age, gpa) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
};

let persons = [];
let idCounter = 1; // Đồng bộ với script đầu tiên

const updateAgeLabel = () => {
    const age = document.getElementById('age').value;
    document.getElementById('ageLabel').innerText = age;
};

const createPerson = () => {
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value;
    const gpa = document.getElementById('gpa').value.trim();

    if (!name || !gpa) {
        alert('Vui lòng nhập đầy đủ tên và gpa!');
        return;
    }

    const person = new Person(idCounter++, name, age, parseFloat(gpa));
    persons.push(person);

    const personList = document.getElementById('personList');
    const button = document.createElement('button');

    button.className = "btn btn-outline-primary btn-sm m-1";
    button.innerText = person.name;
    button.onclick = () => showPersonDetails(person);
    personList.appendChild(button);

    resetForm();
}

const resetForm = () => {
    document.getElementById('name').value = '';
    document.getElementById('age').value = 25;
    document.getElementById('ageLabel').innerText = 25;
    document.getElementById('gpa').value = '';
}

const showPersonDetails = (person) => {
    const personDetails = document.getElementById('personDetails');
    personDetails.innerHTML = `
        <table class="table table-bordered">
            <tr><th>ID</th><td>${person.id}</td></tr>
            <tr><th>Tên</th><td>${person.name}</td></tr>
            <tr><th>Tuổi</th><td>${person.age}</td></tr>
            <tr><th>GPA</th><td>${person.gpa}</td></tr>
        </table>
    `;
}
