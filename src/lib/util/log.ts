/**
 * @reference https://blog.bitsrc.io/coloring-your-terminal-using-nodejs-eb647d4af2a2
 * @description
blue	[34, 89]
yellow	[33, 89]
red 	[31, 89]
cyan	[36, 89]
green	[32, 89]
magenta	[35, 89]
white	[37, 89]
gray	[30, 89]
 */

/**
 * console.log 와 같은 터미널에서 확인가능한로그
 * @param message {string || object} 로그메시지
 * @param color_setting {array} 색상컬러값
 */
export const log = (
  message: string | object | number | boolean | undefined,
  color_setting: string[] = ['34m', '89m'],
) => {
  if (!message) return;
  const COLOR_SETTING = color_setting;
  switch (typeof message) {
    case 'string':
      console.log(`\x1b[${COLOR_SETTING[0]}${message}\x1b[${COLOR_SETTING[1]}`);
      break;
    case 'object':
      console.log(
        `\x1b[${'\n'}${COLOR_SETTING[0]}${JSON.stringify(message, null, 1)}\x1b[${
          COLOR_SETTING[1]
        }`,
      );
      break;
    default:
      console.log(`\x1b[${COLOR_SETTING[0]}${message}\x1b[${COLOR_SETTING[1]}`);
      break;
  }
};

export const line = () => {
  const message = '----------------';
  console.log(`\x1b[34m ${message}\x1b[89m`);
};

export const error = (message: string | object | undefined) => {
  if (!message) return;
  log(message, ['31m', '89m']);
};
