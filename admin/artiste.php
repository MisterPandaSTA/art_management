<?php

require_once('includes/classconfig.php');

/*Oeuvre::affichage();*/
$oeuvre=new Artiste();
$oeuvre->affichage();

/*if(isset($_GET['id_artiste'])) {
	$artiste = new Artiste($_GET['id_artiste']);
	$artiste->form('modifier.php','mettre à jour');
}

if(isset($_POST['nom']) && $_POST['nom'] != '' && $_POST['id_artiste'] !='') {

	$artiste = new Artiste($_POST['id_artiste']);
	$artiste->setNom($_POST['nom']);
	$artiste->setPrenom($_POST['prenom']);
	$artiste->setPseudo($_POST['pseudo']);
	$artiste->setEmail($_POST['email']);
	$artiste->setTelephone($_POST['telephone']);
	$artiste->setAdresse($_POST['adresse']);
	$artiste->setDescription($_POST['description']);
	$artiste->setActivitees($_POST['activitees']);
	$artiste->setDescriptionAnglais($_POST['description_anglais']);
	$artiste->setDescriptionAllemand($_POST['description_allemand']);
	$artiste->setDescriptionRusse($_POST['description_russe']);
	$artiste->setDescriptionChinois($_POST['description_chinois']);
	$artiste->setActiviteesAnglais($_POST['activitees_anglais']);
	$artiste->setActiviteesAllemand($_POST['activitees_allemand']);
	$artiste->setActiviteesRusse($_POST['activitees_russe']);
	$artiste->setActiviteesChinois($_POST['activitees_chinois']);


	var_dump($artiste);
	
	$update=$artiste->syncDb();



	if ($update==TRUE) {header("location:artiste.php");}
}*/

/*if(empty($_GET['id_artiste'])){
	$artiste= new artiste();
	$artiste->form('creer.php','creer fiche');
}

if(isset($_POST['nom'])) {


	$artiste->setNom($_POST['nom']);
	$artiste->setPrenom($_POST['prenom']);
	$artiste->setPseudo($_POST['pseudo']);
	$artiste->setEmail($_POST['email']);
	$artiste->setTelephone($_POST['telephone']);
	$artiste->setAdresse($_POST['adresse']);
	$artiste->setDescription($_POST['description']);
	$artiste->setActivitees($_POST['activitees']);
	$artiste->setDescriptionAnglais($_POST['description_anglais']);
	$artiste->setDescriptionAllemand($_POST['description_allemand']);
	$artiste->setDescriptionRusse($_POST['description_russe']);
	$artiste->setDescriptionChinois($_POST['description_chinois']);
	$artiste->setActiviteesAnglais($_POST['activitees_anglais']);
	$artiste->setActiviteesAllemand($_POST['activitees_allemand']);
	$artiste->setActiviteesRusse($_POST['activitees_russe']);
	$artiste->setActiviteesChinois($_POST['activitees_chinois']);

	$insert=$artiste->syncDb();


		
	
	if ($insert==TRUE) {header("location:artiste.php");}
}*/