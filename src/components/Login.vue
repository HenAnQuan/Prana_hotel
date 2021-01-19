<template>
  <div class="login" :class="{'login_open':this.$store.state.isOpenLogPanel}">
      <div class="landingPanel">
            <div class="close"><img src="../assets/icon/close.png" alt="" width="20px" height="20px" @click="closeLogPanel"/></div>
            <div class="main">
                <h2 class="title1">欢迎来到璞纳酒店</h2>
                <div class="logo"><img src="../assets/icon/logo2.png" alt="" width="70px" height="42px"/></div>
                <h2 class="title2">会员登陆</h2>
                <div class="inputInfo"><input type="text" placeholder="请输入手机号或姓名"></div>
                <div class="inputInfo"><input type="text" placeholder="请输入密码"></div>
                <div class="inputInfo"><input type="text" placeholder="请确认密码"></div>
                <div class="additional">
                    <div class="checkbox"><label><input name="remember" type="checkbox" value="" />记住我</label></div>
                    <div class="jumpRegister">
                        <router-link to="/register" style="color:#1c1c1c">忘记密码&nbsp;</router-link>
                        <router-link to="/register" style="color:#1c1c1c">注册账号</router-link>
                    </div>
                </div>
                <button class="bt-login">登陆</button>
            </div> 
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    // props:['isOpenLogPanel'],
    methods:{
        closeLogPanel(){
            this.$store.commit('OpenLogPanel',false);
        }
    },
    // mounted(){
    //     console.log(this.$store.state.data);
    // }
}
</script>

<style lang="scss" scoped>
    .login{
        display: none;
        position: fixed;
        right: 40px;
        // top: 251px;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .login_open{
        display: block;
    }
    .landingPanel{
        width: 450px;
        height: 520px;
        background-color: rgba(255,255,255,.95);
        padding: 20px;
    }
    .close,.main{
        width: 100%;
        text-align: end;
    }
    .close{
    }
    .main{
        display:flex;
        flex-direction: column;
        align-items: center;
    }

    .title1{
        margin: 18px auto 32px auto;
        font-size: 18px;
    }
    .title2{
        font-size: 14px;
        margin: 22px auto 28px auto;
    }

    .inputInfo>input{
        width: 313px;
        height: 42px;
        margin-bottom: 18px;
        padding: 0 0 0 13px;
        border: 1px solid #404040;
    }
    .additional{
        font-size: 14px;
        display: flex;
        align-items: center;
        width: 330px;
    }
    .checkbox{
        
    }
    .jumpRegister{
        flex: 1;
        // width: 100%;
    }
    .main>button{
        width: 160px;
        height: 45px;
        background: white;
        border: 1px solid #404040;
        margin-top: 42px;
    }
</style>