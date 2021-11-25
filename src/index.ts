const fs = require('fs');

const licenseData: License[] = JSON.parse(fs.readFileSync('./src/resources/licenses.json', 'utf8'));

export const checkLicense = (askedFor: string) => {
    const queriedLicense = licenseData.find((lic) => askedFor === lic.id)
    return queriedLicense;
}

console.log(checkLicense("MIT"))