<template>
  <div>
    <Header :movetoFirstSecond="movetoFirstSecond"></Header>
    <!-- <Header></Header> -->
    <div class="body">
      <!-- 首屏背景 -->
      <div class="firstScreen">
        <img src="../assets/img/banner1-1.jpg" alt="" :width="1920 * w + 'px'" :height="1080 * h + 'px'"/>
      </div>
      <!-- 酒店预订 -->
      <div class="booking">
        <div class="booking-hotel">
          <h2>预定酒店</h2>
          <span class="booking-address">
            <img
              src="../assets/icon/address1.png"
              alt=""
              width="36px"
              height="36px"
            />
            <p>浙江省舟山市塘头村</p>
          </span>
        </div>
        <div class="booking-info">
          <h2>舟山璞纳酒店</h2>
          <!-- <input type="text" placeholder="1间客房" /> -->
          <div style="position:relative" class="downMenu room">
            <div class="rooms" @click.stop="openMenu($event)">1间客房</div>
            <div class="rooms-down">
                <ul class="rooms-select">
                    <li>1间客房</li>
                    <li>2间客房</li>
                    <li>3间客房</li>
                </ul>
            </div>
          </div>
          <div style="position:relative" class="downMenu customer">
            <div class="rooms" @click.stop="openMenu($event)">1位客人</div>
            <div class="rooms-down">
                <ul class="rooms-select">
                    <li>1位客人</li>
                    <li>2位客人</li>
                    <li>3位客人</li>
                </ul>
            </div>
          </div>
          <div style="position:relative" class="downMenu datetime">
            <!-- <div class="rooms time" @click.stop="openMenu($event)">2020年12月30日 - 2021年1月1日</div>
            <div class="rooms-down">
                <ul class="rooms-select">
                    <li>1位客人</li>
                    <li>2位客人</li>
                    <li>3位客人</li>
                </ul>
            </div> -->
            <!-- 使用 element-ui 完成时间选择器 -->
            <div>
              <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </div>

          </div>
          <div class="bd-reserve">
            <button class="bt-reserve">预定</button>
          </div>
          <div class="order-group">
            <a href="" class="">查看现有订单</a>
            <a href="" class="">电话预约</a>
          </div>
        </div>
      </div>

      <!-- 品牌故事  养生疗愈 酒店合作 -->
      <div class="brand-story">
        <div class="brand brand1">
          <div class="brand-img">
            <img src="../assets/img/brandstroy1.jpg" alt="">
          </div>
          <div class="brand-info">
            <h3 class="brand-title">品牌故事</h3>
            <p class="brand-content">世界上有这样一种酒店，他们避开热闹的著名景点，选择偏僻而纯净的自然环境；他们拥有唤活身心和疗愈的氛围，提供专业的健康生活咨询、各种疗法、课程和活动，让客人在放松享受的同时，获得持续健康的生活方式。</p>
            <a class="brand-more" href=""><span>了解更多</span></a>
          </div>
        </div>
        <div class="brand brand2">
          <div class="brand-img">
            <img src="../assets/img/brandstroy2.jpg" alt="">
          </div>
          <div class="brand-info">
            <h3 class="brand-title">养生疗愈</h3>
            <p class="brand-content">作为顶级养生酒店，我们汇聚国内外顶级的自然疗法理疗师、中医师、禅修大师、健身教练、瑜伽和太极老师，通过各种能量平衡的设施与服务，让客人在海滨茶园的氛围中静心、清零，开启奢华酒店全新的健康养生时代。
</p>
            <a class="brand-more" href=""><span>了解更多</span></a>
          </div>
        </div>
        <div class="brand brand3">
          <div class="brand-img">
            <img src="../assets/img/brandstroy3.jpg" alt="">
          </div>
          <div class="brand-info">
            <h3 class="brand-title">酒店合作</h3>
            <p class="brand-content">璞纳养生酒店集团是国内第一家集养生酒店咨询、开发和运营管理为一体的酒店集团。作为业主，我们拥有舟山璞纳养生酒店；作为咨询机构，我们服务过上海阿纳迪酒店、腾冲东山养生酒店、三亚海棠湾养生酒店等等。
