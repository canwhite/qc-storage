class QCStorage{
    static getInstance(){
        if(!QCStorage.instance){
            QCStorage.instance = new QCStorage();
        }
        return QCStorage.instance;
    }
    getItem(key){
        return localStorage.getItem(key);
    }
    setItem(key,value){
        return localStorage.setItem(key,value);
    }
}
export default QCStorage;