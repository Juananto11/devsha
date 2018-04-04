<template lang="pug">
  .body.p-1
    .chat-message.w-100.d-flex.p-1
      .user-avatar
        a(href='#', target='_blank')
          img(alt='Dario', title='Dario', src='http://lorempixel.com/50/50/people/')
      .message
        p.m-0.ml-2.mr-4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, eum?
        span.mr-3.message-time.float-right
          small 13:38
    hr.m-1
    .chat-message-right.w-100.d-flex.p-1
      .message
        p.m-0.mr-2.ml-4 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        span.mr-3.message-time.float-right
          small 13:34
      .user-avatar
        a(href='#', target='_blank')
          img(alt='Juan', title='Jaun', src='http://lorempixel.com/50/50/people/')
    hr.m-1
</template>

<style lang="scss" scoped>
.body {
  height: 300px;
  width: 100%;
  background-color: #eeeeee;
  font-size: 14px;

  .user-avatar {
    width: 15%;
    height: 15%;
    img {
      border-radius: 50%;
      width: 25px;
    }
  }
  .chat-message {
  }
}
</style>
