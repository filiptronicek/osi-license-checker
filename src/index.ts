import fs from 'fs';

const licenseData: License[] = JSON.parse(fs.readFileSync('./src/resources/licenses.json', 'utf8'));

export const checkShorthand = (askedFor: string) => {
    if (askedFor === "") return false;
    const queriedLicense = licenseData.find((license) => askedFor === license.id);
    return !!queriedLicense;
}

export const checkFullName = (askedFor: string) => {
    const queriedLicense = licenseData.find((license) => askedFor === license.name);
    return !!queriedLicense;
}
