/*------------------------ 
    partout
-------------------------*/

function RedirectLogin(){
        document.location.href="http://localhost/git/art_management/admin/index.php";
      }

/*------------------------
	sidebar.php (partout)
--------------------------*/


$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
        $("#sidebar-wrapper").toggleClass("active");
        $(".page_content").toggleClass("active");
});

/*------------------------ 
    index.php (login)
-------------------------*/      



/*$(document).ready(function () {
	$('#mdpoublie').click(function(){s
		alert("Veuillez contacter votre administrateur pour qu'il réinitialise votre mot de passe.");
	});
});*/

$(document).ready(function () {
  $('#mdpoublie').popover('');
});

/*------------------------ 
    Dashboard.php (firtlogin)
-------------------------*/

function RedirectFirstLogin(){
        document.location.href="http://localhost/git/art_management/admin/user.php";
      }

/*------------------------ 
  user.php (modif user)
-------------------------*/

/*test*/

/*$(document).ready(function () {
	$('#btn-modal').click(function(){
		$('#mymodal').modal('toggle');
	});
});*/


/*------------------------ 
  gestion_user.php (gestion Admin)
-------------------------*/
$(document).ready(function () {
	$('#create').click(function(){
		var nom = $("#formCreate input[name='nom']").val();
		console.log(nom);
		var prenom = $("#formCreate input[name='prenom']").val();
		console.log(prenom);
		var email = $("#formCreate input[name='email']").val();
		console.log(email);	
		var permission = $("#formCreate select[name='permission']").val();
		console.log(permission);
			$.ajax({
				url: "includes/AjaxPhpfunctions/funcCreateUser.php",
				method: 'POST',
				data : {
						nom : nom,
						prenom : prenom,
						email : email,
						permission : permission,
						
					},
				success : function (response) {
					console.log(response);
					if(response == 'error' ) {
						// le code PHP retourne 'error', c'est-à-dire que la requête SQL ne s'est pas exécuté correctement 
						alert('Désolé, une erreur est survenue lors de l\'enregistrement du cycle en base de données');
						ajaxResponse = false;
					}
					else if (response == 'ok') {
						// si on reçoit ok, nous étions alors en mode 'done' et tout s'est bien déroulé 
						console.log('Cycle achevé et mis à jours');
						ajaxResponse = true;
					}
					else {
						// Dans le dernier cas, nous devons recevons l'id du cycle nouvellement créé. Nous l'attrinuons à la variable actualCycleId sous forme d'entier
						/*actualCycleId = parseInt(response);
						ajaxResponse = parseInt(response);*/

						ajaxResponse = parseInt(response,10);
					}
				},
				error: function () {
					alert('Désolé, une erreur est survenue lors de de la requête ajax');
				},
				complete : function () {
					console.log('Requête Ajax exécutée');
				}
			});	
		
	});
});



$(document).ready(function () {
	$('.modifier').click(function(){
		$(".action").val('modifier');
		var id_user = $(this).parent().parent().attr('id').substr(1);
		console.log(id_user);
		var nom = $('#n'+id_user+' input[name="nom"]').val();
		console.log(nom);
		var prenom = $('#n'+id_user+' input[name="prenom"]').val();
		console.log(prenom);
		var email = $('#n'+id_user+' input[name="email"]').val();
		console.log(email);	
		var permission = $('#n'+id_user+' select[name="permission"]').val();
		console.log(permission);
		var action = $('#n'+id_user+' input[name="action"]').val();
		console.log(action);		
			$.ajax({
				url: "includes/AjaxPhpfunctions/funcModUser.php",
				method: 'POST',
				data : {
						nom : nom,
						prenom : prenom,
						email : email,
						permission : permission,
						id_user : id_user,
						action : action
					},
				success : function (response) {
					console.log(response);
					if(response == 'error' ) {
						// le code PHP retourne 'error', c'est-à-dire que la requête SQL ne s'est pas exécuté correctement 
						alert('Désolé, une erreur est survenue lors de l\'enregistrement du cycle en base de données');
						ajaxResponse = false;
					}
					else if (response == 'ok') {
						// si on reçoit ok, nous étions alors en mode 'done' et tout s'est bien déroulé 
						console.log('Cycle achevé et mis à jours');
						ajaxResponse = true;
					}
					else {
						// Dans le dernier cas, nous devons recevons l'id du cycle nouvellement créé. Nous l'attrinuons à la variable actualCycleId sous forme d'entier
						/*actualCycleId = parseInt(response);
						ajaxResponse = parseInt(response);*/

						ajaxResponse = parseInt(response,10);
					}
				},
				error: function () {
					alert('Désolé, une erreur est survenue lors de de la requête ajax');
				},
				complete : function () {
					console.log('Requête Ajax exécutée');
				}
			});		
	});
});

