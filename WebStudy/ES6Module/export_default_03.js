// export_default_03.js
const firstName = 'Michael';
let lastName = 'Jackson';
let year = 1958;

function get_fullName() {
    return `${firstName}·${lastName}`
}

export default {
    fn: firstName, ln: lastName, year, gfn: get_fullName
};