<template>
  <div>
    <Header :movetoFirstSecond="movetoFirstSecond" :isFixed="true" />
    <Login />
    <div class="body container">
      <!-- 首屏 -->
      <div class="firstScreen" v-if="port == 1">
        <div style="clear: both"></div>
        <img src="../assets/img/banner6-1.jpg" alt="" width="1000px" />
      </div>
      <div class="firstScreens" v-if="port == 2"></div>
    </div>
    <div class="main-info" v-if="port == 1">
      <table v-if="courses">
        <tr>
          <th><font size="1">时间</font></th>
          <th><font size="1">周一 Mon</font></th>
          <th><font size="1">周二 Tue</font></th>
          <th><font size="1">周三 Wed</font></th>
          <th><font size="1">周四 Thur</font></th>
          <th><font size="1">周五 Fri</font></th>
          <th><font size="1">周六 Sat</font></th>
          <th><font size="1">周日 Sun</font></th>
        </tr>
        <tr v-for="(item, index) in courses" :key="index">
          <td v-for="(course, index2) in item" :key="index2">
            <font size="1">{{ course }}</font>
          </td>
        </tr>
      </table>
    </div>

    <!-- <div class="main-info" v-if="port == 2">
      <swiper style="border: 1px solid #1c1c1c;">
        <swiper-slide v-for="(item, index) in daylist" :key="index" class="week">
              <div v-for="(item, index) in item.list" :key="index" class="weekday">
                    <div>{{item.day}}</div>
                    <div>{{weeklist[item.index].a}}</div>
                    <div>{{weeklist[item.index].b}}</div>
                    <div>{{weeklist[item.index].c}}</div>
                    <div>{{weeklist[item.index].d}}</div>
                    <div>{{weeklist[item.index].e}}</div>
                    <div>{{weeklist[item.index].f}}</div>
                    <div>{{weeklist[item.index].g}}</div>
                    <div>{{weeklist[item.index].h}}</div>
              </div>
        </swiper-slide>
      </swiper>
    </div> -->

    <div class="day" v-if="port == 2">
       <div v-for="(item, index) in list" :key="index"  class="nav">
            <div @click="openday(index)" :class="item.show == false? 'day-item': 'day-items'">
                <div style="font-size:14px">{{item.day}}</div>
                <i v-if="!item.show" class="el-icon-plus"></i>
                <i v-if="item.show" class="el-icon-minus"></i>
            </div>
           
           <el-collapse-transition>
                <div v-show="item.show" class="day-time">
                  <p class="day-time-nav" v-html="item.a"></p>
                  <p class="day-time-nav" v-html="item.b"></p>
                  <p class="day-time-nav" v-html="item.c"></p>
                  <p class="day-time-nav" v-html="item.d"></p>
                  <p class="day-time-nav" v-html="item.e"></p>
                  <p class="day-time-nav" v-html="item.f"></p>
                  <p class="day-time-nav" v-html="item.g"></p>
                  <p class="day-time-nav" v-html="item.h"></p>
                </div>
            </el-collapse-transition>
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
      show:false,
      list:[
         {day:'周一',showContent:false,a:'7:00</br>茶园晨曦瑜伽',b:'8:00</br>排毒瑜伽课程',c:'10:00</br>颂经工坊',d:'11:00</br>禅修讲经课程',e:'14:00</br>禅修讲经课程',f:'15:00</br>腹部核心力量训练',g:'16:00</br>水果酵素制作工坊',h:'20:00</br>昆达里尼瑜伽',show:true},
         {day:'周二',showContent:false,a:'7:00</br>茶园晨曦瑜伽',b:'8:00</br>呼吸工坊',c:'10:00</br>亲子烹饪工坊',d:'11:00</br>燃脂有氧训练',e:'14:00</br>排毒餐烹饪工坊',f:'15:00</br>塑身有氧操',g:'16:00</br>抄经课程',h:'20:00</br>排毒瑜伽课程',show:false},
         {day:'周三',showContent:false,a:'7:00</br>茶园晨曦瑜伽',b:'8:00</br>禅修打坐工坊',c:'10:00</br>颂经工坊',d:'11:00</br>排毒瑜伽课程',e:'14:00</br>营养课程',f:'15:00</br>禅修讲经课程',g:'16:00</br>素食烹饪工坊',h:'20:00</br>昆达里尼瑜伽',show:false},
         {day:'周四',showContent:false,a:'7:00</br>茶园晨曦瑜伽',b:'8:00</br>禅修打坐工坊',c:'10:00</br>抄经课程',d:'11:00</br>禅修打坐工坊',e:'14:00</br>佛茶采摘',f:'15:00</br>疗愈绘画工坊',g:'16:00</br>水果酵素制作工坊',h:'20:00</br>排毒瑜伽课程',show:false},
         {day:'周五',showContent:false,a:'7:00</br>茶园晨曦瑜伽',b:'8:00</br>排毒瑜伽课程',c:'10:00</br>颂经工坊',d:'11:00</br>禅修打坐工坊',e:'14:00</br>素食烹饪工坊',f:'15:00</br>塑身有氧操',g:'16:00</br>素食蛋糕制作工坊',h:'20:00</br>茶道工坊',show:false},
         {day:'周六',showContent:false,a:'7:00</br>茶园晨曦瑜伽',b:'8:00</br>呼吸工坊',c:'10:00</br>素食烹饪工坊',d:'11:00</br>佛茶采摘',e:'14:00</br>禅修打坐工坊',f:'15:00</br>禅修讲经课程',g:'16:00</br>排毒餐烹饪工坊',h:'20:00</br>茶道工坊',show:false},
         {day:'周日',showContent:false,a:'7:00</br>茶园晨曦瑜伽',b:'8:00</br>腹部核心力量训练课程',c:'10:00</br>素食蛋糕烹饪工坊',d:'11:00</br>禅修讲经课程',e:'14:00</br>亲子烹饪工坊',f:'15:00</br>排毒瑜伽课程',g:'16:00</br>营养课程',h:'20:00</br>昆达里尼瑜伽',show:false},
      ],
      port: 1, //1 pc端  2 移动端
      movetoFirstSecond: false,
      //构造数组 不用管
      daylist:[
        {id:1,list:[{index:7,day:'时间'},{index:0,day:'周一 Mon'},{index:1,day:'周二 Tue'},{index:2,day:'周三 Wed'}]},
        {id:2,list:[{index:7,day:'时间'},{index:3,day:'周四 Thur'},{index:4,day:'周五 Fri'},{index:5,day:'周六 Sat'}]},
        {id:3,list:[{index:7,day:'时间'},{index:6,day:'周日 Sun'},{index:0,day:'周一 Mon'},{index:1,day:'周二 Tue'}]},
        {id:4,list:[{index:7,day:'时间'},{index:2,day:'周三 Wed'},{index:3,day:'周四 Thur'},{index:4,day:'周五 Fri'}]},
        {id:5,list:[{index:7,day:'时间'},{index:5,day:'周六 Sat'},{index:6,day:'周日 Sun'},{index:0,day:'周一 Mon'}]},
        {id:6,list:[{index:7,day:'时间'},{index:1,day:'周二 Tue'},{index:2,day:'周三 Wed'},{index:3,day:'周四 Thur'}]},
        {id:7,list:[{index:7,day:'时间'},{index:4,day:'周五 Fri'},{index:5,day:'周六 Sat'},{index:6,day:'周日 Sun'}]},
      ],

      //后台传入的数组
      weeklist:[
        {day:1,a:'茶园晨曦瑜伽',b:'排毒瑜伽课程',c:'颂经工坊',d:'禅修讲经课程',e:'禅修讲经课程',f:'腹部核心力量训练',g:'水果酵素制作工坊',h:'昆达里尼瑜伽'},
        {day:2,a:'茶园晨曦瑜伽',b:'呼吸工坊',c:'亲子烹饪工坊',d:'燃脂有氧训练',e:'排毒餐烹饪工坊',f:'塑身有氧操',g:'抄经课程',h:'排毒瑜伽课程'},
        {day:3,a:'茶园晨曦瑜伽',b:'禅修打坐工坊',c:'颂经工坊',d:'排毒瑜伽课程',e:'营养课程',f:'禅修讲经课程',g:'素食烹饪工坊',h:'昆达里尼瑜伽'},
        {day:4,a:'茶园晨曦瑜伽',b:'禅修打坐工坊',c:'抄经课程',d:'禅修打坐工坊',e:'佛茶采摘',f:'疗愈绘画工坊',g:'水果酵素制作工坊',h:'排毒瑜伽课程'},
        {day:5,a:'茶园晨曦瑜伽',b:'排毒瑜伽课程',c:'颂经工坊',d:'禅修打坐工坊',e:'素食烹饪工坊',f:'塑身有氧操',g:'素食蛋糕制作工坊',h:'茶道工坊'},
        {day:6,a:'茶园晨曦瑜伽',b:'呼吸工坊',c:'素食烹饪工坊',d:'佛茶采摘',e:'禅修打坐工坊',f:'禅修讲经课程',g:'排毒餐烹饪工坊',h:'茶道工坊'},
        {day:7,a:'茶园晨曦瑜伽',b:'腹部核心力量训练课程',c:'素食蛋糕烹饪工坊',d:'禅修讲经课程',e:'亲子烹饪工坊',f:'排毒瑜伽课程',g:'营养课程',h:'昆达里尼瑜伽'},
        {day:8,a:'7:00',b:'8:00',c:'10:00',d:'11:00',e:'14:00',f:'15.00',g:'16:00',h:'20:00'},
      ],
      courses: [
        [
          "7:00",
          "茶园晨曦瑜伽",
          "茶园晨曦瑜伽",
          "茶园晨曦瑜伽",
          "茶园晨曦瑜伽",
          "茶园晨曦瑜伽",
          "茶园晨曦瑜伽",
          "茶园晨曦瑜伽",
        ],
        [
          "8:00",
          "排毒瑜伽课程",
          "呼吸工坊",
          "禅修打坐工坊",
          "禅修打坐工坊",
          "排毒瑜伽课程",
          "呼吸工坊",
          "腹部核心力量训练课程",
        ],
        [
          "10:00",
          "颂经工坊",
          "亲子烹饪工坊",
          "颂经工坊",
          "抄经课程",
          "颂经工坊",
          "素食烹饪工坊",
          "素食蛋糕烹饪工坊",
        ],
        [
          "11:00",
          "泛音唱诵工坊",
          "燃脂有氧训练",
          "排毒瑜伽课程",
          "禅修打坐工坊",
          "禅修打坐工坊",
          "佛茶采摘",
          "禅修讲经课程",
        ],
        [
          "14:00",
          "禅修讲经课程",
          "排毒餐烹饪工坊",
          "营养课程",
          "佛茶采摘",
          "素食烹饪工坊",
          "禅修打坐工坊",
          "亲子烹饪工坊",
        ],
        [
          "15:00",
          "腹部核心力量训练",
          "塑身有氧操",
          "禅修讲经课程",
          "疗愈绘画工坊",
          "塑身有氧操",
          "禅修讲经课程",
          "排毒瑜伽课程",
        ],
        [
          "16:00",
          "水果酵素制作工坊",
          "抄经课程",
          "素食烹饪工坊",
          "水果酵素制作工坊",
          "素食蛋糕制作工坊",
          "排毒餐烹饪工坊",
          "营养课程",
        ],
        [
          "20:00",
          "昆达里尼瑜伽",
          "排毒瑜伽课程",
          "昆达里尼瑜伽",
          "排毒瑜伽课程",
          "茶道工坊",
          "茶道工坊",
          "昆达里尼瑜伽",
        ],
      ],
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
    //控制星期的开关
    openday:function(index){
          console.log("下标index",index)
          if(this.list[index].show == false){
              for(let i = 0;i < this.list.length;i++){
                  this.list[i].show = false
                  this.list[index].show = true
              }
          } else if(this.list[index].show == true){
              for(let i = 0;i < this.list.length;i++){
                  this.list[i].show = false
                  this.list[index].show = true
              }
          } 
    },
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
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
// 移动端样式开始
.day-time-nav{
   width: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
   padding: 8px 8px 10px 8px;
   box-sizing: border-box;
   line-height: 15px;
   border-bottom:1px dashed #336760;
   margin-bottom: -1px;
}

