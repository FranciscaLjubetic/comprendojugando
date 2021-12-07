//funcionalidad del caerusel
var multipleCardCarousel = document.querySelector(
  "#carouselExampleControls"
);
if (window.matchMedia("(min-width: 768px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel,{
    interval: false,
  });
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;
  $("#carouselExampleControls .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 2) {
      scrollPosition += cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}

//Variables, almacenan el valor de lo que es necesario escribir.
var direccionURL1 = '<a href="../index.html"></a>'; 

//1o básico
  /*carrusel igual a mi*/
  var iframe1='<iframe src="https://wordwall.net/es/embed/fb0b0ab717d1459697786ab0c7278d6a?themeId=21&templateId=69" width="420" height="300" frameborder="0" allowfullscreen></iframe>'; 
  var iframe2='<iframe src="https://wordwall.net/es/embed/fb0b0ab717d1459697786ab0c7278d6a?themeId=21&templateId=30" width="420" height="300" frameborder="0" allowfullscreen></iframe>'; 
  var iframe3='<iframe src="https://wordwall.net/es/embed/fb0b0ab717d1459697786ab0c7278d6a?themeId=1&templateId=8" width="420" height="300"  frameborder="0" allowfullscreen></iframe>';
  var iframe4='<iframe src="https://wordwall.net/es/embed/0bb5a33286b5478a9772901750cb7f98?themeId=23&templateId=49"  width="420" height="300"  frameborder="0" allowfullscreen></iframe>';
  /*carrusel perro confundido*/
  var iframe5='<iframe src="https://wordwall.net/es/embed/fb01e262af7047a68a5586517aaa4fa0?themeId=42&templateId=70" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe6='<iframe src="https://wordwall.net/es/embed/fb01e262af7047a68a5586517aaa4fa0?themeId=21&templateId=30" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe7='<iframe src="https://wordwall.net/es/embed/fb01e262af7047a68a5586517aaa4fa0?themeId=1&templateId=38" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe8=' <iframe src="https://wordwall.net/es/embed/fb01e262af7047a68a5586517aaa4fa0?themeId=1&templateId=75" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  /*carrusel julieta*/
  var iframe9='<iframe src=https://wordwall.net/es/embed/0bb5a33286b5478a9772901750cb7f98?themeId=21&templateId=30" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe10='<iframe src="https://wordwall.net/es/embed/0bb5a33286b5478a9772901750cb7f98?themeId=1&templateId=5" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe11='<iframe src="https://wordwall.net/es/embed/0bb5a33286b5478a9772901750cb7f98?themeId=21&templateId=69" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe12='<iframe src="https://wordwall.net/es/embed/0bb5a33286b5478a9772901750cb7f98?themeId=23&templateId=49" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  /*carrusel gigante egoista*/
  var iframe13='<iframe src="https://wordwall.net/es/embed/8231f1253c364b499eb719c357ff4985?themeId=1&templateId=46" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe14='<iframe src="https://wordwall.net/es/embed/8231f1253c364b499eb719c357ff4985?themeId=1&templateId=5" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe15='<iframe src="https://wordwall.net/es/embed/6fdfc5d7683045a28cbf9b2f22322c0b?themeId=23&templateId=49" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe16='<iframe src="https://wordwall.net/es/embed/8231f1253c364b499eb719c357ff4985?themeId=2&templateId=10" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  /*carrusel caleuche*/
  var iframe17='<iframe src="https://wordwall.net/es/embed/79895687538c4bbd956b59b47818dfb9?themeId=21&templateId=25" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe18='<iframe src="https://wordwall.net/es/embed/79895687538c4bbd956b59b47818dfb9?themeId=21&templateId=8" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe19='<iframe src="https://wordwall.net/es/embed/79895687538c4bbd956b59b47818dfb9?themeId=42&templateId=70" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe20='<iframe src="https://wordwall.net/es/embed/79895687538c4bbd956b59b47818dfb9?themeId=2&templateId=10" width="420" height="300" frameborder="0" allowfullscreen></iframe>';

