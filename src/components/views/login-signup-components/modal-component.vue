<template lang="pug">
transition(name='termsCond')
  .termsCond-mask
    .termsCond-wrapper
      .termsCond-container
        .termsCond-header.d-flex.justify-content-between.align-items-center
          slot(name='header')
            h1 Default Header
          slot(name="button")
            button.btn.btn-dark Close
        .termsCond-body.text-justify
          slot(name='body') Default Body

</template>

<style lang="scss" scoped>
.termsCond-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s ease;
  .termsCond-wrapper {
    max-height: 80vh;
    max-width: 80vw;
    .termsCond-container {
      width: 100%;
      padding: 20px 30px;
      background-color: #fff;
      border-radius: 20px;
      box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.33);
      transition: all 0.5s ease;
      .termsCond-header {
        margin-top: 0;
        button.btn {
          height: 40px;
        }
      }
      .termsCond-body {
        margin: 20px 0;
        width: 100%;
        max-height: 60vh;
        overflow-y: auto;
      }
    }
  }
}
.termsCond-enter {
  opacity: 0;
}
.termsCond-leave-active {
  opacity: 0;
}
.termsCond-enter .termsCond-container,
.termsCond-leave-active .termsCond-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
