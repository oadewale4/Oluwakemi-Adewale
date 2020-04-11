var foodName = ["Jollof Rice","Pounded Yam","Efo Riro","Akara","Suya","Afang","Moi Moi","Tuwo","Pepper soup",
      "Ewa Agoyin","Amala and Ewedu","Ogbono Soup","Ofada Rice"];

var image = ["url(image/jollof.jpg)","url(image/pounded.jpg)","url(image/efo.jpeg)",
      "url(image/akara.png)","url(image/suya.jpg)","url(image/afang.jpg)","url(image/moi-moi.jpg)","url(image/tuwo.jpg)","url(image/pepper-soup.jpg)"
      ,"url(image/ewa-agoyin.jpeg)","url(image/amala.jpg)","url(image/ogbono.jpg)","url(image/ofada.jpg)"]

var text =["This colourful delicacy is food to many West African Countries, not just Nigeria. Ingredients of Jollof rice include ...",
    "Pounded yam is one of Nigeria’s most popular dishes that can be served with a variety of soups like Egusi...",
    "Efo Riro is a mix of pumpkin green leaves, meat, like chicken and offal or smoked fish. Efo Riro is a Yoruba delicacy originating from Western Nigeria...",
     "Akara is fried been cakes. Its popularity in Nigeria is quite obvious as many Nigerians opt for it for their breakfast ...",
     "Suya is a very popular delicacy in Nigeria. Conventionally eaten in the evenings, this snack is...",
     "The soup is made with local Afang leaves and water leaves together with dried fish, meat and snails...",
    "Moi Moi is a Nigerian steamed beans pudding which has its origin in South West Nigeria. It can be made with egg, crayfish...",
    "Tuwo Shinkafa is translated from Hausa language meaning – Mashed Rice. It is the go-to-side-dish for many Northern soups such as Miyan Kuka...",
    "Nigerian pepper soup is among the nation’s favourite dishes due to its intensely spicy flavour and the variety of meat, fish or chicken ...",
    "Ewa Aganyin is made up of cooked beans and pepper sauce. It is a delicious beans dish, well known for its softness and tasty sauce...",
    "Amala and Ewedu soup is a classic Nigerian food, mostly eaten by the Yoruba people, especially people from Oyo state...",
    "Ogbono soup is a popular Nigerian dish made with ground Ogbono seeds, with considerable local variation...",
    "Ofada Rice is produced locally in Nigeria. What makes it special is its unique flavour and aroma..."
            ]

var imageTypes = ["url(image/jollof.jpg)","url(image/ewa-agoyin.jpeg)","url(image/efo.jpeg)","url(image/pepper-soup.jpg)","url(image/jollof.jpg)",
          "url(image/akara.png)","url(image/pounded.jpg)","url(image/moi-moi.jpg)"] 

var types =["Rice Based","Beans Based","Soups and Stews","Side dishes","Breakfast","Snacks","Lunch","Beverages"]      

function loadCategories(no){
    /*var x = document.getElementsByTagName("body")
    x[0].style.backgroundColor = "blue";
    console.log('dones');*/

    var item = document.createElement("div");
    var image = document.createElement("div");
    var text = document.createElement("div");

    item.className ="items type";
    image.className = "image";
    text.className = "text";

    text.innerHTML = types[no]
    image.style.backgroundImage = imageTypes[no];

    item.appendChild(image);
    item.appendChild(text);

    var mainType = document.getElementById("type");
    mainType.appendChild(item);

}

function loadPopular(no){
    var item = document.createElement("div");
    var img = document.createElement("div");
    var textgroup = document.createElement("div");
    var name = document.createElement("strong");
    var stars = document.createElement("div");
    var content = document.createElement("div");

    item.className ="items food";
    img.className = "img";
    textgroup.className = "textgroup";
    name.className = "name";
    stars.className = "stars";
    content.className = "content"

    name.innerHTML = foodName[no];
    content.innerHTML = text[no]
    img.style.backgroundImage = image[no];

    textgroup.appendChild(name);
    textgroup.appendChild(stars);
    textgroup.appendChild(content);
    
    item.appendChild(img);
    item.appendChild(textgroup);

    var category = document.getElementsByClassName("category");
    category[1].appendChild(item);
}

function loadData(){ 
    for (var i = 0 ; i < types.length; i++){
        loadCategories(i);
    }

    for (var i = 0 ; i < foodName.length; i++){
        loadPopular(i);
    }
}

loadData();

