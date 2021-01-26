<template>
  <div class="swiper-container mySwiper2">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in banners1" :key="index">
        <div class="txt" :class="'txt' + index">
          <p>{{ title[index] }}</p>
        </div>
        <img :src="item" alt="" />
      </div>
    </div>
    <!-- <div class="swiper-pagination"></div> -->

  </div>


</template>

<script>
// 导入新的轮播的 swiper.min.js 文件
import SSwiper from "../assets/js/swiper.min.js";
export default {
  data() {
    return {
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
    };
  },
  mounted() {
    // 以下定义首屏新轮播图js
    var paragraphs = document
      .querySelector(".swiper-container")
      .querySelectorAll("p");

    for (var i = 0; i < paragraphs.length; i++) {
      var paragraph = paragraphs[i];
      var str = paragraph.innerHTML;
      var array = str.split("");
      paragraph.innerHTML = "";
      var className = "";
      for (let j = 0; j < array.length; j++) {
        if (j % 2 == 0) {
          className = "odd";
        } else {
          className = "even";
        }
        paragraph.innerHTML +=
          "<span class=" + className + ">" + array[j] + "</span>";
      }
    }
    var swiper = new SSwiper(".mySwiper2", {
      autoplay: 6000,
      speed: 1000,
      autoplayDisableOnInteraction: false,
      loop: true,
      effect: "fade",
      pagination: ".swiper-pagination",
      paginationClickable: true,
    });
    // 以上定义首屏新轮播图js结束
  },
};
</script>


<style lang="scss">
// 导入轮播图转专用样式
// @import url(../assets/css/swiperStyle.css);

.swiper-container {
  width: 100%;
  height: 100%;
}
.mySwiper2 .swiper-slide {
  position:relative;
}
.mySwiper2 .swiper-slide .txt{
  position:absolute;
	top:50%;
	z-index:10;
	left: 50%;
	transform: translate(-50%, -50%);
}
.mySwiper2 .swiper-slide p{
  font-size:36px;
	letter-spacing:2px;
	font-weight:bold;
	line-height:2;
	color:transparent;
	-moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
	will-change: transform;
	}	
.mySwiper2 .swiper-slide-active p,.swiper-slide-duplicate-active p{
	animation:line 7s; 
	animation-iteration-count:2;
    animation-direction:alternate;
	animation-timing-function:ease;
	}		
@keyframes line{
	0%{transform: matrix3d(0.990268, -0.139173, 0, 0, -0.0348995, 0.999391, 0, 0, 0, 0, 1, 0, 10, -20, 0, 1);}
	50%{transform: rotate(1deg);transform-origin:left center;}
	60%{transform: translate3d(0px, 0px, 0px);}
	100%{transform: translate3d(0px, 0px, 0px);}
}	
.mySwiper2 .swiper-slide p span{
    display: inline-block;
    will-change: transform, opacity, text-shadow;
}
.mySwiper2 .swiper-slide-active p .even,  .swiper-slide-duplicate-active p .even{
    animation:letterL 7s;
    animation-iteration-count:2;
    animation-direction:alternate;	
    animation-fill-mode: forwards;
    animation-timing-function:ease-in-out;
}
.mySwiper2 .swiper-slide-active p .odd,.swiper-slide-duplicate-active p .odd	{
    animation:letterR 7s;
    animation-iteration-count:2;
    animation-direction:alternate;	
    animation-fill-mode: forwards;
    animation-timing-function:ease-in-out;
}

@keyframes letterL{
	0%{opacity: 0;transform: matrix3d(1.53209, -1.28558, 0, 0, -1, 1.73205, 0, 0, 0, 0, 1, 0, 18, -8, 0, 1);text-shadow: rgb(255, 255, 255) 0px 0px 40px}
60%{opacity: 1;transform: translate3d(0px, 0px, 0px);
    text-shadow: rgb(255, 255, 255) 0px 0px 0px;}	
100%{opacity: 1;transform: translate3d(0px, 0px, 0px);
    text-shadow: rgb(255, 255, 255) 0px 0px 0px;}}
