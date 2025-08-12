// ES11 has optinal chaining

const house = { owner: { name: 'Jim', pet: null }};

// Old JavaScript
if(house && house.owner && house.owner.pet && house.owner.pet.type === 'dog'){
  console.log('owner has a dog');
}

// ES11
if (house?.owner?.pet?.type === 'dog') {
  console.log('owner has a dog');
}