$(document).ready(function () {
	$(".reset").click(function (){
		$(".action").val('reset');
		var id_user = $(this).parent().parent().attr('id').substr(1);
		var action = $('#n'+id_user+' input[name="action"]').val();
		var email = $('#n'+id_user+' input[name="email"]').val();
		$(".nom_compte").html(email);
		console.log(id_user);
		console.log(email);
		console.log(action);
		$('#requeteAjaxReset').click(function (){
			$.ajax({
				url: "includes/AjaxPhpfunctions/funcModUser.php",
				method: 'POST',
				data: {
						id_user : id_user,
						action : action
				},
				success : function (response) {
						console.log(response);
						if(response == 'error' ) {
							// le code PHP retourne 'error', c'est-à-dire que la requête SQL ne s'est pas exécuté correctement 
							alert('Désolé, une erreur est survenue lors de l\'enregistrement du cycle en base de données');
							ajaxResponse = false;
						}
						else if (response == 'ok') {
							// si on reçoit ok, nous étions alors en mode 'done' et tout s'est bien déroulé 
							console.log('Cycle achevé et mis à jours');
							ajaxResponse = true;
						}
						else {
							// Dans le dernier cas, nous devons recevons l'id du cycle nouvellement créé. Nous l'attrinuons à la variable actualCycleId sous forme d'entier
							/*actualCycleId = parseInt(response);
							ajaxResponse = parseInt(response);*/

							ajaxResponse = parseInt(response,10);
						}
				},
				error: function () {
					alert('Désolé, une erreur est survenue lors de de la requête ajax');
				},
				complete : function () {
					console.log('Requête Ajax exécutée');
				} 
			});
		});	
	});
});

$(document).ready(function () {
	$(".delete").click(function (){
		$(".action").val('delete');
		var id_user = $(this).parent().parent().attr('id').substr(1);
		var action = $('#n'+id_user+' input[name="action"]').val();
		var email = $('#n'+id_user+' input[name="email"]').val();
		$(".nom_compte").html(email);
		console.log(id_user);
		console.log(email);
		console.log(action);
		$('#requeteAjaxDelete').click(function (){
			$.ajax({
				url: "includes/AjaxPhpfunctions/funcModUser.php",
				method: 'POST',
				data: {
						id_user : id_user,
						action : action
				},
				success : function (response) {
						console.log(response);
						if(response == 'error' ) {
							// le code PHP retourne 'error', c'est-à-dire que la requête SQL ne s'est pas exécuté correctement 
							alert('Désolé, une erreur est survenue lors de l\'enregistrement du cycle en base de données');
							ajaxResponse = false;
						}
						else if (response == 'ok') {
							// si on reçoit ok, nous étions alors en mode 'done' et tout s'est bien déroulé 
							console.log('Cycle achevé et mis à jours');
							ajaxResponse = true;
						}
						else {
							// Dans le dernier cas, nous devons recevons l'id du cycle nouvellement créé. Nous l'attrinuons à la variable actualCycleId sous forme d'entier
							/*actualCycleId = parseInt(response);
							ajaxResponse = parseInt(response);*/

							ajaxResponse = parseInt(response,10);
						}
				},
				error: function () {
					alert('Désolé, une erreur est survenue lors de de la requête ajax');
				},
				complete : function () {
					console.log('Requête Ajax exécutée');
					$('.reset-complet')
					$(document).click(function (){
						document.location.href="http://localhost/git/art_management/admin/gestion_user.php";
					});	
				}		
			});
		
		});	
	});
});


/*------------------------ 
  oeuvre.php (gestion des oeuvres)
-------------------------*/


/*------------------------ 
  exposition.php (gestion des expos)
-------------------------*/


