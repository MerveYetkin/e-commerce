<template>
  <swiper 
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    
    :modules="modules"
    class="mySwiper"
    >
      <swiper-slide><img src="@/assets/img/Slide1.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="@/assets/img/Slide2.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="@/assets/img/Slide3.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="@/assets/img/Slide4.jpg" alt=""></swiper-slide>
   
  </swiper>
  <div class=" lg:flex gap-10 py-4 px-6">
      <div class="flex flex-col gap-3 py-1">
            <img src="@/assets/img/categories1.jpg" alt="">
            <img src="@/assets/img/categories2.jpg" alt="">
            <img src="@/assets/img/categories3.jpg" alt="">
            <img src="@/assets/img/categories4.jpg" alt="">
      </div>
      <div class="flex flex-col gap-3"> 
            <img src="@/assets/img/categories5.jpg" alt="">
            <img src="@/assets/img/categories6.jpg" alt="">
            <img src="@/assets/img/categories7.jpg" alt="">
            <img src="@/assets/img/categories8.jpg" alt="">
      </div>
  </div>
    <div class="py-8 px-4">
          <img class=" w-full h-full" src="@/assets/img/big-images.jpg" alt="">
    </div>
    <section id="new_arrivals" class="my-12 p-12" >
     <div class=" flex gap-12 justify-center items-center">
        <div class="h-px w-[35%] bg-gray-800"></div>
        <h1 class="text-2xl font-bold text-gray-700 tracking-wider text-center ">Yeni Gelenler</h1>
        <div class="h-px w-[35%] bg-gray-800"></div>
      </div>
       <swiper
        id="swiper_new_arrivals"
        :navigation="true"
        :slidesPerView="5"
        :spaceBetween="30"
        :modules="newArrivalsModules"
        class="mySwiper swiper-new-arrivals mt-10"
      >
     
        <swiper-slide>
          <div class="text-xs">
             <div class="w-full">
              <img class= "w-full" src="@/assets/img/brown.jpg" alt="">
             </div>
             <div class=" flex flex-col gap-2 mt-4">
                <span class="text-sm text-start"> Kahve Desenli polar Gömlek PNC 2260</span>
                <div class="flex justify-between">
                  <span class=""> 
                    <del class="me-3"> ₺599 </del> 
                    <b  class="text-lg">  ₺399</b> 
                  </span>
                  <span class="mdi mdi-heart-outline text-2xl"></span>
                </div>
                <div class="py-2 px-3 text-center bg-black text-white rounded tracking-wider">
                    2.ÜRÜN 1TL -2.ÜRÜN 1TL -2.ÜRÜN 1TL 
                </div>
              </div>
            </div>

        </swiper-slide>
         <swiper-slide>
          <div class="text-xs">
             <div class="w-full">
              <img class= "w-full" src="@/assets/img/blue.jpg" alt="">
             </div>
             <div class="flex flex-col gap-2 mt-4">
                <span class="text-sm text-start"> Lacivert Desenli polar Gömlek PNC 2260</span>
                <div class="flex justify-between">
                  <span class=""> 
                    <del class="me-3"> ₺599 </del> 
                    <b  class="text-lg">  ₺399</b> 
                  </span>
                  <span class="mdi mdi-heart-outline text-2xl"></span>
                </div>
                <div class="py-2 px-3 text-center bg-black text-white rounded tracking-wider">
                    2.ÜRÜN 1TL -2.ÜRÜN 1TL -2.ÜRÜN 1TL 
                </div>
              </div>
            </div>

        </swiper-slide>
        <swiper-slide>
          <div class="text-xs">
             <div class="w-full">
              <img class= "w-full" src="@/assets/img/red.jpg" alt="">
             </div>
             <div class="flex flex-col gap-2 mt-4">
                <span class="text-sm text-start"> Kırmızı Desenli polar Gömlek PNC 2260</span>
                <div class="flex justify-between">
                  <span class=""> 
                    <del class="me-3"> ₺599 </del> 
                    <b  class="text-lg">  ₺399</b> 
                  </span>
                  <span class="mdi mdi-heart-outline text-2xl"></span>
                </div>
                <div class="py-2 px-3 text-center bg-black text-white rounded tracking-wider">
                    2.ÜRÜN 1TL -2.ÜRÜN 1TL -2.ÜRÜN 1TL 
                </div>
              </div>
            </div>

        </swiper-slide>
         <swiper-slide>
          <div class="text-xs">
             <div class="w-full">
              <img class= "w-full" src="@/assets/img/bej.jpg" alt="">
             </div>
             <div class="flex flex-col gap-2 mt-4">
                <span class="text-sm text-start"> Hardal Desenli polar Gömlek PNC 2260</span>
                <div class="flex justify-between">
                  <span class=""> 
                    <del class="me-3"> ₺599 </del> 
                    <b  class="text-lg">  ₺399</b> 
                  </span>
                  <span class="mdi mdi-heart-outline text-2xl"></span>
                </div>
                <div class="py-2 px-3 text-center bg-black text-white rounded tracking-wider">
                    2.ÜRÜN 1TL -2.ÜRÜN 1TL -2.ÜRÜN 1TL 
                </div>
              </div>
            </div>

        </swiper-slide>
         <swiper-slide>
          <div class="text-xs">
             <div class="w-full">
              <img class= "w-full" src="@/assets/img/jean.jpg" alt="">
             </div>
             <div class="flex flex-col gap-2 mt-4">
                <span class="text-sm text-start"> Mavi Kot Desenli polar Gömlek PNC 2260</span>
                <div class="flex justify-between">
                  <span class=""> 
                    <del class="me-3"> ₺599 </del> 
                    <b  class="text-lg">  ₺399</b> 
                  </span>
                  <span class="mdi mdi-heart-outline text-2xl"></span>
                </div>
                <div class="py-2 px-3 text-center bg-black text-white rounded tracking-wider">
                    2.ÜRÜN 1TL -2.ÜRÜN 1TL -2.ÜRÜN 1TL 
                </div>
              </div>
            </div>

        </swiper-slide>
     </swiper>
  </section>
 
      <div class="py-12 border border-t mt-24">
        <img class="w-full h-full" src="@/assets/img/big-images2.jpg" alt="">
      </div> 
      <div>
        <img src="@/assets/img/kombin-advert.jpg" alt="">
      </div>
      <div class=""> 

      </div>
      <div class=" border border-inherit py-12 px-4 my-12 mx-12 "> 
        <p>SC Sarvin: Erkek Giyimde Kalitenin Adresi
        Erkek giyiminde kalite ve tarz arayanların tercihi olan SC Sarvin, şıklığı ve rahatlığı bir arada sunuyor.
         Kaliteli ve şık ürünler sunmayı ilke edinen SC Sarvin, her sezon yeni trendleri takip ederek koleksiyonlarını yeniliyor.
          Şimdi Sc Sarvin’in geniş ürün yelpazesine göz atalım.</p>
        <button class="btn border border-black bg-slate-200 text-black p-1 m-1">  Devamını Oku... </button>
        <p class="hidden" >Triko ve Kazak: Soğuk Havalarda Stil ve Rahatlık
           Soğuk havalarda sıcaklığı ve şıklığı bir arada sunan triko ve kazaklar, erkek giyiminde vazgeçilmez parçalardır.
            SC Sarvin'in triko ve kazak koleksiyonu, yüksek kalite ve şıklığı bir araya getiriyor. 
            Hem günlük kullanıma uygun olan triko ve kazaklar, hem de özel günlerde şıklık arayanların tercihi oluyor. 
            Triko ve kazakları farklı renk ve desenlerle kombinleyerek tarzınızı yansıtabilirsiniz.</p>
      </div>
      <div class="p-12">
        <img class="w-full h-full" src="@/assets/img/cargo.jpg" alt="">
      </div>
      <div>
          <img class="w-full h-full" src="@/assets/img/shop-image.jpg" alt="">
      </div>
     
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

 import 'swiper/css';

  import 'swiper/css/pagination';
  



  // Import Swiper Vue.js components
   import { Autoplay, Pagination} from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination],
      };
    },
  };
</script>

<style>
#new_arrivals{
  height: 90vh;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal{
  top: 85%;
}
.swiper-pagination-bullet{
  border: 1px solid #333;
  background-color: white;
  width: 13px;
  height: 13px;
  opacity: 1;
}
.swiper-pagination-bullet-active{
    background-color:black;
  
}
.category-img-card{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
}
.category-img-card span{
  color: #fff;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 1.7rem;
}
</style>