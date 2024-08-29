export function productValidator(product){
  const errors = []

  if(!(product.id.length >= 2 && product.id)){
    errors.push(`id: invalid length, current [${product.id}] expected to be between 2 and 20`)
  }

  return {
    result: errors.length === 0,
    errors
  }

}

