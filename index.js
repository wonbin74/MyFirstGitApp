//index.html 을 위한 js file
function login(username, password) {
    if (username && password) {
        console.log(username + ' ' + password);
    } else {
        console.log('login fail');
    }
};

function logout() {
    console.log('로그아웃:logout');
}

function fixBugA() {
    console.log('fixBugA')
}

function fixBugB() {
    console.log('fixBugB')
}