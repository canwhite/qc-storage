# qc-storage
storage of some variables


## install
```
yarn add qc-storage

```

## use
```
import QCStorage from "qc-storage";
...
//Put on global variables
Vue.prototype.$storage = QCStorage.getInstance();//local storage
...
this.$storage.setItem(key,value)
this.$storage.getItem(key)

```
