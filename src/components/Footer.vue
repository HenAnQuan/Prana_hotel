<template>
  <div>
    <div class="footer" v-if="port == 1">
      <!-- tripadvisor评论 -->
      <!-- <div class="tripadvisor">
        <div class="tripadvisor-logo">
          <img src="../assets/icon/tripadvisor.png" alt="" width="175px" />
          <p>前往店评Prana璞纳养生酒店</p>
        </div>
        <input type="text" placeholder="请输入评论标题" />
        <button>提交</button>
      </div> -->

      <!-- 现评论 -->
      <!-- <div class="tripadvisor">
        <div class="tripadvisor-logo">
          <p>前往店评Prana璞纳养生酒店</p>
        </div>
        <input type="text" placeholder="请输入评论" v-model="comment" />
        <button @click="check">提交</button>
      </div> -->

      <form action name="fileinfo" class="fileinfo">
        <div>
          <h2>评论Prana璞纳养生酒店</h2>
        <div class="comment">
          <div class="commentText">
            <div class="star">
              <img :src="starsFinal==0 ? (index>=starsTemp ? star : star3) : (index>=starsFinal ? star : star3)" alt="" @mouseenter="activeStarAdd(index)" @mouseleave="activeStarReduce" @click="decideStars(index)"  v-for="(item,index) in 5" :key="index" width="30px">
            </div>
            <input type="text" placeholder="请输入评论" v-model="comment" />
          </div>
          <div class="img_box">
            <div
              class="img_size" v-for="(item, index) of imgList" :key="index"
              v-show="imgList.length != 0">
              <img v-if="item.file.type.indexOf('image') !== -1" :src="item.file.src"/>
              <div class="remove_logo" @click="fileDel">×</div>
            </div>
            <div class="add_img" @click="fileClick" v-show="addState">
              <span>+</span>
            </div>
            <button @click="uploadImage" class="submit" @click.prevent>提交</button>
            <input id="inpu" name="files" style="display: none" @change="fileChange($event)" type="file" ref="file" accept="image/*"/>
          </div>
        </div>
        </div>
        
      </form>



      <!-- 最底下黑色区域 -->
      <div class="copyright">
        <!-- 左侧logo -->
        <div class="logo">
          <img
            src="../assets/icon/logo1.png"
            alt=""
            width="80px"
            height="48px"
          />
        </div>
        <!-- 右侧信息 -->
        <div class="info">
          <div class="nav">
            <router-link to="/">首页</router-link>
            <span class="line"></span>
            <router-link to="/overview">酒店概览</router-link>
            <span class="line"></span>
            <router-link to="/installation">酒店设施</router-link>
            <span class="line"></span>
            <router-link to="/package">养生套餐</router-link>
            <span class="line"></span>
            <router-link to="/item">养生项目</router-link>
            <span class="line"></span>
            <router-link to="/workshop">每日工坊</router-link>
            <span class="line"></span>
            <a href="http://www.ehome-vip.com">益宏集团</a>
          </div>
          <div class="address">
            <div class="address1">
              <img
                src="../assets/icon/address1.png"
                alt=""
                width="14px"
                height="14px"
              /><span
                >璞纳养生酒店集团&nbsp;&nbsp;&nbsp;地址：上海市恒南路688弄31号&nbsp;&nbsp;&nbsp;电话：021-33882933</span
              >
            </div>
            <div class="address2">
              <img
                src="../assets/icon/address1.png"
                alt=""
                width="14px"
                height="14px"
              /><span
                >舟山璞纳养生酒店&nbsp;&nbsp;&nbsp;地址：舟山普陀塘头村&nbsp;&nbsp;&nbsp;电话：021-33882933</span
              >
            </div>
          </div>
          <div class="copy">
            <p>
              条款和条件Cookie政策&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;版权所有©2021安浙江益宏静方投资有限公司<br>【免责声明】部分图片来源于网络，仅为示意，如有侵权，请联系删除
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="item-footer" v-if="port == 2">
      <div class="item-footer-one">
        <img src="../assets/icon/tripadvisor.png" width="107px" height="22px" alt="" /> 
        <p>前往店评Prana璞纳养生酒店</p>
      </div>
      <div class="item-footer-two">
        <input type="text" placeholder="请输入评论标题" />
        <button>提交</button>
      </div>

      <div class="company">
         <img src="../assets/icon/logo1.png" width="52px" alt="" />
        <div class="company-logo" style="margin-top:20px">
          <!-- <img src="../assets/icon/logo1.png" height="42px" alt="" /> -->
          <div class="company-text">
                <router-link to="/" style="height:18px">首页</router-link>
                <router-link to="/overview" style="height:18px">酒店概览</router-link>
                <router-link to="/installation" style="height:18px">酒店设施</router-link>
                <router-link to="/package" style="height:18px">养生套餐</router-link>
                <router-link to="/item" style="height:18px">养生项目</router-link>
                <router-link to="/workshop" style="height:18px">每日工坊</router-link>
                <a href="http://www.ehome-vip.com">益宏集团</a>
          </div>

          <div class="company-right">
            <div class="conpany-local">
                <img src="../assets/icon/address1.png" alt="" width="15px" height="15px"/>
                <div>璞纳养生酒店集团</div>
            </div>
            <div style="color: #fff; font-size: 10px;margin-top:12px;height:18px;">地址：上海市恒南路688弄31号</div>
            <div style="color: #fff; font-size: 10px;margin-top:12px;height:18px">电话：021-33882933</div>

            <div class="conpany-local" style="margin-top:30px">
                <img src="../assets/icon/address1.png" alt="" width="15px" height="15px"/>
                <div>舟山璞纳养生酒店</div>
            </div>
            <div style="color: #fff; font-size: 10px;margin-top:12px;height:18px">地址：舟山普陀塘头村</div>
            <div style="color: #fff; font-size: 10px;margin-top:12px;height:18px">电话：021-33882933</div>
        </div>
        </div>
        
        
     
      </div>
      
      <div class="navs">
        <p class="condition-one">条款和条件Cookie政策</p>
        <p class="condition-two">版权所有©2021安浙江益宏静方投资有限公司</p>
        <p class="condition-two">【免责声明】部分图片来源于网络，仅为示意，如有侵权，请联系删除</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // openLogPanel: false,
      port: 1, //1 pc端  2 移动端
      comment: "", //输入框内容
      // 上传图片
      imgList: [],
      addState: true,
      star:require("../assets/icon/star1.png"),
      star2:require("../assets/icon/star2.png"),
      star3:require("../assets/icon/star3.png"),
      starsTemp:0,
      starsFinal:0,
    };
  },
  watch: {
    imgList() {
      if (this.imgList.length == 9) {
        this.addState = false;
      } else {
        this.addState = true;
      }
    }
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
    // 点击上传按钮时间
    check() {
      console.log(this.comment);
    },
    fileClick() {
      document.getElementById("inpu").click();
    },
    fileChange(el) {
      if (this.imgList.length>=3){console.log('最多可以上传3张照片',this.imgList);return;}
      const list = this.$refs.file.files;
      if (!el.target.files[0].size) return;
      this.fileList(el.target);
      el.target.value = "";
    },
    fileList(fileList) {
      let files = fileList.files;
      for (let i = 0; i < files.length; i++) {
        //判断是否为文件夹
        if (files[i].type != "") {
          this.fileAdd(files[i]);
        } else {
          //文件夹处理
          this.folders(fileList.items[i]);
        }
      }
    },
    //文件夹处理
    folders(files) {
      let _this = this;
      //判断是否为原生file
      if (files.kind) {
        files = files.webkitGetAsEntry();
      }
      files.createReader().readEntries(function(file) {
        for (let i = 0; i < file.length; i++) {
          if (file[i].isFile) {
            _this.foldersAdd(file[i]);
          } else {
            _this.folders(file[i]);
          }
        }
      });
    },
    foldersAdd(entry) {
      let _this = this;
      entry.file(function(file) {
        _this.fileAdd(file);
      });
    },
    fileAdd(file) {
      //总大小
      this.size = this.size + file.size;
      let reader = new FileReader();
      reader.vue = this;
      reader.readAsDataURL(file);
      reader.onload = function() {
        file.src = this.result;
        this.vue.imgList.push({
          file
        });
      };
    },
    fileDel(index) {
      this.imgList.splice(index, 1);
    },
    bytesToSize(bytes) {
      if (bytes === 0) return "0 B";
      let k = 1000, // or 1024
        sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        i = Math.floor(Math.log(bytes) / Math.log(k));
      return (bytes / Math.pow(k, i)).toPrecision(3) + " " + sizes[i];
    },
    uploadImage: function() {
      var form = document.forms.namedItem("fileinfo");
      var formData = new FormData(form);
      for (var i = 0; i < this.imgList.length; i++) {
        formData.append("file" + [i + 1], this.imgList[i].file);
        // console.log(this.imgList);
      }
      // this.imgList 存储上传的图片信息
      console.log(this.imgList);
      // this.starsFinal 存储上传的评分
      console.log(this.starsFinal);
      // this.comment 存储输入的评论文字信息
      console.log(this.comment);
    },

    // 评论星星
    activeStarAdd(num){
      this.starsTemp = num+1;
    },
    activeStarReduce(){
      this.starsTemp = 0;
    },
    decideStars(index){
      this.starsFinal = index+1;
    }
  },
};
</script>

