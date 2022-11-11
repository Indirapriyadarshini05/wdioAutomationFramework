

const GCUrlPage=require('./GreencartUrl.page')

 
class Gcmain extends GCUrlPage {
    
    get Searchpath () {
        return $('//input[@type="search"]');
    }
    get Cart () {
        return $('//img[@alt="Cart"]');
    }

    get items () {
        return $("//td[text()='Items']");
    }
     get itemnum(){
        return $("//td[text()='Items']/..//td//strong")
     }
    get pricetext () {
        return $("//td[text()='Price']");
    }
    get pricenum () {
        return $("//td[text()='Price']/..//td//strong");
    }


      async Veggies(value) {
        let vegpath=$("//h4[text()='"+value+"']") ;
        let addcartpath=$("//h4[text()='"+value+"']/..//button") ;
        await vegpath.waitForDisplayed({timeout:10000});
        await addcartpath.click(); 
      }


    
    open () {
        return super.open('#/');
    }
}

module.exports = new Gcmain();