//2o básico
  /*carrusel bruja mom*/
  var iframe21='<iframe src="https://wordwall.net/es/embed/e271743105e64979927b1758e368a877?themeId=21&templateId=30" width="420" height="300" frameborder="0" allowfullscreen></iframe>'; 
  var iframe22='<iframe src="https://wordwall.net/es/embed/e271743105e64979927b1758e368a877?themeId=1&templateId=5" width="420" height="300" frameborder="0" allowfullscreen></iframe>'; 
  var iframe23='<iframe src="https://wordwall.net/es/embed/e271743105e64979927b1758e368a877?themeId=21&templateId=69" width="420" height="300"  frameborder="0" allowfullscreen></iframe>';
  var iframe24='<iframe src="https://wordwall.net/es/embed/e271743105e64979927b1758e368a877?themeId=23&templateId=49"  width="420" height="300"  frameborder="0" allowfullscreen></iframe>';
  /*carrusel apetito el zorro*/
  var iframe25='<iframe src="https://wordwall.net/es/embed/11b5bba417c04a1785bfe79c1720b2ef?themeId=2&templateId=5" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe26='<iframe src="https://wordwall.net/es/embed/11b5bba417c04a1785bfe79c1720b2ef?themeId=21&templateId=69" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe27='<iframe src="https://wordwall.net/es/embed/11b5bba417c04a1785bfe79c1720b2ef?themeId=2&templateId=30" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe28='<iframe src="https://wordwall.net/es/embed/11b5bba417c04a1785bfe79c1720b2ef?themeId=23&templateId=49" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  /*carrusel El cocodrilo al que no le gustaba el agua*/
  var iframe29='<iframe src="https://wordwall.net/es/embed/c5df2dd465b147f982c5d36d4c0b86d0?themeId=6&templateId=48" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe30='<iframe src="https://wordwall.net/es/embed/c5df2dd465b147f982c5d36d4c0b86d0?themeId=1&templateId=5" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe31='<iframe src="https://wordwall.net/es/embed/c5df2dd465b147f982c5d36d4c0b86d0?themeId=21&templateId=30" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe32='<iframe src="https://wordwall.net/es/embed/c5df2dd465b147f982c5d36d4c0b86d0?themeId=23&templateId=49" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  /*LEON Y SU TERCER DESEO*/
  var iframe33='<iframe src="https://wordwall.net/es/embed/5571a9a2d4de47dd9a2479129a380ece?themeId=21&templateId=69" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe34='<iframe src="https://wordwall.net/es/embed/5571a9a2d4de47dd9a2479129a380ece?themeId=1&templateId=5" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe35='<iframe src="https://wordwall.net/es/embed/5571a9a2d4de47dd9a2479129a380ece?themeId=21&templateId=30" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe36='<iframe src="https://wordwall.net/es/embed/5571a9a2d4de47dd9a2479129a380ece?themeId=1&templateId=8" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  /*carrusel EL FANTASMA DE CANTERVILLE*/
  var iframe37='<iframe src="https://wordwall.net/es/embed/d9b74bc6de0341c8a9d2bf93acc99bab?themeId=1&templateId=8" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe38='<iframe src="https://wordwall.net/es/embed/d9b74bc6de0341c8a9d2bf93acc99bab?themeId=42&templateId=70" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe39='<iframe src="https://wordwall.net/es/embed/d9b74bc6de0341c8a9d2bf93acc99bab?themeId=21&templateId=30" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe40='<iframe src="https://wordwall.net/es/embed/d9b74bc6de0341c8a9d2bf93acc99bab?themeId=1&templateId=38" width="420" height="300" frameborder="0" allowfullscreen></iframe>';

//3o básico
  /*carrusel EL LUGAR MAS BONITO DEL MUNDO*/
  var iframe41='<iframe src="https://wordwall.net/es/embed/aaae9c87344f49c0b56f95de68af7f2c?themeId=43&templateId=5" width="420" height="300" frameborder="0" allowfullscreen></iframe>'; 
  var iframe42='<iframe src="https://wordwall.net/es/embed/aaae9c87344f49c0b56f95de68af7f2c?themeId=21&templateId=69" width="420" height="300" frameborder="0" allowfullscreen></iframe>'; 
  var iframe43='<iframe src="https://wordwall.net/es/embed/aaae9c87344f49c0b56f95de68af7f2c?themeId=21&templateId=30" width="420" height="300"  frameborder="0" allowfullscreen></iframe>';
  var iframe44='<iframe src="https://wordwall.net/es/embed/aaae9c87344f49c0b56f95de68af7f2c?themeId=23&templateId=49"  width="420" height="300"  frameborder="0" allowfullscreen></iframe>';
  /*carrusel Un esqueleto de vacaciones*/
  var iframe45='<iframe src="https://wordwall.net/es/embed/e9a865a3b48945579dbd518198dd96be?themeId=21&templateId=69" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe46='<iframe src="https://wordwall.net/es/embed/e9a865a3b48945579dbd518198dd96be?themeId=1&templateId=5" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe47='<iframe src="https://wordwall.net/es/embed/e9a865a3b48945579dbd518198dd96be?themeId=21&templateId=30" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe48=' <iframe src="https://wordwall.net/es/embed/e9a865a3b48945579dbd518198dd96be?themeId=1&templateId=75" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  /*carrusel La cabaña en el árbol*/
  var iframe49='<iframe src="https://wordwall.net/es/embed/8d2fea785a2c41e590a2f573b53c7900?themeId=1&templateId=11" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe50='<iframe src="https://wordwall.net/es/embed/8d2fea785a2c41e590a2f573b53c7900?themeId=1&templateId=3" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe51='<iframe src="https://wordwall.net/es/embed/8d2fea785a2c41e590a2f573b53c7900?themeId=1&templateId=46" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe52='<iframe src="https://wordwall.net/es/embed/8d2fea785a2c41e590a2f573b53c7900?themeId=21&templateId=69" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  /*carrusel secuestro de la biliotecaria*/
  var iframe53='<iframe src="https://wordwall.net/es/embed/b3962fdd5d55487fac8262da6d668720?themeId=1&templateId=5" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe54='<iframe src="https://wordwall.net/es/embed/b3962fdd5d55487fac8262da6d668720?themeId=23&templateId=49" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe55='<iframe src="https://wordwall.net/es/embed/b3962fdd5d55487fac8262da6d668720?themeId=21&templateId=30" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe56='<iframe src="https://wordwall.net/es/embed/b3962fdd5d55487fac8262da6d668720?themeId=21&templateId=30" width="420" height="300" frameborder="0" allowfullscreen></iframe>';

