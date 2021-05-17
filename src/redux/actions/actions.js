export function changeCategoryFilter (newCategory) {
    return { type:'CHANGE_CATEGORY_FILTER', categoryFilter: newCategory }
}

export function deleteArticle(id) {
    return { type:'DELETE_ARTICLE', id: id }
}

export function addArticle(article) {
    return { type:'ADD_ARTICLE', article: article }
}
