const techList = (technologies, name) => {
  if(technologies.length === 0) {
    return 'Vazio!';
  } 

  const technologiesObject = [];

  technologies.sort().forEach(element => {
    technologiesObject.push({tech: `${element}`, 'name': `${name}`})
  });

  return technologiesObject;
}

module.exports = techList