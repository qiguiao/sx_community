import axios from '../../src/http/axios.js'
let actions = {
    update_resident_list: function ({ commit },pageSize) {
        axios.post('/user/userInfo', {
            pageSize: pageSize,
            count: 10
        }).then((res) => {
              commit('update_resident_list',res.data.data)
           
            // this.tableData3 = data

        })
      
    }
}
export default actions