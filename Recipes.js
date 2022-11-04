class DishRecipe {
    constructor(name, time, cookingMethod, image, ingArray) {
        this.name = name;
        this.time = time;
        this.cookingMethod = cookingMethod;
        this.image = image;
        this.ingArray = ingArray;
    }
    getIngredients() {       
        let showIng = this.ingArray;
        let str = "";
        str += "<div>";
        for (var i = 0; i < showIng.length; i++) {
            str += "<div class='modal-ing'>";
            str += `<img  src='${showIng[i].url}' />`;
            str += "<span>" + showIng[i].name + "</span>";
            str += "<br><span>Calories:" + showIng[i].calories + "</span>";
            str += "</div>"
        }
        str += "</div>";
        document.getElementById("modPage").innerHTML = str;
    }

    getTotalCalories() {
        let ingCaloriesArr = this.ingArray;
        var sum = 0;
        for (var i = 0; i < ingCaloriesArr.length; i++) {
            sum += parseInt(ingCaloriesArr[i].calories);
        }
        return sum;
    }


}


const recipesJson = [

]


//הוספת השדות של הוספת מתכון כשלוחצים על הוסף מתכון
function addNewRecipe() {
    let recipeForm = "<div class='row formLayout'>";
    recipeForm += "<div class='col '>";
    recipeForm += "<form>";
    recipeForm += "<br>";
    recipeForm += "<label for='recipeName'>Recipe name:</label><br>";
    recipeForm += "<input type='text' id='recipeName' name='recipeName'><br>";
    recipeForm += "<label for='recipeType'>Recipe type:</label><br>";
    recipeForm += "<input type='text' id='recipeType' name='recipeType'><br>";
    recipeForm += "<label for='recipeCookingTime'>Recipe cooking time:</label><br>";
    recipeForm += "<input type='number' id='recipeCookingTime' name='recipeCookingTime'><br><br>";
    recipeForm += "<label for='recipeUrl'>Recipe Image (url):</label><br>";
    recipeForm += "<input type='url' id='recipeUrl' name='recipeUrl'>";
    recipeForm += "</form>";
    recipeForm += "<br>";
    recipeForm += "</div>";
    recipeForm += "</div>";
    document.getElementById("fillForm").innerHTML = recipeForm;
    for (var i = 0; i < ingredientJson.length; i++) {
        ingredientJson[i].rennder();
    }
    let addRecipeBtn = "<div class='row btnRow'>";
    addRecipeBtn += "<div class='col addButtons'>";
    addRecipeBtn += "<button class='button-18' onclick='addIngToRcipeArray()'>Add recipe";
    addRecipeBtn += "</button>";
    addRecipeBtn += "</div>";
    addRecipeBtn += "<div class='col addButtons'>";
    addRecipeBtn += "<button class='button-18' onclick='clearRecipe()'>Clear</button>"
    addRecipeBtn += "</div>";
    addRecipeBtn += "</div>";
    document.getElementById("fillForm").innerHTML += addRecipeBtn;


}
//הוספת מתכון והצגתו בדף
function addIngToRcipeArray() {
    let reciptName = document.getElementById("recipeName").value;
    let recipeCookingTime = document.getElementById("recipeCookingTime").value;
    let recipeType = document.getElementById("recipeType").value;
    let recipeUrl = document.getElementById("recipeUrl").value;
    let ingRecArray = checkCheckbox();
    if (reciptName != "" && recipeCookingTime != "" && recipeType != "" && recipeUrl != "" && ingRecArray.length != 0) {
        recipesJson.push(new DishRecipe(reciptName, recipeCookingTime, recipeType, recipeUrl, ingRecArray));
    }

    document.getElementById("checkboxAdd").checked = false;
    clearRecipe();
    renderRecipes();

}

//פונקציה שאוספת מידע על אילו רכיבים נלחץ הצקבוקס כשרושמים מתכון
function checkCheckbox() {
    let ingToRecipe = [];
    let addToCurrentRecipeArray = [];
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    let ingredientList = ingredientJson;
    for (var i = 0; i < checkboxes.length; i++) {
        ingToRecipe.push(checkboxes[i].value)
    }
    for (var i = 0; i < ingredientList.length; i++) {
        for (var j = 0; j < ingToRecipe.length; j++) {
            if (ingredientList[i].name == ingToRecipe[j]) {
                addToCurrentRecipeArray.push(ingredientList[i]);
            }
        }

    }

    return addToCurrentRecipeArray;

}

//מציגה את המתכונים עם השדות שלהם בדף הבית
function renderRecipes() {

    let str = "";
    let recipeList = recipesJson;
    str += "<br/>";
    str += "<br>";
    str += "<div class='row'>";
    for (var i = 0; i < recipeList.length; i++) {
        let totalCalories = recipesJson[i].getTotalCalories();
        str += "<div class='col formLayout'>";
        str += '<a class="recipe">';
        str += `<img src='${recipeList[i].image}' class="img recipe-img"
                                             alt="" />`;
        str += "<h5>Name: " + recipeList[i].name + "</h5>";
        str += "<p>Cooking method:" + recipeList[i].cookingMethod + " | Cooking time:" + recipeList[i].time + "</p>";
        str += "<br><p>Total calories:" + totalCalories + "</p>"
        str += "<br><button id='myBtn' class='button-18' data-toggle='modal' data-target='#myModal' onclick='recipesJson[" + i + "].getIngredients()'>See ingredients</button>";
        str += "</a>"
        str += "</div>";
    }
    str += "</div>";
    document.getElementById("recipes-list").innerHTML = str;
}

//ניקוי שדות מתכון
function clearRecipe() {
    document.getElementById("recipeName").value = null;
    document.getElementById("recipeType").value = null;
    document.getElementById("recipeCookingTime").value = null;
    document.getElementById("recipeUrl").value = null;

}
