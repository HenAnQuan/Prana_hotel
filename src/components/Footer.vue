<template>
  <div class="footer">
      <!-- tripadvisor评论 -->
      <div class="tripadvisor">
          <div class="tripadvisor-logo"><img src="../assets/icon/tripadvisor.png" alt="" width="175px"><p>前往店评Prana璞纳养生酒店</p></div>
          <!-- <div class="submit"> -->
              <input type="text" placeholder="请输入评论标题"/>
              <button>提交</button>
            <!-- </div> -->
      </div>
      <!-- 最底下黑色区域 -->
      <div class="copyright">
          <!-- 左侧logo -->
          <div class="logo">
              <img src="../assets/icon/logo1.png" alt="" width="80px" height="48px">
          </div>
          <!-- 右侧信息 -->
          <div class="info">
              <div class="nav">
                  <a href="">酒店和度假村</a>
                  <span class="line"></span>
                  <a href="">品牌故事</a>
                  <span class="line"></span>
                  <a href="">养生疗愈</a>
                  <span class="line"></span>
                  <a href="">酒店合作</a>
                  <span class="line"></span>
                  <a href="">登录</a>
                  <span class="line"></span>
              </div>
              <div class="address">
                  <div class="address1"><img src="../assets/icon/address1.png" alt="" width="18px" height="18px"><span>璞纳养生酒店集团&nbsp;&nbsp;&nbsp;地址：上海市恒南路688弄31号&nbsp;&nbsp;&nbsp;电话：021-33882933</span> </div>
                  <div class="address2"><img src="../assets/icon/address1.png" alt="" width="18px" height="18px"><span>舟山璞纳养生酒店&nbsp;&nbsp;&nbsp;地址：舟山市塘头村&nbsp;&nbsp;&nbsp;电话：021-33882933</span> </div>
              </div>
              <div class="copy">
                  <p>条款和条件Cookie政策&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;版权所有©2021安浙江益宏静方投资有限公司</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .footer{
        margin-top: 68px;
        /* font-family:"黑体"; */
    }
    .tripadvisor{
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
    .tripadvisor-logo{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-right: 40px;
        font-size: 14px;
    }
    .tripadvisor-logo>img{
        margin-bottom:4.5px ;
    }
    .submit{

    }
    .tripadvisor>input{
        width: 400px;
        // width: 100%;
        height: 53px;
        border: 1px solid #404040;
        padding: 0 0 0 20px;
        font-size: 14px;
    }
    .tripadvisor button{
        color: white;
        width: 138px;
        height: 55px;
        padding: 0;
        background-color: #1c1c1c;
        border: 1px solid #1c1c1c;
    }



.copyright{
    height: 225px;
    background-color: #1c1c1c;
    color: white;
    padding: 0 240px;
    display: flex;
    align-items: center;
    // justify-content: space-between;
}
.info{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: white;
    font-size: 12px;
}
.info>.nav{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.info>.nav>a{
    color: white;
    text-decoration: none;
    font-size: 12px;
}
.info>.nav>span{
    margin: 0 41px;
    width: 1px;
    height: 20px;
    background-color: white;
    display: block;
}
.info>.nav>span:last-child{
    margin: 0 0 0 41px;
}
.info>.address{
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}
.address1,.address2{
    display: flex;
    align-items: center;
}
.info>.address img{
    margin-right: 9px;
}
.info>.address span{
    line-height: 18px;
}
.info .address2{
    margin-left: 40px;
}




@media screen and(max-width: 1440px) {
  .tripadvisor{padding: 0 120px;}
  .submit>input{width: 100%;} 
  .copyright{padding: 0 120px;}
}
@media screen and(max-width: 1024px) {
  .tripadvisor{padding: 0 60px;}
  .copyright{padding: 0 60px;}
}
@media screen and(max-width: 992px) {
  .tripadvisor{padding: 0 20px;}
  .copyright{padding: 0 20px;}
}

@media screen and(max-width: 1170px) {
  .info>.address{flex-direction: column;}
  .address1{margin-bottom: 10px;}
  .info>.nav{margin-bottom: 10px;}
  .info>.address{margin-bottom: 10px;}
}
@media screen and(max-width: 810px) {
  .tripadvisor-logo{margin-right: 20px;}
}
@media screen and(max-width: 660px) {
}
</style>