<template>
<div>
  <div v-if="port == 1" class="login" :class="{'login_open':this.$store.state.isOpenLogPanel}">
      <div class="landingPanel">
            <div class="close"><img src="../assets/icon/close.png" alt="" width="20ppx" height="20px" @click="closeLogPanel"/></div>
            <div class="main">
                <h2 class="title1">欢迎来到璞纳酒店</h2>
                <div class="logo"><img src="../assets/icon/logo2.png" alt="" width="70px"/></div>
                <h2 class="title2">会员登陆</h2>
                <div class="inputInfo"><input type="text" placeholder="请输入手机号或姓名"></div>
                <div class="inputInfo"><input type="text" placeholder="请输入密码"></div>
                <div class="inputInfo"><input type="text" placeholder="请确认密码"></div>
                <div class="additional">
                    <div class="checkbox"><label><input name="remember" type="checkbox" value="" />记住我</label></div>
                    <div class="jumpRegister">
                        <router-link :to="{name:'Register',params:{info:'forget'}}" style="color:#1c1c1c;font-size:12px">忘记密码&nbsp;</router-link>
                        <router-link :to="{name:'Register',params:{info:'register'}}" style="color:#1c1c1c;font-size:12px;margin-left:6px">注册账号</router-link>
                    </div>
                </div>
                <button class="bt-login">登陆</button>
            </div> 
      </div>
  </div>
   <div v-if="port == 2" class="login-move" :class="{'login_open':this.$store.state.isOpenLogPanel}">
      <div class="landingPanel-move">
            <div class="close"><img src="../assets/icon/close.png" alt="" width="20ppx" height="20px" @click="closeLogPanel"/></div>
            <div class="main">
                <h2 class="title1">欢迎来到璞纳酒店</h2>
                <div class="logo"><img src="../assets/icon/logo2.png" width="70px" alt=""/></div>
                <h2 class="title2">会员登陆</h2>
                <div class="inputInfo"><input type="text" placeholder="请输入手机号或姓名"></div>
                <div class="inputInfo"><input type="text" placeholder="请输入密码"></div>
                <div class="inputInfo"><input type="text" placeholder="请确认密码"></div>
                <div class="additional">
                    <div class="checkbox"><label class="rember-me" ><input name="remember" type="checkbox" value="" />记住我</label></div>
                    <div class="jumpRegister">
                        <router-link :to="{name:'Register',params:{info:'forget'}}" style="color:#1c1c1c;font-size:12px">忘记密码&nbsp;</router-link>
                        <router-link :to="{name:'Register',params:{info:'register'}}" style="color:#1c1c1c;font-size:12px;margin-left:6px">注册账号</router-link>
                    </div>
                </div>
                <button class="bt-login">登陆</button>
            </div> 
      </div>
  </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            port: 1, //1 pc端  2 移动端
        }
    },
    // props:['isOpenLogPanel'],
    mounted() {
    if (this._isMobile()) {
      console.log("手机端");
      this.port = 2;
    } else {
      console.log("pc端");
      this.port = 1;
    }
  },
    methods:{
        _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
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
    .login-move{
        display: none;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 99999;
    }
    .login{
        display: none;
        position: fixed;
        right: 150px;
        top: 200px;
        z-index: 99999;
    }
    .login_open{
        display: block;
    }

    .landingPanel-move{
        width: 100%;
        height: 578px;
        background-color: rgba(255,255,255,.95);
        padding: 20px;
        box-sizing: border-box;
    }
    .landingPanel{
        // width: 485px;
        // height: 578px;
        background-color: rgba(255,255,255,.95);
        padding: 40px 50px;
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
        font-size: 16px;
        font-weight: bold;
    }
    .title2{
        margin: 22px auto 28px auto;
        font-size: 14px;
    }

    .inputInfo>input{
        width: 313px;
        height: 42px;
        margin-bottom: 18px;
        padding: 0 0 0 13px;
        border: 1px solid #404040;
    }
    .additional{
        display: flex;
        align-items: center;
        width: 330px;
        font-size: 14px;
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
        font-size: 14px;
    }


    @media screen and(max-width: 810px) {
    // .hotel-link>.hotel:not(:last-child){margin-right: 10px;}
        .title1{
            font-size: 14px;
        }

        .title2{
            font-size: 12px;
        }

        .rember-me{
            font-size: 12px;
            display: flex;
            align-items: center;
        }

        .main > button{
            margin-top: 20px;
            width: 120px;
            height: 40px;
        }

        .main{
            margin-top: 20px;
        }

        .inputInfo > input{
            font-size: 12px;
        }

        .checkbox{
            display: flex;
            align-items: center;
        }
    }


    
</style>