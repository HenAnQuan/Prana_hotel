<template>
  <div>
      <Header :movetoFirstSecond="movetoFirstSecond" :isFixed="false"></Header>
      <div class="startInput">
          <div class="register">
              <div class="register-info">
                  <h2 class="title1">欢迎来到璞纳酒店</h2>
                  <img class="icon" src="../assets/icon/logo2.png" alt="">
                  <h2 class="title2">注册会员</h2>
                  <div><input type="text" placeholder="请输入手机号"></div>
                  <div class="code"><input type="text" placeholder="请输入验证码"><button>发送验证码</button> </div>
                  <div><input type="text" placeholder="请输入姓名"></div>
                  <div><input type="text" placeholder="请输入密码"></div>
                  <div class="last"><input type="text" placeholder="请确认密码"></div>
                  <button>注册</button>
              </div>
              <div class="illustration">
                  <img src="../assets/img/register.jpg" alt="">
              </div>
          </div>
      </div>
      <Footer/>
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
    };
  },
  mounted() {},
  methods: {
    // intoSecondscreen() {
    //   window.scrollY >= document.documentElement.clientHeight - 120
    //     ? (this.movetoFirstSecond = true)
    //     : (this.movetoFirstSecond = false);
    // },
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
    div>.header2{
        position: relative;
    }
    .startInput{
        height: 690px;
        width: 1960px;
        background:#eef2f3;
        padding:135px 0;
    }
    .register{
        width: 1620px;
        margin: 0 auto;
        display: flex;
    }


    .register-info{
        width: 485px;
        height: 636px;
        background-color: white;
        margin-right: 28px;
        padding-top: 54px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
    .register-info>h2{
        font-size: 24px;
    }
    .register-info>.title1{
        margin-bottom: 47px;
    }
    .register-info>.title2{
        margin-bottom: 28px;
    }
    .register-info>.icon{
        margin-bottom: 22px;
    }
    .register-info>div:not(.code)>input{
        width: 313px;
        height: 38px;
        margin-bottom: 18px;
        padding: 0 0 0 13px;
    }
    .register>.register-info>.last>input{
        margin-bottom: 0px;
    }
    .register-info>.code{
        width: 330px;
        height: 42px;
        margin-bottom: 18px;
        display: flex;
        justify-content:space-between;
    }
    .register-info>.code>input{
        width: 167px;
        height: 38px;
        padding: 0 0 0 13px;
        margin-right: 7px;
        border: 1px solid #404040;
    }
    .register-info>.code>button{
        width: 156px;
        background: #1c1c1c;
        color: white;
        border: 1px solid #404040;
    }
    .register-info>button{
        width: 174px;
        height: 54px;
        background: white;
        border: 1px solid #404040;
        margin-top: 42px;
    }


    .illustration{
        width: 1107px;
        height: 690px;
    }
</style>