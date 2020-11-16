const initialState = {
   isLoading: false,
   isError: false,
   errorMsg: '',
   data: [],
   successMsg: '',
   isLogin: false,
};

const auth = (state = initialState, action) => {
   switch (action.type) {
      case 'LOGIN_PENDING':
         return {
            ...state,
            isLoading: true,
            isError: false,
         };
      case 'LOGIN_REJECTED':
         return {
            ...state,
            isLoading: false,
            isError: true,
            errorMsg: 'Data Rejected',
         };
      case 'LOGIN_FULFILLED':
         return {
            ...state,
            isLoading: false,
            isError: false,
            data: action.payload.data.data,
            isLogin: true,
         };
      case 'LOGOUT':
         return {
            ...state,
            isLoading: false,
            isError: false,
            isLogin: false,
            errorMsg: '',
            data: {},
            _persist: {
               version: -1,
               rehydrated: true,
            },
         };
      case 'REGISTER_PENDING':
         return {
            ...state,
            isLoading: true,
            isError: false,
         };
      case 'REGISTER_REJECTED':
         return {
            ...state,
            isLoading: false,
            isError: true,
            errorMsg: 'Data Rejected',
         };
      case 'REGISTER_FULFILLED':
         return {
            ...state,
            isLoading: false,
            isError: false,
            data: action.payload.data.data,
         };
      case 'REQUEST_PASSWORD_PENDING':
         return {
            ...state,
            isLoading: true,
            isError: false,
         };
      case 'REQUEST_PASSWORD_REJECTED':
         return {
            ...state,
            isLoading: false,
            isError: true,
            errorMsg: 'Data Rejected'
         }
      case 'REQUEST_PASSWORD_FULFILLED':
         return {
            ...state,
            isLoading: false,
            isError: false,
            data: action.payload.data.data,
            isLogin: true,
         };
      case 'CONFIRM_PASSWORD_PENDING':
         return {
            ...state,
            isLoading: true,
            isError: false,
         };
      case 'CONFIRM_PASSWORD_REJECTED':
         return {
            ...state,
            isLoading: false,
            isError: true,
            errorMsg: 'Data Rejected',
         };
      case 'CONFIRM_PASSWORD_FULFILLED':
         return {
            ...state,
            isLoading: false,
            isError: false,
            data: action.payload.data.data,
            isLogin: true,
         };
      case 'REQUEST_PASSWORD_PENDING':
         return {
            ...state,
            isLoading: true,
            isError: false,
         };
      case 'REQUEST_PASSWORD_REJECTED':
         console.log('object', action.payload.data)
         return {
            ...state,
            isLoading: false,
            isError: true,
            errorMsg: 'Data Rejected',
         };
      case 'REQUEST_PASSWORD_FULFILLED':
         console.log('object', action.payload.data)
         return {
            ...state,
            isLoading: false,
            isError: false,
            data: action.payload.data.data,
            isLogin: true,
         };
      case 'RESET_PASSWORD_PENDING':
         return {
            ...state,
            isLoading: true,
            isError: false,
         };
      case 'RESET_PASSWORD_REJECTED':
         return {
            ...state,
            isLoading: false,
            isError: true,
            errorMsg: 'Data Rejected',
         };
      case 'RESET_PASSWORD_FULFILLED':
         return {
            ...state,
            isLoading: false,
            isError: false,
            data: action.payload.data.data,
            isLogin: true,
         };
      default:
         return state;
   }
};

export default auth;