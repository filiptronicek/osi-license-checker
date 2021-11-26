import fs from 'fs';

const licenseData: License[] = JSON.parse(fs.readFileSync(`${__dirname}/../src/resources/licenses.json`, 'utf8'));

/**
 * Checks whether the provided license is an OSI-approved SPDX License Identifier
 * @param askedFor the license string to query
 * @param additionalLicenses an array of licenses to check
 *  in addition to the standard list found in 
 *  https://github.com/filiptronicek/osi-license-checker/blob/main/src/resources/licenses.json
 * 
 * @example checkShorthand("MIT")
 * //=>true
 * @example checkShorthand("MIT License")
 * //=>false
 *  
 */
export const checkShorthand = (askedFor: string, additionalLicenses: License[] = []) => {
    if (askedFor === "") return false;
    const combinedLicenses = [...licenseData, ...additionalLicenses];
    const queriedLicense = combinedLicenses.find((license) => askedFor === license.id);
    return queriedLicense !== undefined;
}

/**
 * Checks whether the provided license is an OSI-approved License name
 * @param askedFor the license string to query
 * @param additionalLicenses an array of licenses to check
 *  in addition to the standard list found in 
 *  https://github.com/filiptronicek/osi-license-checker/blob/main/src/resources/licenses.json
 * 
 * @example checkFullName("MIT")
 * //=>false
 * 
 * @example checkFullName("MIT License")
 * //=>true
 * 
 */
export const checkFullName = (askedFor: string, additionalLicenses: License[] = []) => {
    const combinedLicenses = [...licenseData, ...additionalLicenses];
    const queriedLicense = combinedLicenses.find((license) => askedFor === license.name);
    return queriedLicense !== undefined;
}
