
export const initialState = {
  user:null,
  makeDrinksPage:{    

    "drink":"",
    "difficulty":"",
    "image":"",
    "aboutDrink":"",

    "ingredientList": [""],

    "drinksInstructionsList":[""],
    "pushTo":"/worked"
    },


  bodySegmentList:[
    {    

    "drink":"Godfather",
    "difficulty":2,
    "image":"https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "aboutDrink":"Godfather is a duo mixed drink made of Scotch whisky (especially smoky whisky)[1] and amaretto. Typically, the drink is served with ice in an old fashioned glass.",

    "ingredientList":
    [{"ingredient":"coke" , "amount":25, "unit":" ml " ,"id":1},
    {"ingredient":"vodka" , "amount":25, "unit":" ml " ,"id":2}, 
    {"ingredient":"stuff" , "amount":27, "unit":" ml " ,"id":3}, 
    {"ingredient":"lemon slice" , "amount":23, "unit":" ml " ,"id":4}, 
    {"ingredient":"coke" , "amount":24, "unit":" ml " ,"id":5},
    {"ingredient":"coke" , "amount":15, "unit":" ml " ,"id":6} ],

    "drinksInstructionsList":[{"instruction": "Add coke","id":0},{"instruction":"Let any frost on the coke settle","id":1},{"instruction":"open Vodka","id":2},{"instruction":"Pour Vodka","id":3},
    {"instruction":"Enjoy" ,"id":4}],
    "pushTo":"/worked"
    }
    ,
    {    
      "drink":"Mojito",
      "difficulty":5,
      "image":"https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "aboutDrink":"Mojito (/moʊˈhiːtoʊ/; Spanish: [moˈxito]) is a traditional Cuban highball. The cocktail often consists of five ingredients: white rum, sugar (traditionally sugar cane juice), lime juice, soda water, and mint.[1][2] Its combination of sweetness, citrus, and herbaceous mint flavours is intended to complement the rum, and has made the mojito a popular summer drink.",

      "ingredientList": [{"ingredient":"Lime juice" , "amount":25, "unit":" ml " ,"id":1},{"ingredient":"vodka" , "amount":25, "unit":"ml " ,"id":2}, {"ingredient":"stuff" , "amount":27, "unit":"ml " ,"id":3}, 
       {"ingredient":"Granulated sugar" , "amount":1, "unit":" Table Spoon" ,"id":4}, 
       {"ingredient":"Mint Leaves" , "amount":24, "unit":" Handful " ,"id":5},
       {"ingredient":"Soda" , "amount":150, "unit":" ml " ,"id":6} ],
  
      "drinksInstructionsList":[{"instruction": "Add Lime Juice", "id":0},{"instruction":"Add sugar and stir","id":1},{"instruction":"Crush mint leaves", "instruction":"add other ingredients","id":2},{"id":3},
      {"instruction":"Enjoy" ,"id":4}]
      }
      ,
      {    
        "drink":"Beer",
        "difficulty":1,
        "image":"https://images.pexels.com/photos/5659754/pexels-photo-5659754.jpeg?cs=srgb&dl=pexels-eva-elijas-5659754.jpg&fm=jpg/",
        "aboutDrink":"Beer is one of the oldest and most widely consumed alcoholic drinks in the world, and the third most popular drink overall after water and tea.[5] Beer is brewed from cereal grains—most commonly from malted barley, though wheat, maize (corn), rice, and oats are also used. During the brewing process, fermentation of the starch sugars in the wort produces ethanol and carbonation in the resulting beer.[6] Most modern beer is brewed with hops, which add bitterness and other flavours and act as a natural preservative and stabilizing agent. Other flavouring agents such as gruit, herbs, or fruits may be included or used instead of hops. In commercial brewing, the natural carbonation effect is often removed during processing and replaced with forced carbonation.",
  
        "ingredientList": [{"ingredient":"Beer"}],
    
        "drinksInstructionsList":[{"instruction": "Open Beer","amount":1, "unit":" Bottle " ,"id":0}]
      }
      ,
      {    
        "drink":"Hurricane cocktail",
        "difficulty":3,
        "image":"https://images.pexels.com/photos/4279113/pexels-photo-4279113.jpeg?cs=srgb&dl=pexels-helena-lopes-4279113.jpg&fm=jpg",
        "aboutDrink":"The Hurricane cocktail is a sweet alcoholic drink made with rum, lemon juice, and passion fruit syrup.[1] It is one of many popular drinks served in New Orleans. It is traditionally served in the tall, curvy eponymous hurricane",
  
        "ingredientList": [{"ingredient":"dark rum" , "amount":50 , "unit":" ml " ,"id":1},{"ingredient":"White rum" , "amount":50, "unit":" ml " ,"id":2},{"ingredient":"Passion fruit" , "amount":1, "unit":" piece of piece of fruit " ,"id":3},{"ingredient":"Orange" , "amount":1, "unit":" piece of piece of fruit " ,"id":4},{"ingredient":"Lemon" , "amount":1, "unit":" piece of piece of fruit " ,"id":5},{"ingredient":"Sugar syrup " , "amount":1, "unit":" piece of piece of fruit " ,"id":6},,{"ingredient":" grenadine " , "amount":2, "unit":" Table Spoons " ,"id":6}],
    
        "drinksInstructionsList":[{"instruction": "Extract Orange Juice", "id":0},{"instruction": "Extract Orange Juice", "id":1},{"instruction": "Extract Lemon Juice", "id":2}, {"instruction": "Shake Ingredients together", "id":3},  {"instruction": "Stir a hundred times", "id":4}]
        }
      ,
      {    
        "drink":"Water",
        "difficulty":5,
        "image":"https://images.pexels.com/photos/4667189/pexels-photo-4667189.jpeg?cs=srgb&dl=pexels-cottonbro-4667189.jpg&fm=jpg",
        "aboutDrink":"Water is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance, which is the main constituent of Earth's hydrosphere and the fluids of all known living organisms (in which it acts as a solvent). It is vital for all known forms of life, even though it provides no calories or organic nutrients. Its chemical formula is H2O, meaning that each of its molecules contains one oxygen and two hydrogen atoms, connected by covalent bonds. Two hydrogen atoms are attached to one oxygen atom at an angle of 104.45°...yum",
  
        "ingredientList": [{"ingredient":"Water" , "amount":50, "unit":" ml " ,"id":1},{"ingredient":"Will power" , "amount":50, "unit":" ml " ,"id":2}],
    
        "drinksInstructionsList":[{"instruction": "Water", "id":0},{"instruction": "Use will power  ", "id":1},]
        }

        

  ],


  


  expectNextCompletedId: 0,
}




  const reducer = (state, action) => {

    // console.log(action);
    switch (action.type) {
      case "RESET__CHECKVALUE":

        state.expectNextCompletedId=0
        return state


      case "CHECK__VALUE":
        console.log("state =",state.expectNextCompletedId, "action = ", action.item.id )
        if(action.item.id === state.expectNextCompletedId){
          state.expectNextCompletedId=state.expectNextCompletedId +1
        

          return {...state
          }
        }
        else if (action.item.id !== state.expectNextCompletedId){
          alert("Follow The Recipe In order. ")
        }
          

          return {
   
            ...state}

        case "SET__MAKE__DRINK__PAGE":
          state.makeDrinksPage=action.item
          console.log("ITTT WORRRRRKED")
          return {
   
            ...state}

      

  
        default:
            return state;

    }
  }

  export default reducer;