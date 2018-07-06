  var appKey    = "722e3e03eae3c6ed20ef168eb4d63a36f6571d6186473e489e10cab2d7e3f9e8";
     var clientKey = "d7234264a2b4a24a2f4194fe5357542519a52a52ce624bd81987df82d7fb3d94";
     var ncmb = new NCMB(appKey, clientKey);

     //入力フォームからusername, password変数にセット
var username = $("#reg_username").val();
var password = $("#reg_password").val();

var user = new ncmb.User();
user.set("userName", username)
    .set("password", password);

// 任意フィールドに値を追加
user.signUpByAccount()
    .then(function(user) {
        alert("新規登録に成功");
        currentLoginUser = ncmb.User.getCurrentUser();
        $.mobile.changePage('#DetailPage');
    })
    .catch(function(error) {
        alert("新規登録に失敗！次のエラー発生：" + error);
    });

