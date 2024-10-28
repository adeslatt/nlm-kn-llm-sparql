const { Database } = require('arangojs');

// Connect to ArangoDB instance
const db = new Database({ url: 'http://44.220.217.88:8529' });
db.useDatabase('BioPortal-Full');
db.useBasicAuth('root', ' ');

// Function to fetch documents
async function fetchDocuments() {
  try {
    const cursor = await db.query('FOR doc IN NCBITaxon LIMIT 5 RETURN doc');
    const result = await cursor.all();
    console.log(result);
  } catch (error) {
    console.error('Error fetching documents:', error);
  }
}

// Execute function
fetchDocuments();