</p>
            <a class="brand-more" href=""><span>了解更多</span></a>
          </div>
        </div>
      </div>
      
      <!-- 酒店轮播图 -->
      <div class="main-info">
        <swiper ref="mySwiper" :options="swiperOptions"> 
          <swiper-slide v-for="(item,index) in banners" :key="index">
            <img :src="item" alt=""/>
          </swiper-slide>
          <!-- <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div> -->
        </swiper>
      </div>

      <!-- 酒店部分连接 -->
      <div class="hotel-link">
        <div class="hotel hotel1"><span>酒店概览</span></div>
        <div class="hotel hotel2"><span>酒店设施</span></div>
        <div class="hotel hotel3"><span>养生套餐</span></div>
        <div class="hotel hotel4"><span>每日工坊</span></div>
      </div>



    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";

export default {
  name: "Index",
  components: {
    Header,Footer,
  },
  data() {
    return {
      w: "",
      h: "",
      movetoFirstSecond:false,
      value1: '',
      banners:[
        require("../assets/img/banner1-2-1.jpg"),
        require("../assets/img/banner1-2-2.jpg")
        ],
      swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
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
          // Some Swiper option/callback...
        }
    };
  },
  computed:{
  },
  mounted() {
    let w = window.innerWidth;
    let h = window.innerHeight;
    this.w = w / 1920;
    this.h = h / 1080;
    console.log(w);
    console.log(h);
    console.log(window);
    console.log(document.documentElement.clientHeight,window.screen.height);
    console.log(document.querySelector(".el-date-editor"));

  },
  methods:{
    getSize(){
      this.w = window.innerWidth/1920;
      this.h = window.innerHeight/1080;
    },
    // 添加事件：首屏高度，当滚轮滚动到第二屏达到导航条下方时（浏览器可视区域高度-导航条高度时）；更改 movetoFirstSecond 值为 ture 。导航条通过类样式绑定切换到黑底的样式
    intoSecondscreen(){
      // console.log(document.body.clientHeight,window.screen.height,document.documentElement.clientHeight);        //用于获取 文档高度 , 屏幕高度 ,   浏览器可视区域高度
      // console.log(window.scrollY);      //获取滚轮滚动的高度。初始为0，向下滚动增加，向上滚动数值减小；同时当滚动到文档最下方时，得到的最大值与浏览器可视区域高度相加等于文档高度
      window.scrollY >= document.documentElement.clientHeight-120 ? this.movetoFirstSecond = true : this.movetoFirstSecond = false;
      // console.log(window.scrollY,document.documentElement.clientHeight-120,this.movetoFirstSecond);    测试
    },
    // 封装酒店预定区域中下拉菜单的功能
    openMenu($event){
      console.log($event.target);
      let rooms = $event.target;
      let roomsDown = rooms.nextSibling;
      let roomsSelect = roomsDown.querySelectorAll(".rooms-select>li");
      console.log(roomsDown.style.display);
      // if(roomsDown.style.display!="none") return;
      // 下拉菜单 预定酒店房间数量
      // var rooms = document.getElementById("rooms");
      // var roomsDown = document.getElementById("rooms-down");
      // var roomsSelect = document.querySelectorAll(".rooms-select>li");
      console.log(roomsSelect);
      roomsDown.style.display = "block";
        for(var i=0;i<roomsSelect.length;i++){
            roomsSelect[i].onclick = function(){
               rooms.innerHTML = this.innerHTML;
               console.log(this.innerHTML);
               roomsDown.style.display = "none";
            }
        }
    }
  },
  created(){  
    // 添加监听，实时获取窗口的高度和宽度
    window.addEventListener('resize', this.getSize);
    this.getSize();
    // 添加监听，实时获取滚动条滚动的高度
    window.addEventListener('scroll', this.intoSecondscreen);
    this.intoSecondscreen();
  },
  destroyed(){
    window.removeEventListener('resize', this.getSize);
    window.removeEventListener('scroll', this.intoSecondscreen);
  }
};
</script>

<style lang="scss" scoped>
.body{
  color: #404040;  
  font-size: 18px;
}
.header {
  position: fixed;
  top: 0;
}
.firstScreen{
  width: 100%;
}


