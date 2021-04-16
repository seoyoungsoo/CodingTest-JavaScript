// 1108번 Defanging an IP Address

const defangIPaddr = (address) => {
  return address.split('.').join('[.]');
}

const address = "1.1.1.1";
console.log(defangIPaddr(address));