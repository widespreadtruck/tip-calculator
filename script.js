const formatValue = (value) => {
    //use Math.ceil?
    value = value.toFixed(2);
    return `$${value}`;
};

const formatSplit = (value) => {
    if (value === 1) {
        return `${value} person`;
    } else {
        return `${value} people`;
    }
};

const update = () => {
    let bill = Number(document.getElementById("yourBill").value);
    let tipPercent = document.getElementById("tipInput").value;
    let split = Number(document.getElementById("splitInput").value);
    
    let tipValue = bill * (tipPercent/100);
    let tipEach = tipValue / split;
    let newBillEach = (bill + tipValue) / split;

    document.getElementById("tipPercent").innerHTML = `${tipValue.toFixed(2)}%`;

    document.getElementById("tipValue").innerHTML = formatValue(tipValue);

    document.getElementById("totalWithTip").innerHTML = formatValue(bill + tipValue);

    document.getElementById("splitValue").innerHTML = formatSplit(split);

    document.getElementById("billEach").innerHTML = formatValue(newBillEach);

    document.getElementById("tipEach").innerHTML = formatValue(tipEach);
    
    // console.log({bill, tipPercent, split});
    console.log({ split });
};

let container = document.getElementById("container");
container.addEventListener("input", update);