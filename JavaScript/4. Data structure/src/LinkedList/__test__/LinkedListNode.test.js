import {
  LinkedListNode
} from "../LinkedListNode";

describe('LinkedListNode', () => {

  it('Correctly creates a Node with value 12', () => {
    let node = new LinkedListNode(12);

    expect(node.value).toBe(12);
    expect(node.next).toBeNull;
  });

  it('Creatly creates a Node with Object - {key: \'test\', val: \'OK\' }', () => {
    let node = new LinkedListNode({
      key: 'test',
      val: 'OK'
    });

    expect(node.value.key).toBe('test');
    expect(node.value.val).toBe('OK');
    expect(node.next).toBeNull;
  });

});