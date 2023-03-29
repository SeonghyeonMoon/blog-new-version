// TODO: blocks 타입 정의
const bindListBlocks = (blocks: any) => {
  const result = [];
  // FIXME: index 대신 UUID를 사용하도록 수정
  let index = 0;
  let prevListType = '';
  let listData = [];
  while (index < blocks.length) {
    const block = blocks[index];

    if (block.children) block.children = bindListBlocks(block.children);

    if (listData.length && block.type !== prevListType) {
      result.push({
        id: String(index),
        type: prevListType === 'bulleted_list_item' ? 'bulleted_list' : 'numbered_list',
        children: listData,
        hasChildren: true,
      });
      listData = [];
    }

    if (block.type === 'bulleted_list_item' || block.type === 'numbered_list_item') {
      listData.push(block);
      prevListType = block.type;
    } else {
      result.push(block);
      prevListType = '';
    }

    index++;
  }

  if (listData.length) {
    result.push({
      id: String(index),
      type: prevListType === 'bulleted_list_item' ? 'bulleted_list' : 'numbered_list',
      children: listData,
      hasChildren: true,
    });
  }
  console.log(result);

  return result;
};

export default bindListBlocks;
