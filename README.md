# osi-license-checker
Answers the question: "Is this License an approved license by OSI?"

Based heavily on https://github.com/myrne/osi-licenses.

## Setup

Just install it:
```bash
npm i osi-license-checker
yarn add osi-license-checker
```

## Usage

### `checkForShorthand()`

Checks whether the provided string is an exact match to an SPDX License Identifier.

```typescript
import { checkShorthand } from 'osi-license-checker';

console.log(checkShorthand("MIT")); // => true
console.log(checkShorthand("Proprietary")); // => false
```

### `checkFullName()`

Checks whether the provided string is an exact match to a full name of an OSI-approved license.

```typescript
import { checkFullName } from 'osi-license-checker';

console.log(checkFullName("MIT")); // => false
console.log(checkFullName("MIT License")); // => true
```

## Alternatives

- https://github.com/jslicense/spdx-is-osi.js lacks the ability to lookup full license names, but has many features this package doesn't provide, like looking up dual or double licenses.
