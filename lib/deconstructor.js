const { performance } = require('perf_hooks')

performance.mark("start")
performance.mark("end")
performance.measure('start to end', 'start', 'end')
const measure0 = performance.getEntriesByName('start to end')[0]
// console.log('start performance time          : ', measure0.duration)
performance.clearMarks()
performance.clearMeasures()

// after first performance load
performance.mark("deconstructor-start")
import { Comp1, Comp2, Comp3, Comp4, Comp5, Comp6, Comp7, Comp8 } from './dummy'
performance.mark("deconstructor-end")

performance.measure('deconstructor-start to deconstructor-end', 'deconstructor-start', 'deconstructor-end')
const measure = performance.getEntriesByName('deconstructor-start to deconstructor-end')[0]
console.log('measure deconstructor load time : ', measure.duration)

performance.clearMarks()
performance.clearMeasures()

export default measure.duration