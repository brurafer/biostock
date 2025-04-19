export const isAuthenticated = () => {
  return !!localStorage.getItem('usuario') // Verifica se o usuário está salvo
}

export const logoutUser = () => {
  localStorage.removeItem('usuario')
}
