const { performance } = require('perf_hooks')

// Dummy performance test
// This won't be in the results.
performance.mark("start")
performance.mark("end")
performance.measure('start to end', 'start', 'end')
const measure0 = performance.getEntriesByName('start to end')[0]
performance.clearMarks()
performance.clearMeasures()


// ------------------------------------
// -----TESTING DESTRUCTOR IMPORT------
// ------------------------------------

performance.mark("destructor-start")

// Importing...
import {
    Comp1,
    Comp2,
    Comp3,
    Comp4,
    Comp5,
    Comp6,
    Comp7,
    Comp8
} from './dummy'

performance.mark("destructor-end")

performance.measure('destructor-start to destructor-end', 'destructor-start', 'destructor-end')
const measure = performance.getEntriesByName('destructor-start to destructor-end')[0]

// console.log measure duration
console.log('measure destructor load time : ', measure.duration)

// Clear performance marks.
performance.clearMarks()
performance.clearMeasures()

// return measure duration
export default measure.duration