// 酒店预定部分样式
.booking {
  width: 100%;
  margin-top: -4px;
  padding: 52px 149px 78px 149px;
  color: white;
  background-color: #1c1c1c;
}
.booking h2{
  font-size: 32px;
}
.booking-hotel {
  display: flex;
  align-items: center;
}
.booking-address {
  margin-left: 41px;
  display: flex;
  align-items: center;
}
.booking-address p{
  font-size: 24px;
  display: inline-block;
  align-self: center;
}
.booking-address img {
  margin-right: 16px;
}
.booking-info {
  display: flex;
  margin-top: 28px;
  align-items: center;
}
.downMenu{
  position: relative;
}
// 酒店预定部分样式  房间预定数量下拉列表样式
.rooms{
  color: white;
  width: 120px;
  height: 39px;
  border-bottom:1px solid white;
  background-color: #1c1c1c;
  text-align: center;
  font-size: 24px;
  line-height: 39px;
  cursor: pointer;
  position: relative;
}
.rooms-down{
  border: 1px solid white;
  width: 120px;
  // margin-left: 5px;
  display: none;
  position: absolute;
  top: 50px;
  left: 0px;
}
.rooms-select{
  padding: 0;
  margin: 0;
}
.rooms-select>li{
  list-style: none;
  font-size: 24px;
  text-align: center;
  height: 39px;
  line-height: 39px;
  color: white;
  background-color: rgba(64,64,64,.6);
  cursor: pointer;
}
li:hover{
  background-color: rgba(64,64,64,.9);
}

.customer {
  margin-left: 58px;
}
.datetime>.time{
  width: 443px;
  margin-left: 58px;
}
.bd-reserve{
  width: 278px;
  height: 70px;
  border: 2px solid white;
  margin-left: 84px;
}
.bt-reserve{
  width: 269px;
  height: 60px;
  padding: 0;
  border: 0;
  margin: 5px 4px;
  font-size: 32px;
  background-color: white;
}

// 以下修改elment-ui 的时间选择器默认样式
.el-range-editor{
  margin-left: 58px;
}
// .el-range-editor{
//   margin-left: 25px;
//   background-color: #1c1c1c;
//   border: none;
//   border-radius: 0;
//   border-bottom: 1px solid white;
//   color: white !important;
// }
// .el-date-editor span{
//   color: white !important;
// }
// 以上修改elment-ui 的时间选择器默认样式

.order-group{
  margin-left: 60px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.order-group a{
  color:#96b1ad;
}
.order-group a:last-child{
  margin-top: 11px;
}
// 酒店预定部分样式
.booking-info h2{
  margin-right: 100px;
}
.booking-info input{
  
}


.brand-story{
  display: flex;
  // align-items: center;
  justify-content: center;
  margin-top: 115px;
}
.brand{
  width: 515px;
  
}
.brand1,.brand2{
  margin-right: 37px;
}
.brand-img{
  width: 515px;
  height: 382px;
  border: 1px solid #404040;
  text-align: center;
}
.brand-story img{
  width: 485px;
  height: 352px;
  margin-top: 15px;
}
.brand-info{
  width: 485px;
  margin-left:15px;
}
.brand-title{
  font-size: 24px;
  margin-top: 42px;
  margin-bottom: 29px;
}
.brand-content{
  text-align:justify;
  text-justify:inter-ideograph;
  font-size: 18px;
  line-height: 31px;
  margin-bottom: 29px;
}
.brand-more{
  padding-bottom: 6px;
  text-decoration: underline;
  color: #404040;
  font-size: 18px;
}


.main-info{
  margin-top: 96px;
  width: 100%;
  height: 920px;
}
.swiper{
  // width: 100%;
  // height: 920px;
}


.hotel-link{
  margin-top: 62px;
  display: flex;
  justify-content: center;
}
.hotel{
  width: 370px;
  height: 274px;
  background-image: url(../assets/img/hotel-link1.jpg);
  text-align: center;
  color: white;
  line-height: 274px;
  font-size: 18px;
}
.hotel1{
  background-image: url(../assets/img/hotel-link1.jpg);
}
.hotel2{
  background-image: url(../assets/img/hotel-link2.jpg);
}
.hotel3{
  background-image: url(../assets/img/hotel-link3.jpg);
}
.hotel4{
  background-image: url(../assets/img/hotel-link4.jpg);
}
.hotel span{
  vertical-align:middle;
  display:inline-block;
}
.hotel-link>.hotel:not(:last-child){
  margin-right: 47px;
}
</style>
