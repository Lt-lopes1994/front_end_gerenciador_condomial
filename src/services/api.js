import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1',

  headers: {
    'Content-Type': 'application/json',
  },
});

// Função para fazer a renovação do token de acesso
const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem('token');
    const response = await axios.put('http://localhost:8000/api/v1/token/refresh', {
      oldToken: refreshToken,
    });

    const { access_token } = response.data;

    // Atualizar o token de acesso no localStorage
    localStorage.setItem('token', access_token);

    // Atualizar o cabeçalho Authorization do Axios com o novo token de acesso
    api.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;

    return access_token;
  } catch (error) {
    console.error('Erro ao renovar o token de acesso:', error);
    throw error;
  }
};

// Intercepta as respostas do servidor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Verifica se o erro é de token inválido (status 401)
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Renova o token de acesso
        const accessToken = await refreshAccessToken();

        // Reenvia a requisição original com o novo token de acesso
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.error('Erro ao renovar o token de acesso:', refreshError);
        // Redireciona para a tela de login ou exibe uma mensagem de erro
        throw refreshError;
      }
    }

    // Propaga o erro para o chamador
    return Promise.reject(error);
  }
);

export default api;
