<template>
  <div>
    <p>ES2018</p>
    <p>ES9</p>
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

</style>