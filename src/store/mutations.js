var mutations = {
    update_user_name: function (state, data) {
        state.user_name = data
    },
    switch_loading: function (state, data) {
        state.loading = data
    },
    update_menu(state, data) {
        state.menu = data
    },
    update_user_img: function (state, data) {

        state.up_img.push(data)
    
    },
    upload_imgUrl:function(state,data){
        
        state.imgUrl.push(data)
    },
    update_resident_list:function(state,data){
        state.residentList=data
    },
    update_remarks_list:function(state,data){
        state.residentList=data
    }
}
export default mutations