<template>
  <footer >
    <div class="lg:flex justify-evenly">
      <div class="lg:flex p-14 gap-20">
          <h2 class="text-bold text-lg">Bizi Takip Edin</h2>
            <div class="footer-icon gap-4 flex text-2xl">
                <span class="mdi mdi-facebook"></span>
                <span class="mdi mdi-twitter"></span>
                <span class="mdi mdi-instagram"></span>
                <span class="mdi mdi-youtube"></span>
                <span class="mdi mdi-google-plus"></span>
            </div>
    </div>
  <div class=" p-14 flex flex-col  gap-5">
    <h4>E-BÜLTEN ABONELİĞİ</h4>
    <h4>Kampanya ve yeniliklerden haberdar olmak için e-bültenimize abone olun!</h4>
    <div class="btn-footer flex">
      <input class="bg-[#B2A8A859] p-2 flex-1" type="" placeHolder="E-posta adresinizi girin">
      <button class="text-bold text-white bg-[#917B65] p-2"> Gönder </button>

    </div>
  </div>
  </div>

    <div class="footer-top px-12 md:px-16 xl:px-32 px-52 3xl:px-64 pt-10 ">
      <div class=" flex flex-wrap lg:flex-nowrap justify-between gap-14 sm:gap-8 lg:gap-0">
        <div class="w-full sm:w-[calc(49%-1rem)] lg:w-full flex flex-col items-center text-gray-900">
          <div>
            <h2 class="font-medium tracking-wider mb-2 text-center sm:text-start">POPÜLER KATEGORİLER</h2>
            <ul class="flex flex-col gap-1 items-center sm:items-start text-sm">
              <li class="hover:underline"><a href="#">SWETSHİRT</a></li>
              <li class="hover:underline"><a href="#">KAZAK</a></li>
              <li class="hover:underline"><a href="#">DERİ CEKET</a></li>
              <li class="hover:underline"><a href="#">JOGGER</a></li>
            </ul>
          </div>
        </div>
        <div class="w-full sm:w-[calc(49%-1rem)] lg:w-full flex flex-col items-center text-gray-900">
          <div>
            <h2 class="font-medium tracking-wider mb-2 text-center sm:text-start">ALIŞVERİŞ BİLGİLERİ</h2>
            <ul class="flex flex-col gap-1 items-center sm:items-start text-sm">
              <li class="hover:underline"><a href="#">Sipariş</a></li>
              <li class="hover:underline"><a href="#">Sepetim</a></li>
              <li class="hover:underline"><a href="#">Değişim Talepleri</a></li>
              <li class="hover:underline"><a href="#">Sipariş Takibi</a></li>
              <li class="hover:underline"><a href="#">Hesabım</a></li>
            </ul>
          </div>
        </div>
        <div class="w-full sm:w-[calc(49%-1rem)] lg:w-full flex flex-col items-center text-gray-900">
          <div>
            <h2 class="font-medium tracking-wider mb-2 text-center sm:text-start">MÜŞTERİ HİZMETLERİ</h2>
            <ul class="flex flex-col gap-1 items-center sm:items-start text-sm">
              <li class="hover:underline"><a href="#">Canlı Destek</a></li>
              <li class="hover:underline"><a href="#">Yardım</a></li>
              <li class="hover:underline"><a href="#">Sıkça Sorulan Sorular</a></li>
            </ul>
          </div>
        </div>
        <div class="w-full sm:w-[calc(49%-1rem)] lg:w-full flex flex-col items-center text-gray-900">
          <div>
            <h2 class="font-medium tracking-wider mb-2 text-center sm:text-start">KURUMSAL</h2>
            <ul class="flex flex-col gap-1 items-center sm:items-start text-sm ">
              <li class="hover:underline"><a href="#">Hakkımızda</a></li>
              <li class="hover:underline"><a href="#">İletişim</a></li>
              <li class="hover:underline"><a href="#">İade ve Değişim Koşulları</a></li>
              <li class="hover:underline"><a href="#">Sıkça Sorulan Sorular</a></li>
              <li class="hover:underline"><a href="#"></a>Mağzalar</li>
              <li class="hover:underline"><a href="#"></a>Mesafeli Satış Sözleşmesi</li>
              <li class="hover:underline"><a href="#"></a>KVKK</li>
              <li class="hover:underline"><a href="#"></a>Blog</li>
              <li class="hover:underline"><a href="#"></a>Bayilik Formu</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-20">
        <div class="footer-top-mid flex flex-col items-center">
            <img class="w-[70%] sm:w-1/2 md:w-1/3 4xl:w-1/4" src="@/assets/img/master.jpg" alt="">
            <img class="mt-6 sm:mt-12 w-full sm:w-[90%] md:w-[70%] 4xl:w-[60%]" src="@/assets/img/bonus.jpg" alt="">
        </div>
        <div class="flex justify-center mt-14 sm:mt-28 pb-5">
          <a href="https://www.e-adam.com/">
              <img class="w-16 sm:w-28" src="@/assets/img/eadam.jpg" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom flex justify-center items-center py-3 bg-white">
      <a href="https://www.ticimax.com/" target="_blank">
      <img class="w-16 sm:w-20" src="@/assets/img/footer-bottom.svg" alt=""></a>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
 .footer-top{
    background:linear-gradient(180deg, rgba(233, 226, 219, 0.00) 8%, #837F7B 100%);
      }
</style>