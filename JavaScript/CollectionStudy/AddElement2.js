let carLicenses = {};

function addItem(key, value) {
    if (carLicenses[key]) {
        //do nothing;
    } else {
        carLicenses[key] = [];
    }
    carLicenses [key].push(value);
}

addItem('beijing', '京A');
addItem('qingdao', '鲁B');
addItem('qingdao', '鲁U');

console.log(carLicenses);
