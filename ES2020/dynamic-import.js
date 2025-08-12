const doAsync = async () => {
  const { default: name, age } = await import('./helpExporter.mjs');
  console.log(name, age);
}
doAsync();