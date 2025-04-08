const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
  const { GPHeaders } = this.entities;

  // Custom handler for PUT
  this.on('UPDATE', 'GPHeaders', async (req) => {
    const { RGP_DOC_NUM } = req.data;

    // Check if the book exists
    const gpheaders = await SELECT.one.from(GPHeaders).where({ RGP_DOC_NUM });
    if (!gpheader) {
      req.error(404, `GP HEader with RGP_DOC_NUM ${RGP_DOC_NUM} not found`);
    }

    // Perform the update
    return UPDATE(GPHeaders).set(req.data).where({ RGP_DOC_NUM });
  });
});
