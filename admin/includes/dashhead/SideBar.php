<?php

if(isset($_SESSION['id']) && $_SESSION['permission'])
{	
	
?>
<body>
<div class="flex">
	<div class="sidebar">	
		<img src="images/test.svg" class="logo_sidebar"></img>
		<div class="sidenav">
			
			<ul class="ul_sidebar">
				<li><a href="dashboard.php"><span class="fa fa-tachometer"></span>Dashboard</a></li>
				<li><a href="artiste.php"><span class="fa fa-camera"></span>Artistes</a></li>
				<li><a href="oeuvre.php"><span class="fa fa-picture-o"></span>Oeuvres</a></li>
				<li><a href="exposition.php"><span class="fa fa-calendar"></span>Expositions</a></li>
				<li><a href="statistique.php"><span class="fa fa-bar-chart"></span>Statistiques</a></li>
			<?php

			if($_SESSION['permission'] == 'admin' )
			{
			?>
				<li><a href="gestion_user.php"><span class="fa fa-users"></span>Utilisateurs</a></li>
				
			<?php
			}

			?>
			</ul>
			<ul class="ul_sidebar">
				<li><a href="user.php">Profil</a></li>
				<li><a href="logout.php">Déconnexion</a></li>
			</ul>
		</div>
	</div>
	
<?php
}

/*





 




*/