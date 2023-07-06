import { camelCase, lowerCase, snakeCase, startCase, upperCase } from 'lodash';
import { useState } from 'react';

export function CaseTool() {
  const [text, setText] = useState();
  return (
    <div>
      <div>
        输入：
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
        />{' '}
      </div>
      <div>驼峰命名：{camelCase(text)} </div>
      <div>蛇形命名：{snakeCase(text)} </div>
      <div>首字母大写：{startCase(text)} </div>
      <div>小写：{lowerCase(text)} </div>
      <div>大写：{upperCase(text)} </div>
    </div>
  );
}
