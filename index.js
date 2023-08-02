
 
  const h5Element = document.querySelector('.single-info h5');

 
  const textNode = h5Element.firstChild.nextSibling;

 
  h5Element.removeChild(textNode);


 
  const main = document.querySelector('.single-info h5');

  
  const lastChildNode = main.lastChild;

  
  main.removeChild(lastChildNode);

