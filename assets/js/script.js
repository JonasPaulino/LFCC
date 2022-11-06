   // Modal Image Gallery
   function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }


  // Toggle between showing and hiding the sidebar when clicking the menu icon
  var mySidebar = document.getElementById("mySidebar");

  function w3_open() {
    if (mySidebar.style.display === 'block') {
      mySidebar.style.display = 'none';
    } else {
      mySidebar.style.display = 'block';
    }
  }

  // Close the sidebar with the close button
  function w3_close() {
    mySidebar.style.display = "none";
  }

  // Abrir link de redes sociais
  var abrirInsta = document.getElementById('abrirInsta');
  var abrirFacebook = document.getElementById('abrirFacebook');
  var insta = "https://www.instagram.com/ligafemininanh/";
  var facebook = "https://www.facebook.com/LigaFemininaNH";

        //instagram
  function openInNewTap(insta) {
    var win1 = window.open(insta, '_blanck')
    win1.focus();
  }

  abrirInsta.addEventListener('click', () => {
    openInNewTap(insta)
  })
        //facebook
  function openInNewTap(facebook) {
    var win2 = window.open(facebook, '_blanck')
    win2.focus();
  }

  abrirFacebook.addEventListener('click', () => {
    openInNewTap(facebook)
  })