import data from './data.json' with { type: 'json' }

console.log(data)

const dynamicData = await import('./data.json', { with: { type: 'json' } })

console.log(dynamicData.default)