import axios from 'axios';
import { useState } from 'react';
import { AttributesData, FetchState, ProductData } from '../types';
//mudar tipo
export function useGetProducts(url: any) {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [products, setProducts] = useState<Array<ProductData>>([]);
  const [attributes, setAttributes] = useState<Array<AttributesData>>([]);
  
  const getPosts = async () => {
    try {
      setFetchState(FetchState.LOADING);
      //colocar a url na .env, colocar o cod abaixo em um componente
      const res = await axios.get(`https://poc-backend-new-web.eks.pub.live.dafiti.io/product/getByUrl${url}`, { headers: { 'token': process.env.REACT_APP_TOKEN } })
      const resData = res.data as Array<ProductData>;
      const resAttributes = res.data.attributes as Array<AttributesData>;

      setProducts(resData);
      setAttributes(resAttributes);

      setFetchState(FetchState.SUCCESS);
    } catch (err) {
      setFetchState(FetchState.ERROR);
    }
  };

  return [products, attributes, fetchState, getPosts] as const;
}