//4o básico
  /*Bartolo y los cocodrilos mágicos*/
  var iframe57='<iframe src="https://wordwall.net/es/embed/f76eb514bde744e887fa993403a16244?themeId=1&templateId=8" width="420" height="300" frameborder="0" allowfullscreen></iframe>'; 
  var iframe58='<iframe src="https://wordwall.net/es/embed/f76eb514bde744e887fa993403a16244?themeId=42&templateId=70" width="420" height="300" frameborder="0" allowfullscreen></iframe>'; 
  var iframe59='<iframe src="https://wordwall.net/es/embed/f76eb514bde744e887fa993403a16244?themeId=21&templateId=30" width="420" height="300"  frameborder="0" allowfullscreen></iframe>';
  var iframe60='<iframe src="https://wordwall.net/es/embed/f76eb514bde744e887fa993403a16244?themeId=1&templateId=38"  width="420" height="300"  frameborder="0" allowfullscreen></iframe>';
  /*carrusel papelucho*/
  var iframe61='<iframe src="https://wordwall.net/es/embed/e72f4bae8027454bab770a6a888a9486?themeId=21&templateId=30" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe62='<iframe src="https://wordwall.net/es/embed/e72f4bae8027454bab770a6a888a9486?themeId=42&templateId=70" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe63='<iframe src="https://wordwall.net/es/embed/e72f4bae8027454bab770a6a888a9486?themeId=2&templateId=25" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe64='<iframe src="https://wordwall.net/es/embed/e72f4bae8027454bab770a6a888a9486?themeId=1&templateId=75" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  /*carrusel ay cuanto me quiero*/
  var iframe65='<iframe src="https://wordwall.net/es/embed/00aeefe31e6640699647052ba988fd99?themeId=21&templateId=30" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe66='<iframe src="https://wordwall.net/es/embed/00aeefe31e6640699647052ba988fd99?themeId=1&templateId=5" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe67='<iframe src="https://wordwall.net/es/embed/00aeefe31e6640699647052ba988fd99?themeId=23&templateId=49" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe68='<iframe src="https://wordwall.net/es/embed/00aeefe31e6640699647052ba988fd99?themeId=1&templateId=8" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  /*carrusel ritalina*/
  var iframe69='<iframe src="https://wordwall.net/es/embed/d7699efdd5ba4acdb29f871f85375242?themeId=21&templateId=69" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe70='<iframe src="https://wordwall.net/es/embed/d7699efdd5ba4acdb29f871f85375242?themeId=1&templateId=5" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe71='<iframe src="https://wordwall.net/es/embed/d7699efdd5ba4acdb29f871f85375242?themeId=21&templateId=30" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe72='<iframe src="https://wordwall.net/es/embed/d7699efdd5ba4acdb29f871f85375242?themeId=23&templateId=49" width="420" height="300" frameborder="0" allowfullscreen></iframe>';

  /*------------------------------------------------------------------*/

