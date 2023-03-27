import request from './request';

export const reqNavList = () => request.get('/product/getBaseCategoryList');
