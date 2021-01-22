<template>
  <div>
    <div class="footer" v-if="port == 1">
      <!-- tripadvisor评论 -->
      <div class="tripadvisor">
        <div class="tripadvisor-logo">
          <img src="../assets/icon/tripadvisor.png" alt="" width="175px" />
          <p>前往店评Prana璞纳养生酒店</p>
        </div>
        <!-- <div class="submit"> -->
        <input type="text" placeholder="请输入评论标题" />
        <button>提交</button>
        <!-- </div> -->
      </div>
      <!-- 最底下黑色区域 -->
      <div class="copyright">
        <!-- 左侧logo -->
        <div class="logo">
          <img
            src="../assets/icon/logo1.png"
            alt=""
            width="80px"
            height="48px"
          />
        </div>
        <!-- 右侧信息 -->
        <div class="info">
          <div class="nav">
            <router-link to="/">首页</router-link>
            <span class="line"></span>
            <router-link to="/overview">酒店概览</router-link>
            <span class="line"></span>
            <router-link to="/installation">酒店设施</router-link>
            <span class="line"></span>
            <router-link to="/package">养生套餐</router-link>
            <span class="line"></span>
            <router-link to="/item">养生项目</router-link>
            <span class="line"></span>
            <router-link to="/workshop">每日工坊</router-link>
            <span class="line"></span>
            <a href="http://www.ehome-vip.com">益宏集团</a>
          </div>
          <div class="address">
            <div class="address1">
              <img
                src="../assets/icon/address1.png"
                alt=""
                width="14px"
                height="14px"
              /><span
                >璞纳养生酒店集团&nbsp;&nbsp;&nbsp;地址：上海市恒南路688弄31号&nbsp;&nbsp;&nbsp;电话：021-33882933</span
              >
            </div>
            <div class="address2">
              <img
                src="../assets/icon/address1.png"
                alt=""
                width="14px"
                height="14px"
              /><span
                >舟山璞纳养生酒店&nbsp;&nbsp;&nbsp;地址：舟山普陀塘头村&nbsp;&nbsp;&nbsp;电话：021-33882933</span
              >
            </div>
          </div>
          <div class="copy">
            <p>
              条款和条件Cookie政策&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;版权所有©2021安浙江益宏静方投资有限公司<br>【免责声明】部分图片来源于网络，仅为示意，如有侵权，请联系删除
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="item-footer" v-if="port == 2">
      <div class="item-footer-one">
        <img src="../assets/icon/tripadvisor.png" width="107px" height="22px" alt="" /> 
        <p>前往店评Prana璞纳养生酒店</p>
      </div>
      <div class="item-footer-two">
        <input type="text" placeholder="请输入评论标题" />
        <button>提交</button>
      </div>

      <div class="company">
         <img src="../assets/icon/logo1.png" width="52px" alt="" />
        <div class="company-logo" style="margin-top:20px">
          <!-- <img src="../assets/icon/logo1.png" height="42px" alt="" /> -->
          <div class="company-text">
                <router-link to="/" style="height:18px">首页</router-link>
                <router-link to="/overview" style="height:18px">酒店概览</router-link>
                <router-link to="/installation" style="height:18px">酒店设施</router-link>
                <router-link to="/package" style="height:18px">养生套餐</router-link>
                <router-link to="/item" style="height:18px">养生项目</router-link>
                <router-link to="/workshop" style="height:18px">每日工坊</router-link>
                <a href="http://www.ehome-vip.com">益宏集团</a>
          </div>

          <div class="company-right">
            <div class="conpany-local">
                <img src="../assets/icon/address1.png" alt="" width="15px" height="15px"/>
                <div>璞纳养生酒店集团</div>
            </div>
            <div style="color: #fff; font-size: 10px;margin-top:12px;height:18px;">地址：上海市恒南路688弄31号</div>
            <div style="color: #fff; font-size: 10px;margin-top:12px;height:18px">电话：021-33882933</div>

            <div class="conpany-local" style="margin-top:30px">
                <img src="../assets/icon/address1.png" alt="" width="15px" height="15px"/>
                <div>舟山璞纳养生酒店</div>
            </div>
            <div style="color: #fff; font-size: 10px;margin-top:12px;height:18px">地址：舟山普陀塘头村</div>
            <div style="color: #fff; font-size: 10px;margin-top:12px;height:18px">电话：021-33882933</div>
        </div>
        </div>
        
        
     
      </div>
      
      <div class="navs">
        <p class="condition-one">条款和条件Cookie政策</p>
        <p class="condition-two">版权所有©2021安浙江益宏静方投资有限公司</p>
        <p class="condition-two">【免责声明】部分图片来源于网络，仅为示意，如有侵权，请联系删除</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // openLogPanel: false,
      port: 1, //1 pc端  2 移动端
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
  },
};
</script>