//5o básico
  /*carrusel Las aventuras de tom sewyer */
  var iframe73='<iframe src="https://wordwall.net/es/embed/3a031dd3a85f45adba1101d00fa86d03?themeId=1&templateId=5" width="420" height="300" frameborder="0" allowfullscreen></iframe>'; 
  var iframe74='<iframe src="https://wordwall.net/es/embed/3a031dd3a85f45adba1101d00fa86d03?themeId=21&templateId=69" width="420" height="300" frameborder="0" allowfullscreen></iframe>'; 
  var iframe75='<iframe src="https://wordwall.net/es/embed/3a031dd3a85f45adba1101d00fa86d03?themeId=21&templateId=30" width="420" height="300"  frameborder="0" allowfullscreen></iframe>';
  var iframe76='<iframe src="https://wordwall.net/es/embed/3a031dd3a85f45adba1101d00fa86d03?themeId=23&templateId=49"  width="420" height="300"  frameborder="0" allowfullscreen></iframe>';
  /*carrusel María la dura,en no quiero ser ninja */
  var iframe77='<iframe src="https://wordwall.net/es/embed/60f54fe0466f4d20bcddc456a68dcf15?themeId=1&templateId=8" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe78='<iframe src="https://wordwall.net/es/embed/60f54fe0466f4d20bcddc456a68dcf15?themeId=2&templateId=25" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe79='<iframe src="https://wordwall.net/es/embed/60f54fe0466f4d20bcddc456a68dcf15?themeId=21&templateId=30" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe80='<iframe src="https://wordwall.net/es/embed/60f54fe0466f4d20bcddc456a68dcf15?themeId=1&templateId=75" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  /*carrusel María la dura en un problema peludo*/
  var iframe81='<iframe src="https://wordwall.net/es/embed/ebd683b006524959af7df2b2e9b9e26b?themeId=1&templateId=8" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe82='<iframe src="https://wordwall.net/es/embed/ebd683b006524959af7df2b2e9b9e26b?themeId=42&templateId=70" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe83='<iframe src="https://wordwall.net/es/embed/ebd683b006524959af7df2b2e9b9e26b?themeId=21&templateId=30" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe84='<iframe src="https://wordwall.net/es/embed/ebd683b006524959af7df2b2e9b9e26b?themeId=1&templateId=38" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  /*carrusel Mundo de cartón*/
  var iframe85='<iframe src="https://wordwall.net/es/embed/e78449fe4ca7404c9e215d27a67fde7e?themeId=21&templateId=30" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe86='<iframe src="https://wordwall.net/es/embed/e78449fe4ca7404c9e215d27a67fde7e?themeId=1&templateId=8" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe87='<iframe src="https://wordwall.net/es/embed/e78449fe4ca7404c9e215d27a67fde7e?themeId=2&templateId=25" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe88='<iframe src="https://wordwall.net/es/embed/e78449fe4ca7404c9e215d27a67fde7e?themeId=42&templateId=70" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  
  //6o básico
  /*carrusel las cronicas de narnia*/
  var iframe89='<iframe src="https://wordwall.net/es/embed/c9ac7e7b457b43cdb1dd21ca3be844a0?themeId=21&templateId=30" width="420" height="300" frameborder="0" allowfullscreen></iframe>'; 
  var iframe90='<iframe src="https://wordwall.net/es/embed/c9ac7e7b457b43cdb1dd21ca3be844a0?themeId=1&templateId=5" width="420" height="300" frameborder="0" allowfullscreen></iframe>'; 
  var iframe91='<iframe src="https://wordwall.net/es/embed/c9ac7e7b457b43cdb1dd21ca3be844a0?themeId=23&templateId=49" width="420" height="300"  frameborder="0" allowfullscreen></iframe>';
  var iframe92='<iframe src="https://wordwall.net/es/embed/c9ac7e7b457b43cdb1dd21ca3be844a0?themeId=1&templateId=8"  width="420" height="300"  frameborder="0" allowfullscreen></iframe>';
  /*carrusel la edad del pavo*/
  var iframe93='<iframe src="https://wordwall.net/es/embed/ce89fa67d9b24188878cbf9b1ceb3767?themeId=21&templateId=69" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe94='<iframe src="https://wordwall.net/es/embed/ce89fa67d9b24188878cbf9b1ceb3767?themeId=1&templateId=8" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe95='<iframe src="https://wordwall.net/es/embed/ce89fa67d9b24188878cbf9b1ceb3767?themeId=1&templateId=75" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe96=' <iframe src="https://wordwall.net/es/embed/ce89fa67d9b24188878cbf9b1ceb3767?themeId=42&templateId=70" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  /*carrusel la historia de una gaviota y un gato que le enseñó a volar*/
  var iframe97='<iframe src="https://wordwall.net/es/embed/94edff5370864b19b78e23c081ee002f?themeId=21&templateId=69" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe98='<iframe src="https://wordwall.net/es/embed/94edff5370864b19b78e23c081ee002f?themeId=1&templateId=5" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe99='<iframe src="https://wordwall.net/es/embed/94edff5370864b19b78e23c081ee002f?themeId=21&templateId=30" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe100='<iframe src="https://wordwall.net/es/embed/94edff5370864b19b78e23c081ee002f?themeId=23&templateId=49" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  /*carrusel  viaje al centro de tierra */
  var iframe101='<iframe src="https://wordwall.net/es/embed/cdc8463d048e4ad9858a1a11a2a21dc3?themeId=21&templateId=30" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe102='<iframe src="https://wordwall.net/es/embed/cdc8463d048e4ad9858a1a11a2a21dc3?themeId=1&templateId=8" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe103='<iframe src="https://wordwall.net/es/embed/cdc8463d048e4ad9858a1a11a2a21dc3?themeId=2&templateId=25" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe104='<iframe src="https://wordwall.net/es/embed/cdc8463d048e4ad9858a1a11a2a21dc3?themeId=42&templateId=70" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  /*carrusel Quique hache el caballo fantasma*/
  var iframe105='<iframe src="https://wordwall.net/es/embed/32259c4d5d834c699a97a94443b6db7f?themeId=1&templateId=5" width="420" height="300" frameborder="0" allowfullscreen></iframe>'; 
  var iframe106='<iframe src="https://wordwall.net/es/embed/32259c4d5d834c699a97a94443b6db7f?themeId=21&templateId=69" width="420" height="300" frameborder="0" allowfullscreen></iframe>'; 
  var iframe107='<iframe src="https://wordwall.net/es/embed/32259c4d5d834c699a97a94443b6db7f?themeId=21&templateId=30" width="420" height="300"  frameborder="0" allowfullscreen></iframe>';
  var iframe108='<iframe src="https://wordwall.net/es/embed/32259c4d5d834c699a97a94443b6db7f?themeId=23&templateId=49"  width="420" height="300"  frameborder="0" allowfullscreen></iframe>';
  
