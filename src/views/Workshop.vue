<template>
  <div>
    <Header :movetoFirstSecond="movetoFirstSecond" :isFixed="true" />
    <Login />
    <div class="body container">
      <!-- 首屏 -->
      <div class="firstScreen">
        <div style="clear: both"></div>
        <img src="../assets/img/banner6-1.jpg" alt="" width="1000px" />
      </div>
    </div>
        <div class="main-info">
      <table v-if="courses">
        <tr>
          <th>时间</th>
          <th>周一 Mon</th>
          <th>周二 Tue</th>
          <th>周三 Wed</th>
          <th>周四 Thur</th>
          <th>周五 Fri</th>
          <th>周六 Sat</th>
          <th>周日 Sun</th>
        </tr>
          <tr v-for="(item,index) in courses" :key="index">
            <td v-for="(course,index2) in item" :key="index2">{{course}}</td>
          </tr>
      </table>
      <!-- <div class="tr">
        <div class="td">时间</div>
        <div class="td">周一 Mon</div>
        <div class="td">周二 Tue</div>
        <div class="td">周三 Wed</div>
        <div class="td">周四 Thur</div>
        <div class="td">周五 Fri</div>
        <div class="td">周六 Sat</div>
        <div class="td">周日 Sun</div>
      </div>
      <div class="tr" v-for="(item,index) in courses" :key="index">
        <div class="td" v-for="(course,index2) in item" :key="index2">
          <div>{{course}}</div>
        </div>
      </div> -->
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
      courses:[
        ["7:00","茶园晨曦瑜伽","茶园晨曦瑜伽","茶园晨曦瑜伽","茶园晨曦瑜伽","茶园晨曦瑜伽","茶园晨曦瑜伽","茶园晨曦瑜伽"],["8:00","排毒瑜伽课程","呼吸工坊","禅修打坐工坊","禅修打坐工坊","排毒瑜伽课程","呼吸工坊","腹部核心力量训练课程"],["10:00","颂经工坊","亲子烹饪工坊","颂经工坊","抄经课程","颂经工坊","素食烹饪工坊","素食蛋糕烹饪工坊"],["11:00","泛音唱诵工坊","燃脂有氧训练","排毒瑜伽课程","禅修打坐工坊","禅修打坐工坊","佛茶采摘","禅修讲经课程"],["14:00","禅修讲经课程","排毒餐烹饪工坊","营养课程","佛茶采摘","素食烹饪工坊","禅修打坐工坊","亲子烹饪工坊"],["15:00","腹部核心力量训练","塑身有氧操","禅修讲经课程","疗愈绘画工坊","塑身有氧操","禅修讲经课程","排毒瑜伽课程"],["16:00","水果酵素制作工坊","抄经课程","素食烹饪工坊","水果酵素制作工坊","素食蛋糕制作工坊","排毒餐烹饪工坊","营养课程"],["20:00","昆达里尼瑜伽","排毒瑜伽课程","昆达里尼瑜伽","排毒瑜伽课程","茶道工坊","茶道工坊","昆达里尼瑜伽"]
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
.firstScreen{margin-bottom: 50px;}
.main-info{font-size: 14px;}
table{text-align: center;border-collapse:collapse;width: 100%;}
tr{height: 45px;}
th,td{border: 1px solid #404040;vertical-align: middle;}
.main-info tr:first-child{border-top: 1px slide #404040;}


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