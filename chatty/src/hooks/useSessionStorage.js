const useSessionStorage = (key, type) => {
    try{
        if (type=="get"){
            const item = window.sessionStorage.getItem(key);
            return item ? JSON.parse(item) :"";
        
        } else if(type=="set"){
            const setValue=(value)=>{
                window.sessionStorage.setItem(key, JSON.stringify(value));
            }
            return [setValue]
        }
        else{
            const deleteValue=()=>{
                window.sessionStorage.removeItem(key);
            }
            return [deleteValue]
        }
    }
    catch(error){
        console.log(error);
    }
}
export default useSessionStorage;