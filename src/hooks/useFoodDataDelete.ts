import axios, { AxiosPromise } from "axios"
// import { FoodData } from "../interface/FoodData";
import { useMutation, useQueryClient} from "react-query";

const API_URL= 'http://localhost:8081';

const deleteData = async (id: number): AxiosPromise<any> => {
  const response = axios.delete(API_URL + `/food/${id}`)
  return response;
}


export function useFoodDataDelete(){
  const queryClient = useQueryClient();
  const deleteFood = useMutation({
    mutationFn: deleteData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(['food-data'])
    }
  })

  return deleteFood;
}