.day-time{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #ffffff;
  padding: 0px 50px 0px 50px;
  box-sizing: border-box;
  
}




.nav{
  background-color: #336760;
}

.day{
  width: 100%;
  
}
.day-item{
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: space-between;
  color: #ffffff;
  padding: 12px;
  box-sizing: border-box;
  background-color: #336760;
  
  margin-top: -2px;
  z-index: 99;
}

.day-items{
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: space-between;
  background-color: #004138;
  color: #ffffff;
  padding: 12px;
  box-sizing: border-box;
}

.week{
  width: 100%;
  display: flex;
   
}

.weekday{
  width: 25%;
  
}

.weekday div{
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 15px;
  border: 1px solid #1c1c1c;
  padding: 0px 10px 0px 10px;
  box-sizing: border-box;
  font-size: 12px;
}

.firstScreens {
 
  width: 100%;
  height: 550px;
  background: url("../assets/img/banner6-1.jpg") center center no-repeat;
  background-size: cover;
}
// 移动端样式结束

.firstScreen {
  margin-bottom: 50px;
}
.main-info {
  font-size: 14px;
  padding: 0 240px;
}
table {
  text-align: center;
  border-collapse: collapse;
  width: 100%;
}
tr {
  height: 45px;
}
th,
td {
  border: 1px solid #404040;
  vertical-align: middle;
}
.main-info tr:first-child {
  border-top: 1px slide #404040;
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
    margin-top: 20px;
    box-sizing: border-box;
  }
  .img-preview > .preview:not(:last-child) {
    margin-right: 10px;
  }
}
</style>