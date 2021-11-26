import fs from 'fs';

const licenseData: License[] = JSON.parse(fs.readFileSync(`${__dirname}/../src/resources/licenses.json`, 'utf8'));

export const checkShorthand = (askedFor: string, additionalLicenses: License[] = []) => {
    if (askedFor === "") return false;
    const combinedLicenses = [...licenseData, ...additionalLicenses];
    const queriedLicense = combinedLicenses.find((license) => askedFor === license.id);
    return !!queriedLicense;
}

export const checkFullName = (askedFor: string, additionalLicenses: License[] = []) => {
    const combinedLicenses = [...licenseData, ...additionalLicenses];
    const queriedLicense = combinedLicenses.find((license) => askedFor === license.name);
    return !!queriedLicense;
}
