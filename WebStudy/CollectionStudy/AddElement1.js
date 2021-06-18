
let carLicenses = {};

function addItem(key ,value){
    carLicenses  = Object.assign({}, carLicenses , {
        [key]: carLicenses [key] || []
    });
    carLicenses [key].push(value);
}

addItem('beijing','京A');
addItem('qingdao','鲁B');
addItem('qingdao','鲁U');

console.log(carLicenses);
