<template>
  <div>
    <Header :movetoFirstSecond="movetoFirstSecond" :isFixed="true"></Header>
    <Login/>
    <div class="body container">
      <!-- 首屏背景 -->
      <div class="firstScreen">
        <img src="../assets/img/banner3-1.jpg" alt="" />
      </div>
      <!-- 正文内容 -->
      <div class="main-info">
        <div class="secondScreen">
          <div><img src="../assets/img/banner3-2-1.jpg" alt="" width="100%"/></div>
          <div><img src="../assets/img/banner3-2-2.jpg" alt="" width="100%"/></div>
          <div><img src="../assets/img/banner3-2-3.jpg" alt="" width="100%"/></div>
        </div>
        <div class="text-description">
          <p class="health">
            作为顶级养生酒店，我们汇聚国内外顶级的自然疗法理疗师、中医师、禅修大师、健身教练、瑜伽和太极老师，推出2晚、3晚和5晚的“净化排毒”“舒压放松”“睡眠提升”“颈椎舒缓”“体重管理”和“亲子养生假期”等疗程，通过各种能量平衡的设施与服务，将全球前沿的健康理念融入度假体验当中，让客人在海滨茶园的氛围中静心、清零，开启奢华酒店全新的健康养生时代。<br />
            <br />
            <br />
            汇集全球自然疗法的精华：印度阿育吠陀、海洋疗愈、美国物理肌体理疗、日式汤泉疗愈、德国自然疗法、中国的古中医......在舟山便能零距离体验来自世界各地最纯正的自然疗愈，享受世界级的健康服务。
            调理健康问题，追根溯源，从源头入手：我们不仅仅缓解疲惫、失眠等症状，更针对产生这些症状的深层原因——压力、情绪、饮食等诱因，追根溯源，从源头入手，深入疗愈，从而彻底改善。<br />
            萃取本地物产精华，与大地连接，与自然一体：我们沿袭自然疗法的智慧，萃取本地茶园新鲜采摘的茶叶，精心研磨，用以做SPA原料，带来回归自然的极致体验。
          </p>
          <div class="img-description">
              <div class="pic-bd">
                  <div class="pic1">
                      <img src="../assets/img/child-vacation1.jpg" alt="">
                  </div>
              </div>
              <div class="pic-bd">
                  <div class="pic2">
                      <img src="../assets/img/child-vacation2.jpg" alt="">
                  </div>
              </div>
          </div>
          <p class="child">
              针对中国市场的特色——家庭亲子度假，我们还推出适合小朋友们养生体验和游乐的项目：儿童水果SPA，亲子盐雾呼吸疗愈、亲子有机农场，专属儿童泳池、儿童水上乐园和室内儿童乐园等等。这样全家人都可以享受一个完美的健康假期！
          </p>
        </div>
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
    Login
  },
  data() {
    return {
      movetoFirstSecond: false,
    };
  },
  mounted() {},
  methods: {
    intoSecondscreen() {
      window.scrollY >= document.documentElement.clientHeight - 120
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
.main-info {
}
.secondScreen {
  width: 100%;
  height: 1080px;
  display: flex;
}
.text-description {
    width: 100%;
  display: flex;
  align-items: center;
    flex-direction: column;
}
.text-description>p,
.text-description>div {
  width: 1620px;
}
.text-description p{
    line-height: 31.5px;
    text-align: justify;
}
.health{
  margin: 64px 0 71px 0;
}

.img-description{
    display: flex;
}
.img-description>.pic-bd:first-child{
    margin-right: 40px;
}
.pic-bd{
    border: 2px solid #404040;
    width: 786px;
    height: 536px;
}
.pic1,.pic2{
    width: 760px;
    height: 510px;
    margin: 13px auto;
}

.child{
    margin-top: 49px;
}
</style>