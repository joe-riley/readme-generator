const fs = require('fs')

function generateLicense(licenseName, fullName, targetDirectory) {
  const currentYear = new Date().getFullYear();
  const licenseMap = {
    'Apache License 2.0': 'apache_l2-0.txt',
    'Boost Software License 1.0': 'boos_sl1_0.txt',
    'GNU AGPLv3': 'gnu_agplv3.txt',
    'GNU GPLv3': 'gnu_gplv3.txt',
    'GNU LGPLv3': 'gnu_lgplv3.txt',
    'MIT License': 'mit.txt',
    'Mozilla Public License 2.0': 'moz_plv2_0.txt',
    'Unlicense': 'unlicense.txt',
  }

  const licenseTemplate = fs.readFileSync(
      `./templates/licenses/${licenseMap[licenseName]}`
    )
    .toString();

  try {
    let license = licenseTemplate
      .replace('[fullname]', fullName)
      .replace('[year]', currentYear);

      fs.writeFile(
        `${targetDirectory}/${licenseMap[licenseName].split('.')[0].toUpperCase()}.LICENSE`
        , license
        , (err) => { 
          if (err) throw err;
        }
      );

  } catch (error) {
    console.log(error);
  }
}

module.exports = generateLicense;