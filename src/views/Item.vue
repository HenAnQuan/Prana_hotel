<template>
  <div>
    <Header :movetoFirstSecond="movetoFirstSecond" :isFixed="true" />
    <Login />
    <div class="body container">
      <!-- 首屏 -->
      <div class="firstScreen">
        <div style="clear: both"></div>
        <img src="../assets/img/banner3-1.jpg" alt="" width="1000px" />
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