<style lang="scss" scoped>
.fileinfo{width: 100%;}
.fileinfo>div{margin: 0 auto;}
.fileinfo{margin: 0px auto;}
.fileinfo{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 30px;
  h2{margin-bottom: 20px;font-weight: bold;}
  .comment{
    display: flex;
    .commentText{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    }
    .commentText .star{
      // width: 240px;
      // height: 40px;
      // border: 1px solid yellow;
    }
    .commentText input{
      width: 350px;
      height: 40px;
      padding: 0;
      border: 1px solid #404040;
      padding-left: 10px;
    }
    // 写到reset_custom.css中,供全局使用
    // .commentText input:focus{
    //   outline-color: #404040;
    // }
  }
}
.img_box {
  width: 100%;
  // padding: 30px 30px;
  padding-left: 30px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .img_size {
    position: relative;
    width: 80px;
    height: 80px;
    // padding: 5px;
    padding-right: 5px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
    .remove_logo {
      position: absolute;
      width: 10px;
      height: 10px;
      // background: red;
      border-radius: 25px;
      top: 8px;
      right: 15px;
      text-align: center;
      line-height: 10px;
      font-size: 20px;
      text-align: center;
      color: white;
      cursor: pointer;
    }
  }
  .add_img {
    width: 80px;
    height: 80px;
    // margin-top: 5px;
    text-align: center;
    line-height: 80px;
    font-size: 60px;
    color: #777777;
    border: 1px dashed #404040;
    border-radius: 5px;
  }
  .submit{
    margin-left: 30px;
    width: 120px;
    height: 40px;
    background-color: #1c1c1c;
    color: white;
    border-radius: 2px;
    border: 1px solid #1c1c1c;
  }
  .submit:active{
    background-color: #000;
    color: white;
  }
}

