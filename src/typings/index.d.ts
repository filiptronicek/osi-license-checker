interface License {
    /**
     * The full name of the license
     * @example MIT License
     * @example Apache License 2.0
     */
    name: string;
    /**
     * The SPDX License Identifier
     * @example MIT
     * @example Apache-2.0
     */
    id?: string;
    moreInfo?: string;
}