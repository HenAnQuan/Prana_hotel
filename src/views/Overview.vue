<template>
  <div>
      <Header :movetoFirstSecond="movetoFirstSecond" :isFixed="true"/>
    <Login/>
    <div class="body container">
      <!-- 首屏 -->
      <div class="firstScreen">
        <div class="label">
          <div class="label1"><span>缘起</span></div>
          <div class="label2"><span>创新</span></div>
          <div class="label3"><span>发展</span></div>
        </div>
        <div class="title">
          <span>璞纳</span>
          <div class="title-info">
            <div></div>
            <p>返璞归真，吐故纳新。</p>
          </div>
        </div>
        <div style="clear: both"></div>
        <img src="../assets/img/banner2-1.jpg" alt="" width="1000px" />
      </div>
      <!-- 正文内容 -->
      <div class="main-info">
        <div class="brandStory brandStory1">
          <div class="storyImg">
            <div><p>缘起：养生酒店来到中国</p></div>
            <img src="../assets/img/brand-story1.jpg" alt="" />
          </div>
          <div class="storyText">
            <p>
              环境污染、节奏紧张和缺乏安全感的社会冲刷着人们的生活平衡，健康养生已成为我们最关心的话题。<br />
              健康不仅是一种身体上的状态，还与我们的精神世界和内心情感息息相关。养生也不仅仅是疾病治疗、饮食或运动。完整的健康养生是从方方面面建立起身体、情绪、精神的平衡状态。
              在这样的大环境下，世界上孕育了一批优秀的养生酒店，他们为顾客营造重获情绪平衡和生活乐趣的场所。这些酒店有宁静的氛围、友好的员工、高品质的有机健康美食、
              当地文化体验、原生态家具、全方位健康理疗、SPA、瑜珈、冥想、营养顾问、生活方式咨询师等，以帮助客人回归身心平衡的状态。<br />
              我们在全世界体验了这些成功的养生酒店后，决定将它带到中国，并选址舟山作为第一家养生酒店。<br />
              我们给它取名璞纳：返璞归真，吐故纳新。英文名叫Prana，在梵语中是能量的意思，寓意在一呼一吸之间，万法自然，能量归一。
            </p>
          </div>
        </div>
        <div class="brandStory brandStory2">
          <div class="storyImg">
            <div><p>创新：国际标准的升华</p></div>
            <img src="../assets/img/brand-story2.jpg" alt="" />
          </div>
          <div class="storyText">
            <p>
              舟山璞纳养生酒店是一次全新的尝试。她拥有世界上优秀的养生酒店的基因，并充分融合本土文化和当地资源进行再创造。例如，璞纳集合了来自全世界各地的疗法：来自美国的物理肌体理疗，德国的自然疗法，日本的汤泉疗愈，印度的阿育吠陀，中国的古中医，而结合舟山本地海天佛国的文化氛围和茶园的资源，我们推出一系列禅修课程，以及海疗和茶疗SPA。<br />
              针对中国市场的特色——家庭亲子度假，我们还推出适合小朋友们养生体验和游乐的项目：儿童SPA，亲子盐雾呼吸疗愈、亲子有机农场，专属儿童泳池、儿童水上乐园和室内儿童乐园等等。这样全家人都可以享受一个完美的健康假期！<br />
              一切养生的本质是让身体、意识、情绪归零，回到纯净、纯粹的状态。我们汇聚国内外顶级的自然疗法理疗师、中医师、禅修大师、健身教练、瑜伽和太极老师，推出2晚、3晚和5晚的“净化排毒”“舒压放松”“睡眠提升”“颈椎舒缓”“体重管理”和“亲子养生假期”套餐，通过各种能量平衡的设施与服务，将全球前沿的健康理念融入度假体验当中，让客人在海滨茶园的氛围中静心、清零，开启奢华酒店全新的健康养生时代。<br />
              璞纳养生酒店带来的不仅是一种全新的住宿方式，更是一种天然的回归、一次能量的平衡、一场身心灵的焕活盛宴！
            </p>
          </div>
        </div>
        <div class="brandStory brandStory3">
          <div class="storyImg">
            <div><p>发展：改变人们的旅行方式</p></div>
            <img src="../assets/img/brand-story3.jpg" alt="" />
          </div>
          <div class="storyText">
            <p>
              在中国，养生旅行仍然是件小众的事情，而我们希望因为璞纳的出现，能够唤醒大家对于疗愈之旅的全新认知，希望璞纳能够让全家人建立起和自己内心的联系，改变过去的生活方式，以及学习如何在未来保持健康。璞纳不仅仅是拥有水疗服务的酒店，而是一家能够完整地集中于全方位健康和疗愈的酒店，从每个细节都完整的体现着身心灵养生的宗旨，包括氛围、客户服务、管理、健康理念、健身项目、餐饮、人力资源、环境、社会责任等等。<br>
              璞纳的愿景是：帮助客人从忙碌和压力中回归自我，达到身体、情绪、大脑、心灵上的幸福与健康；为客人提供养生和疗愈相关知识的普及，使客人离开酒店之后依然保持平衡和愉悦的生活状态；让酒店的客人、员工和所有参与者都能够从身、心、灵全方位完全释放，享受生命的丰足和神圣！<br>
              带着这样的愿景，我们不仅仅打造了舟山璞纳养生酒店，还通过顾问等合作方式，参与了更多养生酒店项目的创造。作为行业的先驱，我们希望以多年的经验和资源，帮助更多的养生酒店开发者实现他们的梦想，同时通过更多项目，改变人们的旅行方式，传递生命中最美好的能量，和业主一起将身心灵完整的健康带给世界。<br>
              我们相信，养生酒店将会被越来越多人喜爱，因为“走遍千山万水，也不过是为了找到一条走回自己内心的路。”真正的养生酒店，正是这条道路上的教育、哺育和传播能量的圣地！
            </p>
          </div>
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
      port: 1,
      show1: false,
      show2: false,
      show3: false
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
    intoSecondscreen() {
      window.scrollY >= 100 ? this.movetoFirstSecond = true : this.movetoFirstSecond = false;
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
.label > div {
  position: absolute;
  text-align: center;
}
.label > div > span {
  color: white;
  font-size: 16px;
  line-height: 40px;
}
.label > div {
  width: 80px;
  height: 40px;
}
.label1 {
  background-color: rgba(0, 0, 0, 0.6);
  top: 269px;
}
.label2 {
  background-color: rgba(0, 0, 0, 0.6);
  top: 359px;
}
.label3 {
  background-color: rgba(0, 0, 0, 0.6);
  top: 449px;
}
.title {
  position: absolute;
  height: 66px;
  top: 523px;
  left: 709px;
}
.title > span {
  font-size: 65px;
  color: white;
}
.title-info {
  margin-left: 41px;
  display: inline-block;
  flex-direction: column;
}
.title-info > div {
  width: 338px;
  height: 3px;
  background-color: white;
  margin-bottom: 22px;
}
.title-info > p {
  display: inline-block;
  color: white;
  font-size: 36px;
}

.main-info {
  box-sizing: border-box;
  padding: 50px 240px;
  width: 100%;
}
.brandStory {
  display: flex;
  align-items: center;
  align-items: stretch;
}
.storyImg {
  flex: 1;
  position: relative;
}
.storyImg > div {
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.52);
  position: absolute;
  text-align: center;
}
.storyImg > div > p {
  font-size: 16px;
  color: white;
  line-height: 80px;
}
.storyImg>img{
  width: 100%;
  vertical-align: middle;
}
.storyText {
  flex: 1;
  padding: 20px 40px;
  border: 1px solid #c1c1c1;
  border-left: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.storyText > p {
  width: 100%;
  height: 100%;
  display: block;
  font-size: 14px;
  line-height: 32px;
  text-align: justify;
}

.brandStory2,
.brandStory3 {
  margin-top: 71px;
}

@media screen and(max-width: 1780px) {.storyText>p{line-height: 28px;}}
@media screen and(max-width: 1690px) {.storyText>p{line-height: 22px;}}
@media screen and(max-width: 1570px) {.storyText>p{line-height: 22px;}}

@media screen and(max-width: 1440px) {
  .brand-story{padding: 0 120px;}
  .hotel-link{padding: 0 120px;}
}
@media screen and(max-width: 1024px) {
  .brand-story{padding: 0 60px;}
  .hotel-link{padding: 0 60px;}
}
@media screen and(max-width: 992px) {
  .brand-story{padding: 0 20px;}
  .hotel-link{padding: 0 20px;}
}
@media screen and(max-width: 810px) {
  // .hotel-link>.hotel:not(:last-child){margin-right: 10px;}
}
@media screen and(max-width: 660px) {
}
</style>