/*------------------------ 
  artistes.php (gestion des artistes)
-------------------------*/
$(document).ready(function () {
	$('#btn_artiste_create').click(function(){
		var nom = $("#formCreateArtiste input[name='nom']").val();
		console.log(nom);
		var prenom = $("#formCreateArtiste input[name='prenom']").val();
		console.log(prenom);
		var pseudo = $("#formCreateArtiste input[name='pseudo']").val();
		console.log(pseudo);
		var email = $("#formCreateArtiste input[name='email']").val();
		console.log(email);
		var telephone = $("#formCreateArtiste input[name='telephone']").val();
		console.log(telephone);	
		var adresse = $("#formCreateArtiste input[name='adresse']").val();
		console.log(adresse);
		var activitees = $("#formCreateArtiste input[name='activitees']").val();
		console.log(activitees);
		var description = $("#formCreateArtiste textarea[name='description']").val();
		console.log(description);
			$.ajax({
				url: "includes/AjaxPhpfunctions/funcCreateArtiste.php",
				method: 'POST',
				data : {
						nom : nom,
						prenom : prenom,
						pseudo : pseudo,
						email : email,
						telephone : telephone,
						adresse : adresse,
						activitees : activitees,
						description : description
						
					},
				success : function (response) {
					console.log(response);
					if(response == 'error' ) {
						// le code PHP retourne 'error', c'est-à-dire que la requête SQL ne s'est pas exécuté correctement 
						alert('Désolé, une erreur est survenue lors de l\'enregistrement du cycle en base de données');
						ajaxResponse = false;
					}
					else if (response == 'ok') {
						// si on reçoit ok, nous étions alors en mode 'done' et tout s'est bien déroulé 
						console.log('Cycle achevé et mis à jours');
						ajaxResponse = true;
					}
					else {
						// Dans le dernier cas, nous devons recevons l'id du cycle nouvellement créé. Nous l'attrinuons à la variable actualCycleId sous forme d'entier
						/*actualCycleId = parseInt(response);
						ajaxResponse = parseInt(response);*/

						ajaxResponse = parseInt(response,10);
					}
				},
				error: function () {
					alert('Désolé, une erreur est survenue lors de de la requête ajax');
				},
				complete : function () {
					console.log('Requête Ajax exécutée');
				}
			});	
		
	});
});

$(document).ready(function () {
	$('.btn_affiche_modifier_artiste').click(function (){
		var id = $(this).parent().parent().attr('id').substr(1);

		var nom = $('#n'+id+' .td_nom').html();
		var prenom = $('#n'+id+' .td_prenom').html();
		var pseudo = $('#n'+id+' .td_pseudo').html();
		var email = $('#n'+id+' input[name="email"]').val();
		var telephone = $('#n'+id+' input[name="telephone"]').val();
		var adresse = $('#n'+id+' input[name="adresse"]').val();
		var activitees = $('#n'+id+' input[name="activitees"]').val();
		var description = $('#n'+id+' textarea[name="description"]').val();
		
		$('.nom_artiste').html(nom);

		$('#formCreateArtiste').toggle(false);
		$('#formTradArtiste').toggle(false);
		$('#formModifArtiste').toggle(true);

		$("#formModifArtiste input[name='nom']").val(nom);
		$("#formModifArtiste input[name='prenom']").val(prenom);
		$("#formModifArtiste input[name='pseudo']").val(pseudo);
		$("#formModifArtiste input[name='email']").val(email);
		$("#formModifArtiste input[name='telephone']").val(telephone);
		$("#formModifArtiste input[name='adresse']").val(adresse);
		$("#formModifArtiste input[name='activitees']").val(activitees);
		$("#formModifArtiste textarea[name='description']").val(description);
		$("#formModifArtiste input[name='id_artiste']").val(id);
	}); 
});	

$(document).ready(function () {
	$('.btn_annuler_artiste').click(function () {
		$('#formModifArtiste').toggle(false);
		$('#formTradArtiste').toggle(false);
		$('#formCreateArtiste').toggle(true);
	});
});

