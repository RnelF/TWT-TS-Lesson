interface Individual {
  name: string;
  birthday: Date;
}

interface Organization {
  companyName: string;
  workPhone: string;
}

type ContactType = Individual | Organization;

type CompContact = Individual & Organization;

function addContact(contact: ContactType) {
  if ("birthday" in contact) {
    console.log(contact.name, contact.birthday);
  } else {
    console.log(contact.companyName, contact.workPhone);
  }
}
