const { Database } = require('arangojs');

// Connect to ArangoDB instance
const db = new Database({ url: 'http://44.220.217.88:8529' });
db.useDatabase('BioPortal-Full');
db.useBasicAuth('root', ' ');

async function fetchDocuments() {
  const cursor = await db.query('FOR doc IN BioPortal-Full RETURN doc');
  console.log(await cursor.all());
}

fetchDocuments();
