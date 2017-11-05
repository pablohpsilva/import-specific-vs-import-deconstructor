const { performance } = require('perf_hooks')

performance.mark("start")
performance.mark("end")
performance.measure('start to end', 'start', 'end')
const measure0 = performance.getEntriesByName('start to end')[0]
// console.log('start performance time          : ', measure0.duration)
performance.clearMarks()
performance.clearMeasures()

// ------------------------------------
// ------TESTING SPECIFIC IMPORT-------
// ------------------------------------

performance.mark("specific-start")

// Importing...
import Comp1 from './dummy/Comp1'
import Comp2 from './dummy/Comp2'
import Comp3 from './dummy/Comp3'
import Comp4 from './dummy/Comp4'
import Comp5 from './dummy/Comp5'
import Comp6 from './dummy/Comp6'
import Comp7 from './dummy/Comp7'
import Comp8 from './dummy/Comp8'

performance.mark("specific-end")

performance.measure('specific-start to specific-end', 'specific-start', 'specific-end')
const measure = performance.getEntriesByName('specific-start to specific-end')[0]

// console.log measure duration
console.log('measure specific load time      : ', measure.duration)

// Clear performance marks.
performance.clearMarks()
performance.clearMeasures()

// return measure duration
export default measure.duration