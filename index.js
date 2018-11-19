// credit to Rob W          https://stackoverflow.com/users/938089/rob-w
//       and Community      https://stackoverflow.com/users/-1/community
// https://stackoverflow.com/questions/9515704/insert-code-into-the-page-context-using-a-content-script
(function() {
    var s = document.createElement('script');
    s.src = chrome.extension.getURL('beep.js');
    s.onload = function () {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
})();