"use strict";
function addContact(contact) {
    if ("birthday" in contact) {
        console.log(contact.name, contact.birthday);
    }
    else {
        console.log(contact.companyName, contact.workPhone);
    }
}
