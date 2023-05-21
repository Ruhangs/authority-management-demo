<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login-content" style="width:425px">
    <div class="login-box">
      <div class="login-form">
        <div class="qr-code-switch">
          <!-- 顶部二维码 -->
        </div>
        <div class="account-login-form">
          <div class="login-title">登录</div>
          <div class="login-type-switch border-bottom">
            <span class="login-type-item active">
              帐号登录
            </span><span class="login-type-item">
              手机登录
            </span>
          </div>
          <form class="el-form" ref="formRef" :model="formLabelAlign" style="max-width: 460px">
            <div class="el-form-item">
              <input class="username-input" type="text" placeholder="账号" name="username" v-model="formLabelAlign.username"/>
            </div>
            <div class="el-form-item">
              <input class="username-input" type="password" placeholder="密码" name="password" v-model="formLabelAlign.password"/>
            </div>
            <div class="el-form-item">
              <input class="username-input" type="text" placeholder="团队标识" name="teamCode" v-model="formLabelAlign.teamCode"/>
            </div>
            <div class="account-login-switch">
              <div class="forget-password">
                忘记密码？
              </div>
            </div>
          </form>
          <div class="login-but" @click="login">
            <svg t="1684482943764" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2043" width="50" height="20"><path d="M621.253 876.286l320.003-319.592c24.992-24.96 24.992-65.421 0-90.382L621.253 146.72c-24.992-24.96-65.505-24.96-90.498 0-24.991 24.96-24.991 65.42 0 90.382L741.51 447.585H128c-35.36 0-64 28.604-64 63.919s28.64 63.918 64 63.918h613.51L530.755 785.906c-12.48 12.465-18.752 28.828-18.752 45.191 0 16.363 6.241 32.726 18.752 45.19 24.992 24.96 65.505 24.96 90.498 0v-0.001z" fill="#ffffff" p-id="2044"></path></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { ref } from 'vue';
import { useUserStore } from '../store/user'
import request from '../api/index'

const formRef = ref()
const user = useUserStore()
console.log(user);

const formLabelAlign = reactive({
  username: '',
  password: '',
  teamCode: '',
})

const login = () => {
  request({
    url: '/mock/user',
    method: 'get',
  }).then(res => {
    user.addUser(res.data)
  })
  

  
}

console.log(formRef);
</script>

<style lang="less" scoped>
.login-content {
  position: absolute;
  height: 580px;
  right: calc((50% - 425px)/2);
  top: calc((100% - 580px)/2);
  z-index: 2;

  .login-box {
    // position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: auto;
    background: #fff;
    -webkit-box-shadow: 17px 48px 162px 0 rgba(0, 0, 0, .06);
    box-shadow: 17px 48px 162px 0 rgba(0, 0, 0, .06);
    border-radius: 24px;
    padding-bottom: 20px;

    .login-form {
      // position: relative;
      width: 425px;
      height: 100%;
      border-radius: 0 24px 24px 0;
      display: inline-block;
      vertical-align: middle;

      .qr-code-switch {
        height: 75px;
      }

      .login-title {
        font-size: 24px;
        line-height: 24px;
        font-weight: 500;
        color: #222;
        padding-top: 20px;
        padding-bottom: 50px;
      }

      .border-bottom {
        border-bottom: 1px solid #eaedf1;
      }

      .login-type-switch {
        width: 270px;
        margin: 0 auto 30px auto;
        font-size: 0;
        line-height: 0;
        padding-bottom: 8px;

        .login-type-item {
          display: inline-block;
          width: 50%;
          vertical-align: middle;
          color: #aaafb5;
          font-size: 14px;
          line-height: 1;
          cursor: pointer;
          text-align: center;

        }

        .active {
          color: #222;
          font-weight: 600;
          position: relative;

          &::after {
            content: "";
            position: absolute;
            bottom: -8px;
            left: calc(50% - 40px);
            width: 80px;
            height: 2px;
            background: #697dff;
            border-radius: 2px;
          }
        }
      }

      .el-form {
        .el-form-item {
          margin-bottom: 24px;

          .username-input {
            color: #5d6470;
            width: 270px;
            border-radius: 20px;
            border: 0;
            background: #f5f6fa;
            -webkit-box-shadow: none;
            box-shadow: none;
            height: 36px;
            line-height: 36px;
            font-size: 14px;
            padding: 0 15px;
          }
        }

        .account-login-switch {
          position: absolute;
          line-height: 14px;
          font-size: 14px;
          text-align: left;
          width: 100%;
          height: 14px;

          .forget-password {
            display: inline-block;
            position: absolute;
            top: 0;
            right: 60px;
            line-height: 14px;
            cursor: pointer;

          }
        }
      }
    }

    .login-but {
      position: relative;
      margin: auto;
      margin-top: 60px;
      width: 80px;
      height: 80px;
      -webkit-box-shadow: 0 12px 17px 0 rgba(105, 125, 255, .3);
      box-shadow: 0 12px 17px 0 rgba(105, 125, 255, .3);
      background-color: #697dff;
      color: #fff;
      border-radius: 50%;
      line-height: 80px;
      font-size: 29px;
      cursor: pointer;
    }
  }
}
</style>