// ES2021 introduces WeakRef for references to an object that can be garbage-collected. 
// Unlike objects that are references can't be garbage-collected and are held in memory.

const cacheRef = new WeakRef({ count: 0 });

const cache = cacheRef.deref();
if(cache){
  console.log(cache.count);
}else{
  console.log('cache object lost to garbage-collection');
}

// FinalizationRegistry let's you assign a callback if object is garbage-collected
const registry = new FinalizationRegistry((value) => {
  console.log(value);
});
registry.register(cacheRef.deref(), 'cacheRef is lost');