let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function getSalaryRecursion(department) {
    let result = 0;     

    if (Array.isArray(department)) {
        for (let worker of department) {
            result += worker.salary;
        }
    } else {        
        for (let position of Object.values(department)) {
            result += getSalaryRecursion(position);
        }
    }
    return result;
}


console.log(getSalaryRecursion(company));