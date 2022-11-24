import { personalData, IPersonalData } from "../utils/data/profile";

type ResponseType<T> = {
  payload: T;
  status: number;
  success: boolean;
  message?: string;
};

export const getPersonnalData = async (): Promise<
  ResponseType<IPersonalData>
> => {
  const response = await getPersonnalDataMock();

  return response;
};

const getPersonnalDataMock = (): Promise<ResponseType<IPersonalData>> => {
  const response = new Promise<ResponseType<IPersonalData>>(
    (resolve, _reject) => {
      setTimeout(() => {
        resolve({ payload: personalData, status: 200, success: true });
        //reject({ error: "error getting products list" });
      }, 300);
    }
  );

  return response;
};
