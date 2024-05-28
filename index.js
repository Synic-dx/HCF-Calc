function hcfCalc(num1, num2) {
    let hcfValue = 1;

    function getSmallerNum(num1, num2) {
        return num1 < num2 ? num1 : num2;
    }

    for (let i = 1; i <= getSmallerNum(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            hcfValue = i;
        }
    }

    return hcfValue;
}

module.exports = hcfCalc;
