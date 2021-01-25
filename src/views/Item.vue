<template>
  <div>
    <Header :movetoFirstSecond="movetoFirstSecond" :isFixed="true" />
    <Login />
    <div class="body container">
      <!-- 首屏 -->
      <div class="firstScreen">

        <img src="../assets/img/banner5-1.jpg" alt=""  width="1000px" v-if="port == 1" />
        <div class="first-img" v-if="port == 2">
         <!--  <BookingHotel/> -->  
        </div>
        <div class="screen_title">
          <span></span><p>享受世界级的健康服务</p><span></span>
        </div>
        <div class="screen_text"  v-if="port == 1"><p>在舟山璞纳养生酒店，我们提供以下理疗养生项目：国际自然疗法、物理肌体理疗、茶园特色SPA、海洋疗法、中医理疗、运动和功法系列、课程和工坊系列、禅修和佛茶课程系列、养心课程系列。</p></div>
      </div>
      <!-- 主体内容 -->
      <div class="main-info">
        <div class="picture">
          <swiper ref="mySwiper" :options="swiperOptions1">
          <swiper-slide v-for="(item, index) in banners1" :key="index">
            <div>
              <img :src="item" alt="" width="100%"/>
            </div>
          </swiper-slide>
        </swiper>
        <div class="picture_instr" v-if="port == 1">
          <p>汇集全球自然疗法的精华 ：印度阿育吠陀、海洋疗愈、日本汤泉疗愈、美国物理肌体理疗、德国能量疗愈、中国的古中医......在舟山便能零距离体验来自世界各地最纯正的自然疗愈，享受世界级的健康服务。 <br>调理健康问题，追根溯源，从源头入手：我们不仅仅缓解疲惫、失眠等症状，更针对产生这些症状的深层原因——压力、情绪、饮食等诱因，追根 溯源，从源头入手，深入疗愈，从而彻底改善。<br>萃取本地物产精华，与大地连接，与自然一体：我们沿袭自然疗法的智慧，萃取本地静方茶园新鲜采摘的茶叶，精心研磨，用以做SPA原料，带来回归自然的极致体验。</p>
          <p>针对中国市场的特色——家庭亲子度假，我们还推出适合小朋友们养生体验和游乐的项目：儿童水果SPA，亲子盐雾呼吸疗愈、亲子有机农场，专属儿童泳池、儿童水上乐园和室内儿童乐园等等。这样全家人都可以享受一个完美的健康假期！</p>
        </div>

         <div class="picture_instr" style="align-items: center;justify-content: center;" v-if="port == 2">
          <p>汇集全球自然疗法的精华 ：印度阿育吠陀、海洋疗愈、日本汤泉疗愈、美国物理肌体理疗、德国能量疗愈、中国的古中医......在舟山便能零距离体验来自世界各地最纯正的自然疗愈，享受世界级的健康服务。</p>
          <div class="more"  @click="show1 = !show1" v-if="show1 == false">
            查看更多
          </div>
          <el-collapse-transition>
            <p v-show="show1">
             调理健康问题，追根溯源，从源头入手：我们不仅仅缓解疲惫、失眠等症状，更针对产生这些症状的深层原因——压力、情绪、饮食等诱因，追根 溯源，从源头入手，深入疗愈，从而彻底改善。<br>萃取本地物产精华，与大地连接，与自然一体：我们沿袭自然疗法的智慧，萃取本地静方茶园新鲜采摘的茶叶，精心研磨，用以做SPA原料，带来回归自然的极致体验。
             针对中国市场的特色——家庭亲子度假，我们还推出适合小朋友们养生体验和游乐的项目：儿童水果SPA，亲子盐雾呼吸疗愈、亲子有机农场，专属儿童泳池、儿童水上乐园和室内儿童乐园等等。这样全家人都可以享受一个完美的健康假期！
            </p>
          </el-collapse-transition>
          <div class="more" @click="show1 = !show1" v-if="show1 == true">
            收起
          </div>
        </div>
        </div>
      </div>
      <!-- 特色养身项目 -->
      <div class="specialHealthItem"><span>特色养生项目</span></div>
      <div class="special_items">
          <div class="special_item" v-for="(item,index) in healthItem" :key="index">
            <div>
              <div class="item_title"><p>{{item.title}}</p></div>
              <div class="item_img">
                <img :src="item.img" alt="" width="100%">
              </div>
            </div>
            <p>{{item.sign}}</p>
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
      show1:false,
      port: 1, //1 pc端  2 移动端
      movetoFirstSecond: false,
      banners1: [
        require("../assets/img/banner5-2-1.jpg"),
        require("../assets/img/banner5-2-2.jpg"),
        require("../assets/img/banner5-2-3.jpg"),
      ],
      healthItem:[
        {title:"盐雾呼吸疗愈",sign:"让全家人的呼吸系统彻底净化",img:require("../assets/img/specialProjects1.jpg")},
        {title:"五大疗愈汤泉",sign:"身心放松的同时唤醒自身免疫力",img:require("../assets/img/specialProjects2.jpg")},
        {title:"阿育吠陀疗法",sign:"体验印度的古老养生智慧",img:require("../assets/img/specialProjects3.jpg")},
        {title:"特色茶疗和海疗",sign:"利用本地茶园和海洋资源疗愈身心",img:require("../assets/img/specialProjects4.jpg")},
        {title:"儿童水果SPA",sign:"新奇又好玩，专为儿童设计",img:require("../assets/img/specialProjects5.jpg")},
      ],
      swiperOptions1: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        speed:1500,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      }
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

