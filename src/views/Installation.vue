<template>
  <div>
    <Header :movetoFirstSecond="movetoFirstSecond" :isFixed="true" />
    <Login />
    <div class="body container">
      <!-- 首屏 -->
      <div class="firstScreen">
        <div style="clear: both"></div>
        <img src="../assets/img/banner3-1.jpg" v-if="port == 1" alt="" width="1000px" />
        <img src="../assets/img/banner3-1.jpg" v-if="port == 2" alt="" height="350px" width="1000px" />
      </div>

      <!-- 正文内容 -->
      <div class="main-info" v-if="port == 1">
        <div class="item" v-for="(item,index) in items" :key="index">
          <div class="item_img">
            <img :src="item.img" alt="" width="100%">
          </div>
          <div class="item_text">
            <div>
              <div class="item_title">{{item.title}}</div>
              <div class="item_content">{{item.content}}</div>
            </div>
          </div>
        </div>
      </div>

       <!-- 正文内容 -->
      <div class="brand-storys" v-if="port == 2">
         <div class="brand brand3" style="margin-top:20px" v-for="(item,index) in items" :key="index">
            <div class="brands-img">
              <img :src="item.img"  alt="">
            </div>
            <div class="brand-infos" style="padding-bottom:20px">
              <div class="brand-center">{{item.title}}</div>
              <div class="brand-line"></div>
              <p class="brand-content">{{item.content}}</p>
             
            </div>
          </div>
      </div>


    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Login from "@/components/Login.vue";
export default {
  name: "BrandStroy",
  components: {
    Header,
    Footer,
    Login,
  },
  data() {
    return {
      movetoFirstSecond: false,
      port: 1,
      show1: false,
      show2: false,
      show3: false,
      items:[
        {title:"客房",img:require("../assets/img/guestRoom.jpg"),content:"我们提供80间温暖疗愈的客房及套房。客房设计温暖而质朴，在客房设施中贯穿能量石、喜马拉雅盐灯、纯净棉麻等设计元素，营造返璞归真的疗愈之境。"},
        {title:"餐厅",img:require("../assets/img/restaurant.jpg"),content:"我们备受赞赏的素食餐厅尽可能选用各种有机本土食材，用心烹制精致美味的当地佳肴和国际菜品。我们的健康餐点选用的食材大多为纯天然的，且完整保留了其原汁原味和营养价值，可为旅客补充酶、维生素和矿物质等重要元素。"},
        {title:"养生中心",img:require("../assets/img/healthCenter.jpg"),content:"养生中心是我们的特色和亮点。在养生中心，您可以享受到来自全球各地的养生疗愈服务，包括理疗和SPA、健身和功法、课程和工坊等等。"},
        {title:"汤泉和盐雾疗愈室",img:require("../assets/img/hotSpring.jpg"),content:"在近1000平米的汤泉和盐雾室中放松身心，享受水和热带给身体由内而外的疗愈。我们的汤泉技术来自日本，包含铁泉——气血之汤、氡温泉——贵族养生汤、偏硅酸温泉——瘦身汤，以及促进呼吸道净化排毒的烟雾疗愈。"},
        {title:"会议",img:require("../assets/img/conferenceCenter.jpg"),content:"酒店设有400平米无柱宴会厅和120平米及60平米的会议室，无论是员工团建、拓展活动还是团队住宿，我们都是您在舟山举办商业活动的独特场所。"},
      ],
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
    intoSecondscreen() {
      window.scrollY >= document.documentElement.clientHeight-80 ? this.movetoFirstSecond = true : this.movetoFirstSecond = false;
    },
  },
  created() {
    // 添加监听，实时获取滚动条滚动的高度
    window.addEventListener("scroll", this.intoSecondscreen);
    this.intoSecondscreen();
  },
  destroyed() {
    window.removeEventListener("scroll", this.intoSecondscreen);
  },
};
</script>

<style lang="scss" scoped>
//移动端样式开始

.brand-storys{
  display: flex;
  // align-items: center;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}
.more {
  width: 80px;
  height: 32px;
  border: 1px solid #1c1c1c;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-top: 14px;
  margin-bottom: 24px;
}
.brand-infos{
  margin: 0 12px;
  padding: 12px 15px 0px 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #404040;
  border-top: none;
}

.brand-info{
  padding: 12px 15px 0px 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: none;
}

.brand1,.brand2{
  margin-right: 20px;
}

.brand-storys{
  display: flex;
  // align-items: center;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}

.brand-img{
   // width: 515px;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 0px;
  box-sizing: border-box;
}

.brand-img img{
   width: 100%;
  height: 350px;
  vertical-align: middle;
}

.brands-img{
  // width: 515px;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 0px 12px 0 12px;
  box-sizing: border-box;
}

.brands-img img{
  width: 100%;
  height: 250px;
  vertical-align: middle;
}
.brand-line{
  width: 200px;
  height: 1px;
  background-color: #1c1c1c;
  margin-bottom: 12px;
}

.brand-content{
  text-align:justify;
  text-justify:inter-ideograph;
  font-size: 14px;
  line-height: 25px;
  margin-bottom: 20px;
}

.brand-center{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin-top: 12px;
  margin-bottom: 9px;
}

//移动端样式结束


.main-info  {
    padding: 0 180px;
  }
.item{
  display: flex;
  margin-top: 40px;
}
.item_img{
  flex: 4;  
  overflow: hidden;
}
.item_img img{
  transition: all 0.6s;
}
.item_img img:hover{
  transform: scale(1.1);
}
.item_text{
  flex: 3;
  padding: 20px;
  position: relative;
  // overflow: hidden;
}
.item_text>div{
  position: absolute;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  overflow: hidden;
}
.item_text .item_title{
  font-size: 16px;
  color: rgb(0,65,56);
  margin-bottom: 20px;
}
.item_content{
  line-height: 28px;
  text-align: justify;
}


@media screen and(max-width: 1440px) {
  .main-info  {
    padding: 0 120px;
  }
}
@media screen and(max-width: 1024px) {
  .main-info  {
    padding: 0 60px;
  }
}
@media screen and(max-width: 992px) {
  .main-info  {
    padding: 0 20px;
  }

  .main-info  {
    padding: 0 20px;
  }

  
  .brand-content{
    font-size: 12px;
    margin-bottom: 0px;
  }

  .brand-mores{
    font-size: 12px;
  }

  .item_content{line-height: 20px;}
}

</style>