export function productDetailsRecommendationsVue(compositeNumbers) {
    const params = {
        compositeNumbers: compositeNumbers,
        strategy: "pp12",
        backupStrategy: "popular",
        divId: "recommendedProductsHorizontal",
        isVertical: false,
        isHideHeaderText: false,
        headerText: "",
        backupHeaderText: "Popular Products",
        itemsPerPage: 2,
        itemDisplayLimit: 10,
        responseMap: null
    };
    return params;
}