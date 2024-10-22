import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ConstantClass } from '../general/config';

// Define la forma de los datos que se reciben en la función
interface ApiData {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';  // Método HTTP (GET por defecto)
  credentials?: 'include' | 'same-origin' | 'omit';     // Indica si se deben enviar credenciales (cookies)
  body?: any;                                  // Cuerpo de la solicitud, puede ser un objeto JSON o FormData
  form?: string;                               // Tipo de contenido si es un formulario
  token?: string;                              // Token de autorización (si existe)
}

// Define la forma de la respuesta que se retorna
interface ApiResponse {
  status: boolean;  // Estado de la solicitud (true si es exitosa)
  [key: string]: any;  // Otros campos que puedan existir en la respuesta
}

// Función asíncrona para enviar solicitudes API
export const asyncSendApis = async (url: string, data: ApiData): Promise<ApiResponse> => {
  // Define el método HTTP, usa 'GET' por defecto si no se proporciona
  const method = data.method || 'GET';

  // Configura los headers por defecto
  let headers: Record<string, string> = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  // Si se proporciona un token, lo añade a los headers
  if (data.token) {
    headers['Authorization'] = `Token ${data.token}`;
  }

  // Si se proporciona un tipo de formulario, actualiza el Content-Type
  if (data.form) {
    headers['Content-Type'] = data.form;
  }

  // Configura la solicitud Axios
  let config: AxiosRequestConfig = {
    method: method,
    url: ConstantClass.webserviceName + url,  // Combina la URL base con la URL específica de la solicitud
    headers: headers,  // Añade los headers configurados
    withCredentials: false,  // Configura el envío de credenciales si se especifica
  };

  // Si se proporciona un cuerpo para la solicitud
  if (data.body) {
    if (data.form) {
      // Si el cuerpo es un formulario, convierte los datos a FormData
      const formData = new FormData();
      for (let key in data.body) {
        formData.append(key, data.body[key]);
      }
      config.data = formData;  // Asigna el FormData al cuerpo de la solicitud
    } else {
      config.data = data.body;  // Asigna directamente el cuerpo si no es un formulario
    }
  }
  
  // Envía la solicitud utilizando Axios y espera la respuesta
  const response: AxiosResponse = await axios(config);
  const json: ApiResponse = response.data;
  // Añade el estado de la solicitud basado en el código de estado HTTP
  json.status = response.status >= 200 && response.status < 300;
  return json;
};
