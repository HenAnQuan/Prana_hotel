<template>
  <div>
    <Header :movetoFirstSecond="movetoFirstSecond" :isFixed="true" />
    <Login />
    <div class="body container">
      <!-- 首屏 -->
      <div class="firstScreen" v-if="port == 1">
        <div style="clear: both"></div>
        <img src="../assets/img/banner2-1.jpg" alt="" />
      </div>

      <div class="brand-storys" v-if="port == 2">
        <div class="brand brand3">
          <div class="brand-img">
            <img src="../assets/img/banner2-1.jpg" height="200px" alt="" />
          </div>
          <div class="brand-info">
            <!-- <div class="brand-center">品牌故事</div>
            <div class="brand-line"></div> -->
            <p class="brand-content">
              作为一家纯粹的养生酒店，我们致力于帮助客人从忙碌和压力中回归自我，达到身体、情绪、大脑和心灵上的幸福与健康，为客人提供养生知识的普及，使客人离开酒店之后依然保持平衡和愉悦的生活状态，让酒店的客人从身、心、灵全方位完全释放，享受生命的丰足与神圣。
            </p>
            <div class="more" @click="show1 = !show1" v-if="show1 == false">
              更多
            </div>
            <el-collapse-transition>
              <p class="brand-content" v-show="show1">
                舟山璞纳酒店带来的不仅是一种全新的住宿方式，更是一种天然的回归、一次能量的平衡、一场身心灵的焕活盛宴！<br />“走遍千山万水，也不过是为了找到一条走回自己内心的路。”璞纳养生酒店，正是这条道路上的教育、哺育和传播能量的圣地。
              </p>
            </el-collapse-transition>
            <div class="more" @click="show1 = !show1" v-if="show1 == true">
              收起
            </div>
          </div>
        </div>
      </div>

      <!-- 正文内容 -->
      <div class="main-info">
        <div class="text1" v-if="port == 1">
          <div>
            <p>
              作为一家纯粹的养生酒店，我们致力于帮助客人从忙碌和压力中回归自我，达到身体、情绪、大脑和心灵上的幸福与健康，为客人提供养生知识的普及，使客人离开酒店之后依然保持平衡和愉悦的生活状态，让酒店的客人从身、心、灵全方位完全释放，享受生命的丰足与神圣。<br />舟山璞纳酒店带来的不仅是一种全新的住宿方式，更是一种天然的回归、一次能量的平衡、一场身心灵的焕活盛宴！<br />“走遍千山万水，也不过是为了找到一条走回自己内心的路。”璞纳养生酒店，正是这条道路上的教育、哺育和传播能量的圣地。
            </p>
          </div>
        </div>

        <div class="img-preview" v-if="port == 1">
          <div class="preview">
            <!-- <div class="preview-bd">
                <img src="../assets/img/banner2-2-1.jpg" alt="" width="100%" />
            </div> -->

            <main>
              <a href="#" class="tilter tilter--1">
                <figure class="tilter__figure">
                  <img
                    class="tilter__image"
                    src="../assets/img/banner2-2-1.jpg"
                    alt="img01"
                  />
                  <div class="tilter__deco tilter__deco--shine">
                    <div></div>
                  </div>
                  <figcaption class="tilter__caption"></figcaption>
                  <svg
                    class="tilter__deco tilter__deco--lines"
                    viewBox="0 0 490 290"
                    width="100%"
                    height="100%"
                  >
                    <path d="M20 20 H470 V270 H20 V20z" />
                  </svg>
                </figure>
              </a>
            </main>

            <p>
              环境污染、节奏紧张和缺乏安全感的社会冲刷着人们的生活平衡，健康养生已成为我们最关心的话题。<br />健康不仅是一种身体上的状态，还与我们的精神世界和内心情感息息相关。养生也不仅仅是疾病治疗、饮食或运动。完整的健康养生是从方方面面建立起身体、情绪、精神的平衡状态。
            </p>
          </div>

          <div class="preview">
            <main>
              <a href="#" class="tilter tilter--1">
                <figure class="tilter__figure">
                  <img
                    class="tilter__image"
                    src="../assets/img/banner2-2-2.jpg"
                    alt="img01"
                  />
                  <div class="tilter__deco tilter__deco--shine">
                    <div></div>
                  </div>
                  <figcaption class="tilter__caption"></figcaption>
                  <svg
                    class="tilter__deco tilter__deco--lines"
                    viewBox="0 0 490 290"
                    width="100%"
                    height="100%"
                  >
                    <path d="M20 20 H470 V270 H20 V20z" />
                  </svg>
                </figure>
              </a>
            </main>
            <p>
              在这样的大环境下，我们打造了中国独特的高端奢华养生度假酒店——舟山璞纳养生酒店，为客人营造重获情绪平衡和生活乐趣的场所。
            </p>
          </div>

          <div class="preview">
            <main>
              <a href="#" class="tilter tilter--1">
                <figure class="tilter__figure">
                  <img
                    class="tilter__image"
                    src="../assets/img/banner2-2-3.jpg"
                    alt="img01"
                  />
                  <div class="tilter__deco tilter__deco--shine">
                    <div></div>
                  </div>
                  <figcaption class="tilter__caption"></figcaption>
                  <svg
                    class="tilter__deco tilter__deco--lines"
                    viewBox="0 0 490 290"
                    width="100%"
                    height="100%"
                  >
                    <path d="M20 20 H470 V270 H20 V20z" />
                  </svg>
                </figure>
              </a>
            </main>
            <p>
              舟山璞纳养生酒店位于舟山最东端，坐拥一望无际的佛茶园，与普陀山隔海相望，拥有最自然、纯净、疗愈的环境氛围。
              酒店设计温暖而质朴，在客房设施中贯穿能量石、喜马拉雅盐灯、纯净棉麻等设计元素，营造返璞归真的疗愈之境。
            </p>
          </div>

          <!-- <main style="display:none">
              <a href="#" class="tilter tilter--1">
                <figure class="tilter__figure">
                  <img
                    class="tilter__image"
                    src="../assets/img/banner2-2-3.jpg"
                    alt="img01"
                  />
                  <div class="tilter__deco tilter__deco--shine">
                    <div></div>
                  </div>
                  <figcaption class="tilter__caption"></figcaption>
                  <svg
                    class="tilter__deco tilter__deco--lines"
                    viewBox="0 0 490 290"
                    width="100%"
                    height="100%"
                  >
                    <path d="M20 20 H470 V270 H20 V20z" />
                  </svg>
                </figure>
              </a>
            </main> -->
        </div>
      </div>

      <div class="brand-storys" v-if="port == 2" style="margin-top: 20px">
        <div class="brand brand3">
          <div class="brands-img">
            <img src="../assets/img/banner2-2-1.jpg" height="200px" alt="" />
          </div>
          <div class="brand-infos">
            <!-- <div class="brand-center">品牌故事</div>
              <div class="brand-line"></div> -->
            <p class="brand-content">
              环境污染、节奏紧张和缺乏安全感的社会冲刷着人们的生活平衡，健康养生已成为我们最关心的话题。健康不仅是一种身体上的状态，还与我们的精神世界和内心情感息息相关。
            </p>
            <div class="more" @click="show2 = !show2" v-if="show2 == false">
              更多
            </div>
            <el-collapse-transition>
              <p class="brand-content" v-show="show2">
                养生也不仅仅是疾病治疗、饮食或运动。完整的健康养生是从方方面面建立起身体、情绪、精神的平衡状态。
              </p>
            </el-collapse-transition>
            <div class="more" @click="show2 = !show2" v-if="show2 == true">
              收起
            </div>
          </div>
        </div>

        <div class="brand brand3" style="margin-top: 20px">
          <div class="brands-img">
            <img src="../assets/img/banner2-2-2.jpg" height="200px" alt="" />
          </div>
          <div class="brand-infos" style="padding-bottom: 20px">
            <!-- <div class="brand-center">品牌故事</div>
              <div class="brand-line"></div> -->
            <p class="brand-content">
              在这样的大环境下，我们打造了中国独特的高端奢华养生度假酒店——舟山璞纳养生酒店，为客人营造重获情绪平衡和生活乐趣的场所。
            </p>
          </div>
        </div>

        <div class="brand brand3" style="margin-top: 20px">
          <div class="brands-img">
            <img src="../assets/img/banner2-2-3.jpg" height="200px" alt="" />
          </div>
          <div class="brand-infos" style="padding-bottom: 20px">
            <!-- <div class="brand-center">品牌故事</div>
              <div class="brand-line"></div> -->
            <p class="brand-content">
              舟山璞纳养生酒店位于舟山最东端，坐拥一望无际的佛茶园，与普陀山隔海相望，拥有最自然、纯净、疗愈的环境氛围。
              酒店设计温暖而质朴，在客房设施中贯穿能量石、喜马拉雅盐灯、纯净棉麻等设计元素，营造返璞归真的疗愈之境。
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
    Login,
  },
  data() {
    return {
      port: 1, //1 pc端  2 移动端
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      movetoFirstSecond: false,
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

    // 挂载阶段，加入script标签，从而引入第三方非模块化js文件
    this.addScript();
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

    // 添加script标签,public下的静态文件
    addScript() {
      var script1 = document.createElement("script");
      script1.type = "text/javascript";
      script1.src = "../static/js/imagesloaded.pkgd.min.js";
      document.head.appendChild(script1);
      var script2 = document.createElement("script");
      script2.type = "text/javascript";
      script2.src = "../static/js/anime.min.js";
      document.head.appendChild(script2);
      var script3 = document.createElement("script");
      script3.type = "text/javascript";
      script3.src = "../static/js/main.js";
      document.head.appendChild(script3);
    },
    //添加style标签，public下静态文件,直接在index中使用
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
//移动端样式开始
.more {
  width: 80px;
  height: 32px;
  border: 1px solid #1c1c1c;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-top: 14px;
  margin-bottom: 24px;
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

.brand-info {
  padding: 12px 15px 0px 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: none;
}

.brand1,
.brand2 {
  margin-right: 20px;
}

.brand-storys {
  display: flex;
  // align-items: center;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}

.brand-img {
  // width: 515px;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 0px;
  box-sizing: border-box;
}

.brand-img img {
  width: 100%;
  height: 350px;
  vertical-align: middle;
}

.brands-img {
  // width: 515px;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 0px 12px 0 12px;
  box-sizing: border-box;
}

.brands-img img {
  width: 100%;
  height: 250px;
  vertical-align: middle;
}
.brand-line {
  width: 200px;
  height: 1px;
  background-color: #1c1c1c;
  margin-bottom: 12px;
}

.brand-content {
  text-align: justify;
  text-justify: inter-ideograph;
  font-size: 14px;
  line-height: 25px;
  margin-bottom: 20px;
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

//移动端样式结束

.main-info {
  box-sizing: border-box;
  margin: 50px atuo;
  padding: 0 180px;
  width: 100%;
}
.text1 {
  margin: 60px auto;
  border-top: 1px solid #404040;
  border-bottom: 1px solid #404040;
}
.text1 div {
  padding: 12px;
}
.text1 p {
  line-height: 28px;
}
.img-preview {
  // padding: 50px 0;
  display: flex;
}
.img-preview > .preview:not(:last-child) {
  margin-right: 30px;
}
.preview {
  flex: 1;
}
.preview p {
  margin-top: 20px;
  line-height: 28px;
  padding: 0 12px;
  text-align: justify;
}
.preview-bd {
  border: 1px solid rgb(0, 65, 56);
  padding: 8px;
  overflow: hidden;
}
.preview-bd img {
  vertical-align: middle;
  width: 100%;
  transition: all 0.6s;
}
.preview-bd img:hover {
  transform: scale(1.15);
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

  .brand-content {
    font-size: 12px;
    margin-bottom: 0px;
  }

  .brand-mores {
    font-size: 12px;
  }

  .img-preview > .preview:not(:last-child) {
    margin-right: 10px;
  }
  .preview-bd {
    border: 0px solid #fff;
    padding: 0px;
  }
}
</style>