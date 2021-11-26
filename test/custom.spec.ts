import { checkShorthand, checkFullName } from "../src";

const customLicenses = [{ name: "Public Domain License", id: "PUBLIC" }];

test("Without any custom licenses, public domain returns false", () => {
    expect(checkShorthand("PUBLIC")).toBeFalsy();
});

test("Custom public domain works [shorthand]", () => {
    expect(checkShorthand("PUBLIC", customLicenses)).toBeTruthy();
});

test("Custom public domain works [fullName]", () => {
    expect(checkFullName("Public Domain License", customLicenses)).toBeTruthy();
});
