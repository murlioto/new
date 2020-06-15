<template>
  <Center>
    <div class="form">
      <div class="form-item">
        <div class="item-title">账号:</div>
        <input type="text" v-model="userInfo.loginId" @input="vaildateEmpty('loginId', '账号不能为空')" />
        <FormError :msg="error.loginId"></FormError>
      </div>
      <div class="form-item">
        <div class="item-title">密码:</div>
        <input type="password" v-model="userInfo.loginPwd" @input="vaildateEmpty('loginPwd', '密码不能为空')" />
        <FormError :msg="error.loginPwd"></FormError>
      </div>
      <div class="form-item"><button class="loginBtn" @click="submitFrom()">{{$store.state.loginUser.isLoading?'Login...':'登录'}}</button></div>
    </div>
  </Center>
</template>

<script>
import Center from '@/components/Center.vue';
import FormError from '@/components/FormError.vue';
export default {
  name: 'registered',
  data() {
    return {
      userInfo: {
        loginId: '',
        loginPwd: ''
      },
      error: {
        loginId: '',
        loginPwd: ''
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
      if (this.userInfo[field]) {
        this.error[field] = '';
        return true;
      } else {
        this.error[field] = msg;
        return false;
      }
    },
    // 提交数据
    async submitFrom() {
      if(this.$store.state.loginUser.isLoading) {
        return
      }
      if (this.vaildateEmpty('loginId', '账号不能为空') & this.vaildateEmpty('loginPwd', '密码不能为空')) {
        let result = await this.$store.dispatch("loginUser/login", this.userInfo)
        console.log(result)
        if(result) {
          this.$router.push({name: "home"})
        }else {
          this.error.loginId = "账号/密码错误..."
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
