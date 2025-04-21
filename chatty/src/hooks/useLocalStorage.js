const useLocalStorage = (key, type) => {
    try{
        if (type=="get"){
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) :" ";
        
        } else if(type=="set"){
            const setValue=(value)=>{
                window.localStorage.setItem(key, JSON.stringify(value));
            }
            return [setValue]
        }
        else{
            const deleteValue=()=>{
                window.localStorage.removeItem(key);
            }
            return [deleteValue]
        }
    }
    catch(error){
        console.log(error);
    }
}
export default useLocalStorage;