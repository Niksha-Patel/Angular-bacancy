interface Address{
  street: string;
  city: string;
  pincode: number;
}

interface Person{
  firstname: string;
  lastname: string;
  age: number;
  address: Address;
  contact?: string[];
  getFullname(): string;
  getAddress(): string;
}

const PersonInfo: Person={
  firstname: 'nik',
  lastname: 'Patel',
  age: 21,
  address: {
    street: 'xyz',
    city: 'Anand',
    pincode: 387240
  },
  contact:['1253632145','1425363254'],
  getFullname(): string{
    return `${this.firstname} ${this.lastname}`;
  },
  getAddress(): string {
    const { street, city, pincode } = this.address;
    return `${street}, ${city}, ${pincode}`;
  },
};
console.log("Fullname:"+PersonInfo.getFullname()); 
console.log("Address:"+PersonInfo.getAddress()); 
console.log("Contact/s:"+PersonInfo.contact);