@keyframes letterR{
	0%{opacity: 0;transform: matrix3d(1.14907, -0.964181, 0, 0, 1.40954, -0.51303, 0, 0, 0, 0, 1, 0, 15, -8, 0, 1);text-shadow: rgb(255, 255, 255) 0px 0px 40px}
60%{opacity: 1;transform: translate3d(0px, 0px, 0px);
    text-shadow: rgb(255, 255, 255) 0px 0px 0px;}	
100%{opacity: 1;transform: translate3d(0px, 0px, 0px);
    text-shadow: rgb(255, 255, 255) 0px 0px 0px;}}
		
.mySwiper2 .swiper-slide p span:nth-child(22) { animation-delay: 770ms;  }
.mySwiper2 .swiper-slide p span:nth-child(21) { animation-delay: 735ms;  }
.mySwiper2 .swiper-slide p span:nth-child(20) { animation-delay: 700ms;  }
.mySwiper2 .swiper-slide p span:nth-child(19) { animation-delay: 665ms;  }
.mySwiper2 .swiper-slide p span:nth-child(18) { animation-delay: 630ms;  }
.mySwiper2 .swiper-slide p span:nth-child(17) { animation-delay: 595ms;  }
.mySwiper2 .swiper-slide p span:nth-child(16) { animation-delay: 560ms;  }
.mySwiper2 .swiper-slide p span:nth-child(15) { animation-delay: 525ms;  }
.mySwiper2 .swiper-slide p span:nth-child(14) { animation-delay: 490ms;  }
.mySwiper2 .swiper-slide p span:nth-child(13) { animation-delay: 455ms;  }
.mySwiper2 .swiper-slide p span:nth-child(12) { animation-delay: 420ms;  }
.mySwiper2 .swiper-slide p span:nth-child(11) { animation-delay: 385ms;  }
.mySwiper2 .swiper-slide p span:nth-child(10) { animation-delay: 350ms;  }
.mySwiper2 .swiper-slide p span:nth-child(9) { animation-delay: 315ms;  }
.mySwiper2 .swiper-slide p span:nth-child(8) { animation-delay: 280ms;  }
.mySwiper2 .swiper-slide p span:nth-child(7) { animation-delay: 245ms;  }
.mySwiper2 .swiper-slide p span:nth-child(6) { animation-delay: 210ms;  }
.mySwiper2 .swiper-slide p span:nth-child(5) { animation-delay: 175ms;  }
.mySwiper2 .swiper-slide p span:nth-child(4) { animation-delay: 140ms;  }
.mySwiper2 .swiper-slide p span:nth-child(3) { animation-delay: 105ms;  }
.mySwiper2 .swiper-slide p span:nth-child(2) { animation-delay: 70ms;  }
.mySwiper2 .swiper-slide p span:nth-child(1) { animation-delay: 35ms;  }		
		
		
		
.mySwiper2 .swiper-slide .txt1,.swiper-slide .txt2{
left: 50%;
}
	
	
.mySwiper2 .swiper-slide .txt3{
margin-top: -270px;
left: 50%;
margin-left: -90px;}

.mySwiper2 .swiper-slide .txt4{
margin-top: -120px;
left: 180px;
}
		
.mySwiper2 .swiper-slide img{
	width:100%;
	height:auto;
	min-height:100%;
	transition:1s linear 2s;
	}
.mySwiper2 .swiper-slide-active img,.swiper-slide-duplicate-active img{
	transition:16s linear;
	transform:scale(1.2,1.2);
	}	
.mySwiper2 .swiper-pagination{
	bottom:30px !important;
	left:-100px !important;
	text-align:right;
	text-indent:100px;
	}	
.mySwiper2 .swiper-pagination-bullet{
	width:12px;
	height:12px;
	opacity:1;
	background:none;
	border:1px solid #fff;}	
.mySwiper2 .swiper-pagination-bullet-active{
	background:#fff;}


</style>