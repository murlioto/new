<template>
  <Center>
    <div class="form">
      <div class="form-item">
        <div class="item-title">昵称:</div>
        <input type="text" v-model="userInfo.nickname" @input="vaildateEmpty('nickname','昵称不能为空')" />
        <FormError :msg="error.nickname"></FormError>
      </div>
      <div class="form-item">
        <div class="item-title">账号:</div>
        <input type="text" v-model="userInfo.loginId" @input="vaildateEmpty('loginId','账号不能为空')" />
        <FormError :msg="error.loginId"></FormError>
      </div>
      <div class="form-item">
        <div class="item-title">密码:</div>
        <input type="password" v-model="userInfo.loginPwd" @input="vaildateEmpty('loginPwd','密码不能为空')" />
        <FormError :msg="error.loginPwd"></FormError>
      </div>
      <div class="form-item">
        <div class="item-title">重复密码:</div>
        <input type="password" v-model="userInfo.pwdAgain" @input="vaildatePwdAgain()" />
        <FormError :msg="error.pwdAgain"></FormError>
      </div>
      <div class="form-item">
        <button class="loginBtn" @click="submitFrom()">注册</button>
      </div>
    </div>
  </Center>
</template>

<script>
import Center from '@/components/Center.vue';
import FormError from '@/components/FormError.vue'
import {Registered} from '../services/userServices.js'
export default {
  name: 'registered',
  data() {
    return {
      userInfo: {
        loginId: '',
        loginPwd: '',
        pwdAgain: '',
        nickName: ''
      },
      error: {
        loginId: '',
        loginPwd: '',
        pwdAgain: '',
        nickname: ''
      }
    };
  },
  components: {
    Center,
    FormError
  },
  methods: {
    // 非空验证
    vaildateEmpty(field, msg) {
      if(this.userInfo[field]) {
        this.error[field] = ""
        return true
      }else {
        this.error[field] = msg
        return false
      }
    },
    // 验证重复密码
    vaildatePwdAgain() {
      const result = this.vaildateEmpty('pwdAgain',"重复密码不能为空")
      if(result) {
        if(this.userInfo.loginPwd !== this.userInfo.pwdAgain) {
          this.error.pwdAgain = "两次密码不一致"
          return false
        }
        return true
      }
    },
    // 提交数据
    async submitFrom () {
      if(this.vaildateEmpty('nickname','昵称不能为空') & 
         this.vaildateEmpty('loginId','账号不能为空') &
         this.vaildateEmpty('loginPwd','密码不能为空') &
         this.vaildatePwdAgain()) {
            let resp = await Registered(this.userInfo)
            if(resp.data) {
              alert("注册成功")
              this.$router.push({
                name: 'login'
              })
            }else {
              this.error.loginId = resp.msg
            }
         }
    }
  }
};
</script>

<style scoped>
.form {
  width: 350px;
  display: flex;
  flex-direction: column;
}
.form .form-item {
  display: flex;
  flex-direction: column;
}
.form .form-item input {
  flex: 1;
  line-height: 35px;
  font-size: 17px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 0 12px;
  outline: none;
}
.form .form-item .item-title {
  font-size: 14px;
  font-weight: 600;
  color: #666;
  padding: 5px 0;
}
.form .loginBtn {
  background-color: #409eff;
  border: 0;
  line-height: 35px;
  border-radius: 6px;
  text-align: center;
  margin-top: 5px;
  color: #fff;
  cursor: pointer;
}

</style>