//7o básico
  /*carrusel carrusel El caballero de la armadura oxidadada*/
  var iframe109='<iframe src="https://wordwall.net/es/embed/e9dc474c37ad448484a447bfca8a8b79?themeId=2&templateId=11" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe110='<iframe src="https://wordwall.net/es/embed/e9dc474c37ad448484a447bfca8a8b79?themeId=2&templateId=3" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe111='<iframe src="https://wordwall.net/es/embed/e9dc474c37ad448484a447bfca8a8b79?themeId=2&templateId=46" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe112='<iframe src="https://wordwall.net/es/embed/e9dc474c37ad448484a447bfca8a8b79?themeId=21&templateId=69" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  /*carrusel los ojos del perro siberiano*/
  var iframe113='<iframe src="https://wordwall.net/es/embed/e269a8dd096e42379b511ab67cc6c14d?themeId=41&templateId=30" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe114='<iframe src="https://wordwall.net/es/embed/e269a8dd096e42379b511ab67cc6c14d?themeId=1&templateId=8" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe115='<iframe src="https://wordwall.net/es/embed/e269a8dd096e42379b511ab67cc6c14d?themeId=41&templateId=75" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe116='<iframe src="https://wordwall.net/es/embed/e269a8dd096e42379b511ab67cc6c14d?themeId=41&templateId=25" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  /*carrusel sin recreo*/
  var iframe117='<iframe src="https://wordwall.net/es/embed/2a52cff8cab14740b9ce814cbc5bc593?themeId=41&templateId=5" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe118='<iframe src="https://wordwall.net/es/embed/2a52cff8cab14740b9ce814cbc5bc593?themeId=21&templateId=69" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe119='<iframe src="https://wordwall.net/es/embed/2a52cff8cab14740b9ce814cbc5bc593?themeId=41&templateId=30" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe120='<iframe src="https://wordwall.net/es/embed/2a52cff8cab14740b9ce814cbc5bc593?themeId=23&templateId=49" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  /*carrusel mitos y leyendas de chile y america*/
  var iframe121='<iframe src="https://wordwall.net/es/embed/546f304828ad4acb9fa38634dd4dbb52?themeId=1&templateId=5" width="420" height="300" frameborder="0" allowfullscreen></iframe>'; 
  var iframe122='<iframe src="https://wordwall.net/es/embed/546f304828ad4acb9fa38634dd4dbb52?themeId=21&templateId=69" width="420" height="300" frameborder="0" allowfullscreen></iframe>'; 
  var iframe123='<iframe src="https://wordwall.net/es/embed/546f304828ad4acb9fa38634dd4dbb52?themeId=21&templateId=30" width="420" height="300"  frameborder="0" allowfullscreen></iframe>';
  var iframe124='<iframe src="https://wordwall.net/es/embed/546f304828ad4acb9fa38634dd4dbb52?themeId=23&templateId=49"  width="420" height="300"  frameborder="0" allowfullscreen></iframe>';
  