// 手机端样式开始

.company-right{
  width: 55%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}

.company-logo{
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

.navs{
    width:100%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 14px 0px;
}
.condition-one {
  font-size: 10px;
  color: #404040;
}

.condition-two {
  font-size: 10px;
  color: #404040;
  margin-top: 10px;
  line-height: 15px;
  text-align: center;
}

.conpany-local {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 18px;
}

.conpany-local div {
  font-size: 10px;
  color: #fff;
  margin-left: 10px;
}

.company-text {
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0px 60px 0px 0px;
  box-sizing: border-box;

}

.company-text a {
  color: #ffffff;
  font-size: 10px;
  margin-bottom: 10px;
}

.company {
  width: 100%;
  background: #000;
  padding: 20px 30px 20px 30px;
  box-sizing: border-box;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.item-footer-one{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.item-footer-one p {
  font-size: 12px;
  margin-top: 4px;
}

.item-footer-two {
  width: 76%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.item-footer-two button {
  color: white;
  width: 36%;
  height: 30px;
  background-color: #1c1c1c;
  border: 1px solid #1c1c1c;
  margin-top: 8px;
  font-size: 12px;
}

.item-footer-two input {
  width: 70%;
  height: 30px;
  border: 1px solid #404040;
  padding: 0 0 0 10px;
  box-sizing: border-box;
  font-size: 12px;
}

.item-footer {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
}
// 手机端样式结束

.footer {
  margin-top: 68px;
  /* font-family:"黑体"; */
}
.tripadvisor {
  color: #404040;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 55px;
  width: 100%;
  font-size: 14px;
  box-sizing: border-box;
  padding: 0 240px;
}
.tripadvisor-logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 40px;
  font-size: 14px;
}
.tripadvisor-logo > img {
  margin-bottom: 4.5px;
}
.submit {
}
.tripadvisor > input {
  width: 400px;
  // width: 100%;
  height: 53px;
  border: 1px solid #404040;
  padding: 0 0 0 20px;
  font-size: 14px;
}
.tripadvisor button {
  color: white;
  width: 138px;
  height: 55px;
  padding: 0;
  background-color: #1c1c1c;
  border: 1px solid #1c1c1c;
}

.copyright {
  height: 225px;
  background-color: #1c1c1c;
  color: white;
  padding: 0 40px;
  display: flex;
  align-items: center;
  // justify-content: space-between;
}
.info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 12px;
}
.info > .nav {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.info > .nav > a {
  color: white;
  text-decoration: none;
  font-size: 12px;
}
.info > .nav > span {
  margin: 0 41px;
  width: 1px;
  height: 20px;
  background-color: white;
  display: block;
}
.info > .nav > span:last-child {
  margin: 0 0 0 41px;
}
.info > .address {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
.address1,
.address2 {
  display: flex;
  align-items: center;
}
.info > .address img {
  margin-right: 9px;
}
.info > .address span {
  line-height: 18px;
}
.info .address2 {
  margin-left: 40px;
}
.info .copy{
    line-height: 28px;
    text-align: center;
}

@media screen and(max-width: 1440px) {
  .tripadvisor {
    padding: 0 120px;
  }
  .submit > input {
    width: 100%;
  }
  // .copyright {
  //   padding: 0 120px;
  // }
}
@media screen and(max-width: 1024px) {
  .tripadvisor {
    padding: 0 60px;
  }
  // .copyright {
  //   padding: 0 60px;
  // }
}
@media screen and(max-width: 992px) {
  .tripadvisor {
    padding: 0 20px;
  }
  // .copyright {
  //   padding: 0 20px;
  // }
}

@media screen and(max-width: 1170px) {
  .info > .address {
    flex-direction: column;
  }
  .address1 {
    margin-bottom: 10px;
  }
  .info > .nav {
    margin-bottom: 10px;
  }
  .info > .address {
    margin-bottom: 10px;
  }
}
@media screen and(max-width: 810px) {
  .tripadvisor-logo {
    margin-right: 20px;
  }
  .item-footer {
    margin-top: 40px;
  }
}
@media screen and(max-width: 660px) {
}
</style>