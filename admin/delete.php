<?php	

require_once('includes/classconfig.php');

if($_SESSION['id']){
	if($_SESSION['permission'] == 'utilisateur' || $_SESSION['permission'] == 'admin') {
	$texte = "Dashboard > type";
	$desc = "Vous pouvez  ...  .";
	require_once('includes/dashhead.php');
	?>
	
	<section class="container-fluid page_content active">
		<div class="row cadre">

	<!-- contenue -->


		<?php

		if(isset($_GET['id_exposition'])) {
			$exposition = new Exposition($_GET['id_exposition']);
			$exposition->delete();

			
		}

		header("location:exposition.php");
	?>
	</div>
	<?php
	if($_SESSION['permission'] == 'inactif'){
		$texte = "Dashboard > type";
		$desc = "Bienvenue ".$_SESSION['prenom']." . C'est votre première connexion, pour avoir un accès complet, veuillez definir votre mot de passe !" ;
		require_once('includes/dashhead.php');

		?>
		<body onLoad="setTimeout('RedirectFirstLogin()', 10000)">
			<section class="container-fluid page_content active">
				<div class="row cadre">
			
					<div onLoad="setTimeout('RedirectFirstLogin()', 10000)">
						Vous vous êtes connectez avec le mot de passe de base, vous allez être redirigé vers <a href="http://localhost/git/art_management/admin/user.php">votre page profil</a> afin que vous definissiez votre nouveau mot de passe.
					</div>
				</div>
			</section>		
		<?php
	}
	}
}
else {
	?>
	<body onLoad="setTimeout('RedirectLogin()', 5000)">
		<div onLoad="setTimeout('RedirectLogin()', 5000)">Vous n'avez pas accès au contenue de cette page, dans 5 secondes vous allez être redirigé vers <a href="http://localhost/git/art_management/admin/index.php">la page de connexion</a></div>
	<?php

}

	require_once('footer.php');

?>


