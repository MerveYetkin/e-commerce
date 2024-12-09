<template>
  <header class="sticky top-0 z-[999] ">
    <img src="@/assets/img/advert-banner.jpg" alt="">
    <div class=" bg-white px-8 py-4 ">
        <div class="p-3 flex lg:justify-between ">
            <span class=" font-light text-sm">3000 TL ve Üzeri Siparişlerde Ücretsiz Kargo </span>
            <span class="  font-light text-sm">3000 TL ve Üzeri Siparişlerde Ücretsiz Kargo </span> 
            <span class="  font-light text-sm">3000 TL ve Üzeri Siparişlerde Ücretsiz Kargo </span>
        </div>
        <div class="flex justify-between">
            <img src="@/assets/img/logo.png" alt="">
            <div class="icon flex gap-4">
                <span class="mdi mdi-magnify text-2xl"></span>
                <span class="mdi mdi-account-outline text-2xl"></span>
                <div class="relative">
                    <span class="mdi mdi-heart-outline text-2xl"></span>
                    <span class=" absolute top-[-0.2rem] right-[-0.2rem] w-4 h-4 inline-block bg-black text-white rounded-full text-[0.7rem] flex justify-center items-center">
                        0
                    </span>
                </div>
                <div class="relative">
                    <span class="mdi mdi-cart-outline text-2xl"></span>
                    <span class="absolute top-[-0.2rem] right-[-0.2rem] w-4 h-4 inline-block bg-black text-white rounded-full text-[0.7rem] flex justify-center items-center">
                        0
                    </span>
                </div>
            </div>    
        </div>
        <nav class="h-8 flex items-center ">
            <div class="block lg:hidden flex ">
               <span class="mdi mdi-menu text-2xl"></span>
               <text class="text-xl "> MENÜ </text>
           </div>
            <ul class="hidden lg:flex w-full h-full flex items-center justify-between text-sm font-medium tracking-wider relative">
                <li class="nav__list-item h-full ">
                    <router-link class="nav__link" :to="{name:'Company'}"> KAMPANYALAR</router-link>
                    <div class="nav__inner-menu w-[calc(100vw-4.5rem)] left-0  absolute top-[100%] flex justify-between mt-4 p-12 bg-white shadow border-t">
                        <ul class=" flex flex-col justify-between text-[1.05rem] text-gray-600">
                            <li>
                                <a href="">%70'E VARAN İNDİRİM</a>
                            </li>
                            <li>
                                <a href="">3 ADET 599₺</a>
                            </li>
                            <li>
                                <a href="">4 ADET 1199₺</a>
                            </li>
                             <li>
                                <a href="">2.ÜRÜN 1₺</a>
                            </li>
                        </ul>
                    <ul class="flex flex-col justify-between text-[1.05rem] text-gray-600">
                        <li>
                            <a href="">2 ADET 349₺</a>
                        </li>
                        <li>
                            <a href="">10 ADET 599₺</a>
                        </li>
                        <li>
                            <a href="">3 ADET 1100₺</a>
                        </li>
                    </ul>
                    <img class="w-64 rounded " src="@/assets/img/company.png" alt="">
                  
                    </div>
                </li>
                <li class="nav__list-item h-full ">
                <router-link class="nav__link" :to="{name:'New'}"> YENİ GELENLER</router-link>
                 <div class="nav__inner-menu w-[calc(100vw-4.5rem)] left-0  absolute top-[100%] flex justify-between mt-4 p-12 bg-white shadow border-t">
                        <ul class=" flex flex-col justify-between text-[1.05rem] text-gray-600">
                            <li>
                                <a href="">%70'E VARAN İNDİRİM</a>
                            </li>
                            <li>
                                <a href="">3 ADET 599₺</a>
                            </li>
                            <li>
                                <a href="">4 ADET 1199₺</a>
                            </li>
                             <li>
                                <a href="">2.ÜRÜN 1₺</a>
                            </li>
                        </ul>
                    <ul class="flex flex-col justify-between text-[1.05rem] text-gray-600">
                        <li>
                            <a href="">2 ADET 349₺</a>
                        </li>
                        <li>
                            <a href="">10 ADET 599₺</a>
                        </li>
                        <li>
                            <a href="">3 ADET 1100₺</a>
                        </li>
                    </ul>
                    <img class="w-64 rounded " src="@/assets/img/company.png" alt="">
                  
                    </div>
                </li>
                <li class="nav__list-item h-full ">
                    <router-link class="nav__link" :to="{name:'Top'}"> ÜST GİYİM </router-link>
                      <div class="nav__inner-menu absolute w-[calc(100vw-4.5rem)] left-0 top-[100%] flex justify-between mt-4 p-12 bg-white shadow border-t">
                        <ul class=" flex flex-col justify-between text-[1.05rem] text-gray-600">
                            <li>
                                <a href="">UZUN KOL</a>
                            </li>
                            <li>
                                <a href="">TRİKO & KAZAK</a>
                            </li>
                            <li>
                                <a href="">SWEATSHİRT</a>
                            </li>
                             <li>
                                <a href="">POLO YAKA</a>
                            </li>
                            <li>
                                <a href="">ATLET</a>
                            </li>

                        </ul>
                    <ul class="flex flex-col justify-between text-[1.05rem] text-gray-600">
                        <li>
                            <a href="">T-SHİRT</a>
                        </li>
                        <li>
                            <a href="">TRİKO & ÖRGÜ </a>
                        </li>
                        <li>
                            <a href="">OVERSİZE</a>
                        </li>
                         <li>
                            <a href="">DÜZ OVERSİZE TSHİRT </a>
                        </li>
                         <li>
                            <a href="">GÖMLEK</a>
                        </li>
                    </ul>
                    <img class="w-64 rounded " src="@/assets/img/New.jpg" alt="">
                    </div>
                </li>
                <li class="nav__list-item h-full ">
                    <a class="nav__link" href="">ALT GİYİM</a>
                      <div class="nav__inner-menu absolute w-[calc(100vw-4.5rem)] left-0 top-[100%] flex justify-between mt-4 p-12 bg-white shadow border-t">
                        <ul class=" flex flex-col justify-between text-[1.05rem] text-gray-600">
                            <li>
                                <a href="">EŞOFMAN ALTI & JOGGER</a>
                            </li>
                            <li>
                                <a href="">KUMAŞ PANTOLON </a>
                            </li>
                            <li>
                                <a href="">ŞORT</a>
                            </li>
                             
                        </ul>
                    <ul class="flex flex-col justify-between text-[1.05rem] text-gray-600">
                        <li>
                            <a href="">KOT PANTOLON </a>
                        </li>
                        <li>
                            <a href="">KETEN PANTOLON</a>
                        </li>
                        <li>
                            <a href="">GABARDİN</a>
                        </li>
                    </ul>
                    <img class="w-64 rounded " src="@/assets/img/New.jpg" alt="">
                    </div>
                </li>
                <li class="nav__list-item h-full ">
                    <a class="nav__link" href="">DIŞ GİYİM</a>
                      <div class="nav__inner-menu absolute w-[calc(100vw-4.5rem)] left-0 top-[100%] flex justify-between mt-4 p-12 bg-white shadow border-t">
                        <ul class=" flex flex-col justify-between text-[1.05rem] text-gray-600">
                            <li>
                                <a href="">KOT CEKET</a>
                            </li>
                            <li>
                                <a href="">KAŞE MONT</a>
                            </li>
                            <li>
                                <a href="">CEKET</a>
                            </li>
                            
                        </ul>
                    <ul class=" flex flex-col justify-between text-[1.05rem] text-gray-600">
                        <li>
                            <a href="">DERİ CEKET </a>
                        </li>
                        <li>
                            <a href="">MONT</a>
                        </li>
                    </ul>
                    <img class="w-64 rounded " src="@/assets/img/image1.jpg" alt="">
                    </div>
                </li>
                <li class="nav__list-item h-full ">
                <a class="nav__link" href=""> ALT ÜST TAKIM</a>
                </li>
                <li class="nav__list-item h-full ">
                <a class="nav__link" href=""> AKSESUAR</a>
                  <div class="nav__inner-menu absolute w-[calc(100vw-4.5rem)] left-0 top-[100%] flex justify-between mt-4 p-12 bg-white shadow border-t">
                        <ul class=" flex flex-col justify-between text-[1.05rem] text-gray-600">
                            <li>
                                <a href="">BİLEKLİK</a>
                            </li>
                            <li>
                                <a href="">PARFÜM</a>
                            </li>
                            <li>
                                <a href="">YÜZÜK</a>
                            </li>
                             <li>
                                <a href="">ÇORAP</a>
                            </li>
                            <li>
                                <a href="">ÇANTA</a>
                            </li>
                            <li>
                                <a href="">ELDİVEN</a>
                            </li>

                        </ul>
                    <ul class=" flex flex-col justify-between text-[1.05rem] text-gray-600">
                        <li>
                            <a href="">KEMER</a>
                        </li>
                        <li>
                            <a href="">ŞAPKA</a>
                        </li>
                        <li>
                            <a href="">GÖZLÜK</a>
                        </li>
                        <li>
                            <a href="">KOLYE</a>
                        </li>
                        <li>
                            <a href="">BOXER</a>
                        </li>
                    </ul>
                    <img class="w-64 rounded " src="@/assets/img/glases.jpg" alt="">
                    </div>
                </li>
                <li class="nav__list-item h-full ">
                    <a class="nav__link" href="">AYAKKABI & TERLİK</a>
                </li>
                <li class="nav__list-item h-full ">
                    <a class="nav__link"  href="">KOMBİN </a>
                      <div class="nav__inner-menu absolute w-[calc(100vw-4.5rem)] left-0 top-[100%] flex justify-between mt-4 p-12 bg-white shadow border-t">
                        <ul class=" flex flex-col justify-between text-[1.05rem] text-gray-600">
                            <li>
                                <a href="">YAZLIK KLASİK KOMBİNLER</a>
                            </li>
                            <li>
                                <a href="">YAZLIK KETEN KOMBİNLER</a>
                            </li>
                           
                        </ul>
                    <ul class=" flex flex-col justify-between text-[1.05rem] text-gray-600">
                        <li>
                            <a href="">KIŞLIK KLASİK KOMBİNLER</a>
                        </li>
                        <li>
                            <a href="">TÜM KOMBİNLER</a>
                        </li>
                    </ul>
                    </div>
                </li>
                <li class="nav__list-item h-full ">
                    <a class="nav__link" href="">SEPETTE %32 İNDİRİM!</a>
                </li>
            </ul>
        </nav>
    </div>

  </header>
</template>

<script>
export default {

}

</script>

<style>
    .nav__link {
        position:relative;
        
    }
    .nav__link::after{
        content:'';
        width:0;
        height:2px;
        background-color: #333;
        transition:all 0.3s;
        position:absolute;
        bottom:-0.3rem;
        left:50%;
        transform:translateX(-50%);
    }
    .nav__link:hover::after{
         width:100%;
    }
    .nav__inner-menu{
       display:none;
    }
    .nav__list-item:hover .nav__inner-menu{
        display: flex;
    }
    
    
</style>