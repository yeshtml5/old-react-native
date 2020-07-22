export const THEME_COLOR = '#DDDDDD';

// FROM등록시 유효성검사
export const FORM_DATA_INFO: {
  [key: string]: {
    NAME: string;
    PATTERN: RegExp;
  };
} = {
  NAME: {
    NAME: 'name',
    PATTERN: /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]*$/,
  },
  EMAIL: {
    NAME: 'email',
    PATTERN: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  },
  PASSWORD: {
    NAME: 'password',
    PATTERN: /^.*(?=.{8,16})(?=.*[0-9])(?=.*[a-zA-Z]).*$/,
  },
  PASSWORDCONFIRM: {
    NAME: 'passwordConfirm',
    PATTERN: /^.*(?=.{8,16})(?=.*[0-9])(?=.*[a-zA-Z]).*$/,
  },
  PHONE: {
    NAME: 'phone',
    PATTERN: /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/,
  },
  AUTHNUM: {
    NAME: 'authNum',
    PATTERN: /^[0-9]{6}$/,
  },
};

//StackHeaderStyle
export const STACK_SCREEN_OPTIONS: {
  headerTitleAlign: string;
  headerTitleStyle: {
    [key: string]: any;
  };
} = {
  headerTitleAlign: 'center',
  headerTitleStyle: {
    color: '#111111',
    fontSize: 16,
    fontWeight: 'normal',
  },
};
export const STACK_OPTIONS: {
  headerShown: boolean;
  animationEnabled: boolean;
  headerStyle: {
    [key: string]: any;
  };
} = {
  headerShown: true,
  animationEnabled: true,
  headerStyle: {
    elevation: 0,
    borderBottomWidth: 0,
    backgroundColor: '#EEE',
  },
};
