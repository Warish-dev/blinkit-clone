
export const adminEndPoints = {
    login: "/admin/login"
}

export const warehouseEndPoints = {
    warehouseLogin: "warehouse/warehouseLogin",

    createWarehouse: "warehouse/createWarehouse",
    findNearestWarehouse: "warehouse/findNearestWarehouse",
    lowStockAlert: "warehouse/lowStockAlert",
    updateStock: "warehouse/updateStock",
    markAvailableOrNot: "warehouse/markAvailableOrNot",
    getAllWarehouse: "warehouse/getAllWarehouse",
    
    resetPasswordToken: "warehouse/resetPasswordToken",
    resetPassword: "warehouse/resetPassword",
}

export const categoryEndPoints = {
    createCategory: "category/createCategory",
    allCategory: "category/allCategory",
    getCategoryById: "category/getCategoryById",
    updateCategory: "category/updateCategory",
    deleteCategory: "category/deleteCategory",
}

export const productEndPoints = {
    addProduct: "product/addProduct",
    getAllProduct: "product/getAllProduct",
    getProductById: "product/getProductById",
    getAllPoductByCategory: "product/getAllPoductByCategory",
}

export const unitEndPoints = {
    createUnit : "unit/createUnit",
    updateUnit: "unit/updateUnit",
    getAllUnits: "unit/getAllUnits",
    getUnitById: "unit/getUnitById",
    deleteUnit: "unit/deleteUnit",
}

export const deliveryBoyEndPoints = {
    addDeliveryBoy : "deliveryBoy/addDeliveryBoy",
    sendOtpOnEmail: "deliveryBoy/sendOtpOnEmail",
    blockAndUnblockDeliveryBoy: "deliveryBoy/blockAndUnblockDeliveryBoy",
    changeBasicDetailsOfDeliveryBoy: "deliveryBoy/changeBasicDetailsOfDeliveryBoy",
    changeAvailableStatusOfDeliveryBoy: "deliveryBoy/changeAvailableStatusOfDeliveryBoy",
}

export const subCategoryEndPoints = {
    craeteSubCategory: "subCategory/craeteSubCategory",
    getSubCategoryById: "subCategory/getSubCategoryById",
    updateSubCategory: "subCategory/updateSubCategory",
    deleteSubCategory: "subCategory/deleteSubCategory",
}

export const otpEndPoints = {
    sendOtpOnEmail: "otp/sendOtpOnEmail",
    sendOtpOnWhatsapp: "otp/sendOtpOnWhatsapp",
}

export const userEndPoints = {
    userLoginSignUp : "user/userLoginSignUp",
}