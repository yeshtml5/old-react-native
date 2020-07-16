export const THEME_COLOR = '#ff0099';

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
