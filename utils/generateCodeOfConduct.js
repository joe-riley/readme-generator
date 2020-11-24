const fs = require('fs')

function generateCodeOfConduct(codeOfConduct, targetDirectory) {

  if (codeOfConduct === 'Contributor Covenant') {
    const codeOfConductTemplate = fs.readFileSync(
        './templates/codesOfConduct/contributor_covenant_coc.txt'
      )
      .toString();

    try {
      fs.writeFile(
        `${targetDirectory}/CONTRIBUTOR_COVENANT.md`
        , codeOfConductTemplate
        , (err) => { 
          if (err) throw err;
        }
      );

    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = generateCodeOfConduct;