//8o básico
  /*carrusel EL EXTRAÑO CASO DEL DOCTOR JEKYLL Y EL SEÑOR HYDE*/
  var iframe125='<iframe src="https://wordwall.net/es/embed/9c065d74b77a4c2fb97ded8f0f830d49?themeId=1&templateId=8" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe126='<iframe src="https://wordwall.net/es/embed/9c065d74b77a4c2fb97ded8f0f830d49?themeId=42&templateId=70" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe127='<iframe src="https://wordwall.net/es/embed/9c065d74b77a4c2fb97ded8f0f830d49?themeId=21&templateId=30" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe128='<iframe src="https://wordwall.net/es/embed/9c065d74b77a4c2fb97ded8f0f830d49?themeId=1&templateId=38" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  /*carrusel gracia y el forastero*/
  var iframe129='<iframe src="https://wordwall.net/es/embed/193377769cd049f597e0cf964838014c?themeId=48&templateId=5" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe130='<iframe src="https://wordwall.net/es/embed/193377769cd049f597e0cf964838014c?themeId=21&templateId=69" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe131='<iframe src="https://wordwall.net/es/embed/193377769cd049f597e0cf964838014c?themeId=21&templateId=30" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe132='<iframe src="https://wordwall.net/es/embed/193377769cd049f597e0cf964838014c?themeId=23&templateId=49" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  /*carrusel  MI PLANTA NARANJA LIMA*/
  var iframe133='<iframe src="https://wordwall.net/es/embed/f0fa07541bb9440ebc207cc7df997515?themeId=21&templateId=69" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe134='<iframe src="https://wordwall.net/es/embed/f0fa07541bb9440ebc207cc7df997515?themeId=1&templateId=5" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe135='<iframe src="https://wordwall.net/es/embed/f0fa07541bb9440ebc207cc7df997515?themeId=21&templateId=30" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe136=' <iframe src="https://wordwall.net/es/embed/f0fa07541bb9440ebc207cc7df997515?themeId=23&templateId=49" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
    /*carrusel niño del pijama de rayas*/
  var iframe137='<iframe src="https://wordwall.net/es/embed/3af18f333a2846c0ac7c17b8478faa40?themeId=21&templateId=69" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe138='<iframe src="https://wordwall.net/es/embed/3af18f333a2846c0ac7c17b8478faa40?themeId=1&templateId=5" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe139='<iframe src="https://wordwall.net/es/embed/3af18f333a2846c0ac7c17b8478faa40?themeId=1&templateId=46" width="420" height="300" frameborder="0" allowfullscreen></iframe>';
  var iframe140='<iframe src="https://wordwall.net/es/embed/3af18f333a2846c0ac7c17b8478faa40?themeId=1&templateId=3" width="420" height="300" frameborder="0" allowfullscreen></iframe>';


