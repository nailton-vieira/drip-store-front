export default function Glass() {
  

  return (
    <div className="md:hidden fixed bg-white w-full h-[70.5px] top-[79px] left-[3px] flex justify-center items-center" >
       
      
       <div className="p-4 flex justify-center items-center
        gap-4 w-full  md:bg-gray-500">
        <input className="w-full p-2 border border-gray-300 rounded 
        focus:outline-none focus:ring-2 focus:ring-pink-400"
        type="text" 
        name="pesquisar" 
        id="pesquisar" 
        placeholder="Pesquisar Produto" />
       
       </div>
      

     
      
    </div>
  );
}