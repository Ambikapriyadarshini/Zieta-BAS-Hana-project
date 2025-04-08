const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
    this.before('CREATE', 'GPHeaders4', async (req) => {
        req.data.ID = cds.utils.uuid(); // Explicitly generate UUID
    });
});