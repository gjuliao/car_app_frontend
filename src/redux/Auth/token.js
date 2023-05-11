const token = () => localStorage.getItem('jti') || '';
export default token;
