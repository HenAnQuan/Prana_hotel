<template>
  <div>
    <Header :movetoFirstSecond="movetoFirstSecond" :isFixed="true" />
    <Login />
    <div class="body container">
      <!-- 首屏 -->
      <div class="firstScreen" v-if="port == 1">
        <div style="clear: both"></div>
        <img src="../assets/img/banner4-1.jpg" alt="" width="1000px" />
      </div>

      <div class="firstScreens" v-if="port == 2"></div>

      <div class="health_package">
        <div class="course" v-if="courses.length > 0">
          <!-- <div
            class="courseItem"
            :class="activated"
            @mouseenter="updateHoverState(true,index)"
            @mouseleave="updataHoverState(false,index)"
            v-for="(item, index) in courses"
            :key="index"
          > -->
          <div
            class="courseItem"
            :class="{ activated: activeIndex == index }"
            @click="updateHoverState(true, index)"
            v-for="(item, index) in courses"
            :key="index"
          >
            <img :src="item.img" alt="" />

            <p :style="{'color': (activeIndex==index ? '#fff':'#004138')}" v-if="port == 2" v-html="item.title_port"></p>
            <p v-if="port == 1">{{ item.title }}</p>
          </div>
          <!-- <div class="project">
              <div></div>
              <img src="" alt="">
            </div> -->
        </div>

         <swiper ref="mySwiper" :options="swiperOption_" v-if="port == 1">
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
                      <img :src="item.img" alt="" width="100%" />
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

        <div class="brand-storys" v-if="port == 2">
         
            <div class="brand brand3" v-for="(item, index) in courses[navindex].list" :key="index">
              <div class="brands-img">
                <img src="../assets/img/package1-1.jpg" alt="" />
              </div>
              <div class="brand-infos">
                <div class="brand-center">{{item.title}}</div>
                <div class="brand-line"></div>
                <p class="brand-content" v-html="item.content"></p>
                <a class="brand-mores"  @click="item.show = !item.show" v-if="item.show == false"><span>更多</span></a>
                <el-collapse-transition>
                    <p v-show="item.show" class="brand-content" v-html="item.contentmore"></p>
                </el-collapse-transition>
                <a class="brand-mores"  @click="item.show = !item.show" v-if="item.show == true"><span>收起</span></a>
              </div>
            </div>
         
        </div>


      </div>
      <Footer />
    </div>
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
      show3:false,
      port: 1, //1 pc端  2 移动端
      movetoFirstSecond: false,
      HeathIndex: 0,
      courses: [
        {
          img: require("../assets/icon/spa2.png"),
          title: "排毒清体系列疗程",
          title_port: "排毒清体</br>系列疗程",
          list: [
            { show:false,
              img: "../assets/img/package1-1.jpg",
              title: "3天2晚基础净化套餐",
              content:"2晚住宿<br>每日早中晚三餐<br>健康咨询和体质评估（45分钟）<br>淋巴排毒理疗（60分钟）",
              contentmore:"气内脏腹部排毒按摩（60分钟）<br>阿育吠陀鼻腔净化（60分钟）<br>绿茶肌肤排毒裹肤护理 （60分钟）<br>呼吸训练私教练习（60分钟）<br>免费参加每日工坊课程活动",
            },
            { show:false,
              img: "../assets/img/package1-1.jpg",
              title: "4天3晚基础排毒套餐",
              content:"2晚住宿<br>每日早中晚三餐<br>健康咨询和体质评估（45分钟）<br>淋巴排毒理疗（60分钟）",
              contentmore:"气内脏腹部排毒按摩（60分钟）<br>阿育吠陀鼻腔净化（60分钟）<br>绿茶肌肤排毒裹肤护理 （60分钟）<br>呼吸训练私教练习（60分钟）<br>免费参加每日工坊课程活动",
            },
            { show:false,
              img: "../assets/img/package1-1.jpg",
              title: "6天5晚基础排毒套餐",
              content:"2晚住宿<br>每日早中晚三餐<br>健康咨询和体质评估（45分钟）<br>淋巴排毒理疗（60分钟）",
              contentmore:"气内脏腹部排毒按摩（60分钟）<br>阿育吠陀鼻腔净化（60分钟）<br>绿茶肌肤排毒裹肤护理 （60分钟）<br>呼吸训练私教练习（60分钟）<br>免费参加每日工坊课程活动",
            },
          ],
        },
        {
          img: require("../assets/icon/sleep2.png"),
          title: "舒压睡眠系列疗程",
          title_port: "舒压睡眠</br>系列疗程",
          list: [
            { show:false,
              img: "../assets/img/package1-1.jpg",
              title: "3天2晚基础净化套餐",
              content:"2晚住宿<br>每日早中晚三餐<br>健康咨询和体质评估（45分钟）<br>淋巴排毒理疗（60分钟）",
              contentmore:"气内脏腹部排毒按摩（60分钟）<br>阿育吠陀鼻腔净化（60分钟）<br>绿茶肌肤排毒裹肤护理 （60分钟）<br>呼吸训练私教练习（60分钟）<br>免费参加每日工坊课程活动",
            },
            { show:false,
              img: "../assets/img/package1-1.jpg",
              title: "4天3晚基础排毒套餐",
              content:"2晚住宿<br>每日早中晚三餐<br>健康咨询和体质评估（45分钟）<br>淋巴排毒理疗（60分钟）",
              contentmore:"气内脏腹部排毒按摩（60分钟）<br>阿育吠陀鼻腔净化（60分钟）<br>绿茶肌肤排毒裹肤护理 （60分钟）<br>呼吸训练私教练习（60分钟）<br>免费参加每日工坊课程活动",
            },
            { show:false,
              img: "../assets/img/package1-1.jpg",
              title: "6天5晚基础排毒套餐",
              content:"2晚住宿<br>每日早中晚三餐<br>健康咨询和体质评估（45分钟）<br>淋巴排毒理疗（60分钟）",
              contentmore:"气内脏腹部排毒按摩（60分钟）<br>阿育吠陀鼻腔净化（60分钟）<br>绿茶肌肤排毒裹肤护理 （60分钟）<br>呼吸训练私教练习（60分钟）<br>免费参加每日工坊课程活动",
            },
          ],
        },
        {
          img: require("../assets/icon/weight2.png"),
          title: "身姿和体重系列疗程",
          title_port: "身姿和体重</br>系列疗程",
          list: [
            { show:false,
              img: "../assets/img/package1-1.jpg",
              title: "3天2晚基础净化套餐",
              content:"2晚住宿<br>每日早中晚三餐<br>健康咨询和体质评估（45分钟）<br>淋巴排毒理疗（60分钟）",
              contentmore:"气内脏腹部排毒按摩（60分钟）<br>阿育吠陀鼻腔净化（60分钟）<br>绿茶肌肤排毒裹肤护理 （60分钟）<br>呼吸训练私教练习（60分钟）<br>免费参加每日工坊课程活动",
            },
            { show:false,
              img: "../assets/img/package1-1.jpg",
              title: "4天3晚基础排毒套餐",
              content:"2晚住宿<br>每日早中晚三餐<br>健康咨询和体质评估（45分钟）<br>淋巴排毒理疗（60分钟）",
              contentmore:"气内脏腹部排毒按摩（60分钟）<br>阿育吠陀鼻腔净化（60分钟）<br>绿茶肌肤排毒裹肤护理 （60分钟）<br>呼吸训练私教练习（60分钟）<br>免费参加每日工坊课程活动",
            },
            { show:false,
              img: "../assets/img/package1-1.jpg",
              title: "6天5晚基础排毒套餐",
              content:"2晚住宿<br>每日早中晚三餐<br>健康咨询和体质评估（45分钟）<br>淋巴排毒理疗（60分钟）",
              contentmore:"气内脏腹部排毒按摩（60分钟）<br>阿育吠陀鼻腔净化（60分钟）<br>绿茶肌肤排毒裹肤护理 （60分钟）<br>呼吸训练私教练习（60分钟）<br>免费参加每日工坊课程活动",
            },
          ],
        },
        {
          img: require("../assets/icon/parenting2.png"),
          title: "亲子系列疗程",
          title_port: "亲子</br>系列疗程",
           list: [
            { show:false,
              img: "../assets/img/package1-1.jpg",
              title: "3天2晚基础净化套餐",
              content:"2晚住宿<br>每日早中晚三餐<br>健康咨询和体质评估（45分钟）<br>淋巴排毒理疗（60分钟）",
              contentmore:"气内脏腹部排毒按摩（60分钟）<br>阿育吠陀鼻腔净化（60分钟）<br>绿茶肌肤排毒裹肤护理 （60分钟）<br>呼吸训练私教练习（60分钟）<br>免费参加每日工坊课程活动",
            },
            { show:false,
              img: "../assets/img/package1-1.jpg",
              title: "4天3晚基础排毒套餐",
              content:"2晚住宿<br>每日早中晚三餐<br>健康咨询和体质评估（45分钟）<br>淋巴排毒理疗（60分钟）",
              contentmore:"气内脏腹部排毒按摩（60分钟）<br>阿育吠陀鼻腔净化（60分钟）<br>绿茶肌肤排毒裹肤护理 （60分钟）<br>呼吸训练私教练习（60分钟）<br>免费参加每日工坊课程活动",
            },
            { show:false,
              img: "../assets/img/package1-1.jpg",
              title: "6天5晚基础排毒套餐",
              content:"2晚住宿<br>每日早中晚三餐<br>健康咨询和体质评估（45分钟）<br>淋巴排毒理疗（60分钟）",
              contentmore:"气内脏腹部排毒按摩（60分钟）<br>阿育吠陀鼻腔净化（60分钟）<br>绿茶肌肤排毒裹肤护理 （60分钟）<br>呼吸训练私教练习（60分钟）<br>免费参加每日工坊课程活动",
            },
          ],
        },
      ],

      projects: [
        [
          {
            title: "3天2晚基础净化套餐",
            content:
              "2晚住宿<br>每日早中晚三餐<br>健康咨询和体质评估（45分钟）<br>淋巴排毒理疗（60分钟）<br>气内脏腹部排毒按摩（60分钟）<br>阿育吠陀鼻腔净化（60分钟）<br>绿茶肌肤排毒裹肤护理 （60分钟）<br>呼吸训练私教练习（60分钟）<br>免费参加每日工坊课程活动",
            img: require("../assets/img/package1-1.jpg"),
            sign: "清洁身体 平静内心<br>纯净身心初体验",
          },
          {
            title: "4天3晚基础排毒套餐",
            content:
              "3晚住宿<br>每日早中晚三餐<br>健康咨询和体质评估（45分钟）<br>淋巴排毒理疗（60分钟）<br>气内脏腹部排毒按摩（60分钟）<br>热石理疗（60分钟）<br>阿育吠陀鼻腔净化（60分钟）<br>绿茶肌肤排毒裹肤护理 （60分钟）<br>中医拔罐（60分钟）<br>呼吸训练私教练习（60分钟）<br>有氧排毒训练私教练习（60分钟）<br>免费参加每日工坊课程活动",
            img: require("../assets/img/package1-2.jpg"),
            sign: "净化身体 平静心情<br>尽享轻盈舒畅",
          },
          {
            title: "6天5晚基础排毒套餐",
            content:
              "5晚住宿<br>每日早中晚三餐<br>健康咨询和体质评估（45分钟）<br>淋巴排毒理疗（60分钟）<br>气内脏腹部排毒按摩（60分钟）<br>阿育吠陀双人四手按摩（60分钟）<br>行星颂钵理疗（60分钟）<br>热石理疗（60分钟）<br>阿育吠陀鼻腔净化（60分钟）<br>绿茶肌肤排毒裹肤护理 （60分钟）<br>茶粉磨砂去角质护理（60分钟）<br>中医拔罐（60分钟）<br>中医推拿（60分钟）<br>呼吸训练私教练习（60分钟）<br>瑜伽私教练习（60分钟）<br>有氧排毒训练私教练习（60分钟）<br>免费参加每日工坊课程活动",
            img: require("../assets/img/package1-3.jpg"),
            sign: "净化身体 疗愈身心<br>感受由内而外的纯净",
          },
        ],
      ],
      hoverState: false,
      activeIndex: 10,
      navindex: 0,
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
      window.scrollY >= document.documentElement.clientHeight - 80
        ? (this.movetoFirstSecond = true)
        : (this.movetoFirstSecond = false);
    },
    updateHoverState(isHover, index) {
      console.log("选择的下标index", index);
      this.navindex = index;
      this.hoverState = isHover;
      this.activeIndex = index;
    },
  },
  computed: {
    swiperOption_() {
      let that = this;
      let option = {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
        // autoplay: {
        //   delay: 4000,
        //   disableOnInteraction: false,
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          slideChange: function () {
            // 当swiper进行轮播的时候,将当前展示的banenr的下标传到data中
            const realIndex = this.realIndex; //从0开始的下标
            const activeIndex = this.activeIndex; //从1开始的下标
            // console.log( realIndex);
            that.carouselActiveIndex = realIndex;
            // 把swiper对象传出去，当后续点击下方链接可以切换到对应的banner
            // console.log(this.el);
            console.log(that.carouselActiveIndex);
            that.swiper2 = this.el;
          },
        },
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
// 移动端样式开始
.brand-line {
  width: 200px;
  height: 1px;
  background-color: #1c1c1c;
  margin-bottom: 12px;
}

.brand-content {
  padding: 0px 0px 0px 80px;
  box-sizing: border-box;
  width: 100%;
  text-align: justify;
  text-justify: inter-ideograph;
  font-size: 14px;
  line-height: 31px;
}

.brand-mores {
  width: 100px;
  height: 35px;
  border: 1px solid #1c1c1c;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1c1c1c;
  font-size: 12px;
  margin-bottom: 26px;
  margin-top: 10px;
}

.brand-center {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin-top: 12px;
  margin-bottom: 9px;
}

.brand-img img {
  width: 100%;
  // height: 250px;
}
.brand-infos {
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
.brand-storys {
  display: flex;
  // align-items: center;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}
.brand-storys > .brand:last-child > .brand-infos {
  margin-bottom: 16px;
}

.brand {
  // width: 515px;
  flex: 1;
}

.brands-img {
  // width: 515px;

  width: 100%;
  height: 100%;
  text-align: center;
  padding: 26px 12px 0 12px;
  box-sizing: border-box;
}

.brands-img img {
  width: 100%;
  height: 250px;
  vertical-align: middle;
}

.brand1,
.brand2 {
  margin-right: 20px;
}

.firstScreens {
  width: 100%;
  height: 550px;
  background: url("../assets/img/banner4-1.jpg") center center no-repeat;
  background-size: cover;
}
// 移动端样式结束

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
  color: rgb(0, 65, 56);
}
.project {
  display: flex;
}
.project_text {
  flex: 1;
  position: relative;
  background-color: white;
}
.project_text > div {
  padding: 60px;
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.project_text h3 {
  font-size: 16px;
  margin-bottom: 20px;
}
.project_text p {
  line-height: 28px;
}
.project_img {
  flex: 3;
  // position: relative;
}
.picture {
  position: relative;
}
.picture .sign {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 18px;
  line-height: 28px;
  color: white;
}

.activated {
  background: #1c1c1c;
  color: white;
}
.activated p {
  color: white;
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
  .brand-img {
    border: 0px solid #fff;
    padding: 0px;
  }
  .main-info {
    padding: 0 20px;
  }
  .img-preview > .preview:not(:last-child) {
    margin-right: 10px;
  }
  .course {
    width: 100%;
    margin-top: 42px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  

  .course img {
    margin-bottom: 6px;
    height: 25px;
  }

  .course p {
    padding: 0px 13px 0px 13px;
    box-sizing: border-box;
    font-size: 12px;
    color: rgb(0, 65, 56);
    line-height: 15px;
  }

  .courseItems {
    width: 50%;
    padding: 10px 0;
    text-align: center;
  }

  .courseItem {
    width: 50%;
    padding: 10px 0;
  }

  .picture .sign {
    font-size: 14px;
  }

  .brand-mores {
    font-size: 12px;
  }

  .brand-content {
    font-size: 12px;
    line-height: 26px;
  }
  .brand-center{
     font-size: 14px;
  }
}
</style>