<template>
  <div class="container">
    <Header :movetoFirstSecond="movetoFirstSecond" :isFixed="true"></Header>
    <Login />
    <div class="body">
      <!-- 首屏背景 -->
      <div class="firstScreen">
        <swiper ref="mySwiper" :options="swiperOptions1">
          <swiper-slide v-for="(item, index) in banners1" :key="index">
            <div>
              <div class="title">
                <p>{{ title[index] }}</p>
              </div>
              <img :src="item" alt="" />
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <!-- 酒店预订，等开业后再放上去 -->
      <!-- <BookingHotel /> -->

      <!-- 欢迎光临 -->
      <div class="welcome">
        <div class="welText">
          <div class="wel_title">
            <h2>欢迎光临</h2>
            <h3>舟山璞纳养生酒店</h3>
          </div>
          <div class="wel_textInfo">
            <p>
              舟山璞纳养生酒店为追求身心健康的旅行者带来独一无二的假期体验：<br />在享受悠然时光的同时，提升健康状况，并获得持续平衡的生活方式。
              “走遍千山万水，也不过是为了找到一条走回自己内心的路。”舟山璞纳养生酒店，正是这条道路上的教育、哺育和传播能量的圣地。
            </p>
          </div>
        </div>
        <!-- <div class="welLine"></div> -->
      </div>

      <!-- 酒店链接轮播图 -->
      <swiper ref="mySwiper" :options="swiperOption_">
        <swiper-slide v-for="(item, index) in banners2" :key="index">
          <div class="carousel_board">
            <div class="explore_more">
              <div>
                <p>{{ hotelInstr[index] }}</p>
                <div class="more">
                  <div>
                    更多<img
                      src="../assets/icon/more.png"
                      alt=""
                      width="14px"
                      height="14px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="hotel_show">
              <img :src="item" alt="" width="100%" />
            </div>
          </div>
        </swiper-slide>
        <!-- <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div> -->
      </swiper>
      <div class="hotel_link">
        <a href="" :class="{'activated':carouselActiveIndex==0}" @mouseenter="updateHoverState(true,0)" @mouseleave="updateHoverState(false,0)">酒店概览</a>
        <a href="" :class="{'activated':carouselActiveIndex==1}" @mouseenter="updateHoverState(true,1)" @mouseleave="updateHoverState(false,1)">酒店设施</a>
        <a href="" :class="{'activated':carouselActiveIndex==2}" @mouseenter="updateHoverState(true,2)" @mouseleave="updateHoverState(false,2)">养生套餐</a>
        <a href="" :class="{'activated':carouselActiveIndex==3}" @mouseenter="updateHoverState(true,3)" @mouseleave="updateHoverState(false,3)">每日工坊</a>
        <a href="" :class="{'activated':carouselActiveIndex==4}" @mouseenter="updateHoverState(true,4)" @mouseleave="updateHoverState(false,4)">温泉和盐雾疗愈室</a>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import BookingHotel from "@/components/BookingHotel.vue";
import Login from "@/components/Login.vue";

