"use strict";
function handleMsg(log) {
    switch (log.type) {
        case "warning":
            console.log(log.msg);
            break;
        case "info":
            console.log(log.text);
            break;
        case "success":
            console.log(log.message);
            break;
    }
}
const newInfo = {
    type: "info",
    text: "Hello!!",
};
handleMsg(newInfo);
