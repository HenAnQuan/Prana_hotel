<template>
  
  <div>
    <!-- 当滚动到第二屏达到导航条的位置时，加载另一个 header2 样式；  首屏时,movetoFirstSecond值为false，加载header1样式 -->
    <div class="header" :class="{ 'header-fixed': isFixed }" v-if="port == 1">
      <!-- 当滚动到第二屏达到导航条的位置时，加载另一个 header2 样式；  首屏时,movetoFirstSecond值为false，加载header1样式 -->
      <div v-if="movetoFirstSecond" class="header2">
        <div class="logo">
          <router-link to="/"
            ><img
              src="../assets/icon/logo2.png"
              alt=""
              width="70px"
              height="42px"
          /></router-link>
        </div>
        <div class="nav">
          <ul>
            <li>
              <!-- <router-link to="/" class="navItem" :class="{'router-link-exact-active': $route.name == 'Index'}"> -->
              <router-link to="/" class="navItem">
                <img
                  src="../assets/icon/hotel2.png"
                  alt=""
                  width="18px"
                  height="18px" /><span>首页</span>
                <div></div
              ></router-link>
            </li>
            <li>
              <router-link to="/overview" class="navItem">
                <img
                  src="../assets/icon/overview2.png"
                  alt=""
                  width="17.5px"
                  height="17.5px" /><span>酒店概览</span>
                <div></div
              ></router-link>
            </li>
            <li>
              <router-link to="/installation" class="navItem">
                <img
                  src="../assets/icon/installation2.png"
                  alt=""
                  width="16px"
                  height="15px" /><span>酒店设施</span>
                <div></div
              ></router-link>
            </li>
            <li>
              <router-link to="/package" class="navItem">
                <img
                  src="../assets/icon/packge2.png"
                  alt=""
                  width="16px"
                  height="16px" /><span>养生套餐</span>
                <div></div
              ></router-link>
            </li>
            <li>
              <router-link to="/item" class="navItem">
                <img
                  src="../assets/icon/item2.png"
                  alt=""
                  width="16px"
                  height="16px" /><span>养生项目</span>
                <div></div
              ></router-link>
            </li>
            <li>
              <router-link to="/workshop" class="navItem">
                <img
                  src="../assets/icon/workshop2.png"
                  alt=""
                  width="17.5px"
                  height="17.5px" /><span>每日工坊</span>
                <div></div
              ></router-link>
            </li>
            <li class="login" @click="login">
              <img
                src="../assets/icon/login2.png"
                alt=""
                width="16px"
                height="16px"
              /><span>登陆</span>
            </li>
            <!-- <li class="language"><span>中文</span></li> -->
          </ul>
        </div>
      </div>
      <!-- 当首屏时加载图片 使用 header1样式 -->
      <div v-else class="header1">
        <div class="logo">
          <router-link to="/"
            ><img
              src="../assets/icon/logo1.png"
              alt=""
              width="70px"
              height="42px"
          /></router-link>
        </div>
        <div class="nav">
          <ul>
            <li>
              <router-link to="/" class="navItem"
                ><img
                  src="../assets/icon/hotel1.png"
                  alt=""
                  width="18px"
                  height="18x" /><span>首页</span>
                <div></div
              ></router-link>
            </li>
            <li>
              <router-link to="/overview" class="navItem">
                <img
                  src="../assets/icon/overview1.png"
                  alt=""
                  width="17.5px"
                  height="17.5px" /><span>酒店概览</span>
                <div></div
              ></router-link>
            </li>
            <li>
              <router-link to="/installation" class="navItem">
                <img
                  src="../assets/icon/installation1.png"
                  alt=""
                  width="16px"
                  height="15px" /><span>酒店设施</span>
                <div></div
              ></router-link>
            </li>
            <li>
              <router-link to="/package" class="navItem">
                <img
                  src="../assets/icon/packge1.png"
                  alt=""
                  width="16px"
                  height="16px" /><span>养生套餐</span>
                <div></div
              ></router-link>
            </li>
            <li>
              <router-link to="/item" class="navItem">
                <img
                  src="../assets/icon/item1.png"
                  alt=""
                  width="16px"
                  height="16px" /><span>养生项目</span>
                <div></div
              ></router-link>
            </li>
            <li>
              <router-link to="/workshop" class="navItem">
                <img
                  src="../assets/icon/workshop1.png"
                  alt=""
                  width="17.5px"
                  height="17.5px" /><span>每日工坊</span>
                <div></div
              ></router-link>
            </li>
            <li class="login" @click="login">
              <img
                src="../assets/icon/login1.png"
                alt=""
                width="16px"
                height="16px"
              /><span>登陆</span>
            </li>
            <!-- <li class="language"><span>中文</span></li> -->
          </ul>
        </div>
      </div>
    </div>
   <div v-if="port == 2">
      <div class="item-logo2 header3">
        <router-link to="/"
          ><img
            src="../assets/icon/logo1.png"
            alt=""
            width="50px"
            height="28px"
        /></router-link>
        <li class="tologin">
          <img
            src="../assets/icon/login1.png"
            alt=""
            width="22px"
            height="22px"
          />
          <span class="tologin-text" style="margin-left: 10px;margin-right:20px;font-size:12px"  @click="login">登陆</span>

           <img 
            src="../assets/img/menu.png"
            alt=""
            width="20px"
            height="15px" @click="show3 = !show3"
          />
        </li>
      </div>
      <div style="width:100%;height:45px"></div>
       <transition name="el-zoom-in-top">
      <div class="item" v-show="show3">
        <router-link to="/" class="move">
          <span>首页</span>
        </router-link>
        <router-link to="/overview" class="move">
          <span>酒店概览</span>
        </router-link>
        <router-link to="/installation" class="move">
          <span>酒店设施</span>
        </router-link>
        <router-link to="/package" class="move">
          <span>养生套餐</span>
        </router-link>
        <router-link to="/item" class="move">
          <span>养生项目</span>
        </router-link>
        <router-link to="/workshop" class="move">
          <span>每日工坊</span>
        </router-link>
      </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit("OpenLogPanel", false);
  
  },
  data() {
    return {
      // openLogPanel: false,
      port: 1, //1 pc端  2 移动端
      show3: false
    };
  },
  mounted() {
    if (this._isMobile()) {
      console.log("手机端");
      this.port = 2;
    } else {
      console.log("pc端");
      this.port = 1;
    }
  },
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },

    menu(){
     
    },
    login() {
      // this.openLogPanel = true;
      this.$store.commit("OpenLogPanel", true);
      console.log(this.$store.state.isOpenLogPanel);
    },
  },
  props: ["movetoFirstSecond", "isFixed"],
};
</script>