export default {
  name: "Index",
  components: {
    Header,
    Footer,
    // BookingHotel,
    Login,
  },
  data() {
    return {
      w: "",
      h: "",
      movetoFirstSecond: false,
      swiper2:"",
      banners1: [
        require("../assets/img/banner1-1-1.jpg"),
        require("../assets/img/banner1-1-2.jpg"),
        require("../assets/img/banner1-1-3.jpg"),
      ],
      title: [
        "- 重塑平衡的生活方式 -",
        "- 返璞归真的桃源秘境 - ",
        "- 身心灵的疗愈盛宴 -",
      ],
      carouselActiveIndex: 0,
      banners2: [
        require("../assets/img/banner1-2-1.jpg"),
        require("../assets/img/banner1-2-2.jpg"),
        require("../assets/img/banner1-2-3.jpg"),
        require("../assets/img/banner1-2-4.jpg"),
        require("../assets/img/banner1-2-5.jpg"),
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
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      // swiperOptions2: {
      //   pagination: {
      //     el: ".swiper-pagination",
      //   },
      //   loop: true,
      //   autoplay: {
      //     delay: 4000,
      //     disableOnInteraction: false,
      //   },
      //   navigation: {
      //     nextEl: ".swiper-button-next",
      //     prevEl: ".swiper-button-prev",
      //   },
      //   on: {
      //     slideChange: function () {
      //       // this.carouselActiveIndex = this.activeIndex;
      //       // console.log("改变了，activeIndex为" + carouselActiveIndex);
      //     },
      //   },
      // },
      hotelInstr: [
        "作为一家纯粹的养生酒店，我们致力于帮助客人从忙碌和压力中回归自我，达到身体、情绪、大脑和心灵上的幸福与健康，为客人提供养生知识的普及，使客人离开酒店之后依然保持平衡和愉悦的生活状态，让酒店的客人从身、心、灵全方位完全释放，享受生命的丰足与神圣！",
        "酒店拥有80间客房、原生态有机健康餐厅、400平米的宴会厅、3间健康咨询室、18间理疗室、泳池、多功能健身房、瑜伽亭、森林功法平台、多功能工坊、儿童俱乐部等。",
        "推出2晚、3晚和5晚的“净化排毒”“舒压放松”“睡眠提升”“颈椎舒缓”“体重管理”和“亲子养生假期”套餐，通过各种能量平衡的设施与服务，将全球前沿的健康理念融入度假体验当中。",
        "我们每日都有健康又有趣的工坊和课程，等待你来参加，包括瑜伽、禅修、烹饪工坊等等。住店客人都是免费的哦！",
        "在近1000平米的汤泉和盐雾室中放松身心，享受水和热带给身体由内而外的疗愈。我们的汤泉技术来自日本，包含铁泉——气血之汤、氡温泉——贵族养生汤、偏硅酸温泉——瘦身汤，以及促进呼吸道净化排毒的烟雾疗愈。",
      ],
    };
  },
  computed: {
    // swiper() {
    //     return this.$refs.mySwiper.swiper;
    //   },
    swiperOption_() {
      let that = this;
      let option = {
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
        // autoplay: {
        //   delay: 6000,
        //   disableOnInteraction: false,
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        speed:1500,
        // delay:2000,
        // effect : 'flip',
        // flip: {
        //     slideShadows : true,
        //     limitRotation : true,
        // },
        on: {
          slideChange: function () {
            // 当swiper进行轮播的时候,将当前展示的banenr的下标传到data中
            const realIndex = this.realIndex;   //从0开始的下标
            const activeIndex = this.activeIndex;   //从1开始的下标
            // console.log( realIndex);
            that.carouselActiveIndex = realIndex;
            // 把swiper对象传出去，当后续点击下方链接可以切换到对应的banner
            // console.log(this.el);
            console.log(that.carouselActiveIndex,'现在轮播图下标');
            // console.log(this);
            that.swiper2 =  this;
          },
        }
      };
      return option;
    },
  },
  mounted() {
    this.w = document.documentElement.clientWidth / 1920;
    this.h = document.documentElement.clientHeight / 1080;
  },
  methods: {
    click(){
      console.log('执行了click');
    },
    getSize() {
      this.w = document.documentElement.clientWidth / 1920;
      this.h = document.documentElement.clientHeight / 1080;
      console.log(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      );
    },
    // 添加事件：首屏高度，当滚轮滚动到第二屏达到导航条下方时（浏览器可视区域高度-导航条高度时）；更改 movetoFirstSecond 值为 ture 。导航条通过类样式绑定切换到黑底的样式
    intoSecondscreen() {
      // console.log(document.body.clientHeight,window.screen.height,document.documentElement.clientHeight);        //用于获取 文档高度 , 屏幕高度 ,   浏览器可视区域高度
      // console.log(window.scrollY);      //获取滚轮滚动的高度。初始为0，向下滚动增加，向上滚动数值减小；同时当滚动到文档最下方时，得到的最大值与浏览器可视区域高度相加等于文档高度
      window.scrollY >= document.documentElement.clientHeight-80 ? this.movetoFirstSecond = true : this.movetoFirstSecond = false;
      // 更换触发header导航样式替换的条件
      // window.scrollY >= 100
      //   ? (this.movetoFirstSecond = true)
      //   : (this.movetoFirstSecond = false);
    },
    updateHoverState(isHover,index){
      if(isHover==true){
        console.log(index,'链接下标');
        this.swiper2.slideTo(index+1, 1500);
        let delayTime = setTimeout(()=>{
          this.carouselActiveIndex = index;
        },0);
        clearTimeout(delayTime);
        this.swiper2.autoplay.stop();
      }else if(isHover==false){
        // this.HoverState = isHover;
        this.swiper2.slideTo(index+1, 1500);
        this.carouselActiveIndex = index;
        // this.swiper2.startAutoplay();
        this.swiper2.autoplay.start();
      }
      
    },
  },
  created() {
    // 添加监听，实时获取窗口的高度和宽度
    window.addEventListener("resize", this.getSize);
    this.getSize();
    // 添加监听，实时获取滚动条滚动的高度
    window.addEventListener("scroll", this.intoSecondscreen);
    this.intoSecondscreen();
  },
  destroyed() {
    // window.removeEventListener('resize', this.getSize);
    window.removeEventListener("scroll", this.intoSecondscreen);
  },
};
</script>

<style lang="scss" scoped>
// @import url(../assets/css/global.css);
.title {
  position: absolute;
  color: white;
  top: 50%;
  left: 50%;
  font-size: 36px;
  transform: translate(-50%, -50%);
}
.welcome {
  padding: 80px 180px;
}
.welText {
  display: flex;
  align-items: center;
}
.welcome h2 {
  font-size: 14px;
  margin-bottom: 20px;
}
.welcome h3 {
  font-size: 16px;
  font-weight: bold;
  color: rgb(0,65,56);
  white-space: nowrap;
}
.wel_textInfo {
  margin-left: 60px;
}
.wel_textInfo p {
  line-height: 28px;
  text-align: justify;
}
.welLine {
  border-bottom: 1px solid #839c98;
  margin-top: 10px;
}

.carousel_board {
  display: flex;
  align-items: stretch;
}
.explore_more {
  flex: 1;
  // border: 1px solid red;
  position: relative;
  padding: 20px;
}
.explore_more > div {
  position: absolute;
  padding: 100px;
  width: 100%;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.explore_more p {
  line-height: 28px;
  text-align: justify;
}
.more > div {
  display: flex;
  justify-content: space-between;
  width: 52px;
  padding: 10px;
  border-top: 1px solid #404040;
  border-bottom: 1px solid #404040;
  margin: 40px auto 0 auto;
}
.more img {
  vertical-align: middle;
}
.hotel_show {
  flex: 3;
}
.hotel_show img {
  vertical-align: middle;
}

// 酒店链接
.hotel_link{
  padding: 30px 180px ;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
.hotel_link a{
  color: #404040;
  padding: 10px;
  border: 1px solid #fff;
  transition: border 1s linear ,color 1s linear ;
}
.hotel_link>.activated{
  color: #1ca5ae;
  border: 1px solid #1ca5ae;
  // border: 1px solid #1ca5ae;
}
// 需要替换，加js效果，鼠标悬浮后，将轮播图取出的的当前播放的banner下标carouselActiveIndex存到一个新的临时变量，并且设为一个超出数量的值，使绑定.activated的条件都不成立，这样，带边框的a链接只有鼠标悬浮的那个；同时，轮播图暂停。鼠标移出a链接后，将临时变量的值重新赋给carouselActiveIndex并且继续轮播
.hotel_link a:hover{
  color: #1ca5ae;
  border: 1px solid #1ca5ae;
}

@media screen and(max-width: 1440px) {
  .welcome,.hotel_link {
    padding: 30px 120px;
  }
  .explore_more > div {padding: 100px;}
}
@media screen and(max-width: 1024px) {
  .welcome,.hotel_link {
    padding: 30px 60px;
  }
  .explore_more > div {padding: 70px;}
}
@media screen and(max-width: 992px) {
  .welcome,.hotel_link {
    padding: 30px 40px;
  }
  .explore_more > div {padding: 40px;}

  .wel_textInfo {
    margin-left: 40px;
  }
}
@media screen and(max-width: 810px) {
}
@media screen and(max-width: 660px) {
}
</style>
