<template>
  <div>
    <Header :movetoFirstSecond="movetoFirstSecond" :isFixed="true" />
    <Login />
    <div class="body container">
      <!-- 首屏 -->
      <div class="firstScreen">
        <div style="clear: both"></div>
        <img src="../assets/img/banner4-1.jpg" alt="" width="1000px" />
      </div>
      <!-- 主要信息 -->
      <div class="health_package">
        <div class="course" v-if="courses.length > 0">
          <div
            class="courseItem"
            :class="activated"
            @mouseenter="updateHoverState(true)"
            @mouseleave="updataHoverState(false)"
            v-for="(item, index) in courses"
            :key="index"
          >
            <img :src="item.img" alt="" />
            <p>{{ item.title }}</p>
          </div>
          <!-- <div class="project">
              <div></div>
              <img src="" alt="">
            </div> -->
        </div>
        <swiper ref="mySwiper" :options="swiperOption_">
            <swiper-slide v-for="(item, index) in projects[0]" :key="index">
              <div class="project">
                <div class="project_text">
                  <div>
                    <h3>{{ item.title }}</h3>
                    <p v-html="item.content"></p>
                  </div>
                </div>
                <div class="project_img">
                  <div class="picture">
                      <div>
                        <img :src="item.img" alt="" width="100%"/>
                      </div>
                      <p class="sign" v-html="item.sign"></p>
                    </div>
                </div>
              </div>
            </swiper-slide>
            <!-- <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div> -->
          </swiper>
      </div>
    </div>
    <Footer />
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
      isHover: false,
      HeathIndex: 0,
      courses: [
        { img: require("../assets/icon/spa2.png"), title: "排毒清体系列疗程" },
        {
          img: require("../assets/icon/sleep2.png"),
          title: "舒压睡眠系列疗程",
        },
        {
          img: require("../assets/icon/weight2.png"),
          title: "身姿和体重系列疗程",
        },
        {
          img: require("../assets/icon/parenting2.png"),
          title: "亲子系列疗程",
        },
      ],
      projects:[
        [
          {title:"3天2晚基础净化套餐",
          content:"2晚住宿<br>每日早中晚三餐<br>健康咨询和体质评估（45分钟）<br>淋巴排毒理疗（60分钟）<br>气内脏腹部排毒按摩（60分钟）<br>阿育吠陀鼻腔净化（60分钟）<br>绿茶肌肤排毒裹肤护理 （60分钟）<br>呼吸训练私教练习（60分钟）<br>免费参加每日工坊课程活动",img:require("../assets/img/package1-1.jpg"),sign:"清洁身体 平静内心<br>纯净身心初体验"},
          {title:"4天3晚基础排毒套餐",
          content:"3晚住宿<br>每日早中晚三餐<br>健康咨询和体质评估（45分钟）<br>淋巴排毒理疗（60分钟）<br>气内脏腹部排毒按摩（60分钟）<br>热石理疗（60分钟）<br>阿育吠陀鼻腔净化（60分钟）<br>绿茶肌肤排毒裹肤护理 （60分钟）<br>中医拔罐（60分钟）<br>呼吸训练私教练习（60分钟）<br>有氧排毒训练私教练习（60分钟）<br>免费参加每日工坊课程活动",img:require("../assets/img/package1-2.jpg"),sign:"净化身体 平静心情<br>尽享轻盈舒畅"},
          {title:"6天5晚基础排毒套餐",
          content:"5晚住宿<br>每日早中晚三餐<br>健康咨询和体质评估（45分钟）<br>淋巴排毒理疗（60分钟）<br>气内脏腹部排毒按摩（60分钟）<br>阿育吠陀双人四手按摩（60分钟）<br>行星颂钵理疗（60分钟）<br>热石理疗（60分钟）<br>阿育吠陀鼻腔净化（60分钟）<br>绿茶肌肤排毒裹肤护理 （60分钟）<br>茶粉磨砂去角质护理（60分钟）<br>中医拔罐（60分钟）<br>中医推拿（60分钟）<br>呼吸训练私教练习（60分钟）<br>瑜伽私教练习（60分钟）<br>有氧排毒训练私教练习（60分钟）<br>免费参加每日工坊课程活动",img:require("../assets/img/package1-3.jpg"),sign:"净化身体 疗愈身心<br>感受由内而外的纯净"}
          ]
      ]
    };
  },
  mounted() {},
  methods: {
    intoSecondscreen() {
      window.scrollY >= 100
        ? (this.movetoFirstSecond = true)
        : (this.movetoFirstSecond = false);
    },
    updateHOverState(isHover) {
      this.hoverState = isHover;
    },
  },
  computed:{
    swiperOption_() {
      let that = this;
      let option = {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          slideChange: function () {
            // 当swiper进行轮播的时候,将当前展示的banenr的下标传到data中
            const realIndex = this.realIndex;   //从0开始的下标
            const activeIndex = this.activeIndex;   //从1开始的下标
            // console.log( realIndex);
            that.carouselActiveIndex = realIndex;
            // 把swiper对象传出去，当后续点击下方链接可以切换到对应的banner
            // console.log(this.el);
            console.log(that.carouselActiveIndex);
            that.swiper2 =  this.el;
          },
        }
      };
      return option;
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
.course {
  display: flex;
  margin-top: 30px;
}

.courseItem {
  flex: 1;
  // border: 1px solid #404040;
  text-align: center;
  padding: 30px 0;
}
.course img {
  height: 41px;
  margin-bottom: 13px;
}
.course p {
  font-size: 16px;
}
.project{
  display: flex;
}
.project_text{
  flex:1;
  position: relative;
  background-color: #eef2f3;
}
.project_text>div{
   padding: 60px;
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.project_text h3{
  font-size: 16px;
  margin-bottom: 20px;
}
.project_text p{line-height: 28px;}
.project_img{
  flex:3;
  // position: relative;
}
.picture{position: relative;}
.picture .sign{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  font-size: 18px;
  line-height: 28px;
  color:white;
}




@media screen and(max-width: 1440px) {
  .main-info {
    padding: 0 120px;
  }
}
@media screen and(max-width: 1024px) {
  .main-info {
    padding: 0 60px;
  }
}
@media screen and(max-width: 992px) {
  .main-info {
    padding: 0 20px;
  }
}
@media screen and(max-width: 810px) {
  .img-preview > .preview:not(:last-child) {
    margin-right: 10px;
  }
}
@media screen and(max-width: 660px) {
}
</style>