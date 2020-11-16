const fs = require('fs')

function generateCodeOfConduct(codeOfConduct) {

  if (codeOfConduct === 'Contributor Covenant') {
    const codeOfConductTemplate = fs.readFileSync(
        './templates/codesOfConduct/contributor_covenant_coc.txt'
      )
      .toString();

    try {
      fs.writeFile(
        `./output/CONTRIBUTOR_COVENANT.md`
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