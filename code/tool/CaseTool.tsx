import { Box, Input, InputLabel, Table } from '@mantine/core';
import { camelCase, lowerCase, snakeCase, startCase, upperCase } from 'lodash';
import { useState } from 'react';

export function CaseTool() {
  const [text, setText] = useState();
  return (
    <Box m="lg">
      <Input.Wrapper label="输入">
        <Input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </Input.Wrapper>
      <Table p="lg" my="md">
        <Table.Thead>
          <Table.Tr>
            <Table.Td w="100px">原文</Table.Td>
            <Table.Td>转换后的</Table.Td>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>驼峰命名</Table.Td>
            <Table.Td>{camelCase(text)}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>蛇形命名</Table.Td>
            <Table.Td>{snakeCase(text)}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>首字母大写</Table.Td>
            <Table.Td>{startCase(text)}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>小写</Table.Td>
            <Table.Td>{lowerCase(text)}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>大写</Table.Td>
            <Table.Td>{upperCase(text)}</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </Box>
  );
}
