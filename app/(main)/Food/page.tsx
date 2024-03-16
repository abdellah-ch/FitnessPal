import FoodTable from "@/components/molucules/FoodTable"

const Food = () => {
    const date = new Date();
    console.log(date.getDate());
    
    return (
        <div className="max-w-[992px] mr-auto ml-auto">
            <div className="m-4 flex"> 
              <p className="py-2 font-bold">Your food Diary for :</p> 
              <div className="bg-[#00548F] text-white py-2 ml-1 px-2 rounded-lg">{date.toString()}</div> 
            </div>

            <div>
              <FoodTable type = "breakfast"/> 
              <FoodTable type = "lunch"/> 
              <FoodTable type = "dinner"/>
              <FoodTable type = "snacks"/>
            </div>
        </div>
    )
}

export default Food
