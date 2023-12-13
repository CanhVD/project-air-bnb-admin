<template>
  <div class="notification">
    <div class="notification__header">
      <div class="notification__title">
        <h4>{{ notificationTitle }}</h4>
      </div>
      <span @click="handleClose">x</span>
    </div>
    <div class="notification__content">
     {{ notificationContent }}
    </div>
    <div class="notification__footer">
      <button class="button-left" @click="handleClose"><span></span>{{ btnCancel }}</button>
      <button class="button-right" @click="handleSubmit"><sann></sann>{{ btnSubmit }}</button>
    </div>
  </div>
</template>

<script>

export default {
props:{
  notificationTitle:{
    type: String,
    default: "Title notification",
    required: false
  },
  notificationContent:{
    type: String,
    default: "Content notification",
    required: false
  },
  handleSubmit:{
    type: Function,
    required: false
  },
  handleClose:{
    type: Function,
    required: false
  },
  btnCancel:{
    type: String,
    default: "Đóng",
    required: false
  },
  btnSubmit:{
    type: String,
    default: "Xác nhận",
    required: false
  },
}
}
</script>

<style lang="scss" scoped>
  .notification{
    margin: 0;
    padding: 10px;
    box-sizing: border-box;
    min-width: 300px;
    min-height: 140px;
    position: fixed;
    top: 50vh;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #e3e3e3;
    background-color: white;
    color: #333;
    border-radius: 3px;
    text-align: left;

    .notification__header{
      display: flex;
      justify-content: space-between;
      span{
        cursor: pointer;
      }
    }

    .notification__footer{
      display: flex;
      justify-content: end;
      column-gap: 5px;
      margin-top: 25px;
      button{
        border: none;
        background-color: transparent;
        color: #333;
        cursor: pointer;
        border-radius: 3px;
        font-size: 12px;
        &:hover{
          background-color: #f91942;
          color: #fff;
        }
      }
      .button-left{
        border: 1px solid #ccc;
        color: #ccc;
      }
      .button-right{
        color: #f91942;
        border:1px solid #f91942;
      }
    }
  }
</style>