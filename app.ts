//Union Type

type StringOrNumber = string | number | boolean;

function acceptVal(val: StringOrNumber) {}

//Intersection type

interface BusinessPartner {
  name: string;
}

interface ContactDetails {
  email: string;
  phone: string;
}
