import { callBackendApi } from './external-api.service';
import { useAuth0 } from "@auth0/auth0-react";

const apiBackendUrl = process.env.REACT_APP_API_SERVER_URL;


export const getPublicResource = async () => {
  const config = {
    url: `${apiBackendUrl}/api/messages/public`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  const { data, error } = await callBackendApi({ config });

  return {
    data: data || null,
    error,
  };
};

export const getProtectedResource = async (accessToken) => {
  const config = {
    url: `${apiBackendUrl}/api/messages/protected`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const { data, error } = await callBackendApi({ config });

  return {
    data: data || null,
    error,
  };
};

export const getAdminResource = async (accessToken) => {
  const config = {
    url: `${apiBackendUrl}/api/messages/admin`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const { data, error } = await callBackendApi({ config });

  return {
    data: data || null,
    error,
  };
};
