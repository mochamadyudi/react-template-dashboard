let _port = 5000,
    _prefix = "/api",
    _origin = "https://srv-merchant.api.berkahi.local" + _port + _prefix
//catalog_product/index?page=1&max_result=20
export const API = {
    routes:{
        product:{
            catalog: "catalog_product/index"
        },
        auth:{
            signUp: _origin +'/auth/signup',
            signIn: _origin + '/auth/signin',
            recoverPassword: _origin +'/auth/recover-password',
            saveNewPassword:  _origin + "/auth/save-new-password",
            verifyEmail: _origin + "/auth/verify-email",
        }
    }
}
