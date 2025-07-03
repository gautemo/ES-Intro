/*
Previously named capturing groups in a regex needed to be unique.
Now capturing groups don't have to be unique as long as they are in different | alternatives.
*/

const match = '26.06.2025'.match(/(?<year>\d{4})\.\d{2}\.\d{2}|\d{2}\.\d{2}\.(?<year>\d{4})/)
console.log(match.groups.year) // 2025