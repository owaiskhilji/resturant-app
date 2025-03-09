import fish_chips from "../assets/menuheightlight/FishandChips.png"
import full_english from "../assets/menuheightlight/FullEnglish.png"
import roost_beef from "../assets/menuheightlight/RoostBeef.png"
import vagetarian from "../assets/menuheightlight/Vegetarian.png"


const menuItems = [
    {
      name: "Fish and Chips",
      description: "Fresh cod in a crispy batter, served with chunky chips and mushy peas.",
      image: fish_chips
    },
    {
      name: "Roast Beef Sunday Lunch",
      description: "Slow-cooked roast beef with roasted vegetables, Yorkshire pudding, and gravy.",
      image: roost_beef
    },
    {
      name: "Full English Breakfast",
      description: "Bacon, sausages, eggs, grilled tomatoes, mushrooms, and toast.",
      image: full_english
    },
    {
      name: "Vegetarian Options",
      description: "Stuffed portobello mushrooms, vegetable curry, and quiche of the day.",
      image: vagetarian
    }
  ];
  
  export default menuItems;
  



export function Menuhightlight(){
    return(
        <div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
{menuItems && menuItems.length > 0  ?  (
  menuItems.map((item, index) => (
  <div
    key={index}
    className="bg-white w-full max-w-sm overflow-hidden font-[sans-serif] mt-4 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
  >
    <div className="md:min-h-[256px] relative">
      
             <img
                alt={item.name || "Product image"}
                src={item.image}
                className="w-full object-cover"
                /> 

    </div>

    <div className="p-6 space-y-4">
        <h1 className="font-extrabold text-sm sm:text-sm md:text-md border-2 rounded-xl bg-red-300 text-red-600 p-1">
          {item.description }
        </h1>
      </div>
    </div>
    
))
):(
<p className="text-gray-500">No products available.</p>
)
}


</div>

        </div> 
    )
}