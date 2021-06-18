// export_03.js
const firstName = 'Michael';
let lastName = 'Jackson';
let year = 1958;

function get_fullName() {
    return `${firstName}·${lastName}`
}

export {
    firstName as fn, lastName as ln, year as y,get_fullName as g_fn
};