import './specific'
import './deconstructor'

var sum = (arr) => arr.reduce((acc, curr) => acc + curr, 0)
var mean = (arr) => sum(arr) / arr.length
var median = (arr) => arr[Math.abs(arr.length / 2)]