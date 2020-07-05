import axios from "axios"
 function table_request(config,successCallback,failCallback) {
    const instance=axios.create({
        baseURL:'/api/table',
        timeout:5000

    })
    instance(config).then(res => {
        console.log(res)
        successCallback(res);
    }).catch(err => {
        console.log(err);
        failCallback(err)
    })
}
function menu_request(config,successCallback,failCallback) {
    const instance1= axios.create({
        baseURL:'api/menu',
        timeout:5000
    })
    instance1(config).then(res => {
        console.log(res)
        successCallback(res);
    }).catch(err => {
        console.log(err);
        failCallback(err)
    })

}
export {table_request,menu_request}