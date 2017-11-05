# import-specific-vs-import-deconstructor
This repo was created to proof that the performance on importing files like:
```javascript
import Comp1 from './dummy/Comp1'

// or

import { Comp1 } from './dummy'
```

Are pretty much equivalent.

## How I tested it?
I ran the `yarn start-destructor` 60 times and collected the measurements. Did the same thing with `yarn start-specific`. Pushed all the results in two separate arrays and did the math. Here they are:

```javascript
// destructor.js results:
const destructor = [0.011256,0.013188,0.012751,0.012697,0.013931,0.014113,0.014601,0.012175,0.012797,0.013182,0.012268,0.01219,0.013581,0.014035,0.013121,0.01295,0.012017,0.012197,0.012127,0.013161,0.024387,0.012248,0.015291,0.012802,0.01326,0.012426,0.012106,0.013159,0.012754,0.01181,0.011935,0.012538,0.012283,0.011566,0.013291,0.012584,0.012824,0.012751,0.012978,0.012865,0.021596,0.019646,0.012484,0.012918,0.01302,0.016552,0.0127,0.016862,0.012681,0.012335,0.012871,0.013801,0.012628,0.012145,0.014029,0.01183,0.012132,0.012379,0.012569,0.012144,0.020355,0.012917]

// specific.js results:
const specific   = [0.013101,0.01355,0.012972,0.014703,0.01221,0.01234,0.012279,0.01999,0.012362,0.011306,0.017454,0.016575,0.013814,0.012972,0.01241,0.016617,0.017461,0.01249,0.01249,0.012141,0.013264,0.012988,0.012874,0.012033,0.012414,0.021662,0.012347,0.011968,0.012591,0.01231,0.0123,0.012165,0.016887,0.012552,0.014209,0.014454,0.012184,0.013215,0.011917,0.012262,0.012812,0.01651,0.016712,0.012536,0.012279,0.012868,0.012745,0.01311,0.012157,0.012591,0.012401,0.013147,0.013616,0.020309,0.012677,0.01202,0.013067,0.013041,0.022026,0.012628,0.013076,0.012684]
```

Here's the math part:

```javascript
const sum = (array) => array.reduce((acc, curr) => acc + curr, 0)
const mean = (array) => sum(array) / array.length
const median = (array) => array[Math.abs(array.length / 2)]
const max = (array) => Math.max(...array)
const min = (array) => Math.min(...array)

console.log(`
    // ----------------------------------
    // -----Importing specific files-----
    // ----------------------------------
    max value: ${max(specific)}
    min value: ${min(specific)}
    sum of all measurements: ${sum(specific)}
    mean (average): ${mean(specific)}
    median: ${median(specific)}
    
`)

console.log(`
    // -----------------------------------
    // ----Importing using destructors----
    // -----------------------------------
    max value: ${max(destructor)}
    min value: ${min(destructor)}
    sum of all measurements: ${sum(destructor)}
    mean (average): ${mean(destructor)}
    median: ${median(destructor)}

`)

console.log(`** Using destructor (on average) is ${100 - ((mean(destructor) * 100) / mean(specific))}% faster than loading specific files`)
```

Giving the results: 
```
    // ----------------------------------
    // -----Importing specific files-----
    // ----------------------------------
    max value: 0.022026ms
    min value: 0.011306ms
    sum of all measurements: 0.850845ms
    mean (average): 0.013723306451612903ms
    median: 0.012165ms

    // -----------------------------------
    // ----Importing using destructors----
    // -----------------------------------
    max value: 0.024387ms
    min value: 0.011256ms
    sum of all measurements: 0.83479ms
    mean (average): 0.013464354838709678ms
    median: 0.012538ms

    ** Using destructor (on average) is 1.8869476814225834% faster than loading specific files
```