$(document).ready(function () {
	$('#btn_artiste_modif').click(function(){
		
		var nom = $("#formModifArtiste input[name='nom']").val();
		var prenom = $("#formModifArtiste input[name='prenom']").val();
		var pseudo = $("#formModifArtiste input[name='pseudo']").val();
		var email = $("#formModifArtiste input[name='email']").val();
		var telephone = $("#formModifArtiste input[name='telephone']").val();
		var adresse = $("#formModifArtiste input[name='adresse']").val();
		var activitees = $("#formModifArtiste input[name='activitees']").val();
		var description = $("#formModifArtiste textarea[name='description']").val();
		var id_artiste = $("#formModifArtiste input[name='id_artiste']").val();
		
		$(".action").val('modifier');
		var action = $("#formModifArtiste input[name='action']").val();
		

		console.log(nom);
		console.log(prenom);
		console.log(pseudo);
		console.log(email);
		console.log(telephone);	
		console.log(adresse);
		console.log(activitees);
		console.log(description);
		console.log(action);
		console.log(id_artiste);	
			$.ajax({
				url: "includes/AjaxPhpfunctions/funcModArtiste.php",
				method: 'POST',
				data : {
						nom : nom,
						prenom : prenom,
						pseudo : pseudo,
						email : email,
						telephone : telephone,
						adresse : adresse,
						activitees : activitees,
						description : description,
						id_artiste : id_artiste,
						action : action
						
					},
				success : function (response) {
					console.log(response);
					if(response == 'error' ) {
						// le code PHP retourne 'error', c'est-à-dire que la requête SQL ne s'est pas exécuté correctement 
						alert('Désolé, une erreur est survenue lors de l\'enregistrement du cycle en base de données');
						ajaxResponse = false;
					}
					else if (response == 'ok') {
						// si on reçoit ok, nous étions alors en mode 'done' et tout s'est bien déroulé 
						console.log('Cycle achevé et mis à jours');
						ajaxResponse = true;
					}
					else {
						// Dans le dernier cas, nous devons recevons l'id du cycle nouvellement créé. Nous l'attrinuons à la variable actualCycleId sous forme d'entier
						/*actualCycleId = parseInt(response);
						ajaxResponse = parseInt(response);*/

						ajaxResponse = parseInt(response,10);
					}
				},
				error: function () {
					alert('Désolé, une erreur est survenue lors de de la requête ajax');
				},
				complete : function () {
					console.log('Requête Ajax exécutée');
					
					
						document.location.href="http://localhost/git/art_management/admin/artiste.php";
					
				}
			});		
	});
});


$(document).ready(function () {
	$(".btn_artiste_delete").click(function (){
		$(".action").val('delete');
		var action = $('#formModifArtiste input[name="action"]').val();
		var id_artiste = $('#formModifArtiste input[name="id_artiste"]').val();
		var nom = $("#formModifArtiste input[name='nom']").val();
		$(".nom_artiste").html(nom);
		console.log(action);
		$('#requeteAjaxDelete').click(function (){
			$.ajax({
				url: "includes/AjaxPhpfunctions/funcModArtiste.php",
				method: 'POST',
				data: {
						id_artiste : id_artiste,
						action : action
				},
				success : function (response) {
						console.log(response);
						if(response == 'error' ) {
							// le code PHP retourne 'error', c'est-à-dire que la requête SQL ne s'est pas exécuté correctement 
							alert('Désolé, une erreur est survenue lors de l\'enregistrement du cycle en base de données');
							ajaxResponse = false;
						}
						else if (response == 'ok') {
							// si on reçoit ok, nous étions alors en mode 'done' et tout s'est bien déroulé 
							console.log('Cycle achevé et mis à jours');
							ajaxResponse = true;
						}
						else {
							// Dans le dernier cas, nous devons recevons l'id du cycle nouvellement créé. Nous l'attrinuons à la variable actualCycleId sous forme d'entier
							/*actualCycleId = parseInt(response);
							ajaxResponse = parseInt(response);*/

							ajaxResponse = parseInt(response,10);
						}
				},
				error: function () {
					alert('Désolé, une erreur est survenue lors de de la requête ajax');
				},
				complete : function () {
					console.log('Requête Ajax exécutée');
					$('.reset-complet')
					$(document).click(function (){
						document.location.href="http://localhost/git/art_management/admin/artiste.php";
					});	
				}		
			});
		
		});	
	});
});

