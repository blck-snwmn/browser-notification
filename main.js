Notification.requestPermission().then(function(result) {
    console.log(result);
});

function printLog() {
    console.log("print")
    notify()
}

function notify() {
    new Notification("test", {body:"this is test"})
}