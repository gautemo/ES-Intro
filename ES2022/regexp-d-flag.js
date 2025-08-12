// ES2022 added the flag /d to regular expression to generate indices for substring matches
const match = /wolf/d.exec('strong wolf pack')
const [start, stop] = match.indices[0]
console.log(start, stop)
