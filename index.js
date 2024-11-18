//index.html 을 위한 js file
function login(username, password) {
    console.log('>>> 로그인 함수');
    if (username) {
        console.log(username);
    } else if (username && password) {
        console.log(username + ' ' + password);
    } else {
        console.log('>>>> login fail');
    }
};

function logout() {
    console.log('>>> 로그아웃 함수');
    console.log('로그아웃:logout');
}

function fixBugA() {
    console.log('fixBugA')
}

function fixBugB() {
    console.log('fixBugB')
}

function mainBase1() {
    console.log('mainBase1')
}

function mainBase2() {
    console.log('mainBase2')
}