//Funciones que identifican el lugar en la página y escriben el valor de la variable. 
function escribirlinks(){ 
document.getElementById('link1').innerHTML=direccionURL1; 
} 
function escribiriframe(){ 
//1o básico
  /*carrusel igual a mio*/
  document.getElementById('iframe1').innerHTML=iframe1; 
  document.getElementById('iframe2').innerHTML=iframe2; 
  document.getElementById('iframe3').innerHTML=iframe3; 
  document.getElementById('iframe4').innerHTML=iframe4;
  /*carrusel perro confundido*/
  document.getElementById('iframe5').innerHTML=iframe5; 
  document.getElementById('iframe6').innerHTML=iframe6; 
  document.getElementById('iframe7').innerHTML=iframe7; 
  document.getElementById('iframe8').innerHTML=iframe8;
  /*carrusel julieta*/
  document.getElementById('iframe9').innerHTML=iframe9; 
  document.getElementById('iframe10').innerHTML=iframe10; 
  document.getElementById('iframe11').innerHTML=iframe11; 
  document.getElementById('iframe12').innerHTML=iframe12;
  /*carrusel gigante egoista*/
  document.getElementById('iframe13').innerHTML=iframe13; 
  document.getElementById('iframe14').innerHTML=iframe14; 
  document.getElementById('iframe15').innerHTML=iframe15; 
  document.getElementById('iframe16').innerHTML=iframe16;
  /*carrusel caleuche*/
  document.getElementById('iframe17').innerHTML=iframe17; 
  document.getElementById('iframe18').innerHTML=iframe18; 
  document.getElementById('iframe19').innerHTML=iframe19; 
  document.getElementById('iframe20').innerHTML=iframe20;

//2o básico
  /*carrusel bruja mom*/
  document.getElementById('iframe21').innerHTML=iframe21; 
  document.getElementById('iframe22').innerHTML=iframe22; 
  document.getElementById('iframe23').innerHTML=iframe23; 
  document.getElementById('iframe24').innerHTML=iframe24;
  /*carrusel apetito el zorro*/
  document.getElementById('iframe25').innerHTML=iframe25; 
  document.getElementById('iframe26').innerHTML=iframe26; 
  document.getElementById('iframe27').innerHTML=iframe27; 
  document.getElementById('iframe28').innerHTML=iframe28;
  /*carrusel El cocodrilo al que no le gustaba el agua*/
  document.getElementById('iframe29').innerHTML=iframe29; 
  document.getElementById('iframe30').innerHTML=iframe30; 
  document.getElementById('iframe31').innerHTML=iframe31; 
  document.getElementById('iframe32').innerHTML=iframe32;
  /*LEON Y SU TERCER DESEO*/
  document.getElementById('iframe33').innerHTML=iframe33; 
  document.getElementById('iframe34').innerHTML=iframe34; 
  document.getElementById('iframe35').innerHTML=iframe35; 
  document.getElementById('iframe36').innerHTML=iframe36;
  /*carrusel EL FANTASMA DE CANTERVILLE*/
  document.getElementById('iframe37').innerHTML=iframe37; 
  document.getElementById('iframe38').innerHTML=iframe38; 
  document.getElementById('iframe39').innerHTML=iframe39; 
  document.getElementById('iframe40').innerHTML=iframe40;

//3o básico
  /*carrusel EL LUGAR MAS BONITO DEL MUNDO*/
  document.getElementById('iframe41').innerHTML=iframe41; 
  document.getElementById('iframe42').innerHTML=iframe42; 
  document.getElementById('iframe43').innerHTML=iframe43; 
  document.getElementById('iframe44').innerHTML=iframe44;
  /*carrusel Un esqueleto de vacaciones*/
  document.getElementById('iframe45').innerHTML=iframe45; 
  document.getElementById('iframe46').innerHTML=iframe46; 
  document.getElementById('iframe47').innerHTML=iframe47; 
  document.getElementById('iframe48').innerHTML=iframe48;
  /*carrusel La cabaña en el árbol*/
  document.getElementById('iframe49').innerHTML=iframe49; 
  document.getElementById('iframe50').innerHTML=iframe50; 
  document.getElementById('iframe51').innerHTML=iframe51; 
  document.getElementById('iframe52').innerHTML=iframe52;
  /*secuestro de la biliotecaria*/
  document.getElementById('iframe53').innerHTML=iframe53; 
  document.getElementById('iframe54').innerHTML=iframe54; 
  document.getElementById('iframe55').innerHTML=iframe55; 
  document.getElementById('iframe56').innerHTML=iframe56;

//4o básico
  /*Bartolo y los cocodrilos mágicos*/
  document.getElementById('iframe57').innerHTML=iframe57; 
  document.getElementById('iframe58').innerHTML=iframe58; 
  document.getElementById('iframe59').innerHTML=iframe59; 
  document.getElementById('iframe60').innerHTML=iframe60;
  /*carrusel papelucho*/
  document.getElementById('iframe61').innerHTML=iframe61; 
  document.getElementById('iframe62').innerHTML=iframe62; 
  document.getElementById('iframe63').innerHTML=iframe63; 
  document.getElementById('iframe64').innerHTML=iframe64;
  /*carrusel AY cuanto me quiero*/
  document.getElementById('iframe65').innerHTML=iframe65; 
  document.getElementById('iframe66').innerHTML=iframe66; 
  document.getElementById('iframe67').innerHTML=iframe67; 
  document.getElementById('iframe68').innerHTML=iframe68;
  /*carrusel ritalina*/
  document.getElementById('iframe69').innerHTML=iframe69; 
  document.getElementById('iframe70').innerHTML=iframe70; 
  document.getElementById('iframe71').innerHTML=iframe71; 
  document.getElementById('iframe72').innerHTML=iframe72;
/*--------------------------------------------------------------------*/
//5o básico
  /*carrusel Las aventuras de tom sewyer */
  document.getElementById('iframe73').innerHTML=iframe73; 
  document.getElementById('iframe74').innerHTML=iframe74; 
  document.getElementById('iframe75').innerHTML=iframe75; 
  document.getElementById('iframe76').innerHTML=iframe76;
  /*carrusel María la dura en no quiero ser ninja */
  document.getElementById('iframe77').innerHTML=iframe77; 
  document.getElementById('iframe78').innerHTML=iframe78; 
  document.getElementById('iframe79').innerHTML=iframe79; 
  document.getElementById('iframe80').innerHTML=iframe80;
  /*carrusel María la dura en un problema peludo*/
  document.getElementById('iframe81').innerHTML=iframe81; 
  document.getElementById('iframe82').innerHTML=iframe82; 
  document.getElementById('iframe83').innerHTML=iframe83; 
  document.getElementById('iframe84').innerHTML=iframe84;
  /*carrusel Mundo de cartón*/
  document.getElementById('iframe85').innerHTML=iframe85; 
  document.getElementById('iframe86').innerHTML=iframe86; 
  document.getElementById('iframe87').innerHTML=iframe87; 
  document.getElementById('iframe88').innerHTML=iframe88;
      
//6o básico
  /*carrusel cronicas de narnia*/
  document.getElementById('iframe89').innerHTML=iframe89; 
  document.getElementById('iframe90').innerHTML=iframe90; 
  document.getElementById('iframe91').innerHTML=iframe91; 
  document.getElementById('iframe92').innerHTML=iframe92;
  /*carrusel  la edad del pavo*/
  document.getElementById('iframe93').innerHTML=iframe93; 
  document.getElementById('iframe94').innerHTML=iframe94; 
  document.getElementById('iframe95').innerHTML=iframe95; 
  document.getElementById('iframe96').innerHTML=iframe96;
  /*carrusel La historia de una gaviota y el gato que le enseño   a volar */
  document.getElementById('iframe97').innerHTML=iframe97; 
  document.getElementById('iframe98').innerHTML=iframe98; 
  document.getElementById('iframe99').innerHTML=iframe99; 
  document.getElementById('iframe100').innerHTML=iframe100;
  /*carrusel viaje al centro de la tierra*/
  document.getElementById('iframe101').innerHTML=iframe101; 
  document.getElementById('iframe102').innerHTML=iframe102; 
  document.getElementById('iframe103').innerHTML=iframe103; 
  document.getElementById('iframe104').innerHTML=iframe104;
  /*carrusel Quique hache el caballo fantasma*/
  document.getElementById('iframe105').innerHTML=iframe105; 
  document.getElementById('iframe106').innerHTML=iframe106; 
  document.getElementById('iframe107').innerHTML=iframe107; 
  document.getElementById('iframe108').innerHTML=iframe108;
      
//7o básico
  /*carrusel El caballero de la armadura oxidadada*/
  document.getElementById('iframe109').innerHTML=iframe109; 
  document.getElementById('iframe110').innerHTML=iframe110; 
  document.getElementById('iframe111').innerHTML=iframe111; 
  document.getElementById('iframe112').innerHTML=iframe112;
  /*carrusel los ojos del perro siberiano*/
  document.getElementById('iframe113').innerHTML=iframe113; 
  document.getElementById('iframe114').innerHTML=iframe114; 
  document.getElementById('iframe115').innerHTML=iframe115; 
  document.getElementById('iframe116').innerHTML=iframe116;
  /*carrusel sin recreo*/
  document.getElementById('iframe117').innerHTML=iframe117; 
  document.getElementById('iframe118').innerHTML=iframe118; 
  document.getElementById('iframe119').innerHTML=iframe119; 
  document.getElementById('iframe120').innerHTML=iframe120;
  /*carrusel Mitos y leyendas de chile y america*/
  document.getElementById('iframe121').innerHTML=iframe121; 
  document.getElementById('iframe122').innerHTML=iframe122;
  document.getElementById('iframe123').innerHTML=iframe123; 
  document.getElementById('iframe124').innerHTML=iframe124;
        
//8o básico
  /*carrusel EL EXTRAÑO CASO DEL DOCTOR JEKYLL Y EL SEÑOR HYDE*/
  document.getElementById('iframe125').innerHTML=iframe125; 
  document.getElementById('iframe126').innerHTML=iframe126; 
  document.getElementById('iframe127').innerHTML=iframe127; 
  document.getElementById('iframe128').innerHTML=iframe128;
  /*carrusel gracia y el forastero*/
  document.getElementById('iframe129').innerHTML=iframe129; 
  document.getElementById('iframe130').innerHTML=iframe130; 
  document.getElementById('iframe131').innerHTML=iframe131; 
  document.getElementById('iframe132').innerHTML=iframe132;
  /*carrusel MI PLANTA NARANJA LIMA*/
  document.getElementById('iframe133').innerHTML=iframe133; 
  document.getElementById('iframe134').innerHTML=iframe134; 
  document.getElementById('iframe135').innerHTML=iframe135; 
  document.getElementById('iframe136').innerHTML=iframe136;
  /*carrusel NIÑO DEL PIJAMA DE RAYAS*/
  document.getElementById('iframe137').innerHTML=iframe137; 
  document.getElementById('iframe138').innerHTML=iframe138; 
  document.getElementById('iframe139').innerHTML=iframe139; 
  document.getElementById('iframe140').innerHTML=iframe140;
} 

//Ejecuta las funciones después que la pagina termine de cargar.
window.onload=function(){ 
escribirlinks(); 
escribiriframe(); 
}
