import { ILinkedinData, IPersonalData } from "../model/profile";
import { linkedinData, personalData } from "../utils/data/profile";

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

export const getLinkedinData = async (): Promise<
  ResponseType<ILinkedinData[]>
> => {
  const response = await getLinkedinDataMock();

  return response;
};

// -------------------------------------------------- MOCK --------------------------------------------------

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

const getLinkedinDataMock = (): Promise<ResponseType<ILinkedinData[]>> => {
  const response = new Promise<ResponseType<ILinkedinData[]>>(
    (resolve, _reject) => {
      setTimeout(() => {
        resolve({ payload: linkedinData, status: 200, success: true });
        //reject({ error: "error getting products list" });
      }, 300);
    }
  );

  return response;
};
