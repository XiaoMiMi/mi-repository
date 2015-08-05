/**
 * Created by Administrator on 2015/7/1.
 */
function closeLogin(){
    var loginDiv = document.getElementById('login');
    loginDiv.style.display = 'none';
    var loginDiv = document.getElementById('mask');
    loginDiv.style.display = 'none';
}
function showLogin(){
    var loginDiv = document.getElementById('login');
    loginDiv.style.display = 'block';
    var loginDiv = document.getElementById('mask');
    loginDiv.style.display = 'block';
}
