//index.html 을 위한 js file
function login(username, password) {
    if (username) {
        console.log(username);
    } else if (username && password) {
        console.log(username + ' ' + password);
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