<style scoped lang="scss">
// @import url(../assets/css/reset.css);
// 移动端样式开始
.el-menu-vertical-demo:not(.el-menu--collapse){
		height: 100%;
}


.item .router-link-exact-active div {
  display: none;
}
.tologin{
  display: flex;
  align-items: center;
}
.tologin-text{
  font-size: 17px;
  color: #ffffff;
}
.item-logo{
  z-index: 9999;
  width: 100%;
  position: fixed;
  top: 0;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.item-logo2{
  z-index: 9999;
  width: 100%;
  position: fixed;
  top: 0;
  padding: 0px 20px 0px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item {
  width: 100%;
  position: fixed;
  top: 0px;
  right: 0;
  background-color: rgba(0,0,0,0.8);
  height: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.move {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.move span {
  font-size: 13px;
}
// 移动端样式结束


a:focus,
a:hover {
  color: #23527c;
  text-decoration: underline;
}
.header {
  top: 0;
  width: 100%;
}
.header-fixed {
  position: fixed;
  z-index: 99999;
}



// 移动端样式开始
.header3 {
  height: 45px;
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  background-color:#1c1c1c;
  justify-content: space-between;
  color: white;
}
// 移动端样式开结束


.header1 {
  height: 80px;
  display: flex;
  width: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(28, 28, 28, 0.9),
    rgba(28, 28, 28, 0.6) 60%,
    rgba(28, 28, 28, 0)
  );
  justify-content: space-between;
  color: white;
}
.header2 {
  /* height: 120px; */
  height: 80px;
  display: flex;
  width: 100%;
  background-color: white;
  justify-content: space-between;
  color: #404040;
}
.header1,
.header2 {
}
.header1 > .nav > ul > li span {
  color: white;
}
.header2 > .nav > ul > li span {
  color: #404040;
}


.logo {
  margin-left: 40px;
  margin-top: 16px;
}
.nav {
  margin-top: 16px;
  margin-right: 40px;
  font-size: 12px;
}
.navItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 50px;
}
.navItem:hover {
  text-decoration: none;
}
.navItem span {
  margin-top: 4px;
}
.navItem div {
  margin-top: 6px;
  margin-bottom: 1px;
}
.router-link-exact-active div {
  width: 100%;
  height: 1px;
  background-color: white;
  margin-top: 6px;
}
.header2 .navItem div {
  background-color: #404040;
}
.navItem img,
.navItem img {
  align-self: center;
}
.nav ul {
  display: flex;
  /* justify-content: flex-end; */
  /* justify-items: end; */
  align-items: flex-end;
}
.login {
  width: 90px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  margin: 0 0px 7px 25px;
}
.header2 .login {
  border: 1px solid #404040;
}
.login img {
  margin-right: 8px;
}
.language {
  height: 48px;
  display: flex;
  align-items: center;
}

@media screen and(max-width: 1440px) {
  .navItem {
    padding-left: 30px;
  }
}
@media screen and(max-width: 1024px) {
}
@media screen and(max-width: 992px) {
  .logo {
    margin-left: 20px;
  }
  .nav {
    margin-right: 20px;
  }
}
@media screen and(max-width: 810px) {
  .navItem {
    padding-left: 30px;
  }
}
@media screen and(max-width: 660px) {
}
</style>