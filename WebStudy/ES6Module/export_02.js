// export_02.js
const firstName = 'Michael';
let lastName = 'Jackson';
let year = 1958;

function get_fullName() {
    return `${firstName}·${lastName}`
}

export {
    firstName, lastName, year, get_fullName
};