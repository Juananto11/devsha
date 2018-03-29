<template lang="pug">
  .Popover
    p.m-0.py-1.font-weight-bold: slot(name='title')
    hr.m-0
    .pop-body.pt-1.pl-3.pr-0
      div: slot(name='body')

</template>

<script>
export default {
  name: 'Popover'
}
</script>

<style lang="scss" scoped>
.Popover {
  background-color: rgba(0, 17, 255, 0.24);
  position: relative;
  top: 0;
  right: 0;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba($color: #000, $alpha: .5);
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 22px;
    top: -24px;
    right: 18px;
    border-top: 12px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 12px solid rgba(0, 17, 255, 0.24);
    border-right: 10px solid transparent;
  }
}
</style>
