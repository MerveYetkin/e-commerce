<template>
    <div class="flex gap-4 text-sm px-16 py-10">
        <span class="mdi mdi-map-marker"></span>
        <span> Anasayfa / Kampanyalar </span>
    </div>
    <div class="flex px-16">
    
        <div class=" hidden md:block flex flex-col basis-1/3"> 
        
            <label class="gap-10">
              <div class=" flex flex-col py-4 w-[60%]">
                    <span class="font-bold">Kampanyalar</span>
                    <input type="text" class="border ">
              </div>
                <div class="flex gap-3">
                    <input type="checkbox">
                    <span class="text-sm">EŞOFMAN ALTI</span>
                </div>
                <div class="flex gap-3">
                    <input type="checkbox">
                    <span class="text-sm">DÜZ JOGGERLER</span>
                </div>
               <div class="flex gap-3">
                <input type="checkbox">
                <span class="text-sm">JOGGER</span>
              </div>
                <div class="flex gap-3">
                    <input type="checkbox">
                    <span class="text-sm">EŞOFMAN ALTI & JOGGER</span>
                </div>
               <div class="flex gap-3">
                <input type="checkbox">
                <span class="text-sm">COLLECTİON</span>
              </div>
               <div class="flex gap-3">
                <input type="checkbox">
                <span class="text-sm">ALT GİYİM</span>
              </div>
               <div class="flex gap-3">
                <input type="checkbox">
                <span class="text-sm">ÇOK SATANLAR</span>
              </div>
               <div class="flex gap-3">
                <input type="checkbox">
                <span class="text-sm">YENİ GELENLER </span>
              </div>
             </label>
              <div class="py-4">
               <span class="flex flex-col border border-slate-200 w-[60%]"></span>
               </div>
                <div class="flex flex-col">
                    <div class="  py-4 w-[60%] gap-10">
                            <span class="font-bold">Filtreler</span>
                    </div>
                <div class="flex gap-3">
                    <input type="checkbox">
                    <span class="text-sm">İndirimli Ürünler</span>
                </div>
                <div class="flex gap-3">
                    <input type="checkbox">
                    <span class="text-sm">Fırsat Ürünleri</span>
                </div>
                    <div class="flex gap-3">
                        <input type="checkbox">
                        <span class="text-sm">Yeni Ürünler </span>
                    </div>
                    <div class="py-4">
                <span class="flex flex-col border border-slate-200 w-[60%]"></span>
                </div>
                    
                </div>
                <div class="flex flex-col">
                    <div class="  py-4 w-[60%] gap-10">
                            <span class="font-bold">Renkler </span>
                    </div>
                <div class="flex gap-3">
                    <input type="checkbox">
                    <span class="text-sm">ANTRASİT</span>
                </div>
                <div class="flex gap-3">
                    <input type="checkbox">
                    <span class="text-sm">SİYAH</span>
                </div>
                <div class="flex gap-3">
                    <input type="checkbox">
                    <span class="text-sm">GRİ </span>
                </div>
                 <div class="py-4">
               <span class="flex flex-col border border-slate-200 w-[60%]"></span>
               </div>
                
                </div>
            <div class="flex flex-col gap-3">
                    <div class="  py-4 w-[60%] gap-10">
                            <span class="font-bold">Beden</span>
                    </div>
                    <div class="flex gap-3">
                        <input type="checkbox">
                        <span class="text-sm">S</span>
                    </div>
                    <div class="flex gap-3">
                        <input type="checkbox">
                        <span class="text-sm">M</span>
                    </div>
                    <div class="flex gap-3">
                        <input type="checkbox">
                        <span class="text-sm">L </span>
                    </div>
                    <div class="flex gap-3">
                        <input type="checkbox">
                        <span class="text-sm">XL </span>
                    </div>
                    <div class="flex gap-3">
                        <input type="checkbox">
                        <span class="text-sm">XXL </span>
                    </div>

                    <div class="py-4">
                <span class="flex flex-col border border-slate-200 w-[60%]"></span>
                </div>
                    
                </div>
            <div class="range-slider ">
                <label >Fiyat Aralığı</label>
                <div class="slider-labels flex justify-between">
                
                    <span id="minValue">189 TL</span>
                    <span id="maxValue">600 TL</span>
                </div>
                <input type="range" id="priceRange" min="0" max="1000" value="500" step="10" class="range-input">
    
            </div>
    </div>
        
        <div class="w-full flex flex-wrap gap-8 ">
            <div class=" sm:w-[calc(50%-1rem)] lg:w-[calc(33%-1.5rem)] relative ">
                <img  src="@/assets/img/cmpny-1.webp" alt="">
                <span class="px-2 py-1 bg-black text-white text-xs rounded-full  absolute top-0 left-0 ">Yeni</span>
                <span class="text-xs"> Erkek Düz Lacivert Kargo  Paça Lastikli Jogger</span>
              <div class="flex justify-between">
                <span>
                    <del>359₺</del>
                    <b>300₺</b>
                </span>
                    <span class="mdi mdi-heart-outline text-2xl"></span>
              </div>
             <div class="py-2 px-3 text-xs text-center bg-black text-white rounded tracking-wider">
                  SEÇECEĞİN 2 ÜRÜN 359₺
            </div>           
            </div>

            <div class="sm:w-[calc(50%-1rem)] lg:w-[calc(33%-1.5rem)] relative">
               <img src="@/assets/img/cmpny-2.webp" alt="">
                <span class="px-2 py-1 bg-black text-white text-xs rounded absolute top-0 left-0 ">Yeni</span>
                 <span class="text-xs"> Erkek Düz Lacivert Kargo  Paça Lastikli Jogger</span>
              <div class="flex justify-between">
                <span>
                    <del>359₺</del>
                    <b>300₺</b>
                </span>
                    <span class="mdi mdi-heart-outline text-2xl"></span>
              </div>
             <div class="py-2 px-3 text-xs text-center bg-black text-white rounded tracking-wider">
                  SEÇECEĞİN 2 ÜRÜN 359₺
            </div>           
            </div>
            
              <div class="sm:w-[calc(50%-1rem)] lg:w-[calc(33%-1.5rem)] relative">
               <img src="@/assets/img/cmpny-3.webp" alt="">
                <span class="px-2 py-1 bg-black text-white text-xs rounded absolute top-0 left-0 ">Yeni</span>
                 <span class="text-xs"> Erkek Düz Lacivert Kargo  Paça Lastikli Jogger</span>
              <div class="flex justify-between">
                <span>
                    <del>359₺</del>
                    <b>300₺</b>
                </span>
                    <span class="mdi mdi-heart-outline text-2xl"></span>
              </div>
             <div class="py-2 px-3 text-xs text-center bg-black text-white rounded tracking-wider">
                  SEÇECEĞİN 2 ÜRÜN 359₺
            </div>           
            </div>
             <div class="sm:w-[calc(50%-1rem)] lg:w-[calc(33%-1.5rem)] relative">
               <img src="@/assets/img/cmpny-4.webp" alt="">
                <span class="px-2 py-1 bg-black text-white text-xs rounded absolute top-0 left-0 ">Yeni</span>
                 <span class="text-xs"> Erkek Düz Lacivert Kargo  Paça Lastikli Jogger</span>
              <div class="flex justify-between">
                <span>
                    <del>359₺</del>
                    <b>300₺</b>
                </span>
                    <span class="mdi mdi-heart-outline text-2xl"></span>
              </div>
             <div class="py-2 px-3 text-xs text-center bg-black text-white rounded tracking-wider">
                  SEÇECEĞİN 2 ÜRÜN 359₺
            </div>           
            </div>
             <div class="sm:w-[calc(50%-1rem)] lg:w-[calc(33%-1.5rem)] relative">
               <img src="@/assets/img/cmpny-5.webp" alt="">
                <span class="px-2 py-1 bg-black text-xs text-white rounded absolute top-0 left-0 ">Yeni</span>
                 <span class="text-xs"> Erkek Düz Lacivert Kargo  Paça Lastikli Jogger</span>
              <div class="flex justify-between">
                <span>
                    <del>359₺</del>
                    <b>300₺</b>
                </span>
                    <span class="mdi mdi-heart-outline text-2xl"></span>
              </div>
                <div class="py-2 px-3 text-xs text-center bg-black text-white rounded tracking-wider">
                    SEÇECEĞİN 2 ÜRÜN 359₺
                </div>           
            </div>
              <div class="sm:w-[calc(50%-1rem)] lg:w-[calc(33%-1.5rem)] relative">
                 <img src="@/assets/img/cmpny-6.webp" alt="">
                 <span class="px-2 py-1 bg-black text-white text-xs rounded absolute top-0 left-0 ">Yeni</span>
                 <span class="text-xs"> Erkek Düz Lacivert Kargo  Paça Lastikli Jogger</span>
                    <div class="flex justify-between">
                        <span>
                            <del>359₺</del>
                            <b>300₺</b>
                        </span>
                            <span class="mdi mdi-heart-outline text-2xl"></span>
                    </div>
                <div class="py-2 px-3 text-xs text-center bg-black text-white rounded tracking-wider">
                    SEÇECEĞİN 2 ÜRÜN 359₺
                </div>           
            </div>
         </div>   
      
     </div>
                
</template>
<script>

export default {
   
}
</script>
<style>

</style>
