let prompt = require('prompt-sync')();
const basicSalary = parseInt(prompt("input your basic salary: "))
const benefit = parseInt(prompt("input your benefit: "))
function calculateSalary() {
    let grossSalary = basicSalary + benefit;
    let nssf = grossSalary * 0.06;
    let taxableIncome = grossSalary - nssf;

    let paye = 0;
    if (taxableIncome < 24000) {
        paye = taxableIncome * 0.01;
    } else if (taxableIncome > 24000 && taxableIncome < 32333) {
        paye = taxableIncome * 0.25;
    } else if (taxableIncome > 32334 && taxableIncome < 500000) {
        paye = taxableIncome * 0.3;
    } else if (taxableIncome > 500001 && taxableIncome < 800000) {
        paye = taxableIncome * 0.325;
    } else if (taxableIncome > 800000) {
        paye = taxableIncome * 0.35;
    } else {
        console.log("u got too much money men!!")
    }

    let nhifDeduction = 0;
    if (grossSalary < 5999) {
        nhifDeduction = 150;
    } else if (grossSalary > 6000 && grossSalary < 7999) {
        nhifDeduction = 300;
    } else if (grossSalary > 8000 && grossSalary < 11999) {
        nhifDeduction = 400;
    } else if (grossSalary > 12000 && grossSalary < 14999) {
        nhifDeduction = 500;
    } else if (grossSalary > 15000 && grossSalary < 19999) {
        nhifDeduction = 600;
    } else if (grossSalary > 20000 && grossSalary < 24999) {
        nhifDeduction = 700;
    } else if (grossSalary > 25000 && grossSalary < 29999) {
        nhifDeduction = 800;
    } else if (grossSalary > 30000 && grossSalary < 34999) {
        nhifDeduction = 900;
    } else if (grossSalary > 35000 && grossSalary < 39999) {
        nhifDeduction = 950;
    } else {
        nhifDeduction = 1000;
    }

    const nssfDeductions = grossSalary * 0.06


    const netSalary = grossSalary - paye - nhifDeduction - nssfDeductions

    console.log(`this is PAYE total calculation: ${Math.floor(paye)}`)
    console.log(`this is NHIF deduction total calculation: ${Math.floor(nhifDeduction)}`)
    console.log(`this is NSSF deduction total calculation: ${Math.floor(nssfDeductions)}`)
    console.log(`this is gross salary total calculation: ${Math.floor(grossSalary)}`)
    console.log(`this is net salary total calculation: ${Math.floor(netSalary)}`)

}
calculateSalary();