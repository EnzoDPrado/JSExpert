import ProductDataBuilder from "./productDataBuilder"

export class ProductMotherObject {
  static valid(){
    return ProductDataBuilder.aProduct().build()
  }
  static withInvalidName(){
    return ProductDataBuilder.aProduct().withInvalidName().build()
  }
  static withInvalidPrice(){
    return ProductDataBuilder.aProduct().withInvalidPrice().build()
  }
  static withInvalidCategory(){
    return ProductDataBuilder.aProduct().withInvalidCategory().build()
  }
  
}
