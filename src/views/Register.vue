<template>
  <div>
    <Header :movetoFirstSecond="movetoFirstSecond" :isFixed="false"></Header>
    <div class="startInput">
      <div class="register">
        <div class="register-info" v-if="showRegister">
          <h2 class="title1">欢迎来到璞纳酒店</h2>
          <img
            class="icon"
            src="../assets/icon/logo2.png"
            alt=""
            width="70px"
          />
          <h2 class="title2">注册会员</h2>
          <div><input type="text" placeholder="请输入手机号" /></div>
          <div class="code">
            <input type="text" placeholder="请输入验证码" /><button>
              发送验证码
            </button>
          </div>
          <div><input type="text" placeholder="请输入姓名" /></div>
          <div><input type="text" placeholder="请输入密码" /></div>
          <div class="last"><input type="text" placeholder="请确认密码" /></div>
          <button>注册</button>
        </div>
        <div class="forget-info" v-if="!showRegister">
          <h2 class="title1">欢迎来到璞纳酒店</h2>
          <img
            class="icon"
            src="../assets/icon/logo2.png"
            alt=""
            width="70px"
          />
          <h2 class="title2">忘记密码</h2>
          <div><input type="text" placeholder="请输入手机号" /></div>
          <div class="code">
            <input type="text" placeholder="请输入验证码" /><button>
              发送验证码
            </button>
          </div>
          <div><input type="text" placeholder="请输入新密码" /></div>
          <div class="last"><input type="text" placeholder="请确认新密码" /></div>
          <button>确定</button>
        </div>
        <div class="illustration">
            <!-- <div> -->
                <img src="../assets/img/register.jpg" alt="" />
            <!-- </div> -->
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "BrandStroy",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      movetoFirstSecond: true,
      showRegister:true,
    };
  },
  mounted() {
    this.judgeInfo();
  },
  methods: {
    // intoSecondscreen() {
    //   window.scrollY >= document.documentElement.clientHeight - 120
    //     ? (this.movetoFirstSecond = true)
    //     : (this.movetoFirstSecond = false);
    // },
    judgeInfo(){
      console.log(this.$route.params.info);
      this.$route.params.info == "register" ? (this.showRegister=true) : (this.showRegister=false);
    }
  },
  //   created() {
  //     window.addEventListener("scroll", this.intoSecondscreen);
  //     this.intoSecondscreen();
  //   },
  //   destroyed() {
  //     window.removeEventListener("scroll", this.intoSecondscreen);
  //   },
};
</script>

<style lang="scss" scoped>
.navigation{width: 100%;}
.startInput{
    // height: 690px;
    // width: 1960px;
    box-sizing: border-box;
    width: 100%;
    background:#eef2f3;
    padding:175px 0 95px 0;
}
.register{
    // width: 1620px;
    width: 100%;
    padding: 0 150px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
}
.register-info,.forget-info{
    // width: 485px;
    // height: 636px;
    // width: 30%;
    flex: 1;
    background-color: white;
    margin-right: 28px;
    padding-top: 65px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}
// 忘记密码相比注册少了一行用户姓名。因此另加上外边距
.forget-info{padding-top: 85px;}
.register h2{
    font-size: 16px; 
}
.register .title1{
    margin-bottom: 47px;
    font-weight: bold;
}
.register .title2{
    margin-bottom: 28px;
}
.register .icon{
    margin-bottom: 22px;
}
.register-info>div,.forget-info>div{
    width: 80%;
}
.register-info>div:not(.code)>input,.forget-info>div:not(.code)>input{
    // width: 313px;
    box-sizing: border-box;
    width: 100%;
    height: 38px;
    margin-bottom: 25px;
    padding: 0 0 0 13px;
}
.register-info>.last>input,.forget-info>.last>input{
    margin-bottom: 0px;
}
.register-info>.code,.forget-info>.code{
    // width: 330px;
    width: 80%;
    height: 42px;
    margin-bottom: 25px;
    display: flex;
    justify-content:space-between;
}
.register-info>.code>input,.forget-info>.code>input{
    // width: 167px;
    flex: 2;
    height: 38px;
    padding: 0 0 0 13px;
    margin-right: 7px;
    border: 1px solid #404040;
}
.register-info>.code>button,.forget-info>.code>button{
    flex: 1;
    // width: 156px;
    background: #1c1c1c;
    color: white;
    height: 40px;
    border: 1px solid #404040;
}
.register-info>button,.forget-info>button{
    width: 150px;
    height: 45px;
    background: white;
    border: 1px solid #404040;
    margin-top: 25px;
}
.illustration{
    overflow: hidden;
    text-align: center;
    display: flex;
    justify-content: center;
    flex: 3;
    img{
        height: 100%;
    }
}

@media screen and(max-width: 1780px) {.register{padding: 0 100px;}}
@media screen and(max-width: 1520px) {
  .register-info,.forget-info{flex: 5;}
  .illustration{flex: 12;}
}
@media screen and(max-width: 1440px) {
    .register{padding: 0 40px;}
}
@media screen and(max-width: 1300px) {
  .register-info,.forget-info{flex: 1;}
  .illustration{flex: 2;}
}
@media screen and(max-width: 1200px) {
  .register-info,.forget-info{flex: 1;}
  .illustration{flex: 2;}
}
@media screen and(max-width: 1100px) {
  .register-info,.forget-info{flex: 3;}
  .illustration{flex: 4;}
}
</style>