<style lang="scss" scoped>
// 手机端样式开始

.company-right{
  width: 55%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}

.company-logo{
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

.navs{
    width:100%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 14px 0px;
}
.condition-one {
  font-size: 10px;
  color: #404040;
}

.condition-two {
  font-size: 10px;
  color: #404040;
  margin-top: 10px;
  line-height: 15px;
  text-align: center;
}

.conpany-local {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 18px;
}

.conpany-local div {
  font-size: 10px;
  color: #fff;
  margin-left: 10px;
}

.company-text {
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0px 60px 0px 0px;
  box-sizing: border-box;

}

.company-text a {
  color: #ffffff;
  font-size: 10px;
  margin-bottom: 10px;
}

.company {
  width: 100%;
  background: #000;
  padding: 20px 30px 20px 30px;
  box-sizing: border-box;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.item-footer-one{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.item-footer-one p {
  font-size: 12px;
  margin-top: 4px;
}

.item-footer-two {
  width: 76%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.item-footer-two button {
  color: white;
  width: 36%;
  height: 30px;
  background-color: #1c1c1c;
  border: 1px solid #1c1c1c;
  margin-top: 8px;
  font-size: 12px;
}

.item-footer-two input {
  width: 70%;
  height: 30px;
  border: 1px solid #404040;
  padding: 0 0 0 10px;
  box-sizing: border-box;
  font-size: 12px;
}

.item-footer {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
}
// 手机端样式结束

.footer {
  margin-top: 68px;
  /* font-family:"黑体"; */
}
.tripadvisor {
  color: #404040;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 55px;
  width: 100%;
  font-size: 14px;
  box-sizing: border-box;
  padding: 0 240px;
}
.tripadvisor-logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 40px;
  font-size: 14px;
}
.tripadvisor-logo > img {
  margin-bottom: 4.5px;
}
.submit {
}
.tripadvisor > input {
  width: 400px;
  // width: 100%;
  height: 53px;
  border: 1px solid #404040;
  padding: 0 0 0 20px;
  font-size: 14px;
}
.tripadvisor button {
  color: white;
  width: 138px;
  height: 55px;
  padding: 0;
  background-color: #1c1c1c;
  border: 1px solid #1c1c1c;
}

.copyright {
  height: 225px;
  background-color: #1c1c1c;
  color: white;
  padding: 0 40px;
  display: flex;
  align-items: center;
  // justify-content: space-between;
}
.info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 12px;
}
.info > .nav {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.info > .nav > a {
  color: white;
  text-decoration: none;
  font-size: 12px;
}
.info > .nav > span {
  margin: 0 41px;
  width: 1px;
  height: 20px;
  background-color: white;
  display: block;
}
.info > .nav > span:last-child {
  margin: 0 0 0 41px;
}
.info > .address {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.address1,
.address2 {
  display: flex;
  align-items: center;
}
.info > .address img {
  margin-right: 9px;
}
.info > .address span {
  line-height: 18px;
}
.info .address2 {
  margin-left: 40px;
}
.info .copy{
    line-height: 28px;
    text-align: center;
}

@media screen and(max-width: 1440px) {
  .tripadvisor {
    padding: 0 120px;
  }
  .submit > input {
    width: 100%;
  }
  // .copyright {
  //   padding: 0 120px;
  // }
}
@media screen and(max-width: 1024px) {
  .tripadvisor {
    padding: 0 60px;
  }
  // .copyright {
  //   padding: 0 60px;
  // }
}
@media screen and(max-width: 992px) {
  .tripadvisor {
    padding: 0 20px;
  }
  // .copyright {
  //   padding: 0 20px;
  // }
}

@media screen and(max-width: 1170px) {
  .info > .address {
    flex-direction: column;
  }
  .address1 {
    margin-bottom: 10px;
  }
  .info > .nav {
    margin-bottom: 10px;
  }
  .info > .address {
    margin-bottom: 10px;
  }
}
@media screen and(max-width: 810px) {
  .tripadvisor-logo {
    margin-right: 20px;
  }
  .item-footer {
    margin-top: 40px;
  }
}
@media screen and(max-width: 660px) {
}
</style>