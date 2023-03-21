import request from './request';

export const queryNavList = () => request.get('/product/getBaseCategoryList');
