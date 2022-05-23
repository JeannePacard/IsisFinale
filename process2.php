<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="=viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" type="text/css" href="css/reset.css" />
    <link rel="stylesheet" type="text/css" href="css/global.css" />
    <link rel="stylesheet" type="text/css" href="css/css-shop.css" />
    <link rel="stylesheet" type="text/css" href="css/shop-connection2.css" />
    <title>Shop</title>
  </head>
  <body onload="init()">
    <header class="header">
      <div class="header-top">
        <img class="search" src="img/search-icon.png" />
        <a href="index.html" class="logo"
          ><img class="logo" src="img/logo.png"
        /></a>
        <a href="shop.html" class="shop-button"> SHOP </a>
        <div class="shop-button-under-active"></div>
      </div>
      <nav class="header-nav">
        <div class="header-line margin-top"></div>
        <ul class="header-links">
          <li>
            <a class="women noactive" href="history.html"
              >Elles ont marqué l'histoire</a
            >
          </li>
          <li>
            <a class="vulgarisation noactive" href="vulgarisation.html"
              >créez votre propre bière</a
            >
          </li>
        </ul>
        <div class="header-line"></div>
      </nav>
    </header>

    <div class="main">
      <div class="top">
        <h1 class="top-title">ceci n'est pas <br />une bière ordinaire</h1>
        <img src="img/brune_gb.png" class="top-bottle" />
        <div class="infos">
          <p class="number">100</p>
          <p class="percent">
            % française <br />
            % féministe
          </p>
        </div>
      </div>
    </div>

    <div class="description">
      <p class="description-text">
        La Indian Pale AleWife est une bière française <span>féministe</span>,
        créée et brassée à Moissy Cramayel dans la Seine-et-Marne. <br />
        Nous ne cherchons pas à viser uniquement les femmes, la bière
        <span>rassemble</span> et c’est ce que nous cherchons à faire. <br />
        Nous souhaitons par ces bières, rassembler hommes et femmes, tout en
        rappelant l’<span>importance</span> des femmes, souvent oubliées, dans
        l’histoire de la bière.
      </p>
    </div>

    <div class="slider-beer">
      <div class="number-beer">
        <p class="first" onclick="first()">01</p>
        <div class="line"></div>
        <p class="second" onclick="second()">02</p>
        <div class="line"></div>
        <p class="third" onclick="third()">03</p>
      </div>

      <div class="first-beer">
        <div class="beer-left">
          <h1 class="title">PUISSANTE.</h1>
          <p class="text">
            La PUISSANTE. est une bière française féministe, créée et brassée à
            Moissy Cramayel dans la Seine-et-Marne. <br /><br />
            C’est une IPA dark qui se distingue par sa légère touche d’orange
            sanguine. <br /><br />
            Arôme : agrume (orange sanguine) <br />
            <br />
            Degré d’alcool : 6.3%
          </p>
          <a class="buy-button" href="shop-pannier.html">VOIR LE PANIER</a>
        </div>
        <div class="beer-right">
          <img src="img/brune_gb.png" />
        </div>
      </div>

      <div class="second-beer">
        <div class="beer-left">
          <h1 class="title">ÉPICE.</h1>
          <p class="text">
            La ÉPICE. est une variante de notre PUISSANTE.. Elle défend nos
            valeurs féministes.
            <br /><br />
            C’est une IPA blonde avec un gout épicée mais également très fruité.
            <br /><br />
            Arôme : fruité <br />
            <br />
            Degré d’alcool : 6.3%
          </p>
          <a class="buy-button" href="shop-pannier.html">VOIR LE PANIER</a>
        </div>
        <div class="beer-right">
          <img src="img/blonde_épicé.png" />
        </div>
      </div>
      <div class="third-beer">
        <div class="beer-left">
          <h1 class="title">BISCUIT.</h1>
          <p class="text">
            La BISCUIT. est notre toute dernière bière. Elle a bien sûr
            également été créée et brassée à Moissy-Cramayel.<br /><br />
            C’est une IPA ambrée. Le mélange des malts donnera à la bière un
            goût fort et quelques notes de miel et de biscuit.
            <br /><br />
            Arôme : miel et biscuit <br />
            <br />
            Degré d’alcool : 6.3%
          </p>
          <a class="buy-button" href="shop-pannier.html">VOIR LE PANIER</a>
        </div>
        <div class="beer-right">
          <img src="img/ambrée_biscuit.png" />
        </div>
      </div>
    </div>

    <div class="connection-user">
      <div class="user-button" onclick="openconnection()">
        <img
          src="img/user.png"
          alt="Button pour se connecter"
          class="user-img"
        />
      </div>

      <div class="user-popup">
        <div class="user-popup-container">
		<?php
		if(isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['mail']) && isset($_POST['n_phone']) && isset($_POST['b_j']) && isset($_POST['b_m']) && isset($_POST['b_a']) && isset($_POST['addr'])){
		$servername = "localhost";
		$username = "root";
		$password = "root";
		$database="jeannepacard_isis_db";

		$birthdate=$_POST['b_j']."/".$_POST['b_m']."/".$_POST['b_a'];
		$nom=$_POST['nom'];
		$prenom=$_POST['prenom'];
		$mail=$_POST['mail'];
		$n_phone=$_POST['n_phone'];
		$addr=$_POST['addr'];

		// Create connection
		$conn = new mysqli($servername, $username, $password, $database);

		// Check connection
		if ($conn->connect_error) {
		  die("Connection failed: " . $conn->connect_error); 
		}
		$sql= "INSERT INTO users (nom, prenom, mail, n_phone, dbirth, addr) VALUES('$nom','$prenom','$mail','$n_phone','$birthdate','$addr')";

		if($conn->query($sql)===TRUE){
			echo "Votre compte a été créé avec succès!";
		} else {
        echo "Remplie les champs";
        echo "
      <form action=\"process2.php\" method=\"post\">
        Nom: <input type=\"text\" name=\"nom\" size=\"25\"><br>
        Prenom: <input type=\"text\" name=\"prenom\" size=\"25\"><br>
        Mail: <input type=\"text\" name=\"mail\" size=\"40\"><br>
        Numéro de Téléphone: <input type=\"text\" name=\"n_phone\"><br>
        Date de Naissance: <input type=\"number\" name=\"b_j\" min=\"1\" max=\"31\">
        <input type=\"number\" name=\"b_m\" min=\"1\" max=\"12\" size=\"2\">
        <input type=\"number\" name=\"b_a\" min=\"1910\" max=\"2022\" ><br>
        Adresse: <textarea name=\"addr\" rows=\"6\" cols=\"30\"></textarea><br />
      <input type=\"Submit\" class=\"user-connection-button\">
      </form>";
		}
		$conn->close();}
		
		?> 
		</div>
      </div>
    </div>
  </body>

  <footer class="footer">
    <div class="footer-line"></div>

    <div class="display">
      <ul>
        <li><a href="index.html">Accueil</a></li>
        <p>•</p>
        <li><a href="history.html">Elles ont marqué l'histoire</a></li>
        <p>•</p>
        <li><a href="vulgarisation.html">Créez votre propre bière</a></li>
        <p>•</p>
        <li><a href="shop.html">Shop</a></li>
      </ul>
    </div>
    <p class="copyright">
      © 2021-2022&nbsp; - Tous&nbsp; droits&nbsp; réservés -
      <a href="ml.html">Mentions légales</a>
    </p>
  </footer>
  <script src="js/slider-shop2.js" defer></script>
</html>
