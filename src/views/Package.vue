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
          <div class="course" v-if="courses.length>0">
            <div class="courseItem" :class="activated" @mouseenter="updateHoverState(true)" @mouseleave="updataHoverState(false)" v-for="(item,index) in courses" :key="index">
              <img :src="item.img" alt="">
              <p>{{item.title}}</p>
            </div>
            <div class="project">
              <img src="" alt="">
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
      isHover:false,
      HeathIndex:0,
      courses:[
        {img:require("../assets/icon/spa2.png"),title:"排毒清体系列疗程"},
        {img:require("../assets/icon/sleep2.png"),title:"舒压睡眠系列疗程"},
        {img:require("../assets/icon/weight2.png"),title:"身姿和体重系列疗程"},
        {img:require("../assets/icon/parenting2.png"),title:"亲子系列疗程"},
      ]
    };
  },
  mounted() {
  },
  methods: {
    intoSecondscreen() {
      window.scrollY >= 100
        ? (this.movetoFirstSecond = true)
        : (this.movetoFirstSecond = false);
    },
    updateHOverState(isHover){
      this.hoverState = isHover;
    }
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
.course{
  display: flex;
  margin-top: 30px;
}

.courseItem{
  flex: 1;
  border: 1px solid #404040;
  text-align: center;
  padding: 30px 0;
}
.course img{
  height: 41px;
  margin-bottom: 13px;
}
.course p {font-size: 16px;}


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
}
@media screen and(max-width: 810px) {
  .img-preview>.preview:not(:last-child){
  margin-right: 10px;
}
}
@media screen and(max-width: 660px) {
}
</style>