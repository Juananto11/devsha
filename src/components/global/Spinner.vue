<template lang="pug">
  .Spinner.d-flex.justify-content-center.align-items-center
    .spin
</template>
<script>
export default {
  name: 'Spinner'
}
</script>

<style scoped>
.Spinner {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 1000;
}
.spin {
  border: 35px solid transparent;
  border-radius: 50%;
  border-top: 35px solid #3498db;
  border-bottom: 35px solid #3498db;
  animation: spin 1s linear infinite;
  width: 30vw;
  height: 30vw;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