// 移动端样式开始

.first-img{
  width: 100%;
  height: 550px;
  background: url("../assets/img/banner5-1.jpg") center center no-repeat;
  background-size: cover;
}


.picture_instr{
  display: flex;
  text-align: justify;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
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
  margin-bottom: 32px;
}
// 移动端样式结束

.firstScreen{position: relative;;}
.screen_title{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.screen_title p{font-size: 24px;color: white;margin: 20px 0;}
.screen_title span{
  width: 60%;
  height: 1px;
  background-color: white;
  display:  block;
  }
.screen_title span:last-child{
  position: absolute;
  right: 0;
}
.screen_text{position: absolute;bottom: 30px;padding: 20px;text-align:center;width: 100%;box-sizing: border-box;}
.screen_text p{color: white;line-height: 20px;text-align:center;}

.main-info{padding: 0 180px}
.picture{margin: 50px 0 30px 0;}

.picture_instr p{line-height: 28px;margin-top: 20px;}

.specialHealthItem{
  width: 100%;
  text-align: center;
  margin: 60px auto 30px auto;
}
.specialHealthItem span{
  font-size: 16px;
  padding: 10px 20px;
  border: 1px solid rgb(0,65,56);
  color: rgb(0,65,56);
}

.special_items{display:flex}
.special_item>div{position:relative;}
.item_title{
  background-color: rgba(0,65,56,0.5);
  position:absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: white;
  padding: 10px 0;
}
.item_title{text-align: center;}
// .item_img{position: relative;}
.item_img img{vertical-align: middle;transition: all 0.6s;z-index: 0;}
// .item_img img:hover{transform: scale(1.1);}
.special_item>p{margin-top: 10px;text-align: center;line-height: 20px;}

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
   .img-preview>.preview:not(:last-child){
  margin-right: 10px;
}

  .screen_title p{
    font-size: 14px;
  }

  .picture{
    margin: 20px 0px 30px 0px;
  }

  .picture_instr p{line-height: 28px;margin-top:6px;}

  .special_items{
    flex-direction: column;
  }

  .special_item > p{
    margin-bottom: 20px;
  }

  .specialHealthItem{
    margin: 0px auto 30px auto;
  }

  .screen_title p{
    margin: 10px 0;
  }

  .specialHealthItem span{
    font-size: 14px;
    padding: 5px 10px;
    box-sizing: border-box;
  }
}

</style>