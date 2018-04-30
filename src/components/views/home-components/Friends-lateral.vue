<template lang="pug">
  .Friends-lateral.pt-2.border
    p.m-0.text-center.mb-2.font-weight-bold
      slot(name='title')
    hr.my-0
    ul.list-unstyled.m-0
      slot(name='list-friends')
</template>

<script>
export default {
  name: 'Friends-lateral'
}
</script>

<style lang="scss" scoped>
.Friends-lateral {
  overflow: hidden;
  background-color: #fff;
  margin-left: 38px;
  width: 449px;
  min-width: 310px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba($color: #000, $alpha: .5);
}
li {
  cursor: pointer;
  &:hover {
    background-color: rgb(242, 242, 242);
  }
}
li span {
  border-bottom: 1px solid rgb(221, 221, 221);
}
li:nth-child(5) span {
    border: none;
}
</style>