$(document).ready(function () {
	$('.btn_affiche_trad_artiste').click(function (){
		var id = $(this).parent().parent().attr('id').substr(1);

		var nom = $('#n'+id+' .td_nom').html();
		var description_anglais = $('#n'+id+' textarea[name="description_anglais"]').val();
		var description_allemand = $('#n'+id+' textarea[name="description_allemand"]').val();
		var description_russe = $('#n'+id+' textarea[name="description_russe"]').val();
		var description_chinois = $('#n'+id+' textarea[name="description_chinois"]').val();
		var activitees_anglais = $('#n'+id+' input[name="activitees_anglais"]').val();
		var activitees_allemand = $('#n'+id+' input[name="activitees_allemand"]').val();
		var activitees_russe = $('#n'+id+' input[name="activitees_russe"]').val();
		var activitees_chinois = $('#n'+id+' input[name="activitees_chinois"]').val();
		
		$('.nom_artiste').html(nom);
		
		$('#formCreateArtiste').toggle(false);
		$('#formModifArtiste').toggle(false);
		$('#formTradArtiste').toggle(true);
		
		
		$("#formTradArtiste textarea[name='description_anglais']").val(description_anglais);
		$("#formTradArtiste textarea[name='description_allemand']").val(description_allemand);
		$("#formTradArtiste textarea[name='description_russe']").val(description_russe);
		$("#formTradArtiste textarea[name='description_chinois']").val(description_chinois);
		$("#formTradArtiste input[name='activitees_anglais']").val(activitees_anglais);
		$("#formTradArtiste input[name='activitees_allemand']").val(activitees_allemand);
		$("#formTradArtiste input[name='activitees_russe']").val(activitees_russe);
		$("#formTradArtiste input[name='activitees_chinois']").val(activitees_chinois);
		$("#formTradArtiste input[name='id_artiste']").val(id);
	});
});

$(document).ready(function () {
	$('#btn_modif_trad_artiste').click(function(){
		
		var id_artiste = $("#formTradArtiste input[name='id_artiste']").val();
		var description_anglais = $("#formTradArtiste textarea[name='description_anglais']").val();
		var description_allemand = $("#formTradArtiste textarea[name='description_allemand']").val();
		var description_russe = $("#formTradArtiste textarea[name='description_russe']").val();
		var description_chinois = $("#formTradArtiste textarea[name='description_chinois']").val();
		var activitees_anglais = $("#formTradArtiste input[name='activitees_anglais']").val();
		var activitees_allemand = $("#formTradArtiste input[name='activitees_allemand']").val();
		var activitees_russe = $("#formTradArtiste input[name='activitees_russe']").val();
		var activitees_chinois = $("#formTradArtiste input[name='activitees_chinois']").val();
		$(".action").val('traduction');
		var action = $('#formTradArtiste input[name="action"]').val();
		$.ajax({
				url: "includes/AjaxPhpfunctions/funcModArtiste.php",
				method: 'POST',
				data: {
						id_artiste : id_artiste,
						action : action,
						description_anglais : description_anglais,
						description_allemand : description_allemand,
						description_russe : description_russe,
						description_chinois : description_chinois,
						activitees_anglais : activitees_anglais,
						activitees_allemand : activitees_allemand,
						activitees_russe : activitees_russe,
						activitees_chinois: activitees_chinois
				},
				success : function (response) {
						console.log(response);
						if(response == 'error' ) {
							// le code PHP retourne 'error', c'est-à-dire que la requête SQL ne s'est pas exécuté correctement 
							alert('Désolé, une erreur est survenue lors de l\'enregistrement du cycle en base de données');
							ajaxResponse = false;
						}
						else if (response == 'ok') {
							// si on reçoit ok, nous étions alors en mode 'done' et tout s'est bien déroulé 
							console.log('Cycle achevé et mis à jours');
							ajaxResponse = true;
						}
						else {
							// Dans le dernier cas, nous devons recevons l'id du cycle nouvellement créé. Nous l'attrinuons à la variable actualCycleId sous forme d'entier
							/*actualCycleId = parseInt(response);
							ajaxResponse = parseInt(response);*/

							ajaxResponse = parseInt(response,10);
						}
				},
				error: function () {
					alert('Désolé, une erreur est survenue lors de de la requête ajax');
				},
				complete : function () {
					console.log('Requête Ajax exécutée');
					
						document.location.href="http://localhost/git/art_management/admin/artiste.php";
					
				}		
		});
	});
});

/*------------------------ 
    .php ()
-------------------------*/
