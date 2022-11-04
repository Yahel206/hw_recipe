var count = 1;
class Ingredients {
    constructor(name, url, calories) {
        this.name = name;
        this.url = url;
        this.calories = calories;
        this.id = count++;
        }
    rennder() {
        let str = "<div class='row'";
        let ingredientList = ingredientJson;
        str += "<br/>";

        for (var i = 0; i < ingredientList.length; i++) {
            str += "<div class='col-4 formGrid'>";
            str += "<label class='card'>add  ";
            str += "<input id='checkboxAdd' type='checkbox' value=" + ingredientList[i].name + ">";
            str += "<p>Ingredient details</p>";
            str += `<img id='cardIngImg' src='${ingredientList[i].url}' />`;
            str += "<span>" + ingredientList[i].name + "</span>";
            str += "<br><span>Calories:" + ingredientList[i].calories + "</span>";
            str += "</label>"
            str += "</div>";
        }

        str += "</div>";
        document.getElementById("ph").innerHTML = str;
    }
}

const ingredientJson = [
    
]

//הוספת השדות של הוספת מצרך כשלוחצים על הוסף מצרך
function addNewIngredient() {
    let ingrForm = "<div class='row formLayout'>";
    ingrForm += "<div class='col '>";
    ingrForm += "<form>";
    ingrForm += "<label for='ingrName'>Ingredient name:</label><br>";
    ingrForm += "<input type='text' id='ingrName' name='ingrName'><br>";
    ingrForm += "<label for='ingrImg'>Ingredient Image (url):</label><br>";
    ingrForm += "<input type='url' id='ingrImg' name='ingrImg'><br>";
    ingrForm += "<label for='ingrCalories'>Ingredient calories:</label><br>";
    ingrForm += "<input type='number' id='ingrCalories' name='ingrCalories'><br><br>";
    ingrForm += "</form>";
    ingrForm += "</div>";
    ingrForm += "</div>";
    ingrForm += "<div class='row btnRow'>";
    ingrForm += "<div class='col addButtons'>";
    ingrForm += "<button class='button-18' onclick='addIngToArray()'>Add ingredient";
    ingrForm += "</button>";
    ingrForm += "</div>";
    ingrForm += "<div class='col addButtons'>";
    ingrForm += "<button class='button-18' onclick='clearIng()'>Clear</button>";
    ingrForm += "</div>";
    ingrForm += "</div>";
    document.getElementById("fillForm").innerHTML = ingrForm;
    document.getElementById("ph").innerHTML = null;
}

function addIngToArray() {

    let ingredientName = document.getElementById("ingrName").value;
    let ingredientUrl = document.getElementById("ingrImg").value;
    let ingredientCalories = document.getElementById("ingrCalories").value;
    if (ingredientName != "" && ingredientUrl != "" && ingredientCalories != "") {
        ingredientJson.push(new Ingredients(ingredientName, ingredientUrl, ingredientCalories));
    }
    
    clearIng();

}


//ניקוי שדות מצרך
function clearIng() {
    document.getElementById("ingrName").value = null;
    document.getElementById("ingrImg").value = null;
    document.getElementById("ingrCalories").value = null;

}

