// Task:
// Write a function getEmployeeSalary(employeeName) that accepts the employee's name as an argument.
// The function should:
// ● That accepts Employee Name as argument.
// ● Return the total salary (basic + bonus) of the employee.
// ● If the bonus is missing, consider it as 0.
// ● If salary details are missing, return: "Salary details not available for [employeeName]"
// ● If employee does not exist in the array, return: "Employee [employeeName] not found"


// const employees = [
// { name: 'John', salary: { basic: 20000, bonus: 5000 } },
// { name: 'Alice', salary: { basic: 25000 } }, // No bonus field
// { name: 'Bob' }, // No salary field
// { name: 'Carol', salary: { basic: 30000, bonus: 10000 } }
// ];

// function getEmployeeSalary(employeeName){

//     let empname=employees.find(emp=>emp.name===employeeName);
    
//         if(!empname){
//             return `Employee ${employeeName} not found `;
//         }

//         else if(!empname.salary){
//             return `Salary details not available for ${employeeName}`;
//         }

//         let basic=empname.salary.basic || 0;
//         let bonus=empname.salary.bonus || 0;
//         return basic + bonus;   
// }
// console.log(getEmployeeSalary('Bob'));


// Task:
// Write a function to:
// ● Return a new array of strings in the format: "<Product Name>: <Category1>, <Category2>".
// ● If categories array is empty, return: "<Product Name>: No Categories".



// function display() {
//   const products = [
//     { name: 'Pen', categories: ['stationery', 'writing'] },
//     { name: 'Laptop', categories: ['electronics', 'computers'] },
//     { name: 'Chair', categories: [] },
//     { name: 'Water Bottle', categories: ['kitchen', 'storage'] }
//   ];

//   return products.map(({ name, categories }) => {
//     return `${name}: ${categories.length > 0 ? categories.join(', ') : 'No categories'}`;
//   });
// }

// console.log(display());

// You are given an array of customer orders. Some orders may:
// ● Have empty item lists.
// ● Contain items with missing prices (assume price as ₹0 if missing).
// ● Contain items with missing quantities (assume quantity as 1 if missing).

function getHighValueOrders() {
    const orders = [
        { id: 1, items: [{ name: 'Pen', price: 10, quantity: 2 }, { name: 'Notebook', price: 50 }] },
        { id: 2, items: [{ name: 'Bag', price: 700, quantity: 1 }, { name: 'Bottle', price: 300, quantity: 2 }] },
        { id: 3, items: [{ name: 'Chair', price: 1500 }] },
        { id: 4, items: [] },
        { id: 5, items: [{ name: 'Lamp', quantity: 3 }] }
    ];

    return orders
        .filter(order => {
            let total = 0;

            for (let item of order.items || []) {
                const price = item.price || 0;
                const qty = item.quantity || 1;
                total += price * qty;
            }

            return total > 1000;
        })
        .map(order => order.id);
}
console.log(getHighValueOrders());



