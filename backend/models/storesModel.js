var pool = require('./bd');

async function getStores() {

    var query = 'select * from sucursales';
    var rows = await pool.query(query);
    return rows;
}

async function insertStores(obj) {
    try {
        var query = "insert into sucursales set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { getStores, insertStores }