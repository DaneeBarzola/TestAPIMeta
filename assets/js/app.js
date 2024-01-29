// Inicialización del SDK de Facebook
window.fbAsyncInit = function() {
    FB.init({
        appId      : '3534336296781139',
        cookie     : true,
        xfbml      : true,
        version    : 'v13.0'
    });
};

//asíncrona del SDK de Facebook
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//iniciar sesión con Facebook
function loginWithFacebook() {
    FB.login(function(response) {
        if (response.authResponse) {
            console.log('Usuario autenticado:', response.authResponse);
            // Aquí puedes realizar solicitudes a la API de Meta utilizando el token de acceso.
        } else {
            console.log('Autenticación cancelada.');
        }
    }, {scope: 'public_profile,email'}); // Especifica los permisos necesarios
}

//obtener información del usuario
function getUserInfo() {
    FB.api('/me', function(response) {
        console.log('Información del usuario:', response);
    });
}
