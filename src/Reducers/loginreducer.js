import { cloneDeep } from "lodash";

const initialstate = {
  user: {},
  form: {
    email: "",
    password: ""
  },
  registerform: {
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  },
  initialform: {
    email: '',
    password: '',
    confirmpassword: ''
  }
};

const changefields = (state, action) => {
  const forms = cloneDeep(state.form)
  Object.keys(forms).map(keys => {
    if(keys === action.payload.key){
      forms[keys] = action.payload.value
    }
  })
  return {...state, form: forms}
};

const changeregisterform = (state, action) => {
  const forms = cloneDeep(state.registerform)
  Object.keys(forms).map(keys => {
    if(keys === action.payload.key){
      forms[keys] = action.payload.value
    }
  })
  return {...state, registerform: forms}
};

const ForgetPassword = (state,action) => {
  const forms = cloneDeep(state.initialform)
  Object.keys(forms).map(keys => {
    if(keys === action.payload.key){
      forms[keys] = action.payload.value
    }
  })
  return {...state, initialform: forms}
}

export default function reducer(state = initialstate, action) {
  switch (action.type) {
    case 'CHANGE_FIELDS': {
      return changefields(state, action);
    }
    case 'CHANGE_REGISTER_FORM' : {
      return changeregisterform(state, action)
    }
    case 'FORGOT_PASSWORD': {
      return ForgetPassword(state,action)
    }
    default: {
      return state;
    }
  }
  return state;
}
