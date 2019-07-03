class Organization {
    constructor(name, budget){
        this.name = name;
        this.budget = budget;
        this.employees  = [];

        this.department = {
            marketing: parseInt(budget * 0.4),
            finance: parseInt(budget * 0.25),
            production: parseInt(budget * 0.35)
        }
    }

    add(employeeName, department , salary){

        let employee = {};

        if (this.department[department] >= salary) {
            this.department[department] -= salary;
            employee = {
                name: employeeName,
                department: department,
                salary: salary,
            };

            this.employees.push(employee);
            return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`
        }else {
            return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is ${this.department[department]}.`
        }

    }

    employeeExists(employeeName){

        for (const employee of this.employees) {

            if (employee.name === employeeName) {
                return `Mr./Mrs. ${employeeName} is part of the ${employee.department} department.`
            }else {
                return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`
            }
        }
    }

    leaveOrganization(employeeName){

        for (let employee of this.employees) {

            if (employee.name === employeeName) {
                this.department[employee.department] += employee.salary;
                let index = this.employees.indexOf(employeeName);
                this.employees.splice(index, 1);

                return `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`;
            }else {
                return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`
            }
        }
    }

    status(){
        let result = `${organization.name.toUpperCase()} DEPARTMENTS: `;
        let countEmployee = 0;
        let countSalary = 0;
        let empl = [];


        let marketing = this.employees.filter((test) => test.department === 'marketing');
        if (marketing.length > 0) {
            for (let employee of marketing){
                countEmployee ++;
                countSalary += employee.salary;
                empl.push(employee.name);
                empl.sort((a,b) => b.salary - a.salary);
            }

            result += `\nMarketing | Employees: ${countEmployee}: ${empl.join(', ')} | Remaining Budget: ${this.department.marketing - countSalary}`;
            countEmployee = 0;
            countSalary = 0;
            empl = [];
        }

        let finance = this.employees.filter((test) => test.department === 'finance');
        if (finance.length > 0) {
            for (let employee of finance){
                countEmployee++;
                countSalary += employee.salary;
                empl.push(employee.name);
                empl.sort((a,b) => b.salary - a.salary);
            }


            result += `\nFinance  | Employees: ${countEmployee}: ${empl.join(', ')} | Remaining Budget: ${this.department.finance - countSalary}`;
            countEmployee = 0;
            countSalary = 0;
            empl = [];
        }

        let production = this.employees.filter((test) => test.department === 'production');
        if (production.length > 0) {
            for (let employee of production){
                countEmployee++;
                countSalary += employee.salary;
                empl.push(employee.name);
                empl.sort((a,b) => b.salary - a.salary);
            }

            result += `\nProduction   | Employees: ${countEmployee}: ${empl.join(', ')} | Remaining Budget: ${this.department.production - countSalary}`;

        }

        return result;
    }
}
// let organization = new Organization('SBTech', 1000000);
//
// organization.add('Gosh', 'marketing', 800);
// console.log(organization.add('Robert', 'production', 2000));
// console.log(organization.add('Peter', 'finance', 2000));
// console.log(organization.add('Peter', 'production', 2000));
// console.log(organization.status());
