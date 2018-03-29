<template lang="pug">
  .Popover.p-2
    p.pl-5.m-0.border: slot(name='title')
    div: slot(name='body')

</template>

<script>
export default {
  name: 'Popover'
}
</script>

<style lang="scss" scoped>
.Popover {
  width: 300px;
  min-height: 100px;
  background-color: rgba(255, 0, 0, 0.459);
  position: absolute;
  top: 75px;
  right: 0;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba($color: #000, $alpha: .5);
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -24px;
    border-top: 12px solid transparent;
    border-left: 10px solid transparent;
    right: 20px;
    border-bottom: 12px solid rgba(255, 0, 0, 0.459);
    border-right: 10px solid transparent;
  }
}

</style>
