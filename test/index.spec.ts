import { checkShorthand, checkFullName } from "../src";

test("MIT works", () => {
    expect(checkShorthand("MIT")).toBeTruthy();
});

test("MIT from FullName works", () => {
    expect(checkFullName("MIT License")).toBeTruthy();
})

test("empty query fails", () => {
    expect(checkShorthand("")).toBeFalsy();
});