<template>
  <div>
    <p>ES2019</p>
    <p>ES10</p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

p{
  margin: 0;
}

p:nth-child(1){
  font-size: 5rem;
}

p:nth-child(2){
  font-size: 4.9rem;
}

img{
  height: 350px;
  transform: rotate(-15deg) translate(20vw, 5vw);
}
</style>